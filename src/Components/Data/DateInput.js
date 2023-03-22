import "./InputStyles.css";
import "./AddButton.css";
import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import { useState } from "react";
import SelectButton from "./SelectButton";
const DatePicker = (props) => {
  return (
    <Backdrop className={`backdrop-shadow ${true ? "appear" : "hide"}`}>
      <div
        className={`topic-container date-picker-padding ${
          true ? "topict-goes-up" : "hide"
        }`}
      >
        <div className="month-control-wrapper">
          <button>Previous month</button>
          <button>Next month</button>
        </div>
        <SelectButton></SelectButton>
      </div>
    </Backdrop>
  );
};

const DateInput = (props) => {
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
          ></input>
        </label>
      </div>
      {ReactDOM.createPortal(
        <DatePicker />,
        document.getElementById("where-date-picker-goes-to")
      )}
    </>
  );
};

export default DateInput;
