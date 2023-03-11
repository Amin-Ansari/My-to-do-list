import classes from "./AppContainer.module.css";

const AppContainer = (props) => {
  return <div className={classes["app-container-style"]}>{props.children}</div>;
};

export default AppContainer;
