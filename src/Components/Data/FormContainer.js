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

const reduceFunction = (state, action) => {
  return {
    value: action.val.length <= 90 ? action.val : state.value,
    isLenghLong: action.val.length > 90,
    isNameEmpty: !action.val && action.type == "BLUR" ? true : false,
  };
};

const FormContainer = (props) => {
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

  const [nameReducer, dispatchReducer] = useReducer(reduceFunction, {
    value: "",
    isLenghLong: false,
    isNameEmpty: false,
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
      } else {
        return {
          startTime: action.time,
          endTime: action.time,
          isTimeValid: true,
        };
      }
    },
    {
      startTime: "00:00",
      endTime: "00:00",
      isTimeValid: true,
    }
  );
  const [colorState, udpateColorState] = useState("");

  const taskDetails = {
    taskName: nameReducer.value,
    taskDate: `${month}/${day}/${year}`,
    taskCategory: "0",
    taskImportancy: "0",
    TaskColor: colorState,
    taskStartTime: timeReducer.startTime,
    taskEndTime: timeReducer.endTime,
    infoValidation: function () {
      return {
        isTimeValid: timeReducer.isTimeValid,
        isNameValid: this.taskName != "",
        isTaskColor: this.TaskColor != "",
      };
    },
  };

  const hideTheAddingSection = () => {
    props.onLiftingUp(false);
  };
  // The funcion below is responsible for updating localStorage
  const updateLocalStorage = () => {
    let taskLocaled = JSON.parse(
      localStorage.getItem(`${taskDetails.taskDate}`)
    );
    if (!taskLocaled) {
      localStorage.setItem(
        `${taskDetails.taskDate}`,
        JSON.stringify([taskDetails])
      );
    } else {
      taskLocaled.push(JSON.stringify(taskDetails));
      localStorage.setItem(
        `${taskDetails.taskDate}`,
        JSON.stringify(taskLocaled)
      );
    }
    dispatchTimer({ unit: "RESET", time: "00:00" });
    dispatchReducer({ type: "FOCUS", val: "" });
    const colors = document.querySelectorAll(".color-radio-btn");
    hideTheAddingSection();
  };
  const takeTheTime = (theTime, timeUnit) => {
    dispatchTimer({ unit: timeUnit, time: theTime });
  };
  const formSubmission = (event) => {
    event.preventDefault();
    if (
      taskDetails.infoValidation().isNameValid &&
      taskDetails.infoValidation().isTaskColor &&
      taskDetails.infoValidation().isTimeValid
    ) {
      updateLocalStorage();
    } else {
      alert("The name, color and time fields are important, fill them out");
    }
  };
  const nameInputvalidity = (inputValue) => {
    dispatchReducer(inputValue);
  };
  const pickTheColor = (color) => {
    udpateColorState(color);
  };

  return (
    <div className="form-container">
      <form className="form-style" onSubmit={formSubmission}>
        <NameInput
          onEvent={nameInputvalidity}
          value={nameReducer.value}
          inputLength={nameReducer.isLenghLong}
          inputEmpty={nameReducer.isNameEmpty}
        ></NameInput>
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
        <ColorPickerInput onPickingColor={pickTheColor}></ColorPickerInput>
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
