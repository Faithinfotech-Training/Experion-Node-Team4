import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Routers from "./Routers/Routers";
import Tab from "./pages/Manager/Table/TableAxios";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <>
      <Routers />
      <Footer/>
      {/* <Tab /> */}
      {/* <LoginForm/> */}
    </>
  );
}
