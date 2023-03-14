import "./App.css";
import AppContainer from "./Components/UI/AppContainer";
import Header from "./Components/UI/Header";
import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import OptionList from "./Components/UI/OptionList";
import OffCanvas from "./Components/Data/OffCanvas";
import AddButton from "./Components/Data/AddButton";
import { useState } from "react";
import CatagoryForm from "./Components/UI/CtagaoryForm";
import SelectAndOption from "./Components/Data/SelectAndOptions";
import TaskSection from "./Components/UI/TaskSection";
import CurrentTaskTitle from "./Components/Data/CurrentTaskTitle";
import TaskTimer from "./Components/Data/TaskTimer";

function App() {
  const [appMarginState, updateMarginState] = useState(false);
  const isVisibil = (givenStateValue) => {
    updateMarginState(givenStateValue);
    console.log(appMarginState);
  };
  return (
    <div
      className="App"
      style={{ margin: `${appMarginState ? "20px" : "0px"}` }}
    >
      <AppContainer>
        <Header>
          <OptionList>
            <OffCanvas onOffCanvasVisibility={isVisibil}></OffCanvas>
          </OptionList>
          <CatagoryForm>
            <SelectAndOption></SelectAndOption>
          </CatagoryForm>
          <AddButton></AddButton>
        </Header>
        <TaskSection>
          <CurrentTaskTitle />
          <TaskTimer></TaskTimer>
        </TaskSection>
      </AppContainer>
    </div>
  );
}

export default App;
