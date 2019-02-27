import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';

const checkBoxStyle = {
    minWidth: '100px'
};
const style = Object.assign(
    {}, checkBoxStyle
);

interface Props { state: State, actions: Actions };
export const CheckList = ({ state, actions }: Props) => {
    return (
        <div className="float-left" style={style}>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label">
                    Default checkbox
            </label>
            </div>
        </div>
    );
}