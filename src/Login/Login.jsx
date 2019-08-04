import React, { useState } from "react";
import { Input, Button, Container, Row } from "reactstrap";

const Login = () => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Row
          className="text-center border border-info align-items-center justify-content-center h-50"
          style={{
            width: "80%"
          }}
        >
          로고
        </Row>
        <Input
          onChange={e => setID(e.target.value)}
          value={ID}
          placeholder="username"
          style={{ width: "80%" }}
        />
        <Input
          onChange={e => setPW(e.target.value)}
          value={PW}
          placeholder="password"
          style={{ width: "80%" }}
          type="password"
        />
        <Button
          href="/user"
          color="info"
          size="lg"
          block
          style={{ width: "80%" }}
        >
          로그인
        </Button>
      </div>
    </Container>
  );
};

export default Login;
