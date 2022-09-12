import React from "react";
import PropTypes from 'prop-types';
import PoolPresentational from "./PoolPresentational";

const Pool = props => {
    
    return <PoolPresentational name={props.name} />
};

Pool.propTypes = {
    name: PropTypes.string
};

export default Pool;