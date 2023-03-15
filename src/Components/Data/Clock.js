import "./Clock.css";
import ClockSVG from "../../images/clock-image.svg";
import { useState } from "react";

const Clock = () => {
  const initialTime = new Date();
  const [clockTime, updateClockTime] = useState({
    hour:
      initialTime.getHours() <= 9
        ? `0${initialTime.getHours()}`
        : initialTime.getHours(),
    minute:
      initialTime.getMinutes() <= 9
        ? `0${initialTime.getMinutes()}`
        : initialTime.getMinutes(),
  });
  setInterval(() => {
    const newerTime = new Date();
    updateClockTime({
      hour:
        newerTime.getHours() <= 9
          ? `0${newerTime.getHours()}`
          : newerTime.getHours(),
      minute:
        newerTime.getMinutes() <= 9
          ? `0${newerTime.getMinutes()}`
          : newerTime.getMinutes(),
    });
  }, 1000);
  return (
    <div className="image-wrapper">
      <img src={ClockSVG} className="clock-image"></img>
      <img
        src={require("../../images/arrow-2.png")}
        className="arrow hour-arrow"
        style={{
          transform: ` translate(-50%, -50%) rotate(${
            Number(clockTime.hour) * 30 + Number(clockTime.minute / 3)
          }deg)`,
        }}
      />
      <img
        src={require("../../images/arrow-1.png")}
        className="arrow"
        style={{
          transform: `translate(-50%, -50%) rotate(${
            Number(clockTime.minute) * 6
          }deg)`,
        }}
      />
      <span className="arrow-dot"></span>
    </div>
  );
};
export default Clock;
