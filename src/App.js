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
import DateInput from "./Components/Data/DateInput";
import SwitchButton from "./Components/Data/SwitchButton";

function App() {
  const [appMarginState, updateMarginState] = useState(false);
  const [topicState, updateTopicState] = useState(false);
  const isVisibil = (givenStateValue) => {
    updateMarginState(givenStateValue);
  };
  function topicIsChoosen(givenValue) {
    updateTopicState(givenValue);
  }
  const [categoryState, updateCategoryState] = useState(0);
  const takeTheCategoryIndex = (givenIndex) => {
    updateCategoryState(givenIndex);
  };

  const todayDate = new Date();
  let day, month, year;
  day =
    todayDate.getDate() >= 10
      ? `${todayDate.getDate()}`
      : `0${todayDate.getDate()}`;
  month =
    todayDate.getMonth() + 1 >= 10
      ? `${todayDate.getMonth() + 1}`
      : `0${todayDate.getMonth() + 1}`;
  year = todayDate.getFullYear();

  const [pickedDate, updatePickedDate] = useState(`${month}/${day}/${year}`);

  const [isSwitchToDate, updateSwitchToDate] = useState(false);
  const toggleTheState = () => {
    isSwitchToDate ? updateSwitchToDate(false) : updateSwitchToDate(true);
  };
  return (
    <div className="App">
      <AppContainer animationState={topicState} onClose={appMarginState}>
        <Header>
          <OptionList
            onToggleing={toggleTheState}
            toDateOrCategory={isSwitchToDate}
          >
            <OffCanvas
              onOffCanvasVisibility={isVisibil}
              onToggleing={toggleTheState}
              toDateOrCategory={isSwitchToDate}
            ></OffCanvas>
          </OptionList>
          <CatagoryForm>
            <SelectAndOption
              categoryList={["All", "Work", "Study", "Cleaning up"]}
              onTakingCategory={takeTheCategoryIndex}
              extraClasses={`${isSwitchToDate ? "hide-input" : "show-input"}`}
            ></SelectAndOption>
            <DateInput
              value={pickedDate}
              extraClasses={`${!isSwitchToDate ? "hide-input" : "show-input"}`}
              labelStyle={false}
            ></DateInput>
          </CatagoryForm>
          <AddButton onTopicClick={topicIsChoosen}></AddButton>
        </Header>
        <TaskSection>
          <CurrentTaskTitle />
          <TaskTimer>
            <TitleAndTime></TitleAndTime>
            <Clock></Clock>
          </TaskTimer>
          <ToDoList listIndex={categoryState}></ToDoList>
        </TaskSection>
      </AppContainer>
      {ReactDOM.createPortal(
        <AddSection
          showHideState={topicState}
          onTakingTheVisibility={topicIsChoosen}
        />,
        document.querySelector("#where-adding-form-goes-to")
      )}
    </div>
  );
}

export default App;
