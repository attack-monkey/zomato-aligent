import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { RestaurantList } from './restaurant-list/restaurant-list.component';
import { mainHeightAdjustable } from '../../../react-styles/main-height-adjustable.style';

interface Props { state: State, actions: Actions };
export const Aside = ({ state, actions }: Props) => {
    return (
        <div className="col-md-4 bg-grey-mid px-0" >
            <div className="aside" style={mainHeightAdjustable}>
                <RestaurantList state={state} actions={actions}></RestaurantList>
            </div>
        </div>
    );
}