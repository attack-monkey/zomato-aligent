import { Fn } from "react-fn";
import { StateNode, State_greeting } from "../state/state";

export interface Actions {
    helloWorld: () => void
}
export const actions = (fn: Fn): Actions => ({
    helloWorld: () => fn.updateState(
        stateNode('greeting'), 
        stateValue<State_greeting>('hello world'))
});

// Ensures that the particular state-node exists in State 
function stateNode (node: StateNode) {
    return node;
}

// Ensures that the value passed in matches the expected type in State
function stateValue<T> (value: T) {
    return value;
}