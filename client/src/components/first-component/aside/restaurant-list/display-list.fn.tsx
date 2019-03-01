import { State } from "../../../../state/state";
import React = require("react");
import { actions, Actions } from "../../../../actions/actions";

export const displayList = (state: State, actions: Actions) => {
    try {
        return state.restaurants.list.map(
            restaurant => (
                <li className="list-group-item" 
                    key={restaurant.id}
                    onClick={
                        () => {actions.getSelectedRestaurant(restaurant.id)}
                    }
                >
                    {restaurant.name} {restaurant.price} {restaurant.rating}
                </li>
            )
        );
    } catch (e) {
        return undefined;
    }
}