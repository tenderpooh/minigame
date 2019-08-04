import React from "react";
import Login from "./Login/Login.jsx";
import User from "./User/User.jsx";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/user" component={User} />
      <Route path="/admin" component={Admin} />
      <Route path="/timer" component={Timer} />
    </Router>
  );
};

const Admin = () => {
  return <h1>Admin</h1>;
};

const Timer = () => {
  return <h1>Timer</h1>;
};
export default App;
