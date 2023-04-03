const SwitchButton = (props) => {
  function toggleing() {
    props.onToggleing();
  }
  return (
    <div className={props.className} onClick={toggleing}>
      Swtich to {`${props.toDateOrCategory ? "Category" : "Date"}`}
    </div>
  );
};

export default SwitchButton;
