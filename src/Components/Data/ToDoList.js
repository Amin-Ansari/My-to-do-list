import classes from "./ToDoList.module.css";
import ListLayout from "../UI/ListLayout";

export default function ToDoList(props) {
  return (
    <div className={classes["todo-list-style"]}>
      <h2 className={classes["title-style"]}>Tasks</h2>
      <ListLayout listIndex={props.listIndex}></ListLayout>
    </div>
  );
}
