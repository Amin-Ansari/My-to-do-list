import "./DayPicker.css";
import DayRadioButton from "./DayRadioButton";

export default function DayPicker(props) {
  const weekday = [[], [], [], [], [], [], []];

  const allDays = props.daysList;
  for (let i = 1; i <= allDays.length; i++) {
    const d = allDays[i - 1].toLocaleString("en", { weekday: "long" });
    d == "Monday" && weekday[0].push(allDays[i - 1]);
    d == "Tuesday" && weekday[1].push(allDays[i - 1]);
    d == "Wednesday" && weekday[2].push(allDays[i - 1]);
    d == "Thursday" && weekday[3].push(allDays[i - 1]);
    d == "Friday" && weekday[4].push(allDays[i - 1]);
    d == "Saturday" && weekday[5].push(allDays[i - 1]);
    d == "Sunday" && weekday[6].push(allDays[i - 1]);
  }
  for (let item of weekday) {
    if (item[0].getDate() == 1) {
      break;
    } else {
      item.unshift("empty");
    }
  }
  const takeTheDate = (theDate) => {
    props.liftUpCoosenDate(theDate);
  };
  return (
    <div className="day-container">
      <div className="day-name">
        <ul>
          Mon
          {weekday[0].map((item, index) => {
            if (item == "empty") {
              return (
                <li className="calender-day empty-li" key={index}>
                  0
                </li>
              );
            } else {
              return (
                <li key={index} className="calender-day">
                  <DayRadioButton
                    dayNum={item.getDate()}
                    dateValue={`${
                      item.getMonth() + 1 <= 9
                        ? `0${item.getMonth() + 1}`
                        : `${item.getMonth()}`
                    }/${
                      item.getDate() <= 9
                        ? `0${item.getDate()}`
                        : `${item.getDate()}`
                    }/${item.getFullYear()}`}
                    nameVal={item.toLocaleString("en", { weekday: "long" })}
                    index={index}
                    selectedDate={takeTheDate}
                  ></DayRadioButton>
                </li>
              );
            }
          })}
        </ul>
        <ul>
          Tue
          {weekday[1].map((item, index) => {
            if (item == "empty") {
              return (
                <li className="calender-day empty-li" key={index}>
                  0
                </li>
              );
            } else {
              return (
                <li key={index} className="calender-day">
                  <DayRadioButton
                    dayNum={item.getDate()}
                    dateValue={`${
                      item.getMonth() + 1 <= 9
                        ? `0${item.getMonth() + 1}`
                        : `${item.getMonth()}`
                    }/${
                      item.getDate() <= 9
                        ? `0${item.getDate()}`
                        : `${item.getDate()}`
                    }/${item.getFullYear()}`}
                    nameVal={item.toLocaleString("en", { weekday: "long" })}
                    index={index}
                    selectedDate={takeTheDate}
                  ></DayRadioButton>
                </li>
              );
            }
          })}
        </ul>
        <ul>
          Wed
          {weekday[2].map((item, index) => {
            if (item == "empty") {
              return (
                <li className="calender-day empty-li" key={index}>
                  0
                </li>
              );
            } else {
              return (
                <li key={index} className="calender-day">
                  <DayRadioButton
                    dayNum={item.getDate()}
                    dateValue={`${
                      item.getMonth() + 1 <= 9
                        ? `0${item.getMonth() + 1}`
                        : `${item.getMonth()}`
                    }/${
                      item.getDate() <= 9
                        ? `0${item.getDate()}`
                        : `${item.getDate()}`
                    }/${item.getFullYear()}`}
                    nameVal={item.toLocaleString("en", { weekday: "long" })}
                    index={index}
                    selectedDate={takeTheDate}
                  ></DayRadioButton>
                </li>
              );
            }
          })}
        </ul>
        <ul>
          Thu
          {weekday[3].map((item, index) => {
            if (item == "empty") {
              return (
                <li className="calender-day empty-li" key={index}>
                  0
                </li>
              );
            } else {
              return (
                <li key={index} className="calender-day">
                  <DayRadioButton
                    dayNum={item.getDate()}
                    dateValue={`${
                      item.getMonth() + 1 <= 9
                        ? `0${item.getMonth() + 1}`
                        : `${item.getMonth()}`
                    }/${
                      item.getDate() <= 9
                        ? `0${item.getDate()}`
                        : `${item.getDate()}`
                    }/${item.getFullYear()}`}
                    nameVal={item.toLocaleString("en", { weekday: "long" })}
                    index={index}
                    selectedDate={takeTheDate}
                  ></DayRadioButton>
                </li>
              );
            }
          })}
        </ul>
        <ul>
          Fri
          {weekday[4].map((item, index) => {
            if (item == "empty") {
              return (
                <li className="calender-day empty-li" key={index}>
                  0
                </li>
              );
            } else {
              return (
                <li key={index} className="calender-day">
                  <DayRadioButton
                    dayNum={item.getDate()}
                    dateValue={`${
                      item.getMonth() + 1 <= 9
                        ? `0${item.getMonth() + 1}`
                        : `${item.getMonth()}`
                    }/${
                      item.getDate() <= 9
                        ? `0${item.getDate()}`
                        : `${item.getDate()}`
                    }/${item.getFullYear()}`}
                    nameVal={item.toLocaleString("en", { weekday: "long" })}
                    index={index}
                    selectedDate={takeTheDate}
                  ></DayRadioButton>
                </li>
              );
            }
          })}
        </ul>
        <ul>
          Sat
          {weekday[5].map((item, index) => {
            if (item == "empty") {
              return (
                <li className="calender-day empty-li" key={index}>
                  0
                </li>
              );
            } else {
              return (
                <li key={index} className="calender-day">
                  <DayRadioButton
                    dayNum={item.getDate()}
                    dateValue={`${
                      item.getMonth() + 1 <= 9
                        ? `0${item.getMonth() + 1}`
                        : `${item.getMonth()}`
                    }/${
                      item.getDate() <= 9
                        ? `0${item.getDate()}`
                        : `${item.getDate()}`
                    }/${item.getFullYear()}`}
                    nameVal={item.toLocaleString("en", { weekday: "long" })}
                    index={index}
                    selectedDate={takeTheDate}
                  ></DayRadioButton>
                </li>
              );
            }
          })}
        </ul>
        <ul>
          Sun
          {weekday[6].map((item, index) => {
            if (item == "empty") {
              return (
                <li className="calender-day empty-li" key={index}>
                  0
                </li>
              );
            } else {
              return (
                <li key={index} className="calender-day">
                  <DayRadioButton
                    dayNum={item.getDate()}
                    dateValue={`${
                      item.getMonth() + 1 <= 9
                        ? `0${item.getMonth() + 1}`
                        : `${item.getMonth()}`
                    }/${
                      item.getDate() <= 9
                        ? `0${item.getDate()}`
                        : `${item.getDate()}`
                    }/${item.getFullYear()}`}
                    nameVal={item.toLocaleString("en", { weekday: "long" })}
                    index={index}
                    selectedDate={takeTheDate}
                  ></DayRadioButton>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
