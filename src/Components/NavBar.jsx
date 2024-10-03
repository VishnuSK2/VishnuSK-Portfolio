import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; 

function NavBar() {
  return (
    <div className='w-100' style={{ position: "fixed", top:"0", zIndex: 1000 }}>
      <Navbar expand="lg" className="glass-navbar">
        <Navbar.Brand href="#home" className='fs-2 fw-bold px-4' style={{ color: 'rgb(0, 255, 127)' }}>&lt;Vishnu SK /&gt;</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="toggle-default me-3 text-center"
        />
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="toggle-small me-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#hero" className='fs-6 text-light fw-bold me-3'>HOME</Nav.Link>
            <Nav.Link href="#about" className='fs-6 text-light fw-bold me-3'>ABOUT ME</Nav.Link>
            <Nav.Link href="#project" className='fs-6 text-light fw-bold me-3'>PROJECT</Nav.Link>
            <Nav.Link href="#contact" className='fs-6 text-light fw-bold me-3'>CONTACT</Nav.Link>
            <a href="./resumeVishnuSK.pdf"className='btn fs-6 rounded-5 fw-bold text-dark me-3' style={{ background: "rgb(0, 255, 127)" }} download>RESUME</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
