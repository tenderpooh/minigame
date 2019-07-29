import React from "react";
import Header from "./Header";
import Gameboard from "./gameboard";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Gameboard />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>자, 미니게임을 시작해봅시다!!</p>
          <p>네 좋습니다!</p>
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
