import "./InputStyles.css";
import "./AddButton.css";
import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import { useRef, useState } from "react";
import SelectButton from "./SelectButton";
import DayPicker from "./DayPicker";
const DatePicker = (props) => {
  const [currentDate, updateCurrentDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
  );
  let dayNumber = Number(currentDate.toLocaleString("en", { day: "numeric" }));
  const myDays = [];
  // The for loop below will add all days of a month to the myDays array
  for (let i = 1; i <= dayNumber; i++) {
    myDays.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }
  function closeBackDrop() {
    props.onClosingDPicker(false);
  }
  const prevMonth = () => {
    updateCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
    );
  };
  const nxtMonth = () => {
    updateCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0)
    );
  };
  const takeTheChoosenDate = (choosenDate) => {
    props.onTakingDate(choosenDate);
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
            <button onClick={prevMonth}>Previous month</button>
            <button onClick={nxtMonth}>Next month</button>
          </div>
          <DayPicker
            daysList={myDays}
            liftUpCoosenDate={takeTheChoosenDate}
          ></DayPicker>
          <SelectButton closeCalender={closeBackDrop}></SelectButton>
        </div>
      </Backdrop>
    </>
  );
};

const DateInput = (props) => {
  const todayDate = new Date();
  const dateRef = useRef();
  const [dateShowState, updateDateShowState] = useState(false);
  const [test, udpateTest] = useState(props.value);
  const changeTheState = (stateValue) => {
    updateDateShowState(stateValue);
  };
  const showTheDatePicker = () => {
    updateDateShowState(true);
  };
  const pickTheDate = (given) => {
    props.onUpdatingTheDate(given);
  };
  return (
    <>
      <div
        className={`input-wrapper ${
          props.extraClasses ? props.extraClasses : ""
        }`}
      >
        <label className={`label-style hover-cursor `}>
          {`${props.labelStyle ? "Date" : ""}`}
          <input
            type="text"
            readOnly
            className="input-style hover-cursor"
            value={props.value}
            onClick={showTheDatePicker}
          ></input>
        </label>
      </div>
      {ReactDOM.createPortal(
        <DatePicker
          hideOrShow={dateShowState}
          onClosingDPicker={changeTheState}
          onTakingDate={pickTheDate}
        />,
        document.getElementById("where-date-picker-goes-to")
      )}
    </>
  );
};

export default DateInput;
