import "./AddSection.css";
import FormContainer from "../Data/FormContainer";
const AddSection = (props) => {
  return (
    <div
      className={`add-section ${props.showHideState ? "show-animation" : ""}`}
    >
      <FormContainer></FormContainer>
    </div>
  );
};

export default AddSection;
