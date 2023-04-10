import "./ListItem.css";
import Form from "../UI/Form";
import CheckBox from "./CheckBox";
import { useState } from "react";

const ListItem = (props) => {
  const [taskDoneState, updateTaskDoneState] = useState(props.task.isItDone);
  const drawLine = () => {
    const doneState = taskDoneState ? false : true;
    props.ontoggling(props.task, doneState);
    updateTaskDoneState(doneState);
  };
  {
    console.log(props.task.TaskColor);
  }
  return (
    <li className="list-item-style" onClick={drawLine}>
      <div className="item-container">
        <div className="theCheckBoxContainer">
          <Form>
            <CheckBox borderColor={props.task.TaskColor} />
          </Form>
        </div>
        <div
          className="item-desc"
          style={{ backgroundColor: `#${props.task.TaskColor}` }}
        >
          <h6
            id="task-title"
            className={`${taskDoneState ? "line-throw" : ""}`}
          >
            {props.task.taskName}
          </h6>
          <span
            id="task-time"
            className={`${taskDoneState ? "line-throw" : ""}`}
          >
            {props.task.taskEndTime}
          </span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
