import "./InputStyles.css";
import "./AddButton.css";
import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import { useState } from "react";
import SelectButton from "./SelectButton";
import DayPicker from "./DayPicker";
const DatePicker = (props) => {
  function closeBackDrop() {
    props.onClosingDPicker(false);
  }
  const monthChange = () => {
    props.onClosingDPicker(true);
  };
  return (
    <>
      <Backdrop
        className={`backdrop-shadow ${props.hideOrShow ? "appear" : "hide"}`}
      >
        <div className="close-part" onClick={closeBackDrop}></div>
        <div
          className={`topic-container date-picker-padding ${
            true ? "topict-goes-up" : "hide"
          }`}
        >
          <div className="month-control-wrapper">
            <button onClick={monthChange}>Previous month</button>
            <button onClick={monthChange}>Next month</button>
          </div>
          <DayPicker></DayPicker>
          <SelectButton></SelectButton>
        </div>
      </Backdrop>
    </>
  );
};

const DateInput = (props) => {
  const [dateShowState, updateDateShowState] = useState(false);
  const changeTheState = (stateValue) => {
    updateDateShowState(stateValue);
  };
  const showTheDatePicker = () => {
    updateDateShowState(true);
  };
  return (
    <>
      <div className="input-wrapper">
        <label className="label-style hover-cursor">
          Date
          <input
            type="text"
            readOnly
            className="input-style hover-cursor"
            value={"02/20/2023"}
            onClick={showTheDatePicker}
          ></input>
        </label>
      </div>
      {ReactDOM.createPortal(
        <DatePicker
          hideOrShow={dateShowState}
          onClosingDPicker={changeTheState}
        />,
        document.getElementById("where-date-picker-goes-to")
      )}
    </>
  );
};

export default DateInput;
