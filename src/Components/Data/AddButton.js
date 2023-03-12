import "./AddButton.css";
import ReactDom from "react-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddButton = () => {
  const [isTopicAppear, updateAppear] = useState(false);
  const toggleTopicContainer = () => {
    isTopicAppear ? updateAppear(false) : updateAppear(true);
  };
  const setToFalse = (theFalseValue) => {
    updateAppear(theFalseValue);
  };
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <AddingTopic appearOrNot={isTopicAppear} onHiding={setToFalse} />,
        document.getElementById("where-adding-topic-goes-to")
      )}
      <button
        type="button"
        className="add-button-style"
        onClick={toggleTopicContainer}
      >
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
    </React.Fragment>
  );
};

const AddingTopic = (props) => {
  const hideAddingTopic = () => {
    props.onHiding(false);
  };
  return (
    <div
      className={`backdrop-shadow ${props.appearOrNot ? "appear" : "hide"}`}
      onClick={hideAddingTopic}
    >
      <div
        className={`topic-container ${
          props.appearOrNot ? "topict-goes-up" : "hide"
        }`}
      >
        <div>Add task</div>
        <div>Add list</div>
        <div>Add routine</div>
      </div>
    </div>
  );
};
export default AddButton;
