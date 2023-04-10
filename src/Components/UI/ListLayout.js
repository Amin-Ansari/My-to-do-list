import "./ListLayout.css";
import ListItem from "../Data/ListItem";
import { useEffect } from "react";
export default function ListLayout(props) {
  const todayDate = new Date();
  let day, month, year;
  day =
    todayDate.getDate() >= 10
      ? `${todayDate.getDate()}`
      : `0${todayDate.getDate()}`;
  month =
    todayDate.getMonth() + 1 >= 10
      ? `${todayDate.getMonth() + 1}`
      : `0${todayDate.getMonth() + 1}`;
  year = todayDate.getFullYear();
  const tasks = JSON.parse(localStorage.getItem(props.date));
  let filteredTasks = [];
  if (tasks) {
    if (props.listIndex >= 1) {
      tasks.forEach((item) => {
        if (Number(props.listIndex) - 1 == Number(item.taskCategory)) {
          filteredTasks.push(item);
        }
      });
    } else {
      filteredTasks = tasks;
    }
  }
  const toggleDoneState = (passedTask, passedState) => {
    // console.log(passedTask);
    let tasks = JSON.parse(localStorage.getItem(props.date));
    for (let task of tasks) {
      if (task.taskName === passedTask.taskName) {
        task.isItDone = passedState;
        localStorage.setItem(`${props.date}`, JSON.stringify(tasks));
      }
    }
  };
  const listContent = function () {
    let content;
    console.log(filteredTasks);
    if (filteredTasks.length == 0) {
      content = (
        <div className="no-task-available">There is no task available</div>
      );
      return content;
    }
    if (filteredTasks) {
      content = filteredTasks.map((item, index) => {
        return (
          <div key={index}>
            <ListItem task={item} ontoggling={toggleDoneState}></ListItem>
          </div>
        );
      });
      return content;
    }

    console.log(content);
    return content;
  };

  return (
    <div>
      <div className="list-title">
        <h4>Today</h4>
      </div>
      <ul className="list-style">{listContent()}</ul>
    </div>
  );
}
