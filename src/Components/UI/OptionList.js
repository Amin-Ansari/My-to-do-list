import "./OptionList.css";
const OptionList = (props) => {
  return (
    <div className="option-list-style">
      {props.children}
      <div className="switch-button">Swtich to date</div>
    </div>
  );
};

export default OptionList;
