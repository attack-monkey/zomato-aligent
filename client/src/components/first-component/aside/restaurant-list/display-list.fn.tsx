import { State } from "../../../../state/state";
import React = require("react");

export const displayList = (state: State) => {
    try {
        return state.restaurants.list.map(
            restaurant => (
                <li className="list-group-item" key={restaurant.id}>{restaurant.name} {restaurant.price} {restaurant.rating}</li>
            )
        );
    } catch (e) {
        return undefined;
    }
}