export type StateNode = 'greeting' | 'restaurants';

export interface State_Restaurants {
    firstFetch: boolean,
    list: string[]
}

export interface State {
    route: string[],
    restaurants: State_Restaurants
}

export const state: State = {
    route: [],
    restaurants: {
        firstFetch: false,
        list: []
    }
};