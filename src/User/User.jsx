import React, { useState } from "react";
import Header from "../Header";
import { Container } from "reactstrap";

const User = () => {
  return (
    <Container>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 style={{ fontSize: "10rem" }}>00:00</h1>
        <h1>현재 나의 점수는 00점</h1>
      </div>
    </Container>
  );
};

export default User;
