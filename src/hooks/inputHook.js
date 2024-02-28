import { useState } from "react";

export function useInput(maxSize) {
    const [ inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputValue(() => value);
        }
    }
    return [ inputValue, onChange ]
}

/**
 * 
 * 
 * 
 */

export function useMaxSizeValidateInput(maxSize) {
    const [ inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputValue(() => value);
        }
        
    }
    return [ inputValue, onChange ]
}