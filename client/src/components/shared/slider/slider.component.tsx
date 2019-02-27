import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';

const sliderStyle = {
    minWidth: '200px'
};
const style = Object.assign(
    {}, sliderStyle
);

interface Props { minIndicator: string, maxIndicator: string,actions: Actions };
export const Slider = ({ minIndicator, maxIndicator, actions }: Props) => {
    return (
        <div className="col-md-4" style={style}>
            <input type="range" className="form-control-range" id="formControlRange" />
            <div>
                <p className="float-left">{minIndicator}</p>
                <p className="float-right">{maxIndicator}</p>
                <div className="clearfix"></div>
            </div>
        </div>
    );
}