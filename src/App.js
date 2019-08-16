import React from "react";
import Login from "./Login/Login.jsx";
import User from "./User/User.jsx";
import Dealer from "./Dealer.jsx";
import "./App.css";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "http://localhost:4040/"
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  uri: "http://localhost:4040/"
});

const App = () => {
  if (localStorage.getItem("token") !== null) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" component={User} />
          <Route path="/user/" component={User} />
        </Router>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/timer" component={Timer} />
          <Route path="/dealer" component={Dealer} />
        </Router>
      </ApolloProvider>
    );
  }
};

const Admin = () => {
  return <h1>Admin</h1>;
};

const Timer = () => {
  return <h1>Timer</h1>;
};
export default App;
