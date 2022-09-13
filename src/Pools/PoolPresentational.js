import "./PoolStyle.css";

const PoolPresentational = props => {
    const tempName = props.name === "Heart" ? "lifeblood" : "glory";
    return(
        <div className="poolDiv">
            <h3 className="poolHeader">{props.name}</h3>

            <h4 className="inputHeader">max</h4>
            <h4 className="inputHeader">current</h4>
            <h4 className="inputHeader">{tempName}</h4>

            <input className="pool smallPool leftPool" type="number" value={props.data.max} onChange={props.changeMax} />
            <input className="pool largePool" type="number" value={props.data.curr} onChange={props.changeCurr} />
            <input className="pool smallPool rightPool" type="number" value={props.data.temp} onChange={props.changeTemp} />
        </div>
    );
};

export default PoolPresentational;