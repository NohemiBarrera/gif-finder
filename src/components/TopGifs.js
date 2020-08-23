import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopGifs } from "../actions/gifs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ButtonToolbar,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../assets/giphy-logo.png";

class TopGifs extends Component {
  static propTypes = {
    topGifs: PropTypes.array.isRequired,
    getTopGifs: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTopGifs();
  }

  render() {
    const { topGifs } = this.props;

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
            <FormControl
              type="text"
              placeholder=""
              aria-label="Search"
              className="mr-2"
            />
            <Button variant="primary">Buscar</Button>
          </Link>
        </ButtonToolbar>
        <h4 className="mb-4">Top Gifs</h4>
        <Row className="d-flex wrap m-0">
          {topGifs.map((gif, idx) => (
            <Col key={idx} md="2" xs="6" className="mb-2 p-1" style={{maxWidth: 'max-content'}}>
              <Image
                src={`http://media.giphy.com/media/${gif.id}/giphy.gif`}
                alt={gif.title}
                style={{ maxWidth: "100%"}}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  topGifs: state.gifs.topGifs,
});

export default connect(mapStateToProps, { getTopGifs })(TopGifs);
