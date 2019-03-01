import React = require("react");

const style = {
    paddingLeft: '20px'
};

export const TextIndentWithCheckbox = ({text}: {text: string}) => (
    <p style={style}>{text}</p>
)