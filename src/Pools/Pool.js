import React, { useEffect, useState } from "react";
import PoolPresentational from "./PoolPresentational";

const Pool = props => {
    //used for pool values
    const [data, setData] = useState({max: 0, curr: 0, temp: 0});

    function changeMax(event){
        let max
        let curr = data.curr;

        const value = parseInt(event.target.value);
        if(!isNaN(value) && value >= 0) {
            max = value;
            if(data.curr > value) curr = value;
            setData({...data, curr, max});
        }
    }

    function changeCurr(event){
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value <= data.max && value >= 0) setData({...data, curr: value});
    }
    
    function changeTemp(event){
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value >= 0) setData({...data, temp: value});
    }

    //used for header editing
    const [name, setName] = useState("");
    const [isInEditState, setIsInEditState] = useState(true);
    useEffect(() => setName(props.name), []);

    function handleHeaderChange(e){
        setName(e.target.value);
    }

    function changeToDisplayState(e){
        e.preventDefault();
        setIsInEditState(false);
    }

    function changeToEditState(e){
        e.preventDefault();
        setIsInEditState(true);
    }

    return (<PoolPresentational name={name} data={data} changeMax={changeMax} changeCurr={changeCurr} changeTemp={changeTemp} isInEditState={isInEditState}
                                handleHeaderChange={handleHeaderChange} changeToDisplayState={changeToDisplayState} changeToEditState={changeToEditState} />);
};

export default Pool;