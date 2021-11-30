import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Routers from "./Routers/Routers";
import Tab from "./pages/Manager/Table/TableAxios";

export default function App() {
  return (
    <>
      <Routers />
      {/* <Tab /> */}
      {/* <LoginForm/> */}
    </>
  );
}
