import { stateNode, stateValue } from "./state-helper.fns";
import { Fn } from "react-fn";
import { $fetch } from "../../utils/fetch/fetch";
import { State_Zomato_Basic_List, State } from "../state/state";

export const getCuisines = async (fn: Fn) => {
    fn.updateState(stateNode('cuisines/firstFetch'), true, { rerender: false });
    try {
        const result = await $fetch('http://localhost:3000/cuisines', {
            method: 'get'
        });
        // Purge any non-existent cuisines from view once the live call comes back
        const cuisinesInView = (fn.getState() as State).cuisines.inView;
        const cuisinesFromCall = result.message;
        const newcuisinesInView = cuisinesInView
            .map(cuisine => {
                const cuisineFromCall = cuisinesFromCall
                    .find((cuisineFromCall: any) => cuisineFromCall.id == cuisine.id);
                if (!cuisineFromCall) {
                    return undefined;
                } else {
                    return cuisine
                }
            })
            .filter(cuisine => cuisine);
        // Update state
        return fn.updateMulti([
            { node: stateNode('cuisines/list'), value: stateValue<State_Zomato_Basic_List>(result.message) },
            { node: stateNode('cuisines/inView'), value: newcuisinesInView }
        ]);
    } catch (e) {
        console.error('Unable to fetch cuisines', e.message);
        return;
    }
}