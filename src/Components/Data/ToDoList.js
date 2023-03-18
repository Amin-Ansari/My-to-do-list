import classes from "./ToDoList.module.css";

export default function ToDoList() {
  return (
    <div className={classes["todo-list-style"]}>
      <h2 className={classes["title-style"]}>Tasks</h2>
    </div>
  );
}
