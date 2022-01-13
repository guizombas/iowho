import { useReducer } from "react";

function toggleReducer(state: boolean){
    return !state;
}

export default function useToggle(defaultValue?: boolean){
    // [ state, toggle ]
    return useReducer( toggleReducer, defaultValue ?? false );
}