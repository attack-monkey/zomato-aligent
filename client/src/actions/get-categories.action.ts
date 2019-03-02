import { stateNode, stateValue } from "./state-helper.fns";
import { Fn } from "react-fn";
import { $fetch } from "../../utils/fetch/fetch";
import { State, State_Zomato_Basic_List } from "../state/state";

export const getCategories = async (fn: Fn) => {
    fn.updateState(stateNode('categories/firstFetch'), true, { rerender: false });
    try {
        const result = await $fetch('http://localhost:3000/categories', {
            method: 'get'
        });
        // Purge any non-existent categories from view once the live call comes back
        const categoriesInView = (fn.getState() as State).categories.inView;
        const categoriesFromCall = result.message;
        const newCategoriesInView = categoriesInView
            .map(category => {
                const categoryFromCall = categoriesFromCall
                    .find((categoryFromCall: any) => categoryFromCall.id == category.id);
                if (!categoryFromCall) {
                    return undefined;
                } else {
                    return category
                }
            })
            .filter(category => category);
        // Update state
        return fn.updateMulti([
            { node: stateNode('categories/list'), value: stateValue<State_Zomato_Basic_List>(result.message) },
            { node: stateNode('categories/inView'), value: newCategoriesInView }
        ]);
    } catch (e) {
        console.error('Unable to fetch categories', e.message);
        return [];
    }
}