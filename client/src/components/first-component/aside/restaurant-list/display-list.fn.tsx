import { State } from "../../../../state/state";
import React = require("react");
import { actions, Actions } from "../../../../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const priceConverter = (price: number, at: number = 0, ac = ''): string => {
    return at < price ? priceConverter(price, at + 1, ac + '$') : ac;
}

export const displayList = (state: State, actions: Actions) => {
    try {
        return state.restaurants.list.map(
            restaurant => (
                <button 
                    type="button"
                    className={
                        'restaurant-list list-group-item list-group-item-action list-group-item-action-primary pl-0 ' + (
                            (state.selectedRestaurant && state.selectedRestaurant.id == restaurant.id) ? 'active' : ''
                        )
                    }
                    key={restaurant.id}
                    onClick={
                        () => {actions.getSelectedRestaurant(restaurant.id)}
                    }
                >
                    <span className="pl-5">
                        {restaurant.name}
                        <span className="badge badge-round badge-grey-mid text-primary ml-2">
                            {priceConverter(restaurant.price)} 
                        </span>
                        <span className="badge badge-grey-mid text-primary ml-2">
                            <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                            &nbsp;{Math.round(parseFloat(restaurant.rating))}
                        </span>
                    </span>
                </button>
            )
        );
    } catch (e) {
        return undefined;
    }
}