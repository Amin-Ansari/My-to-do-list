import "./InputStyles.css";

const StartTime = () => {
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
  return (
    <div className="input-wrapper">
      <label className="label-style">
        Start time
        <select className="select-item">
          {timeList.map((item, index) => (
            <option value={index}>{item}</option>
          ))}
        </select>
      </label>
    </div>
  );
};
export default StartTime;
