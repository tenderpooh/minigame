import React, { useState } from "react";
import Header from "../Header";
import array from "./UserDB";
import Leaderboard from "./Leaderboard";
import { Container } from "reactstrap";
import { findname } from "./Function";
const User = ({ match, location }) => {
  const playerID = Number(location.pathname.split("/")[2]);
  const playerName = findname(array, playerID);
  const playerScore = findscore();
  function findscore() {
    for (var i = 0; i < array.length; i++) {
      if (array[i].ID === playerID) {
        return array[i].score;
      }
    }
  }

  return (
    <Container>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>00:00</h1>
        <h4>내 아이디는 {playerID}</h4>
        <h4>내 이름은 {playerName}</h4>
        <h4>현재 나의 점수는 {playerScore}점</h4>
        <Leaderboard />;
      </div>
    </Container>
  );
};

export default User;
