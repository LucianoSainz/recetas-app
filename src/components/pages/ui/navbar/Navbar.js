import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="md">
        <Navbar.Brand href="#home">FeedMe!</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#alimentos">Alimentos</Nav.Link>
        </Nav>
      </Navbar>
   
    )
}

export default Navigation;