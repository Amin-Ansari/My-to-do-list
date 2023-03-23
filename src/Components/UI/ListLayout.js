import "./ListLayout.css";
import ListItem from "../Data/ListItem";

export default function ListLayout() {
  return (
    <div>
      <div className="list-title">
        <h4>Today</h4>
      </div>
      <ul className="list-style">
        <ListItem
          bgColor="FF9494"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="FF9494"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="D7E3FC"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="D7E3FC"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="D7E3FC"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="D7E3FC"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="D7E3FC"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="CEEDC7"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
        <ListItem
          bgColor="CEEDC7"
          taskTitle="have dinner"
          taskTime="20:00"
        ></ListItem>
      </ul>
    </div>
  );
}
