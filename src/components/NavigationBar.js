import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import pinkComputer from '../assets/pink-computer-transparent.png';

function NavigationBar() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={pinkComputer} style={{ width: '75px', height: '75px', objectFit: 'cover', marginRight: '10px' }} alt='Cute pink computer' />
          Charli Harrold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;