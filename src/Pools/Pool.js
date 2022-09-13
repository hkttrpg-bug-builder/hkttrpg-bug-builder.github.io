import React, { useState } from "react";
import PropTypes from 'prop-types';
import PoolPresentational from "./PoolPresentational";

const Pool = props => {
    const [data, setData] = useState({max: 0, curr: 0, temp: 0});

    function changeMax(event){
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value >= 0) setData({...data, max: value});
    }

    function changeCurr(event){
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value <= data.max && value >= 0) setData({...data, curr: value});
    }
    
    function changeTemp(event){
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value >= 0) setData({...data, temp: value});
    }

    return <PoolPresentational name={props.name} data={data} changeMax={changeMax} changeCurr={changeCurr} changeTemp={changeTemp} />
};

Pool.propTypes = {
    name: PropTypes.string
};

export default Pool;