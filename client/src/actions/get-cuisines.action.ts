import { stateNode, stateValue } from "./state-helper.fns";
import { Fn } from "react-fn";
import { $fetch } from "../../utils/fetch/fetch";
import { State_Zomato_Basic_List } from "../state/state";

export const getCuisines = async (fn: Fn) => {
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
        console.error('Unable to fetch cuisines', e.message);
        return;
    }
}