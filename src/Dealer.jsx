import React, { useState } from "react";
import { Input, Button, Container } from "reactstrap";
import { gql } from "apollo-boost";
import { useApolloClient, useMutation } from "@apollo/react-hooks";

const Dealer = () => {
  const [barcode, setBarcode] = useState("");
  const [score, setScore] = useState("");
  const [comm, setComm] = useState("");
  const [name, setName] = useState("");
  const [oldScore, setOldScore] = useState("");
  const client = useApolloClient();
  const GET_USERINFO = gql`
    query User($barcode: Int!) {
      User(barcode: $barcode) {
        comm
        name
        score
      }
    }
  `;
  const fetchData = async () => {
    const { data } = await client.query({
      query: GET_USERINFO,
      variables: { barcode: Number(barcode) }
    });
    if (data.User !== null) {
      setComm(data.User.comm);
      setName(data.User.name);
      setOldScore(data.User.score);
    } else {
      setBarcode("");
      setComm("");
      setName("없는 유저");
      setOldScore("");
      let barcodeInput = document.getElementById("barcodeInput");
      barcodeInput.focus();
    }
  };
  const GET_SCORE = gql`
    mutation GET_SCORE($barcode: Int!, $score: Int!) {
      getScore(barcode: $barcode, score: $score) {
        name
        comm
        score
      }
    }
  `;
  const [getScore] = useMutation(GET_SCORE, {
    onCompleted() {
      setBarcode("");
      setScore("");
      let barcodeInput = document.getElementById("barcodeInput");
      barcodeInput.focus();
    },
    variables: {
      barcode: Number(barcode),
      score: Number(score)
    },
    refetchQueries: [
      { query: GET_USERINFO, variables: { barcode: Number(barcode) } }
    ],
    awaitRefetchQueries: true
  });

  if (barcode.length === 4) {
    let scoreInput = document.getElementById("scoreInput");
    scoreInput.focus();
    fetchData();
  }
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Input
          id="barcodeInput"
          onChange={e => setBarcode(e.target.value)}
          value={barcode}
          placeholder="유저 코드"
          style={{ width: "80%" }}
        />
        <table className="table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <td>커뮤니티</td>
              <td>{comm}</td>
            </tr>
            <tr>
              <td>이름</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>점수</td>
              <td>{oldScore}</td>
            </tr>
          </thead>
        </table>
        <Input
          id="scoreInput"
          onChange={e => setScore(e.target.value)}
          value={score}
          placeholder="점수"
          style={{ width: "80%" }}
        />
        <Button
          onClick={e => {
            e.preventDefault();
            getScore();
          }}
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
