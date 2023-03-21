import "./InputStyles.css";

const NameInput = (props) => {
  return (
    <div className="input-wrapper">
      <label className="label-style">
        Name
        <input type="text" className="input-style"></input>
      </label>
    </div>
  );
};

export default NameInput;
