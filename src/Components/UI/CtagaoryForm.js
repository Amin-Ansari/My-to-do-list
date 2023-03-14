import "./CatagoryForm.css";
const CatagoryForm = () => {
  return (
    <form className="category-form">
      <select>
        <option value={0}>All</option>
        <option value={1}>Work</option>
        <option value={2}>Study</option>
        <option value={3}>Cleaning up</option>
      </select>
    </form>
  );
};

export default CatagoryForm;
