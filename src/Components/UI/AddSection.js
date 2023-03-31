import "./AddSection.css";
import FormContainer from "../Data/FormContainer";
const AddSection = (props) => {
  const takeVisibilityFromForm = (givenData) => {
    props.onTakingTheVisibility(givenData);
  };
  return (
    <div
      className={`add-section ${props.showHideState ? "show-animation" : ""}`}
    >
      <FormContainer onLiftingUp={takeVisibilityFromForm}></FormContainer>
    </div>
  );
};

export default AddSection;
