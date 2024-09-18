import React from "react";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = ()=> {
    return(
        <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Student Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/fees-management">Add Fees</Nav.Link>
            <Nav.Link to="/fees-list">Fees List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}
export default Header;
