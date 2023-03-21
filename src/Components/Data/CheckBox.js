import "./CheckBox.css";
import { useRef } from "react";
import { useState } from "react";

export default function CheckBox(props) {
  const [checkState, updateCheckState] = useState(false);
  const inputRef = useRef();
  const checkAndUncheck = () => {
    updateCheckState(inputRef.current.checked);
  };
  return (
    <label
      className={`containging-label ${
        checkState ? "checked-state-style" : "unchecked-state-style"
      }`}
      style={{
        borderColor: `#${props.borderColor}`,
        backgroundColor: `#${checkState ? props.borderColor : "fff"}`,
      }}
      onClick={checkAndUncheck}
    >
      <input type="checkbox" ref={inputRef}></input>
    </label>
  );
}
