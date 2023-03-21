import "./InputStyles.css";

const DateInput = (props) => {
  return (
    <div className="input-wrapper">
      <label className="label-style">
        Date
        <input
          type="text"
          readOnly
          className="input-style"
          value={"02/20/2023"}
        ></input>
      </label>
    </div>
  );
};

export default DateInput;
