import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,  Nav, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Header.css';


function Header(){

    return(
        <div className="navbarnfkt">
	<div className="headerTitle"><div className="headerContent">CRM System</div></div>
	<Navbar bg="primary" expand="lg" >
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item >Action</NavDropdown.Item>
          <NavDropdown.Item >Another action</NavDropdown.Item>
          <NavDropdown.Item>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
	</div>
    )
}

export default Header;