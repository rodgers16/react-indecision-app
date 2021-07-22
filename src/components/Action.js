import React from "react";
const Action = (props) => (
  <button
    className="big-button"
    onClick={props.handleWhatToDo}
    disabled={!props.hasOptions}
  >
    What Should I do?
  </button>
);

export default Action;
