import "./OptionList.css";
import SwitchButton from "../Data/SwitchButton";
const OptionList = (props) => {
  return (
    <div className="option-list-style">
      {props.children}
      <SwitchButton className={"switch-button"}></SwitchButton>
    </div>
  );
};

export default OptionList;
