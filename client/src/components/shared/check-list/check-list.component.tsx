import * as React from 'react';
import { State, State_List_In_View } from '../../../state/state';
import { Actions } from '../../../actions/actions';
import { displayItems } from './display-items.fn';
import { TextIndentWithCheckbox } from '../text-indent-with-checkbox/text-indent-with-checkbox.component';

const checkBoxStyle = {
    minWidth: '100px'
};
const style = Object.assign(
    {}, checkBoxStyle
);

interface Props { list: State_List_In_View, showMore: boolean, actions: Actions };
export const CheckList = ({ list, showMore, actions }: Props) => {
    return (
        <div className="float-left">
            { displayItems(list) }
            { showMore ? (<TextIndentWithCheckbox text="Show more"></TextIndentWithCheckbox>) : '' }
        </div>
    );
}