import { Fn } from "react-fn";
import { StateNode, State_Zomato_Basic_List, State_List_In_View, State } from "../state/state";
import { $fetch } from "../../utils/fetch/fetch";
import { ListType } from "../components/shared/check-list/list-type.model";
import { convertToQueryParams } from "../../utils/functions/convert-to-query-params.fn";
import { joinQueryParams } from "../../utils/functions/join-query-params.fn";
import { getSelectedRestaurant } from "./get-selected-restaurant.action";
import { stateNode, stateValue } from "./state-helper.fns";
import { getRestaurants } from "./get-restaurants.action";
import { getCategories } from "./get-categories.action";
import { getCuisines } from "./get-cuisines.action";
import { updateListItemActiveState } from "./update-list-item-active-state.action";

export interface Actions {
    getRestaurants: () => void,
    getCategories: () => void,
    getCuisines: () => void,
    updateListItemActiveState: (id: string, active: boolean) => void,
    updateSortBySlider: (newValue: string) => void,
    updateHiLoSlider: (newValue: string) => void,
    getSelectedRestaurant: (id: string) => void
}
export const actions = (fn: Fn): Actions => ({
    getRestaurants: () => getRestaurants(fn),
    getCategories: () => getCategories(fn),
    getCuisines: () => getCuisines(fn),
    updateListItemActiveState: (listTypeAndId: string, active: boolean) => updateListItemActiveState(
        fn, listTypeAndId, active
    ),
    updateSortBySlider: (newValue: string) => {
        return fn.updateState(stateNode('sortByType'), newValue);
    },
    updateHiLoSlider: (newValue: string) => {
        fn.updateState(stateNode('sortByOrder'), newValue) 
    },
    getSelectedRestaurant: (id: string) => getSelectedRestaurant(fn, id)
});

