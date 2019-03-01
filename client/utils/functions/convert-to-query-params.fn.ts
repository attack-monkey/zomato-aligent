import { State, State_List_In_View } from "../../src/state/state";

export const convertToQueryParams = (queryType: string, list: State_List_In_View) => {
    
    const queryArray = list
    .map(item => {
        if (item.active) { return item.id }
        else return undefined;
    })
    .filter(item => item);
    if (!queryArray.length) return undefined;
    return queryType + '=' + encodeURIComponent(queryArray.join(','));
}