import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Counter ({min = 1, max}) {
    let [current, setCurrent] =  useState(min); 

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        setCurrent(validNum);
    }

    let inc = () => applyCurrent(current + 1);

    let dec = () => applyCurrent(current - 1);

    function parseCurrentStr(e) {
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    useEffect(() => {
        applyCurrent(current);
    }, [min, max]);

    return (
        <div>
            <button tupe="button" onClick={dec}>-</button>
            <input type="text" value={current} onChange={parseCurrentStr}/>
            <button tupe="button" onClick={inc}>+</button>
        </div>
    );
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
}

export default Counter;