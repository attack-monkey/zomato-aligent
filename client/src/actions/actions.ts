import { Fn } from "react-fn";
import { StateNode, State_Restaurants, State_Categories, State_Cuisines } from "../state/state";
import { $fetch } from "../../utils/fetch/fetch";

export interface Actions {
    getRestaurants: () => void,
    getCategories: () => void,
    getCuisines: () => void
}
export const actions = (fn: Fn): Actions => ({
    getRestaurants: async () => {
        try {
            const result = await $fetch('http://localhost:3000/restaurants', {
                method: 'get'
            });
            return fn.updateState(
                stateNode('restaurants'), 
                stateValue<State_Restaurants>({
                    firstFetch: true,
                    list: result.message
                })
            );
        } catch (e) {
            console.error('Unable to fetch restaurants');
            return;
        }
    },
    getCategories: async () => {
        try {
            const result = await $fetch('http://localhost:3000/categories', {
                method: 'get'
            });
            return fn.updateState(
                stateNode('categories'), 
                stateValue<State_Categories>({
                    firstFetch: true,
                    list: result.message
                })
            );
        } catch (e) {
            console.error('Unable to fetch categories');
            return;
        }
    },
    getCuisines: async () => {
        try {
            const result = await $fetch('http://localhost:3000/cuisines', {
                method: 'get'
            });
            return fn.updateState(
                stateNode('cuisines'), 
                stateValue<State_Cuisines>({
                    firstFetch: true,
                    list: result.message
                })
            );
        } catch (e) {
            console.error('Unable to fetch cuisines');
            return;
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