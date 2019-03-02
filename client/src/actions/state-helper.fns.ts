import { StateNode } from "../state/state";

// Ensures that the particular state-node exists in State 
export function stateNode(node: StateNode) {
    return node;
}

// Ensures that the value passed in matches the expected type in State
export function stateValue<T>(value: T) {
    return value;
}