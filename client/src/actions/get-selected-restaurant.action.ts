import { Fn } from "react-fn";
import { $fetch } from "../../utils/fetch/fetch";
import { stateNode, stateValue } from "./state-helper.fns";
import { State_Zomato_Basic_List } from "../state/state";

export const getSelectedRestaurant = async(fn: Fn, id: string | number) => {
    try {
        const result = await $fetch('http://localhost:3000/restaurants/' + id, {
            method: 'get'
        });
        return fn.updateState(
            stateNode('selectedRestaurant'),
            stateValue<State_Zomato_Basic_List>(result.message)
        );
    } catch (e) {
        console.error('Unable to fetch this restaurant', e.message);
        return;
    }
}