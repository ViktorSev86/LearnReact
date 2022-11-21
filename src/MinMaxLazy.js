import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

MinMaxLazy.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

function MinMaxLazy ({min = 1, max, current, onChange}) {

    let [inpVal, setImpVal] = useState(current);
    let onInput = e => setImpVal(e.target.value);

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        setImpVal(validNum);
        onChange(validNum);
    }

    let inc = () => applyCurrent(current + 1);

    let dec = () => applyCurrent(current - 1);

    function parseCurrentStr(e) {
        let num = parseInt(inpVal);
        applyCurrent(isNaN(num) ? min : num);
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            parseCurrentStr(e);
        }
    }

    useEffect(() => {
        setImpVal(current)
    }, [current]);

    return (
        <div>
            <button 
                className="btn btn-warning" 
                type="button" onClick={dec}
            >-</button>
            <input 
                className="inp"
                type="text"
                value={inpVal}
                onChange={onInput}
                onBlur={parseCurrentStr}
                onKeyPress={onKeyPress}
            />
            <button 
                className="btn btn-success"
                type="button" onClick={inc}
            >+</button>
        </div>
    );
}



export default MinMaxLazy;