import { Fn } from "react-fn";
import { StateNode, State_Zomato_Basic_List } from "../state/state";
import { $fetch } from "../../utils/fetch/fetch";

export interface Actions {
    getRestaurants: () => void,
    getCategories: () => void,
    getCuisines: () => void
}
export const actions = (fn: Fn): Actions => ({
    getRestaurants: async () => {
        fn.updateState(stateNode('restaurants/firstFetch'), true, { rerender: false });
        try {
            const result = await $fetch('http://localhost:3000/restaurants', {
                method: 'get'
            });
            return fn.updateState(
                stateNode('restaurants/list'), 
                stateValue<State_Zomato_Basic_List>(result.message)
            );
        } catch (e) {
            console.error('Unable to fetch restaurants');
            return;
        }
    },
    getCategories: async () => {
        fn.updateState(stateNode('categories/firstFetch'), true, { rerender: false });
        try {
            const result = await $fetch('http://localhost:3000/categories', {
                method: 'get'
            });
            return fn.updateState(
                stateNode('categories/list'), 
                stateValue<State_Zomato_Basic_List>(result.message)
            );
        } catch (e) {
            console.error('Unable to fetch categories');
            return;
        }
    },
    getCuisines: async () => {
        fn.updateState(stateNode('cuisines/firstFetch'), true, { rerender: false });
        try {
            const result = await $fetch('http://localhost:3000/cuisines', {
                method: 'get'
            });
            return fn.updateState(
                stateNode('cuisines/list'), 
                stateValue<State_Zomato_Basic_List>(result.message)
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