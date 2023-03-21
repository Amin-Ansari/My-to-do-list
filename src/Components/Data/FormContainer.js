import "./FormContainer.css";
import Form from "../UI/Form";
import SelectAndOption from "./SelectAndOptions";
import NameInput from "./NameInput";
import "./InputStyles.css";

const FormContainer = () => {
  return (
    <div className="form-container">
      <Form className="form-style">
        <NameInput></NameInput>
        <div className="input-wrapper">
          <label className="label-style">
            Category
            <SelectAndOption></SelectAndOption>
          </label>
        </div>
      </Form>
    </div>
  );
};

export default FormContainer;
