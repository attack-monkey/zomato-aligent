import { State } from "../../../../state/state";
import { Actions } from "../../../../actions/actions";
import React = require("react");
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props { state: State, actions: Actions };
export const SelectedRestaurant = ({ state, actions }: Props) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="square-container">
                    <div className="inner bg-grey-mid" 
                        style={{backgroundImage: 'url(' + state.selectedRestaurant.featured_image +')'}}
                    >
                    </div>
                </div>
            </div>
            <div className="col-md-8 pl-4">
                <h2 className="display-6">
                    {state.selectedRestaurant.name}
                    <br/>
                    <p pt-1 className="lead text-secondary">{state.selectedRestaurant.location.address}</p>
                </h2>
                <p className="text-secondary" style={{fontSize: '1em'}}>
                    <span style={{width: '24px', display: 'inline-block' }}>
                        {state.selectedRestaurant.has_table_booking ? (
                            <FontAwesomeIcon icon="check" className="text-success"/>
                        ) : (
                            <FontAwesomeIcon icon="times" className="text-danger"/>
                        )}
                    </span>
                    <span className="pl-2">Bookings</span>
                    
                    <br/>
                    <span style={{width: '24px', display: 'inline-block'}}>
                        {state.selectedRestaurant.has_online_delivery ? (
                            <FontAwesomeIcon icon="check" className="text-success"/>
                        ) : (
                            <FontAwesomeIcon icon="times" className="text-danger"/>
                        )}
                    </span>
                    <span className="pl-2">Delivery</span>
                </p>
                <h6 className="label d-inline">Cuisines</h6>
                <p className="lead text-grey-dark">{state.selectedRestaurant.cuisines}</p>
                <h6 className="label d-inline">Phone Number</h6>
                <p className="lead text-grey-dark">041 000 000</p>
                <h6 className="label d-inline">Opening Hours</h6>
                <p className="lead text-grey-dark">7:00 am to 4:00 pm <span className="badge badge-success ml-2 p-2" style={{ fontSize: '0.6em' }}>OPEN NOW</span></p>
            </div>
        </div>
    );
}