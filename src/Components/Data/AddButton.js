import "./AddButton.css";
import ReactDom from "react-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Backdrop from "./Backdrop";

const AddButton = (props) => {
  const [isTopicAppear, updateAppear] = useState(false);
  const toggleTopicContainer = () => {
    isTopicAppear ? updateAppear(false) : updateAppear(true);
  };
  const setToFalse = (theFalseValue) => {
    updateAppear(theFalseValue);
  };
  const topicSelected = () => {
    props.onTopicClick(true);
  };
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <AddingTopic
          appearOrNot={isTopicAppear}
          onHiding={setToFalse}
          onTopicChoose={topicSelected}
        />,
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
    <Backdrop
      className={`backdrop-shadow ${props.appearOrNot ? "appear" : "hide"}`}
      onClick={hideAddingTopic}
    >
      <div
        className={`topic-container ${
          props.appearOrNot ? "topict-goes-up" : "hide"
        }`}
      >
        <div onClick={props.onTopicChoose}>Add task</div>
      </div>
    </Backdrop>
  );
};
export default AddButton;
