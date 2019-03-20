import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/About.js";
import "./components/Home.js";
import "./components/Header.js";
import "./components/Footer.js";
import "./components/Nav.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
