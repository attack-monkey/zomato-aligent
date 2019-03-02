import * as React from 'react';import { State_List_In_View } from '../../../../state/state';
import { Actions } from '../../../../actions/actions';
import { displayLists } from './display-lists.fn';
import { turnListInto3Lists } from './turn-list-into-3-lists.fn';
import { TextIndentWithCheckbox } from '../../../shared/text-indent-with-checkbox/text-indent-with-checkbox.component';

interface Props { list: State_List_In_View, actions: Actions };
export const CuisineList = ({list, actions}: Props) => {
    const lists = turnListInto3Lists(list);
    return (
        <div>
            { displayLists(lists, actions) }
        </div>
    );
}
