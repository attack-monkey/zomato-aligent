import { State_List_In_View } from "../../../state/state";
import React = require("react");

export const displayItems = (list: State_List_In_View) => {
    return list.map((item => {
        return (
            <div className="form-check" key={item.id}>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                    { item.vanityName || item.name || '...' }
            </label>
            </div>
        )
    }))
}