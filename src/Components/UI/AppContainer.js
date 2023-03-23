import classes from "./AppContainer.module.css";

const AppContainer = (props) => {
  return (
    <div
      className={`${classes["app-container-style"]} ${
        props.animationState ? classes["move-toSide-animation"] : ""
      }`}
      style={{
        paddingLeft: `${props.onClose ? "1.2rem" : "0.7rem"}`,
        paddingRight: `${props.onClose ? "1.2rem" : "0.7rem"}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default AppContainer;
