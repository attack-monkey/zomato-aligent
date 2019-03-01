import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { SelectedRestaurant } from './selected-restaurant/selected-restaurant.component';
import { NoSelectedRestaurant } from './no-selected-restaurant/no-selected-restaurant.component';

const mainStyle = {
    height: '100%'
};

interface Props { state: State, actions: Actions };
export const Main = ({ state, actions }: Props) => {
    return (
        <div className="col-md-8" style={mainStyle}>
            <div className="jumbotron jumbotron-fluid text-center">
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