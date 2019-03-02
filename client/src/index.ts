import { app } from 'react-fn';
import { state } from './state/state';
import { firstComponent } from './components/first-component/first-component';
import { loadPolyfills } from '../utils/polyfills/load-polyfills';
import { actions } from './actions/actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes, faStar);

loadPolyfills();
const mount = document.getElementById('app');
app(state, firstComponent, actions, mount);