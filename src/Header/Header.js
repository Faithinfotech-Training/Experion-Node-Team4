import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

  let [user, setUser] = useState(false);
  let [admin, setAdmin] = useState(false);
  let [manager, setManager] = useState(false);

  const Admin = ()=>{
    if(localStorage.getItem('role') === 'Admin'){
      setAdmin(true);
    }
  }

  const Manager = ()=>{
    if(localStorage.getItem('role') === 'Manager'){
      setManager(true);
    }
  }
  useEffect(()=>{
    Admin();
    Manager();
  })

  const User = () => {
    let role = localStorage.getItem('role');
    let username = localStorage.getItem('username');
    if (localStorage.getItem('mytoken') && role === "Admin") {
      return role;
    } else if (localStorage.getItem('mytoken') && role === "User") {
      return username;
    }
    else {
      return "CRM App";
    }
  }


  return (
    <div className="navbarnfkt">
      <div className="headerTitle"><div className="headerContent">CRM System</div></div>
      <Navbar bg="primary" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">{User()}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!admin && <Nav.Link><Link to="/home" className="navItem">Home</Link></Nav.Link>}
              {localStorage.getItem('mytoken') && <Link className="navItem" onClick={() => window.location = 'home/login'} to="home/login">Logout</Link>}
              {!localStorage.getItem('mytoken') && <Link className="navItem" to="/home/login">Login</Link>}
              {!localStorage.getItem('mytoken') && <Link className="navItem" to="/home/register">Register</Link>}
              {admin && <Link className="navItem" to="/admin/register-manager">Add Manager</Link>}

              {!admin && <NavDropdown title="Enquiry" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to="/home/course-enquiry">Course Enquiry</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/home/resource-enquiry">Resource Enquiry</Link></NavDropdown.Item>
              </NavDropdown>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;