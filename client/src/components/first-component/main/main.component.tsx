import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { SelectedRestaurant } from './selected-restaurant/selected-restaurant.component';
import { NoSelectedRestaurant } from './no-selected-restaurant/no-selected-restaurant.component';
import { mainHeightAdjustable } from '../../../react-styles/main-height-adjustable.style';

interface Props { state: State, actions: Actions };
export const Main = ({ state, actions }: Props) => {
    return (
        <div className="main-panel col-lg-8 bg-grey-light pt-3 px-md-5" style={mainHeightAdjustable}>
            <div className="jumbotron jumbotron-fluid bg-grey-light">
                {
                    state.selectedRestaurant ? (
                        <SelectedRestaurant state={state} actions={actions}></SelectedRestaurant>
                    ) : (
                        <NoSelectedRestaurant></NoSelectedRestaurant>
                    )
                }
                
            </div>
        </div>
    );
}