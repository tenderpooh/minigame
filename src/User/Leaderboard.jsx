import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Leaderboard = () => {
  const GET_RANK = gql`
    query Users {
      Users {
        id
        comm
        name
        score
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_RANK);
  console.log(data.Users);
  const userList = data.Users;
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">등수</th>
          <th scope="col">커뮤니티</th>
          <th scope="col">이름</th>
          <th scope="col">점수</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((data, index) => {
          return (
            <tr key={data.id}>
              <td scope="row">{index + 1}</td>
              <td>{data.comm}</td>
              <td>{data.name}</td>
              <td>{data.score}</td>
            </tr>
          );
        })}
        <tr>
          <th colSpan="4">...</th>
        </tr>
        <tr>
          <th scope="row">170</th>
          <td>우리팀</td>
          <td>나</td>
          <td>79</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Leaderboard;
