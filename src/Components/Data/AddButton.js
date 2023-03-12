import "./AddButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AddButton = () => {
  return (
    <button type="button" className="add-button-style">
      <FontAwesomeIcon icon="fa-solid fa-plus" />
    </button>
  );
};

export default AddButton;
