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
import HomeLibro from "./components/home-libro.component";
import ListaLibro from "./components/lista-libro.component";
import LoginLibro from "./components/login-libro.component";
import UserRegister from "./components/user-register.component";
import ConfirmPassword from "./components/confirm-password.component";



function App() {
  return (
    <div className="App">
      <Router>
       
        <header className="App-header">
          <Navbar bg="navbar bg-primary ">
            <Container>
              <Nav className="navbar sticky-top">
                <Navbar.Brand>
                  <nav class="navbar-item" href="#">
                    <img
                      src="logo libros4.png"
                      alt="Libro"
                      width="70"
                      class="logo"
                    />
                  </nav>
                </Navbar.Brand>
                <Nav>
                  <Link to={"/home-libro"} className="nav-link">
                    Home
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/lista-libro"} className="nav-link">
                    Libros
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/registro-libro"} className="nav-link">
                    Registrar Libro
                  </Link>
                </Nav>
              </Nav>
              <Nav className="justify-content-end">
                <form class="d-flex" role="search">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                      <img src="lupa.png" alt="Libro" width="15" />
                    </span>
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Buscar Libro"
                      aria-label="Search"
                    />
                  </div>
                </form>
                <Nav>
                  <Link to={"/login-libro"} className="nav-link">
                    <button class="btn btn-outline-success" type="submit">
                      Login
                    </button>
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper ">
                <Switch>
                  <Route
                    exact
                    path="/registro-libro"
                    component={(props) => <RegistroLibro {...props} />}
                  />
                  <Route
                    exact
                    path="/lista-libro"
                    component={(props) => <ListaLibro {...props} />}
                  />
                  <Route
                    exact
                    path="/login-libro"
                    component={(props) => <LoginLibro {...props} />}
                  />
                  <Route
                    exact
                    path="/user-register"
                    component={(props) => <UserRegister {...props} />}
                 />
                  <Route
                    exact
                    path="/confirm-password"
                    component={(props) => <ConfirmPassword {...props} />}
                 />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
        <Switch>
           <Route
              exact
              path="/"
              component={(props) => <HomeLibro {...props} />}
              />
              <Route
               exact
               path="/home-libro"
               component={(props) => <HomeLibro {...props} />}
               />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
