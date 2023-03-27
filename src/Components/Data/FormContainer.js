import "./FormContainer.css";
import Form from "../UI/Form";
import SelectAndOption from "./SelectAndOptions";
import NameInput from "./NameInput";
import "./InputStyles.css";
import DateInput from "./DateInput";
import ImportancyLevel from "./ImportancyLevel";
import EndTime from "./EndTime";
import StartTime from "./StartTime";
import TaskAddingButton from "./TaskAddingButton";
import ColorPickerInput from "./ColorPickerInput";
import { useReducer, useState } from "react";

const FormContainer = () => {
  const todayDate = new Date();
  let day, month, year;
  day =
    todayDate.getDate() >= 10
      ? `${todayDate.getDate()}`
      : `0${todayDate.getDate()}`;
  month =
    todayDate.getMonth() + 1 >= 10
      ? `${todayDate.getMonth() + 1}`
      : `0${todayDate.getMonth() + 1}`;
  year = todayDate.getFullYear();

  const [taksREducer, dispatchTask] = useReducer(() => {}, {
    taskName: "",
    taskDate: `${month}/${day}/${year}`,
    taskCategory: "",
    taskImportancy: "",
    TaskColor: "",
    taskStartTime: "",
    taskEndTime: "",
  });
  const [timeReducer, dispatchTimer] = useReducer(
    (state, action) => {
      if (action.unit == "START") {
        return {
          startTime: action.time,
          endTime: state.endTime,
          isTimeValid: action.time === state.endTime ? false : true,
        };
      } else if (action.unit == "END") {
        return {
          startTime: state.startTime,
          endTime: action.time,
          isTimeValid: action.time === state.startTime ? false : true,
        };
      }
    },
    {
      startTime: "00:00",
      endTime: "00:00",
      isTimeValid: true,
    }
  );
  const takeTheTime = (theTime, timeUnit) => {
    dispatchTimer({ unit: timeUnit, time: theTime });
  };
  const formSubmission = (event) => {
    event.preventDefault();
  };
  const dd = () => {
    alert("dd");
  };
  return (
    <div className="form-container">
      <form className="form-style" onSubmit={formSubmission}>
        <NameInput></NameInput>
        <DateInput></DateInput>
        <div className="input-wrapper">
          <label className="label-style">
            Category
            <SelectAndOption
              categoryList={["Work", "Study", "Cleaning up"]}
            ></SelectAndOption>
          </label>
        </div>
        <ImportancyLevel></ImportancyLevel>
        <ColorPickerInput onTest={dd}></ColorPickerInput>
        <StartTime
          onTakingTheTime={takeTheTime}
          isValid={timeReducer.isTimeValid}
        ></StartTime>
        <EndTime
          onTakingTheTime={takeTheTime}
          isValid={timeReducer.isTimeValid}
        ></EndTime>
        <TaskAddingButton></TaskAddingButton>
      </form>
    </div>
  );
};

export default FormContainer;
