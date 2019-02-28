export type StateNode = 'greeting' | 'restaurants/list' | 'restaurants/firstFetch' | 
'categories/list' | 'categories/firstFetch' | 'cuisines/list' | 'cuisines/firstFetch';

export type State_Zomato_Basic_List = { name: string, id: string }[]

export interface State {
    route: string[],
    restaurants: {
        firstFetch: boolean,
    list: State_Zomato_Basic_List
    },
    categories: {
        firstFetch: boolean,
        list: State_Zomato_Basic_List
    },
    cuisines: {
        firstFetch: boolean,
        list: State_Zomato_Basic_List
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
        list: []
    },
    cuisines: {
        firstFetch: false,
        list: []
    }
};