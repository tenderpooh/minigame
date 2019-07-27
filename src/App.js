import React from "react";
import logo from "./logo.svg";
import Counter from "./Counter";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>자, 미니게임을 시작해봅시다!!</p>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          {alert}
        </header>
      </div>
    </>
  );
}

export default App;
