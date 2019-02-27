import * as React from 'react';
import { appTitle } from '../../../constants/app-title.const';

export const Header = () => {
    return (
        <div>
            <header className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">{appTitle}</a>
            </header>
        </div>
    );
}

