import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,  Nav, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Header from './Header/Header';
import Admin from './pages/Admin';
import Routers from './Routers/Routers';

export default function App() {
return (
	<>
  <Header />
  //Nihals Commit
  <Routers />
  
  </>
);
}
