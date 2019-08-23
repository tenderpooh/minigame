import React from "react";
import { Container } from "reactstrap";
import Timer from "../User/Timer.jsx";
import Leaderboard from "../User/Leaderboard.jsx";

const Display = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Timer big />
        <Leaderboard />
      </div>
    </Container>
  );
};

export default Display;
