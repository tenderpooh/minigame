import React, { useState } from "react";

const Leaderboard = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">등수</th>
          <th scope="col">커뮤니티</th>
          <th scope="col">이름</th>
          <th scope="col">점수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>비따비</td>
          <td>김소년</td>
          <td>200</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>청년허브</td>
          <td>빠울루</td>
          <td>180</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>NBA</td>
          <td>마이클 조던</td>
          <td>179</td>
        </tr>
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
