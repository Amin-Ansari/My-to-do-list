import "./OffCanvas.css";
import { useState } from "react";
import ReactDom from "react-dom";

const OffCanvasDrawer = (props) => {
  function hideOffCanvas() {
    props.visibilityState && props.onHidingOffCanvas(false);
  }
  return (
    <div
      className="back-drop"
      style={{ display: `${props.visibilityState ? "block" : "none"}` }}
      onClick={hideOffCanvas}
    >
      <div className="offCanvas-menu"></div>
    </div>
  );
};
const OffCanvas = (props) => {
  const [barsState, updateBarsState] = useState(false);
  function hideMenu(value) {
    updateBarsState(value);
  }
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
          onHidingOffCanvas={hideMenu}
        />,
        document.querySelector("#where-offCavnasMenu-goes")
      )}
    </>
  );
};
export default OffCanvas;
