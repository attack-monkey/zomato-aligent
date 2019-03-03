import * as React from 'react';
import { State } from '../../state/state';
import { Actions } from '../../actions/actions';
import { Header } from './header/header.component';
import { Navigation } from './navigation/navigation.component';
import { Aside } from './aside/aside.component';
import { Main } from './main/main.component';

interface Props { state: State, actions: Actions };
export const firstComponent = ({ state, actions }: Props) => {
    return (
        <div>
            <Header></Header>
            <Navigation state={state} actions={actions}></Navigation>
            <div className="bg-grey-light">
                <div className="container container-large">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <Aside state={state} actions={actions}></Aside>
                                <Main state={state} actions={actions}></Main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
