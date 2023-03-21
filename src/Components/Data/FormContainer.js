import "./FormContainer.css";
import Form from "../UI/Form";
import SelectAndOption from "./SelectAndOptions";
import NameInput from "./NameInput";
import "./InputStyles.css";
import DateInput from "./DateInput";
import ImportancyLevel from "./ImportancyLevel";
import EndTime from "./EndTime";
import StartTime from "./StartTime";

const FormContainer = () => {
  return (
    <div className="form-container">
      <Form className="form-style">
        <NameInput></NameInput>
        <DateInput></DateInput>
        <div className="input-wrapper">
          <label className="label-style">
            Category
            <SelectAndOption></SelectAndOption>
          </label>
        </div>
        <ImportancyLevel></ImportancyLevel>
        <StartTime></StartTime>
        <EndTime></EndTime>
      </Form>
    </div>
  );
};

export default FormContainer;
