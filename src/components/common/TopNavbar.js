import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

const TopNavbar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav>
        <Nav.Link to="/">Top Gifs</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;
