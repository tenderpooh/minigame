import React from "react";
import Header from "../Header";
import Timer from "./Timer";
import { Container } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
const User = () => {
  const GET_USERINFO = gql`
    query MyInfo {
      MyInfo {
        comm
        name
        score
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_USERINFO, {
    pollInterval: 500
  });
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;
  return (
    <Container>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Timer />
        <h4>내 커뮤니티는 {data.MyInfo.comm}</h4>
        <h4>내 이름은 {data.MyInfo.name}</h4>
        <h4>현재 나의 점수는 {data.MyInfo.score}점</h4>
      </div>
    </Container>
  );
};

export default User;
