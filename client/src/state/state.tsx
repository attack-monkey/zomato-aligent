export type StateNode = 'greeting';

export type State_greeting = string;

export interface State {
    route: string[],
    greeting: State_greeting
}

export const state = {
    route: [],
    greeting: ''
};