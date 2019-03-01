import React = require("react");
import { CheckList } from "../../../shared/check-list/check-list.component";
import { State_List_In_View } from "../../../../state/state";
import { Actions } from "../../../../actions/actions";

export const displayLists = (lists: State_List_In_View[], actions: Actions) => lists.map((list, key) => {
    const showMore = key === 2;
    return <CheckList list={list} showMore={showMore} actions={actions} key={key}></CheckList>
});
    