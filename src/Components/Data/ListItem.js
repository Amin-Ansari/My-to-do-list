import "./ListItem.css";

const ListItem = () => {
  return (
    <li>
      <div className="item-container">
        <div></div>
        <div className="item-desc">
          <h6 id="task-title">Something</h6>
          <span id="task-time">08:20</span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
