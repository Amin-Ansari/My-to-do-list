import "./DayPicker.css";
import DayRadioButton from "./DayRadioButton";

export default function DayPicker(props) {
  const monList = [];
  const tuesList = [];
  const wedList = [];
  const thuList = [];
  const friList = [];
  const satList = [];
  const sunList = [];

  const allDays = props.daysList;
  for (let i = 1; i <= allDays.length; i++) {
    const d = allDays[i - 1].toLocaleString("en", { weekday: "long" });
    d == "Monday" && monList.push(allDays[i - 1]);
    d == "Tuesday" && tuesList.push(allDays[i - 1]);
    d == "Wednesday" && wedList.push(allDays[i - 1]);
    d == "Thursday" && thuList.push(allDays[i - 1]);
    d == "Friday" && friList.push(allDays[i - 1]);
    d == "Saturday" && satList.push(allDays[i - 1]);
    d == "Sunday" && sunList.push(allDays[i - 1]);
  }
  return (
    <div className="day-container">
      <div className="day-name">
        <ul>
          Mon
          {monList.map((item, index) => {
            return (
              <li key={index} className="calender-day">
                <DayRadioButton
                  dayNum={item.getDate()}
                  dateValue={`${
                    item.getMonth() + 1
                  }/${item.getDate()}/${item.getFullYear()}`}
                  nameVal={item.toLocaleString("en", { weekday: "long" })}
                  index={index}
                ></DayRadioButton>
              </li>
            );
          })}
        </ul>
        <ul>
          Tue
          {tuesList.map((item, index) => {
            return (
              <li key={index} className="calender-day">
                <DayRadioButton
                  dayNum={item.getDate()}
                  dateValue={`${
                    item.getMonth() + 1
                  }/${item.getDate()}/${item.getFullYear()}`}
                  nameVal={item.toLocaleString("en", { weekday: "long" })}
                  index={index}
                ></DayRadioButton>
              </li>
            );
          })}
        </ul>
        <ul>
          Wed
          {wedList.map((item, index) => {
            return (
              <li key={index} className="calender-day">
                <DayRadioButton
                  dayNum={item.getDate()}
                  dateValue={`${
                    item.getMonth() + 1
                  }/${item.getDate()}/${item.getFullYear()}`}
                  nameVal={item.toLocaleString("en", { weekday: "long" })}
                  index={index}
                ></DayRadioButton>
              </li>
            );
          })}
        </ul>
        <ul>
          Thu
          {thuList.map((item, index) => {
            return (
              <li key={index} className="calender-day">
                <DayRadioButton
                  dayNum={item.getDate()}
                  dateValue={`${
                    item.getMonth() + 1
                  }/${item.getDate()}/${item.getFullYear()}`}
                  nameVal={item.toLocaleString("en", { weekday: "long" })}
                  index={index}
                ></DayRadioButton>
              </li>
            );
          })}
        </ul>
        <ul>
          Fri
          {friList.map((item, index) => {
            return (
              <li key={index} className="calender-day">
                <DayRadioButton
                  dayNum={item.getDate()}
                  dateValue={`${
                    item.getMonth() + 1
                  }/${item.getDate()}/${item.getFullYear()}`}
                  nameVal={item.toLocaleString("en", { weekday: "long" })}
                  index={index}
                ></DayRadioButton>
              </li>
            );
          })}
        </ul>
        <ul>
          Sat
          {satList.map((item, index) => {
            return (
              <li key={index} className="calender-day">
                <DayRadioButton
                  dayNum={item.getDate()}
                  dateValue={`${
                    item.getMonth() + 1
                  }/${item.getDate()}/${item.getFullYear()}`}
                  nameVal={item.toLocaleString("en", { weekday: "long" })}
                  index={index}
                ></DayRadioButton>
              </li>
            );
          })}
        </ul>
        <ul>
          Sun
          {sunList.map((item, index) => {
            return (
              <li key={index} className="calender-day">
                <DayRadioButton
                  dayNum={item.getDate()}
                  dateValue={`${
                    item.getMonth() + 1
                  }/${item.getDate()}/${item.getFullYear()}`}
                  nameVal={item.toLocaleString("en", { weekday: "long" })}
                  index={index}
                ></DayRadioButton>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
