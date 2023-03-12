import "./App.css";
import AppContainer from "./Components/UI/AppContainer";
import Header from "./Components/UI/Header";
import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import OptionList from "./Components/UI/OptionList";
import OffCanvas from "./Components/Data/OffCanvas";
import AddButton from "./Components/Data/AddButton";
function App() {
  return (
    <div className="App">
      <AppContainer>
        <Header>
          <OptionList>
            <OffCanvas></OffCanvas>
          </OptionList>
          <div id="catagory-select-list"></div>
          <AddButton></AddButton>
        </Header>
      </AppContainer>
    </div>
  );
}

export default App;
