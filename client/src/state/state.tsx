import { getJsonFromLocalStorage } from "../../utils/functions/get-json-from-local-storage.fn";
import { defaultCategories } from "../constants/default-categories.const";
import { defaultCuisines } from "../constants/default-cuisines.const";
import { any } from "prop-types";

export type StateNode = 'greeting' | 'restaurants/list' | 'restaurants/firstFetch' | 
'categories/list' | 'categories/firstFetch' | 'categories/inView' | 
'cuisines/list' | 'cuisines/firstFetch' | 'cuisines/inView' | 
'sortByType' | 'sortByOrder' | 'selectedRestaurant';

export type State_Zomato_Basic_List = { name: string, id: string | number }[];
export type State_Zomato_Restaurant_List = { name: string, id: string | number, price: number, rating: string }[];
export type State_List_In_View = { name?: string, id: string | number, vanityName?: string, active: boolean }[];

export interface State {
    route: string[],
    restaurants: {
        firstFetch: boolean,
    list: State_Zomato_Restaurant_List
    },
    selectedRestaurant: any,
    categories: {
        firstFetch: boolean,
        list: State_Zomato_Basic_List,
        inView: State_List_In_View
    },
    cuisines: {
        firstFetch: boolean,
        list: State_Zomato_Basic_List,
        inView: State_List_In_View
    },
    searchParams?: {
        cuisinesArray?: number[],
        categoryArray?: number[]
    },
    sortByType: '1' | '2',
    sortByOrder: '1' | '2'
}

export const state: State = {
    route: [],
    restaurants: {
        firstFetch: false,
        list: []
    },
    selectedRestaurant: undefined,
    categories: {
        firstFetch: false,
        list: [],
        inView: (getJsonFromLocalStorage('categoriesInView') as State_List_In_View) || defaultCategories
    },
    cuisines: {
        firstFetch: false,
        list: [],
        inView: (getJsonFromLocalStorage('cuisinesInView') as State_List_In_View) || defaultCuisines
    },
    sortByType: '2',
    sortByOrder: '2'
};