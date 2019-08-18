import React from "react";
import Login from "./Login/Login.jsx";
import User from "./User/User.jsx";
import Dealer from "./Dealer.jsx";
import Admin from "./Admin/Admin.jsx";
import Signup from "./Admin/SignUp.jsx";
import "./App.css";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const httpLink = createHttpLink({
  uri: "http://54.180.175.127:4040/"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const wsLink = new WebSocketLink({
  uri: `ws://54.180.175.127:4040/`,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
  uri: "http://54.180.175.127:4040/"
});

const App = () => {
  if (localStorage.getItem("token") !== null) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={User} />
          <Route exact path="/user/" component={User} />
        </Router>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/dealer" component={Dealer} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={Login} />
        </Router>
      </ApolloProvider>
    );
  }
};

const Timer = () => {
  return <h1>Timer</h1>;
};
export default App;
