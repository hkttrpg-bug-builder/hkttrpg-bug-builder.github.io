const CharData = (function(){
    const SIZE_SMALL = 0;
    const SIZE_MEDIUM = 1;
    const SIZE_LARGE = 2;

    const charData = {
        name: "",
        size: -1, // 0=small, 1=medium, 2=large
        playerName: "",

        milestone: 0,

        might: 0,
        insight: 0,
        shell: 0,
        grace: 0,
        cute: 0,
        spook: 0,

        speed: {max: 0, curr: 0},
        footwork: 0,

        belly: {max: 0, curr: 0},
        hungerMax: 0,

        pools: {
            heart: {max: 0, curr: 0, temp: 0},
            soul: {max: 0, curr: 0, temp: 0},
            stamina: {max: 0, curr: 0, temp: 0}
        },
        numTraits: 0,
        traits: {},
        paths: {},
        techniques: {},

        notches: 0,
        charms: {}
    };

    /**
     * Initializes the character with stats determined by size
     * @param {string} name - Name of the character
     * @param {number} size - One of CharData.SIZE_SMALL, CharData.SIZE_MEDIUM, CharData.SIZE_LARGE
     * @param {string} playerName - Name of the player
     * @param {boolean} bonusToCute - `true`: Bonus to cute/spook is applied to cute, `false`: Bonus is applied to spook
     */
    function initChar(name, size, playerName, bonusToCute){
        charData.name = name;
        charData.playerName = playerName;
        switch(size){
            case SIZE_SMALL:
                charData.might = 2;
                charData.insight = 3;
                charData.shell = 3;
                charData.grace = 4;
                charData.cute = 1.5;
                charData.spook = 1;
                if(bonusToCute){
                    charData.cute += 1;
                }else{
                    charData.spook += 1;
                }
                charData.pools.heart = {max:6, curr:6, temp:0};
                charData.pools.stamina = {max:3, curr:3, temp:0};
                charData.pools.soul = {max:3, curr:3, temp:0};
                charData.belly = {max:-1, curr:-1};
                charData.hungerMax = 15;
                charData.speed = {max:7, curr:7};
                break;
            case SIZE_MEDIUM:
                charData.might = 3;
                charData.insight = 3;
                charData.shell = 3;
                charData.grace = 3;
                charData.cute = 1;
                charData.spook = 1;
                if(bonusToCute){
                    charData.cute += 1.5;
                }else{
                    charData.spook += 1.5;
                }
                charData.pools.heart = {max:7, curr:7, temp:0};
                charData.pools.stamina = {max:3, curr:3, temp:0};
                charData.pools.soul = {max:3, curr:3, temp:0};
                charData.belly = {max:4, curr:4};
                charData.hungerMax = 20;
                charData.speed = {max:6, curr:6};
                break;
            case SIZE_LARGE:
                charData.might = 4;
                charData.insight = 3;
                charData.shell = 4;
                charData.grace = 2;
                charData.cute = 1;
                charData.spook = 1.5;
                if(bonusToCute){
                    charData.cute += 1;
                }else{
                    charData.spook += 1;
                }
                charData.pools.heart = {max:8, curr:8, temp:0};
                charData.pools.stamina = {max:3, curr:3, temp:0};
                charData.pools.soul = {max:3, curr:3, temp:0};
                charData.belly = {max:9, curr:9};
                charData.hungerMax = 25;
                charData.speed = {max:5, curr:5};
                break;
            default:
                console.error("CharData.initChar given an invalid size value: " + size);
        }
    }

    /**
     * Adds a racital trait, modifying hunger, spook, and cute as necessary
     * @param {string} name - Name of trait
     * @param {string} description - Description of trait
     * @param {number} hungerMod - Mod applied to hunger from this trait
     * @param {number} spookMod - Mod applied to spook from this trait
     * @param {number} cuteMod - Mod applied to cute from this trait
     * @param {number} subTraitOf - Name of the mod that this trait is a sub-trait of, or an empty string if this trait is not a sub-trait
     */
    function addTrait(name, description, hungerMod, spookMod, cuteMod, subTraitOf){
        if(subTraitOf === "" && charData.numTraits === 7){
            console.log("Attempt to add a trait when character already has 7 traits");
            return;
        }
        if(charData.belly.max + hungerMod > charData.hungerMax){
            console.log("Attempt to add trait that woud put hunger higher than the maximum allowed hunger");
            return;
        }
        charData.traits[name] = {description, hungerMod, spookMod, cuteMod, subTraitOf};
        charData.belly.max += hungerMod;
        charData.belly.curr += hungerMod;
        charData.spook += spookMod;
        charData.cute += cuteMod;
    }

    /**
     * Adds a new path, or a new rank in the path if the path already exists (unfinished)
     * @param {string} name - Name of path
     * @param {boolean} isMartial - `true` if path is martial, `false` if path is mystic
     * @param {string} rankName - Title of the rank
     * @param {Array.<{title: string, description: string}>} abilities - Array of all abilities this rank in this path gives
     */
    function addPath(name, isMartial, rankName, abilities){
        if(Object.hasOwn(charData.paths, name) && charData.paths[name].rank === 3){
            console.error("Attempt to add a rank to path " + name + ", but path is already rank 3");
            return;
        }
    }

    function addPool(poolName, max=0, curr=0, temp=0){
        pools[poolName] = {max, curr, temp};
    }

    return {
        SIZE_SMALL, SIZE_MEDIUM, SIZE_LARGE,
        initChar,
        addTrait, addPool
    };
}())