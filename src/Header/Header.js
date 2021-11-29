import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

  let [user, setUser] = useState(false);
  let [admin, setAdmin] = useState(false);


  return (
    <div className="navbarnfkt">
      <div className="headerTitle"><div className="headerContent">CRM System</div></div>
      <Navbar bg="primary" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">{localStorage.getItem('mytoken') ? localStorage.getItem('username') : 'CRM System'}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link ><Link to="/home/login">Login</Link></Nav.Link>
              <Nav.Link ><Link to="/home/register">Register</Link></Nav.Link>
              <NavDropdown title="Enquiry" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to="/home/course-enquiry">Course Enquiry</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/home/resource-enquiry">Resource Enquiry</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;