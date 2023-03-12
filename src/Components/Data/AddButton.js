import "./AddButton.css";
import ReactDom from "react-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AddingTopic = () => {
  return (
    <div className="topic-container">
      <div>Add task</div>
      <div>Add list</div>
      <div>Add routine</div>
    </div>
  );
};
const AddButton = () => {
  return (
    <button type="button" className="add-button-style">
      <FontAwesomeIcon icon="fa-solid fa-plus" />
      {ReactDom.createPortal(
        <AddingTopic />,
        document.getElementById("where-adding-topic-goes-to")
      )}
    </button>
  );
};

export default AddButton;
