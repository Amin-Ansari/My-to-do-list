import "./App.css";
import AppContainer from "./Components/UI/AppContainer";
import Header from "./Components/UI/Header";
import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import OptionList from "./Components/UI/OptionList";
import OffCanvas from "./Components/Data/OffCanvas";
import AddButton from "./Components/Data/AddButton";
import { useState } from "react";

function App() {
  const [appMarginState, updateMarginState] = useState(false);
  const isVisibil = (givenStateValue) => {
    updateMarginState(givenStateValue);
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
          <form className="category-form">
            <select>
              <option value={0}>All</option>
              <option value={1}>Work</option>
              <option value={2}>Study</option>
              <option value={3}>Cleaning up</option>
            </select>
          </form>
          <AddButton></AddButton>
        </Header>
      </AppContainer>
    </div>
  );
}

export default App;
