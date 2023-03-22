import classes from "./AppContainer.module.css";

const AppContainer = (props) => {
  return (
    <div
      className={`${classes["app-container-style"]} ${
        props.animationState ? classes["move-toSide-animation"] : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default AppContainer;
