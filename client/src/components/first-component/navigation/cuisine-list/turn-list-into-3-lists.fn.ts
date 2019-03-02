import { State_List_In_View } from "../../../../state/state";

export const turnListInto3Lists = (list: State_List_In_View) => {
    let lists;
    if (list.length < 5) {
        lists = [list];
    } else if (list.length < 8) {
        lists = [ list.slice(0,4), list.slice(4, 8) ];
    } else {
        lists = [
            list.slice(0,4),
            list.slice(4, 8),
            list.slice(8, 12)
        ];
    }
    return lists;
};