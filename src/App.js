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
    <React.Fragment>
      <AppContainer>
        <Header>
          <OptionList>
            <OffCanvas></OffCanvas>
          </OptionList>
          <div id="where-category-goes-to"></div>
          <AddButton></AddButton>
        </Header>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
