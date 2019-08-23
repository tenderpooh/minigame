import React from "react";
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
      AllUsers {
        barcode
      }
      MyInfo {
        barcode
        name
        comm
        score
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_RANK, {
    pollInterval: 5000
  });

  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;
  const userList = data.Users;
  const allUserList = data.AllUsers;
  const MyInfo = data.MyInfo;
  let myRank = 0;
  if (data.MyInfo.name !== "관리자") {
    myRank = allUserList.findIndex(element => {
      return Number(element.barcode) === Number(data.MyInfo.barcode);
    });
  } else {
    myRank = 0;
  }
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
              <td
                className={MyInfo.name === data.name ? "font-weight-bold" : ""}
              >
                {index + 1}
              </td>
              <td
                className={MyInfo.name === data.name ? "font-weight-bold" : ""}
              >
                {data.comm}
              </td>
              <td
                className={MyInfo.name === data.name ? "font-weight-bold" : ""}
              >
                {data.name}
              </td>
              <td
                className={MyInfo.name === data.name ? "font-weight-bold" : ""}
              >
                {data.score}
              </td>
            </tr>
          );
        })}
      </tbody>
      {myRank < 10 ? (
        ""
      ) : (
        <tfoot>
          <tr>
            <th colSpan="4" style={{ textAlign: "center" }}>
              ...
            </th>
          </tr>
          <tr>
            <th className="font-weight-bold" scope="row">
              {myRank + 1}
            </th>
            <td className="font-weight-bold">{data.MyInfo.comm}</td>
            <td className="font-weight-bold">나</td>
            <td className="font-weight-bold">{data.MyInfo.score}</td>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default Leaderboard;
