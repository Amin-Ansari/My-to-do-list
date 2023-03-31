import "./ColorPickerInput.css";
const ColorPickerInput = (props) => {
  const passTheColor = (event) => {
    props.onPickingColor(event.value);
  };
  const colorList = [
    "CEEDC7",
    "FF9494",
    "FFD4B2",
    "FFF6BD",
    "D7E3FC",
    "FFC8DD",
  ];
  return (
    <div className="color-picker-wrapper">
      Color
      <div className="colors">
        {colorList.map((item, index) => {
          return (
            <label className="label-outline" key={index}>
              <input
                type="radio"
                value={item}
                name="color-radio-btn"
                id={`color-${index}`}
                onClick={passTheColor}
              ></input>
              <span className="select-outline"></span>
            </label>
          );
        })}
        <label className="label-outline reset-color">
          <input
            type="radio"
            value={0}
            name="color-radio-btn"
            id={`color-${colorList.length + 1}`}
            onClick={passTheColor}
            checked={props.isReseted ? true : false}
          ></input>
          <span className="select-outline"></span>
        </label>
      </div>
    </div>
  );
};
export default ColorPickerInput;
