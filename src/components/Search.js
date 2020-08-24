import React, { Component } from "react";
import { connect } from "react-redux";
import { getGifs, changeFilter } from "../actions/gifs";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Image,
  Button,
  FormControl,
  ButtonToolbar,
  Container
} from "react-bootstrap";
import logo from "../assets/giphy-logo.png";

class Search extends Component {
  static propTypes = {
    gifs: PropTypes.array,
    searchParam: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  onChangeSearchInput(e) {
    const filter = e.target.value;
    this.props.changeFilter(filter);
  }

  submitSearch() {
    const searchParam = this.props.searchParam;
    this.props.getGifs(searchParam);
  }

  render() {
    const { gifs, searchParam } = this.props;

    return (
      <Container fluid>
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
            <FormControl
              type="text"
              placeholder=""
              aria-label="Search"
              className="mr-2"
              autoFocus
              onChange={this.onChangeSearchInput}
            />

            <Button variant="primary" onClick={this.submitSearch}>
              Buscar
            </Button>
          </div>
        </ButtonToolbar>

        {searchParam.length === 0 ? (
          <h5>Realiza una búsqueda</h5>
        ) : (
          <>
            <h5>Resultados para "{searchParam}" </h5>
            <Row className="d-flex wrap m-0">
              {gifs.map((gif, idx) => (
                <Col
                  key={idx}
                  md="2"
                  xs="6"
                  className="mb-2 p-1"
                  style={{ maxWidth: "max-content" }}
                >
                  <Image
                    src={`http://media.giphy.com/media/${gif.id}/giphy.gif`}
                    alt={gif.title}
                    style={{ maxWidth: "100%" }}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  searchParam: state.gifs.searchParam,
  gifs: state.gifs.gifsFound,
});

export default connect(mapStateToProps, { getGifs, changeFilter })(Search);
