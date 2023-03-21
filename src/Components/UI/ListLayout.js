import "./ListLayout.css";
import ListItem from "../Data/ListItem";

export default function ListLayout() {
  return (
    <div>
      <div className="list-title">
        <h4>Today</h4>
      </div>
      <ul>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </div>
  );
}
