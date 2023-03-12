import "./OffCanvas.css";
import { useState } from "react";

const OffCanvas = () => {
  const [barsState, updateBarsState] = useState(false);
  function toggleTheOffCanvas() {
    barsState ? updateBarsState(false) : updateBarsState(true);
  }
  return (
    <div className="off-canvas-button" onClick={toggleTheOffCanvas}>
      <div className={`bar ${barsState ? "full-width-bar" : ""}`}></div>
      <div className={`bar ${barsState ? "full-width-bar" : ""}`}></div>
      <div className={`bar ${barsState ? "full-width-bar" : ""}`}></div>
    </div>
  );
};
export default OffCanvas;
