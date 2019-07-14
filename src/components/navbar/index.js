import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" fixed="top">
        <img
          src="https://voomsway.com/wp-content/uploads/2019/06/logo_alt.svg"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="#">Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
);

export default Header;
