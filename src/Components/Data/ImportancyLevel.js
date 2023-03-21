import "./InputStyles.css";

const ImportancyLevel = (props) => {
  return (
    <div className="input-wrapper">
      <label className="label-style">
        Importancy level
        <select className="select-item">
          <option value={0}>Low</option>
          <option value={1}>Regular</option>
          <option value={2}>Important</option>
          <option value={3}>Very important</option>
        </select>
      </label>
    </div>
  );
};
export default ImportancyLevel;
