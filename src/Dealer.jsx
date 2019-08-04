import React, { useState } from "react";
import { Input, Button, Container, Row } from "reactstrap";
import array from "./User/UserDB";
import InputNumber from "react-input-just-numbers";

const Dealer = () => {
  const [playerID, setID] = useState("");
  const [Score, setScore] = useState("");
  const playerName = findname();
  const playerComm = findcomm();

  function findname() {
    for (var i = 0; i < array.length; i++) {
      if (array[i].ID === playerID) {
        return array[i].name;
      }
    }
  }
  function findcomm() {
    for (var i = 0; i < array.length; i++) {
      if (array[i].ID === playerID) {
        return array[i].comm;
      }
    }
  }

  if (playerID.length === 4) {
    let scoreInput = document.getElementById("scoreInput");
    scoreInput.focus();
  }
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Input
          onChange={e => setID(e.target.value)}
          value={playerID}
          placeholder="유저ID"
          style={{ width: "80%" }}
        />
        <div>이름 : {playerName}</div>
        <div>커뮤니티 : {playerComm}</div>
        <InputNumber
          id="scoreInput"
          onChange={e => setScore(e.target.value)}
          value={Score}
          placeholder="점수"
          style={{ width: "80%" }}
        />
        <Button
          href="/user"
          color="info"
          size="lg"
          block
          style={{ width: "80%" }}
        >
          입력
        </Button>
      </div>
    </Container>
  );
};

export default Dealer;
