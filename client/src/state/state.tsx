import { getJsonFromLocalStorage } from "../../utils/functions/get-json-from-local-storage.fn";
import { defaultCategories } from "../constants/default-categories.const";
import { defaultCuisines } from "../constants/default-cuisines.const";

export type StateNode = 'greeting' | 'restaurants/list' | 'restaurants/firstFetch' | 
'categories/list' | 'categories/firstFetch' | 'cuisines/list' | 'cuisines/firstFetch' |
'categories/inView';

export type State_Zomato_Basic_List = { name: string, id: string | number }[];
export type State_List_In_View = { name?: string, id: string | number, vanityName?: string }[];

export interface State {
    route: string[],
    restaurants: {
        firstFetch: boolean,
    list: State_Zomato_Basic_List
    },
    categories: {
        firstFetch: boolean,
        list: State_Zomato_Basic_List,
        inView: State_List_In_View
    },
    cuisines: {
        firstFetch: boolean,
        list: State_Zomato_Basic_List,
        inView: State_List_In_View
    }
}

export const state: State = {
    route: [],
    restaurants: {
        firstFetch: false,
        list: []
    },
    categories: {
        firstFetch: false,
        list: [],
        inView: (getJsonFromLocalStorage('categoriesInView') as State_List_In_View) || defaultCategories
    },
    cuisines: {
        firstFetch: false,
        list: [],
        inView: (getJsonFromLocalStorage('cuisinesInView') as State_List_In_View) || defaultCuisines
    }
};