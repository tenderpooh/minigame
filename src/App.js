import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="http://www.vistavielab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            비따비 홈페이지로
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
