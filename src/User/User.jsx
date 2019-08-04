import React, { useState } from "react";
import Header from "../Header";
import { Container } from "reactstrap";

const User = () => {
  return (
    <Container>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>00:00</h1>
        <h4>현재 나의 점수는 00점</h4>
      </div>
    </Container>
  );
};

export default User;
