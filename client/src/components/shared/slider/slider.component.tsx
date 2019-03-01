import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';

const sliderStyle = {
    minWidth: '200px'
};
const style = Object.assign(
    {}, sliderStyle
);

interface Props {
    sliderType: 'price' | 'rating', minIndicator: string, maxIndicator: string,
    min: string, max: string, value: string, actions: Actions
};
export const Slider = ({ sliderType, minIndicator, maxIndicator, min, max, value, actions }: Props) => {
    return (
        <div className="col-md-4" style={style}>
            <input
                type="range"
                className="custom-range"
                min={min}
                max={max}
                value={value}
                onChange={(ev) => {
                    switch (sliderType) {
                        case 'price':
                        actions.updatePriceSlider(ev.target.value);
                        break;
                        case 'rating':
                        actions.updateRatingSlider(ev.target.value);
                        break;
                        default: break;
                    }
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