import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import pinkComputer from '../assets/pink-computer-transparent.png';

const NavigationBar = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300); // show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <> 
    <Navbar expand="lg">
        <Navbar.Brand>
          <img
            src={pinkComputer}
            style={{ width: '75px', height: '75px', objectFit: 'cover', marginRight: '10px' }}
            alt="Cute pink computer"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='#about'>About Me</Nav.Link>
            <Nav.Link href='#work'>Work Experience</Nav.Link>
            <Nav.Link href='#volunteer'>Volunteering</Nav.Link>
            <Nav.Link href='#scholarships'>Scholarships</Nav.Link>
            <Nav.Link href='#proud'>Things I'm Proud Of</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
     {showTopButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
        >
          ↑ Back to Top
        </button>
      )}
      </>
  );
}

export default NavigationBar;