import React = require("react");
import { appTitle } from "../../../../constants/app-title.const";


export const NoSelectedRestaurant = () => {
    return (
        <div className="text-center text-primary pt-5">
            <h1 className="display-4">
                {appTitle} 
            </h1>
            <h2 className="display-6 text-grey-dark"><em>A simple little food finder</em></h2>
        </div>
    );
}