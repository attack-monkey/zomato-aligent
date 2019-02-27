import * as React from 'react';
import { State } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { appTitle } from '../../../constants/app-title.const';

const mainStyle = {
    height: '100%'
};

interface Props { state: State, actions: Actions };
export const Main = ({ state, actions }: Props) => {
    return (
        <div className="col-md-8" style={mainStyle}>
            <div className="jumbotron jumbotron-fluid text-center">
                <h1 className="display-4">
                    Welcome to 
                </h1>
                <p className="lead">{appTitle}</p>
            </div>
        </div>
    );
}