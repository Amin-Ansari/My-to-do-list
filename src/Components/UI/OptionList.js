import "./OptionList.css";
import SwitchButton from "../Data/SwitchButton";
const OptionList = (props) => {
  return (
    <div className="option-list-style">
      {props.children}
      <SwitchButton
        className={"switch-button"}
        onToggleing={props.onToggleing}
        toDateOrCategory={props.toDateOrCategory}
      ></SwitchButton>
    </div>
  );
};

export default OptionList;
