import { State } from "../../../../state/state";
import React = require("react");

export const displayList = (state: State) => {
    try {
        return state.restaurants.list.map(
            (restaurant, key) => (
                <li className="list-group-item" key={key}>{restaurant}</li>
            )
        );
    } catch (e) {
        return undefined;
    }
}