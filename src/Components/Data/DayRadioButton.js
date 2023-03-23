import "./DayRadioButton.css";

const DayRadioButton = (props) => {
  return (
    <label className="day-radio-btn">
      <input
        type="radio"
        value={props.dateValue}
        name={`input-day`}
        id={`${props.nameVal}-${props.index}`}
      ></input>
      <span className="select-sign">{props.dayNum}</span>
    </label>
  );
};

export default DayRadioButton;
