import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../assets/giphy-logo.png";

class TopGifs extends Component {
  render() {
    return (
      <>
        <Row className="d-flex justify-content-center">
          <Col md="2" xs="6">
            <Image src={logo} style={{ maxWidth: "200px" }} />
          </Col>
        </Row>

        <ButtonToolbar
          className="mb-3 justify-content-center mt-1"
          aria-label="Toolbar with Button groups"
        >
          <Link to="/search" className="d-flex">
            <FormControl type="text" placeholder="" aria-label="Search" className="mr-2"/>

            <Button variant="primary">Buscar</Button>
          </Link>
        </ButtonToolbar>

        <h5>Top Gifs</h5>
      </>
    );
  }
}

export default TopGifs;
