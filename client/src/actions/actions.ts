import { Fn } from "react-fn";
import { StateNode, State_Restaurants } from "../state/state";
import { $fetch } from "../../utils/fetch/fetch";

export interface Actions {
    helloWorld: () => void,
    getRestaurants: () => void
}
export const actions = (fn: Fn): Actions => ({
    helloWorld: () => fn.updateState(
        stateNode('greeting'), 
        'hello world'
    ),
    getRestaurants: async () => {
        try {
            const result = await $fetch('http://localhost:3000/restaurants', {
                method: 'get'
            });
            fn.updateState(
                stateNode('restaurants'), 
                stateValue<State_Restaurants>({
                    firstFetch: true,
                    list: result.message
                })
            );
        } catch (e) {
            console.error('Unable to fetch restaurants');
        }
    }
});

// Ensures that the particular state-node exists in State 
function stateNode (node: StateNode) {
    return node;
}

// Ensures that the value passed in matches the expected type in State
function stateValue<T> (value: T) {
    return value;
}