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

const Timer = props => {
  console.log(props.big);
  //const { data, loading, error } = useQuery(GET_TIME);
  const { data, loading } = useQuery(GET_TIME, {
    pollInterval: 500
  });
  console.log(data);
  return (
    <div style={props.big ? { fontSize: "20rem" } : { fontSize: "5rem" }}>
      {loading
        ? "loading..."
        : min(data.State.time) + ":" + sec(data.State.time)}
    </div>
  );
};

export default Timer;
