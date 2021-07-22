import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-title">Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        disabled={!props.option.length}
        className="button button--link"
      >
        Remove All
      </button>
    </div>
    {props.option.length === 0 && (
      <div className="widget-header__message">
        Please add an option to get started.
      </div>
    )}
    {props.option.map((item, index) => (
      <Option
        key={item}
        optionText={item}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
