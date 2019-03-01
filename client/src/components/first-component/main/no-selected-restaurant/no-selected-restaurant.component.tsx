import React = require("react");
import { appTitle } from "../../../../constants/app-title.const";


export const NoSelectedRestaurant = () => {
    return (
        <div>
            <h1 className="display-4">
                Welcome to 
            </h1>
            <p className="lead">{appTitle}</p>
        </div>
    );
}