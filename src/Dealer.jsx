import React, { useState } from "react";
import { Input, Button, Container, Row } from "reactstrap";
import InputNumber from "react-input-just-numbers";

const Dealer = () => {
  const [Code, setCode] = useState("");
  const [Score, setScore] = useState("");
  let playerName = "";
  if (Code === "1111") {
    playerName = "김소년";
  } else {
    playerName = "빠울루";
  }
  if (Code.length === 4) {
    let scoreInput = document.getElementById("scoreInput");
    scoreInput.focus();
  }
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Input
          onChange={e => setCode(e.target.value)}
          value={Code}
          placeholder="유저코드"
          style={{ width: "80%" }}
        />
        <div>사용자 이름 : {playerName}</div>
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
