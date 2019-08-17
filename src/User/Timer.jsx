import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_TIME = gql`
  query State {
    State {
      time
    }
  }
`;

const min = time => {
  let number = Math.floor(time / 60);
  if (number < 10) {
    return "0" + number;
  } else return number;
};
const sec = time => {
  let number = Math.floor(time % 60);
  if (number < 10) {
    return "0" + number;
  } else return number;
};

const Timer = () => {
  //const { data, loading, error } = useQuery(GET_TIME);
  const { data, loading, error } = useQuery(GET_TIME, {
    pollInterval: 500
  });
  console.log(data);
  return (
    <h4>
      {loading
        ? "loading..."
        : min(data.State.time) + ":" + sec(data.State.time)}
    </h4>
  );
};

export default Timer;
