import React, { useState } from "react";
import Header from "../Header";
import { Container } from "reactstrap";
import { userDB } from "./UserDB";

const User = () => {
  return (
    <Container>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 style={{ fontSize: "10rem" }}>00:00</h1>
        <h1>현재 나의 점수는 {userDB[1].점수}점</h1>
      </div>
    </Container>
  );
};

export default User;
