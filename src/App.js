import "./App.css";
import AppContainer from "./Components/UI/AppContainer";
import Header from "./Components/UI/Header";
import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import OptionList from "./Components/UI/OptionList";
import OffCanvas from "./Components/Data/OffCanvas";
import AddButton from "./Components/Data/AddButton";
import { useState } from "react";
import ReactDOM from "react-dom";
import CatagoryForm from "./Components/UI/CtagaoryForm";
import SelectAndOption from "./Components/Data/SelectAndOptions";
import TaskSection from "./Components/UI/TaskSection";
import CurrentTaskTitle from "./Components/Data/CurrentTaskTitle";
import TaskTimer from "./Components/Data/TaskTimer";
import TitleAndTime from "./Components/Data/TitleAndTime";
import Clock from "./Components/Data/Clock";
import ToDoList from "./Components/Data/ToDoList";
import AddSection from "./Components/UI/AddSection";

function App() {
  const [appMarginState, updateMarginState] = useState(false);
  const [topicState, updateTopicState] = useState(false);
  const isVisibil = (givenStateValue) => {
    updateMarginState(givenStateValue);
  };
  function topicIsChoosen(givenValue) {
    updateTopicState(givenValue);
  }
  return (
    <div
      className="App"
      style={{ transform: `scaleX(${appMarginState ? "0.96" : "1"}` }}
    >
      <AppContainer animationState={topicState}>
        <Header>
          <OptionList>
            <OffCanvas onOffCanvasVisibility={isVisibil}></OffCanvas>
          </OptionList>
          <CatagoryForm>
            <SelectAndOption></SelectAndOption>
          </CatagoryForm>
          <AddButton onTopicClick={topicIsChoosen}></AddButton>
        </Header>
        <TaskSection>
          <CurrentTaskTitle />
          <TaskTimer>
            <TitleAndTime></TitleAndTime>
            <Clock></Clock>
          </TaskTimer>
          <ToDoList></ToDoList>
        </TaskSection>
      </AppContainer>
      {ReactDOM.createPortal(
        <AddSection showHideState={topicState} />,
        document.querySelector("#where-adding-form-goes-to")
      )}
    </div>
  );
}

export default App;
