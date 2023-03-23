import "./ListItem.css";
import Form from "../UI/Form";
import CheckBox from "./CheckBox";
import { useState } from "react";

const ListItem = (props) => {
  const [taskDoneState, updateTaskDoneState] = useState(false);
  const drawLine = () => {
    taskDoneState ? updateTaskDoneState(false) : updateTaskDoneState(true);
  };
  return (
    <li className="list-item-style" onClick={drawLine}>
      <div className="item-container">
        <div className="theCheckBoxContainer">
          <Form>
            <CheckBox borderColor={props.bgColor} />
          </Form>
        </div>
        <div
          className="item-desc"
          style={{ backgroundColor: `#${props.bgColor}` }}
        >
          <h6
            id="task-title"
            className={`${taskDoneState ? "line-throw" : ""}`}
          >
            Something
          </h6>
          <span
            id="task-time"
            className={`${taskDoneState ? "line-throw" : ""}`}
          >
            08:20
          </span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
