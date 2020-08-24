import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const TopNavbar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav style={{width: '100%'}}>
        <Link to="/trending" className="text-white ml-5">Top Gifs</Link>
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;
