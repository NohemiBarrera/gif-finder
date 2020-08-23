import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../assets/giphy-logo.png";

class Search extends Component {
  render() {
    return (
      <>
        <Row className="d-flex justify-content-center">
          <Col md="2" xs="6">
            <Image src={logo} style={{ maxWidth: "200px" }} />
          </Col>
        </Row>

        <ButtonToolbar
          className="mb-3 md-3 justify-content-center mt-1"
          aria-label="Toolbar with Button groups"
        >
          <div className="d-flex">
            <FormControl type="text" placeholder="" aria-label="Search" className="mr-2" autoFocus/>

            <Button variant="primary">Buscar</Button>
          </div>
        </ButtonToolbar>

        <h5>Resultados para " "</h5>
      </>
    );
  }
}

export default Search;
