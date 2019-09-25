import React from "react";
import map from "./img/map-img.png";
import dtu from "./img/dtu.png";
import circle from "./img/circlechart.png";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="layout-col menu-col">
            <Row className="menu-header justify-content-center">
              <Image src={dtu} className="menu-img" />
            </Row>
            <hr />
            <Row>
              <Col>
                <Row>
                  <Col>Dashboard</Col>
                </Row>
                <Row>
                  <Col>Components</Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Row>
                  <Col>Settings</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="layout-col main-col" xs={6}>
            <img src={map} className="map-img" alt="logo" />
          </Col>
          <Col className="layout-col side-col">
            <Col className="layout-col menu-col">
              <Row className="menu-header justify-content-center">
                <Image src={circle} className="menu-img" />
              </Row>
              <hr />
              <Row>
                <Col>
                  <Row>
                    <Col>Installed</Col>
                  </Row>
                  <Row>
                    <Col>Transit</Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Row>
                    <Col>History</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
