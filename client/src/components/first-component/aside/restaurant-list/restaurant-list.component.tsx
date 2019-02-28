import * as React from 'react';
import { State } from '../../../../state/state';
import { Actions } from '../../../../actions/actions';
import { displayList } from './display-list.fn';

interface Props { state: State, actions: Actions };
export const RestaurantList = ({ state, actions }: Props) => {
    if (!state.restaurants.firstFetch) { actions.getRestaurants(); }
    return (
        <div>
            <h3>Results</h3>
            <ul className="list-group list-group-flush">
                { displayList(state) }
            </ul>
        </div>
    );
}