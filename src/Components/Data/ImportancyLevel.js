import "./InputStyles.css";

const ImportancyLevel = (props) => {
  const liftUpTheValue = (event) => {
    props.onTakingImportancy(event.target.value);
  };
  return (
    <div className="input-wrapper">
      <label className="label-style">
        Importancy level
        <select className="select-item" value={props.value}>
          <option onClick={liftUpTheValue} value={0}>
            Low
          </option>
          <option onClick={liftUpTheValue} value={1}>
            Regular
          </option>
          <option onClick={liftUpTheValue} value={2}>
            Important
          </option>
          <option onClick={liftUpTheValue} value={3}>
            Very important
          </option>
        </select>
      </label>
    </div>
  );
};
export default ImportancyLevel;
