import "./PoolStyle.css";

const PoolPresentational = props => {
    const tempName = props.name === "Heart" ? "lifeblood" : "glory";
    return(
        <div className="poolDiv">
            <h3 className="poolHeader">{props.name}</h3>

            <h4 className="inputHeader inputHeaderLeft">max</h4>
            <h4 className="inputHeader inputHeaderMiddle">current</h4>
            <h4 className="inputHeader inputHeaderRight">{tempName}</h4>

            <input className="pool smallPool leftPool" type="number" />
            <input className="pool largePool" type="number" />
            <input className="pool smallPool rightPool" type="number"/>
        </div>
    );
};

export default PoolPresentational;