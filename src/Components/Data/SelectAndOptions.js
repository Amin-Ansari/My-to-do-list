import "./SelectAndOptions.css";
const SelectAndOption = (props) => {
  return (
    <select className="select-item">
      {props.categoryList.map((item, index) => (
        <option key={index} value={index}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectAndOption;
