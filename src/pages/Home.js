
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,  Nav, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import './Header.css';



function Home(){
    return(
<>
<div className="navbarnfkt">
	<div className="headerTitle"><div className="headerContent">Home Page</div></div>
	<Navbar bg="primary" expand="lg" >
  <Container>
    <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home/register">SignUp</Nav.Link>
        <Nav.Link href="/home/login">Login</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
	</div>
    
</>    )
}

export default Home