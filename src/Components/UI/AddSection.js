import "./AddSection.css";

const AddSection = (props) => {
  return (
    <div
      className={`add-section ${props.showHideState ? "show-animation" : ""}`}
    >
      Hello world
    </div>
  );
};

export default AddSection;
