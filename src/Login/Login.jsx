import React, { useState } from "react";
import { Input, Button, Container, Row } from "reactstrap";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LOGIN = gql`
  mutation LOGIN($name: String!, $pw: String!) {
    login(name: $name, pw: $pw) {
      token
      user {
        barcode
      }
    }
  }
`;

const Login = () => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [
    login,
    { loading: mutationLoading, error: mutationError, data }
  ] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem("token", login.token);
      window.location.href = "/user/";
    }
  });
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Row
          className="text-center border border-info align-items-center justify-content-center h-50"
          style={{
            width: "80%"
          }}
        >
          <p>로고</p>
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
          color="info"
          size="lg"
          block
          style={{ width: "80%" }}
          onClick={e => {
            e.preventDefault();
            login({ variables: { name: ID, pw: PW } });
          }}
        >
          로그인
        </Button>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error :( Please try again</p>}
      </div>
    </Container>
  );
};

export default Login;
