import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { CheckList } from '../../shared/check-list/check-list.component';
import { Slider } from '../../shared/slider/slider.component';
import { CuisineList } from './cuisine-list/cuisine-list.component';

interface Props { state: State, actions: Actions };
export const Navigation = ({ state, actions }: Props) => {
    if (!state.categories.firstFetch) { actions.getCategories(); }
    if (!state.cuisines.firstFetch) { actions.getCuisines(); }
    return (
        <div>
            <div className="float-left">
                <h3>Category</h3>
                <CheckList list={state.categories.inView} listType='categories' showMore={true} actions={actions}></CheckList>
                <div className="clearfix"></div>
            </div>
            <div className="float-left">
                <h3>Cuisine</h3>
                <CuisineList list={state.cuisines.inView} actions={actions}></CuisineList>
                <div className="clearfix"></div>
            </div>
            <div className="float-right">
                <h3>Rating</h3>
                <Slider
                    sliderType='rating'
                    min='0'
                    max='5'
                    value={state.ratingFilter}
                    minIndicator='1'
                    maxIndicator='5'
                    actions={actions}
                ></Slider>
                <h3>Cost</h3>
                <Slider
                    sliderType='price'
                    min='1'
                    max='4'
                    value={state.priceRangeFilter}
                    minIndicator='$'
                    maxIndicator='$$$$'
                    actions={actions}
                ></Slider>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}