import PoolHeader from "./PoolHeader"
import "./PoolStyle.css";

const PoolPresentational = props => {
    const tempName = props.name.toLowerCase() === "heart" ? "lifeblood" : "glory";
    return(
        <div className="poolDiv">
            <PoolHeader name={props.name} isInEditState={props.isInEditState} handleHeaderChange={props.handleHeaderChange}
                        changeToDisplayState={props.changeToDisplayState} changeToEditState={props.changeToEditState} />

            <h4 className="boxHeader">max</h4>
            <h4 className="boxHeader">current</h4>
            <h4 className="boxHeader">{tempName}</h4>

            <input className="pool smallPool leftPool" type="number" value={props.data.max} onChange={props.changeMax} />
            <input className="pool largePool" type="number" value={props.data.curr} onChange={props.changeCurr} />
            <input className="pool smallPool rightPool" type="number" value={props.data.temp} onChange={props.changeTemp} />
        </div>
    );
};

export default PoolPresentational;