import "./InputStyles.css";
import { useReducer } from "react";
const reduceFunction = (state, action) => {
  return {
    value: action.val.length <= 90 ? action.val : state.value,
    isLenghLong: action.val.length > 90,
    isNameEmpty: !action.val && action.type == "BLUR" ? true : false,
  };
};

const NameInput = (props) => {
  const [nameReducer, dispatchReducer] = useReducer(reduceFunction, {
    value: "",
    isLenghLong: false,
    isNameEmpty: false,
  });
  const checkLength = (event) => {
    dispatchReducer({ type: "FOCUS", val: event.target.value });
  };
  const checkIfEmpty = (event) => {
    dispatchReducer({ type: "BLUR", val: event.target.value });
  };
  function errorMessage() {
    if (nameReducer.isLenghLong) {
      return "You can't write a task more than 90 Char";
    }
    if (nameReducer.isNameEmpty) {
      return "You have to fill out the name input";
    }
    return "";
  }
  const error = errorMessage();
  return (
    <div className="input-wrapper">
      <label className="label-style">
        Name
        <input
          type="text"
          className={`input-style ${error ? "validName" : ""} ${
            !error && nameReducer.value ? "filling-style" : ""
          }`}
          onChange={checkLength}
          onBlur={checkIfEmpty}
          value={nameReducer.value}
        ></input>
        <p
          className={"invalidMessage"}
          style={{
            height: `${error ? "30px" : "0"}`,
          }}
        >
          {error}
        </p>
      </label>
    </div>
  );
};

export default NameInput;
