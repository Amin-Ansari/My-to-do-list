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
  const [importancyState, updateImportancy] = useState(0);
  const [categoryState, updateCategory] = useState(0);
  const [dateState, updateDateState] = useState(`${month}/${day}/${year}`);
  const [nameReducer, dispatchReducer] = useReducer(reduceFunction, {
    value: "",
    isLenghLong: false,
    isNameEmpty: false,
  });
  const [colorResetState, updateColorReset] = useState(false);
  const [timeReducer, dispatchTimer] = useReducer(
    (state, action) => {
      if (action.unit == "START") {
        return {
          startTime: action.time,
          endTime: state.endTime,
          isTimeValid: action.time === state.endTime ? false : true,
          startVal: action.timemeValue,
          endVal: state.endVal,
        };
      } else if (action.unit == "END") {
        return {
          startTime: state.startTime,
          endTime: action.time,
          isTimeValid: action.time === state.startTime ? false : true,
          startVal: state.startVal,
          endVal: action.timemeValue,
        };
      } else {
        return {
          startTime: action.time,
          endTime: action.time,
          isTimeValid: true,
          startVal: 0,
          endVal: 1,
        };
      }
    },
    {
      startTime: "00:00",
      endTime: "00:30",
      isTimeValid: true,
      startVal: 0,
      endVal: 1,
    }
  );
  const [colorState, udpateColorState] = useState("#");

  const updateTheDate = (takenDate) => {
    updateDateState(takenDate);
  };

  const taskDetails = {
    taskName: nameReducer.value,
    taskDate: dateState,
    taskCategory: categoryState,
    taskImportancy: importancyState,
    TaskColor: colorState,
    taskStartTime: timeReducer.startTime,
    taskEndTime: timeReducer.endTime,
    taskStartVal: timeReducer.startVal,
    taskEndVal: timeReducer.endVal,
    isItDone: false,
    infoValidation: function () {
      return {
        isTimeValid: timeReducer.isTimeValid,
        isNameValid: this.taskName != "",
        isTaskColor: this.TaskColor != "",
      };
    },
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

  const takeImportancy = (importancy) => {
    updateImportancy(importancy);
  };
  const takeCategory = (category) => {
    updateCategory(category);
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
        `[${JSON.stringify(taskDetails)}]`
      );
    } else {
      taskLocaled.push(taskDetails);
      localStorage.setItem(
        `${taskDetails.taskDate}`,
        JSON.stringify(taskLocaled)
      );
    }

    dispatchTimer({ unit: "RESET", time: "00:00", timeVal: 0 });
    dispatchReducer({ type: "FOCUS", val: "" });
    hideTheAddingSection();
    updateTheDate(`${month}/${day}/${year}`);
    updateImportancy(0);
    updateCategory(0);
    updateColorReset(true);
    setTimeout(() => updateColorReset(false), 100);
  };
  const takeTheTime = (theTime, timeUnit, timeVal) => {
    dispatchTimer({ unit: timeUnit, time: theTime, timemeValue: timeVal });
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
        <DateInput
          value={taskDetails.taskDate}
          onUpdatingTheDate={updateTheDate}
        ></DateInput>
        <div className="input-wrapper">
          <label className="label-style">
            Category
            <SelectAndOption
              categoryList={["Work", "Study", "Cleaning up"]}
              onTakingCategory={takeCategory}
              value={categoryState}
            ></SelectAndOption>
          </label>
        </div>
        <ImportancyLevel
          value={importancyState}
          onTakingImportancy={takeImportancy}
        ></ImportancyLevel>
        <ColorPickerInput
          onPickingColor={pickTheColor}
          isReseted={colorResetState}
        ></ColorPickerInput>
        <StartTime
          onTakingTheTime={takeTheTime}
          isValid={timeReducer.isTimeValid}
          value={taskDetails.taskStartVal}
        ></StartTime>
        <EndTime
          onTakingTheTime={takeTheTime}
          isValid={timeReducer.isTimeValid}
          value={taskDetails.taskEndVal}
        ></EndTime>
        <TaskAddingButton></TaskAddingButton>
        {console.log(taskDetails.taskEndVal)}
      </form>
    </div>
  );
};

export default FormContainer;
