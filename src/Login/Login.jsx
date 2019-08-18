import React, { useState } from "react";
import { Input, Button, Container } from "reactstrap";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import logo from "./logo.jpeg";

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
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem("token", login.token);
      window.location.href = "/user/";
    }
  });
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <img
          src={logo}
          alt="미니게임천국"
          className="text-center align-items-center justify-content-center img-fluid"
          style={{
            width: "80%",
            height: "auto"
          }}
        />
        <Input
          className="mb-1"
          onChange={e => setID(e.target.value)}
          value={ID}
          placeholder="닉네임"
          style={{ width: "80%" }}
        />
        <Input
          className="mb-1"
          onChange={e => setPW(e.target.value)}
          value={PW}
          placeholder="비밀번호"
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
