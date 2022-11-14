import PropTypes from 'prop-types';
import { useRef } from 'react';

MinMaxLazyRef.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

function MinMaxLazyRef ({min = 1, max, current, onChange}) {

    let inp = useRef();

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        inp.current.value = validNum;
        onChange(validNum);
    }

    let inc = () => applyCurrent(current + 1);

    let dec = () => applyCurrent(current - 1);

    function parseCurrentStr(e) {
        let num = parseInt(inp.current.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            parseCurrentStr(e);
        }
    }

    return (
        <div>
            <button tupe="button" onClick={dec}>-</button>
            <input ref={inp} type="text" defaultValue={current} onBlur={parseCurrentStr} onKeyPress={onKeyPress}/>
            <button tupe="button" onClick={inc}>+</button>
        </div>
    );
}



export default MinMaxLazyRef;