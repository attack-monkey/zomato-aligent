import * as React from 'react';
import { appTitle } from '../../../constants/app-title.const';

export const Header = () => {
    return (
        <div>
            <header className="navbar navbar-light bg-primary">
                <a className="navbar-brand text-white" href="#">{appTitle}</a>
            </header>
        </div>
    );
}

