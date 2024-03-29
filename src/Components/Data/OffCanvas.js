import "./OffCanvas.css";
import { useState } from "react";
import ReactDom from "react-dom";
import SwitchButton from "./SwitchButton";
import { useRef } from "react";

const OffCanvasDrawer = (props) => {
  const drawerRef = useRef();
  function hideOffCanvas() {
    props.visibilityState && props.onHidingOffCanvas();
  }
  {
  }
  const toggleing = () => {
    props.onToggle();
    console.log("goal");
  };
  return (
    <div
      className="back-drop"
      style={{ display: `${props.visibilityState ? "block" : "none"}` }}
      onClick={hideOffCanvas}
      ref={drawerRef}
    >
      <div className="offCanvas-menu" onClick={toggleing}>
        <SwitchButton
          onToggleing={props.onToggle}
          className={"switch"}
          toDateOrCategory={props.dateOrCategory}
        ></SwitchButton>
      </div>
    </div>
  );
};
const OffCanvas = (props) => {
  const [barsState, updateBarsState] = useState(false);
  function toggleTheOffCanvas() {
    if (barsState) {
      updateBarsState(false);
      props.onOffCanvasVisibility(false);
    } else {
      updateBarsState(true);
      props.onOffCanvasVisibility(true);
    }
  }
  return (
    <>
      <div className="off-canvas-button" onClick={toggleTheOffCanvas}>
        <div className={`bar ${barsState ? "full-width-bar" : ""}`}></div>
        <div className={`bar ${barsState ? "full-width-bar" : ""}`}></div>
        <div className={`bar ${barsState ? "full-width-bar" : ""}`}></div>
      </div>
      {ReactDom.createPortal(
        <OffCanvasDrawer
          visibilityState={barsState}
          onHidingOffCanvas={toggleTheOffCanvas}
          onToggle={props.onToggleing}
          dateOrCategory={props.toDateOrCategory}
        />,
        document.querySelector("#where-offCavnasMenu-goes")
      )}
    </>
  );
};
export default OffCanvas;
