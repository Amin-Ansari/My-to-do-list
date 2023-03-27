import "./ColorPickerInput.css";
const ColorPickerInput = (props) => {
  return (
    <div className="color-picker-wrapper">
      Color
      <div className="colors">
        <label className="label-outline">
          <input
            type="radio"
            value={"CEEDC7"}
            name="color-radio-btn"
            id="green"
          ></input>
          <span className="select-outline"></span>
        </label>
        <label className="label-outline">
          <input
            type="radio"
            value={"FF9494"}
            name="color-radio-btn"
            id="red"
          ></input>
          <span className="select-outline"></span>
        </label>
        <label className="label-outline">
          <input
            type="radio"
            value={"FFD4B2"}
            name="color-radio-btn"
            id="orange"
          ></input>
          <span className="select-outline"></span>
        </label>
        <label className="label-outline">
          <input
            type="radio"
            value={"FFF6BD"}
            name="color-radio-btn"
            id="yellow"
          ></input>
          <span className="select-outline"></span>
        </label>
        <label className="label-outline">
          <input
            type="radio"
            value={"D7E3FC"}
            name="color-radio-btn"
            id="blue"
          ></input>
          <span className="select-outline"></span>
        </label>
        <label className="label-outline">
          <input
            type="radio"
            value={"FFC8DD"}
            name="color-radio-btn"
            id="pink"
          ></input>
          <span className="select-outline"></span>
        </label>
      </div>
    </div>
  );
};
export default ColorPickerInput;
