import "./TaskTimer.css";

const TaskTimer = (props) => {
  return <div className="timer-container">{props.children}</div>;
};

export default TaskTimer;
