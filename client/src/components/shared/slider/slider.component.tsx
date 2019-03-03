import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { debouncedGetRestaurants, debouncedUpdateState } from './slider.fns';

interface Props {
    sliderType: 'sortBy' | 'hiLo', minIndicator: string, maxIndicator: string,
    min: string, max: string, value: string, actions: Actions
};
export const Slider = ({ sliderType, minIndicator, maxIndicator, min, max, value, actions }: Props) => {
    return (
        <div className="slider">
            <input
                type="range"
                className="custom-range"
                min={min}
                max={max}
                value={value}
                onChange={ (ev) => {
                    debouncedUpdateState(ev.target.value, sliderType, actions);
                    debouncedGetRestaurants(actions);
                }}
            />
            <div>
                <p className="float-left">{minIndicator}</p>
                <p className="float-right">{maxIndicator}</p>
                <div className="clearfix"></div>
            </div>
        </div>
    );
}