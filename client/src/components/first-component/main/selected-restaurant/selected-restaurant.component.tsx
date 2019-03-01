import { State } from "../../../../state/state";
import { Actions } from "../../../../actions/actions";
import React = require("react");

interface Props {state: State, actions: Actions};
export const SelectedRestaurant = ({state, actions}: Props) => {
    return (
        <div>
            <h1 className="display-4">
                {state.selectedRestaurant.name}
            </h1>
            <p className="lead">{state.selectedRestaurant.location.address}</p>
            <p>Bookings {state.selectedRestaurant.has_table_booking ? ':)' : ':('}</p>
            <p>Delivery {state.selectedRestaurant.has_online_delivery ? ':)' : ':('}</p>
            <p>Cuisines: {state.selectedRestaurant.cuisines}</p>
            <img src={state.selectedRestaurant.featured_image} alt="Featured Image" />
            <p>Phone Number: 041 000 000</p>
            <p>Opening Hours: 7:00 am to 4:00 pm <span className="badge badge-success">Open Now</span></p>
        </div>
    );
}