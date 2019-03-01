import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { CheckList } from '../../shared/check-list/check-list.component';
import { Slider } from '../../shared/slider/slider.component';
import { CuisineList } from './cuisine-list/cuisine-list.component';
import { minIndicatorFor } from './min-indicator-for.fn';
import { maxIndicatorFor } from './max-indicator-for.fn';

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
                <h3>Sort By</h3>
                <Slider
                    sliderType='sortBy'
                    min='1'
                    max='2'
                    value={state.sortByType}
                    minIndicator='Price'
                    maxIndicator='Rating'
                    actions={actions}
                ></Slider>
                <h3>{state.sortByType === '1' ? 'Price' : 'Ratings'}</h3>
                <Slider
                    sliderType='hiLo'
                    min='1'
                    max='2'
                    value={state.sortByOrder}
                    minIndicator={minIndicatorFor(state.sortByType)}
                    maxIndicator={maxIndicatorFor(state.sortByType)}
                    actions={actions}
                ></Slider>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}