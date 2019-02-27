import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { CheckList } from '../../shared/check-list/check-list.component';
import { Slider } from '../../shared/slider/slider.component';

interface Props { state: State, actions: Actions };
export const Navigation = ({ state, actions }: Props) => {
    return (
        <div>
            <div className="float-left">
                <h3>Category</h3>
                <CheckList state={state} actions={actions}></CheckList>
                <div className="clearfix"></div>
            </div>
            <div className="float-left">
                <h3>Cuisine</h3>
                <CheckList state={state} actions={actions}></CheckList>
                <CheckList state={state} actions={actions}></CheckList>
                <CheckList state={state} actions={actions}></CheckList>
                <div className="clearfix"></div>
            </div>
            <div className="float-right">
                <h3>Rating</h3>
                <Slider minIndicator='0' maxIndicator='5' actions={actions}></Slider>
                <h3>Cost</h3>
                <Slider minIndicator='$' maxIndicator='$$$$' actions={actions}></Slider>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}