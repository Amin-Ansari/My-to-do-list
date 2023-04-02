import "./ListLayout.css";
import ListItem from "../Data/ListItem";
import { useEffect } from "react";
export default function ListLayout() {
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
  let tasks = JSON.parse(localStorage.getItem(`${month}/${day}/${year}`));
  console.log("hello world");
  return (
    <div>
      <div className="list-title">
        <h4>Today</h4>
      </div>
      <ul className="list-style">
        {tasks
          ? tasks.map((item, index) => {
              return (
                <ListItem
                  bgColor={`${item.TaskColor}`}
                  taskTitle={`${item.taskName}`}
                  taskTime={`${item.taskEndTime}`}
                ></ListItem>
              );
            })
          : ""}
      </ul>
    </div>
  );
}
