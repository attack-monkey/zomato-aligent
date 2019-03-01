import * as React from 'react';
import { State_List_In_View } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { displayItems } from './display-items.fn';
import { TextIndentWithCheckbox } from '../text-indent-with-checkbox/text-indent-with-checkbox.component';
import { ListType } from './list-type.model';

interface Props { list: State_List_In_View, listType: ListType, showMore: boolean, actions: Actions };
export const CheckList = ({ list, listType, showMore, actions }: Props) => {
    return (
        <div className="float-left">
            { displayItems(list, listType, actions) }
            { showMore ? (<TextIndentWithCheckbox text="Show more"></TextIndentWithCheckbox>) : '' }
        </div>
    );
}