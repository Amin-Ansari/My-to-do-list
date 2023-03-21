import "./ListItem.css";
import Form from "../UI/Form";
import CheckBox from "./CheckBox";

const ListItem = (props) => {
  return (
    <li className="list-item-style">
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
          <h6 id="task-title">Something</h6>
          <span id="task-time">08:20</span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
