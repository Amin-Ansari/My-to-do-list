import "./SelectAndOptions.css";
const SelectAndOption = (props) => {
  const passTheCategory = (event) => {
    props.onTakingCategory(event.target.value);
  };
  return (
    <select
      className={`select-item ${props.extraClasses ? props.extraClasses : ""}`}
      value={props.value}
    >
      {props.categoryList.map((item, index) => (
        <option key={index} value={index} onClick={passTheCategory}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectAndOption;
