import "./SelectButton.css";

const SelectButton = (props) => {
  const passFalse = () => {
    props.closeCalender();
  };
  return (
    <button className="select-button" onClick={passFalse}>
      Select
    </button>
  );
};
export default SelectButton;
