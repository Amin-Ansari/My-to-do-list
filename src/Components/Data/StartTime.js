import "./InputStyles.css";

const StartTime = (props) => {
  const timeList = [];
  for (let i = 0; i <= 23; i++) {
    if (i <= 9) {
      timeList.push(`0${i}:00`);
      timeList.push(`0${i}:30`);
    } else {
      timeList.push(`${i}:00`);
      timeList.push(`${i}:30`);
    }
  }
  const liftUpTheTime = function (event) {
    props.onTakingTheTime(event.target.innerHTML, "START", event.target.value);
  };
  return (
    <div className="input-wrapper">
      <label className="label-style">
        Start time
        <select className="select-item" value={props.value}>
          {timeList.map((item, index) => (
            <option value={index} key={index} onClick={liftUpTheTime}>
              {item}
            </option>
          ))}
        </select>
        <p
          className="invalid-time"
          style={{ height: `${props.isValid ? "0px" : "30px"}` }}
        >
          Invalid time
        </p>
      </label>
    </div>
  );
};
export default StartTime;
