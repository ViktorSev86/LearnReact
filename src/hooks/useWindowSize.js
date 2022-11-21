import { useEffect, useState } from "react";

function getWindowSizes() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

export default function() {
    let [windowSize, setWindowSize] = useState(getWindowSizes());

    useEffect(() => {
        window.addEventListener('resize', function() {
            setWindowSize(getWindowSizes());
        });
    }, []);
    return windowSize;
}