import "./InputStyles.css";
import { useReducer } from "react";

const NameInput = (props) => {
  const checkLength = (event) => {
    props.onEvent({ type: "FOCUS", val: event.target.value });
  };
  const checkIfEmpty = (event) => {
    props.onEvent({ type: "BLUR", val: event.target.value });
  };
  function errorMessage() {
    if (props.inputLength) {
      return "You can't write a task more than 90 Char";
    }
    if (props.inputEmpty) {
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
            !error && props.value ? "filling-style" : ""
          }`}
          onChange={checkLength}
          onBlur={checkIfEmpty}
          value={props.value}
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
