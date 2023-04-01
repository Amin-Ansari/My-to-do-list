import "./DayRadioButton.css";

const DayRadioButton = (props) => {
  const liftTheDateUp = (event) => {
    props.selectedDate(event.target.value);
  };
  return (
    <label className="day-radio-btn">
      <input
        type="radio"
        value={props.dateValue}
        name={`input-day`}
        id={`${props.nameVal}-${props.index}`}
        onClick={liftTheDateUp}
      ></input>
      <span className="select-sign">{props.dayNum}</span>
    </label>
  );
};

export default DayRadioButton;
