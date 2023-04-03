import { useState } from "react";
import "./TitleAndTime.css";
import "./TitleAndTime.css";

const TitleAndTime = (props) => {
  const theTime = new Date();

  const [currentTime, updateTime] = useState({
    hour:
      theTime.getHours() <= 9 ? `0${theTime.getHours()}` : theTime.getHours(),
    minutes:
      theTime.getMinutes() <= 9
        ? `0${theTime.getMinutes()}`
        : theTime.getMinutes(),
  });
  setInterval(() => {
    const theNewTime = new Date();
    updateTime(() => {
      return {
        hour:
          theNewTime.getHours() <= 9
            ? `0${theNewTime.getHours()}`
            : theNewTime.getHours(),
        minutes:
          theNewTime.getMinutes() <= 9
            ? `0${theNewTime.getMinutes()}`
            : theNewTime.getMinutes(),
      };
    });
  }, 1000);

  return (
    <div className="title-and-time-style">
      <h6>Current Time</h6>
      <span>{`${currentTime.hour}:${currentTime.minutes}`}</span>
    </div>
  );
};

export default TitleAndTime;
