import React, { useState } from "react";
import { Input, Button, Container, Row } from "reactstrap";

const Dealer = () => {
  const [Code, setCode] = useState("");
  const [Score, setScore] = useState("");
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Input
          onChange={e => setCode(e.target.value)}
          value={Code}
          style={{ width: "80%" }}
        />
        <Input
          onChange={e => setScore(e.target.value)}
          value={Score}
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
