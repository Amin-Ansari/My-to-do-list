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
  const [taskState, updateTask] = useState({
    taskName: "",
    taskDate: "",
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
  return (
    <div className="form-container">
      {console.log(timeReducer.isTimeValid)}
      <Form className="form-style">
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
        <ColorPickerInput></ColorPickerInput>
        <StartTime
          onTakingTheTime={takeTheTime}
          isValid={timeReducer.isTimeValid}
        ></StartTime>
        <EndTime
          onTakingTheTime={takeTheTime}
          isValid={timeReducer.isTimeValid}
        ></EndTime>
        <TaskAddingButton></TaskAddingButton>
      </Form>
    </div>
  );
};

export default FormContainer;
