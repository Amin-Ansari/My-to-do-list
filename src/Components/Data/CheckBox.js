import "./CheckBox.css";
import { useState } from "react";

export default function CheckBox(props) {
  const [checkState, updateCheckState] = useState(false);
  return (
    <label
      className={`containging-label ${
        checkState ? "checked-state-style" : "unchecked-state-style"
      }`}
      style={{
        borderColor: `#${props.borderColor}`,
        backgroundColor: `#${checkState ? props.borderColor : "fff"}`,
      }}
    >
      <input type="checkbox" r></input>
    </label>
  );
}
