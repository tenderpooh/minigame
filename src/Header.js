import React from "react";
import { Alert } from "reactstrap";
import "./App.css";

const Header = ({ props }) => {
  return (
    <>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
    </>
  );
};

export default Header;
