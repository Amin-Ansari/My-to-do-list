import "./SelectAndOptions.css";
const SelectAndOption = () => {
  return (
    <select className="select-item">
      <option value={0}>All</option>
      <option value={1}>Work</option>
      <option value={2}>Study</option>
      <option value={3}>Cleaning up</option>
    </select>
  );
};

export default SelectAndOption;
