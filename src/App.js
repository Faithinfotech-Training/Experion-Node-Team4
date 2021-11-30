import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Routers from "./Routers/Routers";


import Chart from "./pages/Manager/Chart/Chart";
import Tables from "./pages/Manager/Table/Table";
import Tabel from "./pages/Manager/Table/TableAxios";
import Products from "./pages/Manager/Table/TableApi";

export default function App() {
  return (
    <>
      <Routers />
      <Chart />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Tables />
      <Products />
      {/* <Tabel/> */}

      {/* <LoginForm/> */}
    </>
  );
}
