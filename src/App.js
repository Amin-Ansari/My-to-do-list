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
          <CatagoryForm>
            <SelectAndOption></SelectAndOption>
          </CatagoryForm>
          <AddButton></AddButton>
        </Header>
      </AppContainer>
    </div>
  );
}

export default App;
