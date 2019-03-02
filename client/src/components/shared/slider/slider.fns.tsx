import AwesomeDebouncePromise from "awesome-debounce-promise";
import { Actions } from "../../../actions/actions";

const getRestaurants = (actions: Actions) => {
    actions.getRestaurants();
    
};
export const debouncedGetRestaurants = AwesomeDebouncePromise(getRestaurants, 250);
const updateState = (value: any, sliderType: 'sortBy' | 'hiLo', actions: Actions) => {
    switch (sliderType) {
        case 'sortBy':
            actions.updateSortBySlider(value);
            break;
        case 'hiLo':
            actions.updateHiLoSlider(value);
            break;
        default: break;
    }
}
export const debouncedUpdateState = AwesomeDebouncePromise(updateState, 10);