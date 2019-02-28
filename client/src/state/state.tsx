export type StateNode = 'greeting' | 'restaurants' | 'categories' | 'cuisines';

export interface State_Restaurants {
    firstFetch: boolean,
    list: { name: string, id: string }[]
}

export interface State_Categories {
    firstFetch: boolean,
    list: { name: string, id: string }[]
}

export interface State_Cuisines {
    firstFetch: boolean,
    list: { name: string, id: string }[]
}

export interface State {
    route: string[],
    restaurants: State_Restaurants,
    categories: State_Categories,
    cuisines: State_Cuisines
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