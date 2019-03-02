import { Fn } from "react-fn";
import { State, State_Zomato_Basic_List } from "../state/state";
import { stateNode, stateValue } from "./state-helper.fns";
import { convertToQueryParams } from "../../utils/functions/convert-to-query-params.fn";
import { joinQueryParams } from "../../utils/functions/join-query-params.fn";
import { $fetch } from "../../utils/fetch/fetch";

export const getRestaurants = async (fn: Fn) => {
    if (!(fn.getState() as State).restaurants.firstFetch) {
        fn.updateState(stateNode('restaurants/firstFetch'), true, { rerender: false });
    }
    const categoriesQueryParams = convertToQueryParams('categories', (fn.getState() as State).categories.inView);
    const cuisinesQueryParams = convertToQueryParams('cuisines', (fn.getState() as State).cuisines.inView);
    const sortParams = 'sort=' + ((fn.getState() as State).sortByType === '1' ? 'cost' : 'rating');
    const orderParams = 'order=' + ((fn.getState() as State).sortByOrder === '1' ? 'asc' : 'desc');
    const queryParams = joinQueryParams([categoriesQueryParams, cuisinesQueryParams, sortParams, orderParams]);
    try {
        const result = await $fetch('http://localhost:3000/restaurants' + queryParams, {
            method: 'get'
        });
        // const result = { message: []};
        return fn.updateState(
            stateNode('restaurants/list'),
            stateValue<State_Zomato_Basic_List>(result.message)
        );
    } catch (e) {
        console.error('Unable to fetch restaurants', e.message);
        return;
    }
}