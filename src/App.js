import "./App.css";
import AppContainer from "./Components/UI/AppContainer";
import Header from "./Components/UI/Header";
import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <React.Fragment>
      <AppContainer>
        <Header>
          <div className="option-list-style">
            <div className="off-canvas">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="switch-button">Swtich to date</div>
          </div>
          <div id="where-category-goes-to">
            dddddddddddddddddddddddddddddddddddd
          </div>
          <button type="button" className="add-button-style">
            <i className="fa-regular fa-square-plus"></i>
          </button>
        </Header>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
