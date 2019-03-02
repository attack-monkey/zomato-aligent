import { ListType } from "../components/shared/check-list/list-type.model";
import { State, State_List_In_View, StateNode } from "../state/state";
import { Fn } from "react-fn";
import { stateNode, stateValue } from "./state-helper.fns";

export const updateListItemActiveState = (fn: Fn, listTypeAndId: string, active: boolean) => {
    const listTypeAndIdArray = listTypeAndId.split('_');
    const listType = listTypeAndIdArray[0] as ListType;
    const id = listTypeAndIdArray[1];
    const currentListInView = (fn.getState() as State)[listType].inView;
    const newListInView = currentListInView.map(item => {
        return item.id == id ? Object.assign({}, item, { active: active }) : item
    });
    fn.updateState(
        stateNode(listType + '/inView' as StateNode),
        stateValue<State_List_In_View>(newListInView),
        { rerender: false }
    )
}