import * as React from 'react';
import { State } from '../../../../state/state';
import { Actions } from '../../../../actions/actions';
import { displayList } from './display-list.fn';

interface Props { state: State, actions: Actions };
export const RestaurantList = ({ state, actions }: Props) => {
    if (!state.restaurants.firstFetch) { actions.getRestaurants(); }
    return (
        <div>
            <h6 className="label pt-4 pl-5">Results</h6>
            <div className="list-group list-group-flush">
                { displayList(state, actions) }
            </div>
        </div>
    );
}