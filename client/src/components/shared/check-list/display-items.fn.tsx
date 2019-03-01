import { State_List_In_View } from "../../../state/state";
import React = require("react");
import { ListType } from "./list-type.model";
import { Actions } from "../../../actions/actions";

export const displayItems = (list: State_List_In_View, listType: ListType, actions: Actions) => {
    return list.map((item => {
        return (
            <div className="form-check" key={item.id}>
                <input 
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={item.active}
                    id={listType + '_' + item.id}
                    onChange= { (ev) => {
                        actions.updateListItemActiveState(
                            (ev.target as any).id, (ev.target.checked)
                        );
                        actions.getRestaurants();
                    }}
                ></input>
                <label className="form-check-label" htmlFor={listType + '_' + item.id}>
                    { item.vanityName || item.name || '...' }
            </label>
            </div>
        )
    }))
}