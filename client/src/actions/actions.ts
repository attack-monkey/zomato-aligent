import { Fn } from "react-fn";
import { StateNode, State_Zomato_Basic_List, State_List_In_View, State } from "../state/state";
import { $fetch } from "../../utils/fetch/fetch";
import { ListType } from "../components/shared/check-list/list-type.model";
import { convertToQueryParams } from "../../utils/functions/convert-to-query-params.fn";
import { joinQueryParams } from "../../utils/functions/join-query-params.fn";

export interface Actions {
    getRestaurants: () => void,
    getCategories: () => void,
    getCuisines: () => void,
    updateListItemActiveState: (id: string, active: boolean) => void,
    updateSortBySlider: (newValue: string) => void,
    updateHiLoSlider: (newValue: string) => void,
    getSelectedRestaurant: (id: string | number) => void
}
export const actions = (fn: Fn): Actions => ({
    getRestaurants: async () => {
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
    },
    getCategories: async () => {
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
            console.error('Unable to fetch cuisines', e.message);
            return;
        }
    },
    updateListItemActiveState: (listTypeAndId: string, active: boolean) => {
        const listTypeAndIdArray = listTypeAndId.split('_');
        const listType = listTypeAndIdArray[0] as ListType;
        const id = listTypeAndIdArray[1];
        const currentListInView = (fn.getState() as State)[listType].inView;
        const newListInView = currentListInView.map(item => {
            return item.id == id ? Object.assign({}, item, { active: active }) : item
        });
        fn.updateState(
            stateNode(listType + '/inView' as StateNode),
            stateValue<State_List_In_View>(newListInView),
            { rerender: false }
        )
    },
    updateSortBySlider: (newValue: string) => {
        return fn.updateState(stateNode('sortByType'), newValue);
    },
    updateHiLoSlider: (newValue: string) => {
        fn.updateState(stateNode('sortByOrder'), newValue) 
    },
    getSelectedRestaurant: async(id) => {
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
});

// Ensures that the particular state-node exists in State 
function stateNode(node: StateNode) {
    return node;
}

// Ensures that the value passed in matches the expected type in State
function stateValue<T>(value: T) {
    return value;
}