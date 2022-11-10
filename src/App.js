import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RegistroLibro from "./components/registro-libro.component";

function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
        <nav class="navbar navbar-expand-md"></nav>
        <Container>
        <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/registro-libro"} className="nav-link">
                    Registrar Libro
                  </Link>
                </Nav>
        </Nav>
        </Container>
      </header>
      <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/registro-libro"
                    component={(props) => <RegistroLibro {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
