import React, { useState } from "react";
import { Input, Button, ButtonGroup, Container } from "reactstrap";
import Timer from "../User/Timer.jsx";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const Admin = () => {
  const START_TIME = gql`
    mutation START_TIME {
      startTime {
        time
      }
    }
  `;
  const ADD_TIME = gql`
    mutation ADD_TIME($time: Int!) {
      addTime(time: $time) {
        time
      }
    }
  `;
  const [startTime] = useMutation(START_TIME);
  const [addTime] = useMutation(ADD_TIME);
  const [adminCode, setAdminCode] = useState("");
  if (adminCode !== "vistavie") {
    return (
      <Container>
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
          <Input
            className="mb-1"
            onChange={e => setAdminCode(e.target.value)}
            value={adminCode}
            placeholder="비밀번호"
            style={{ width: "80%" }}
            type="password"
          />
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
          <Timer />
          <Button
            className="mb-1"
            color="info"
            style={{ width: "80%" }}
            onClick={e => {
              e.preventDefault();
              startTime();
            }}
          >
            시간 시작 / 정지
          </Button>
          <ButtonGroup className="mb-1" style={{ width: "80%" }}>
            <Button
              color="info"
              onClick={e => {
                e.preventDefault();
                addTime({ variables: { time: 600 } });
              }}
            >
              +10m
            </Button>
            <Button
              color="info"
              onClick={e => {
                e.preventDefault();
                addTime({ variables: { time: 60 } });
              }}
            >
              +1m
            </Button>
            <Button
              color="info"
              onClick={e => {
                e.preventDefault();
                addTime({ variables: { time: -60 } });
              }}
            >
              -1m
            </Button>
            <Button
              color="info"
              onClick={e => {
                e.preventDefault();
                addTime({ variables: { time: -600 } });
              }}
            >
              -10m
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    );
  }
};

export default Admin;
