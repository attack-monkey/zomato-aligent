import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { RestaurantList } from './restaurant-list/restaurant-list.component';

const aSideStyle = {
    overflowY: 'scroll' as 'scroll',
    height: '100%'
};
interface Props { state: State, actions: Actions };
export const Aside = ({ state, actions }: Props) => {
    return (
        <div className="col-md-4" style={aSideStyle}>
            <RestaurantList state={state} actions={actions}></RestaurantList>
        </div>
    );
}