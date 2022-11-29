import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { FormLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class EditarLibro extends Component {
  constructor(props) {
    super(props);
    this.onChangeLibroId = this.onChangeLibroId.bind(this);
    this.onChangeLibroTitulo = this.onChangeLibroTitulo.bind(this);
    this.onChangeLibroAutor = this.onChangeLibroAutor.bind(this);
    this.onChangeLibroGenero = this.onChangeLibroGenero.bind(this);
    this.onChangeLibroCantidad = this.onChangeLibroCantidad.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: "",
      titulo: "",
      autor: "",
      genero: "",
      cantidad: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/students/editar-libro/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          id: res.data.id,
          titulo: res.data.titulo,
          autor: res.data.autor,
          genero: res.data.genero,
          cantidad: res.data.cantidad,

        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeLibroId(e) {
    this.setState({ id: e.target.value }); //sst
  }
  onChangeLibroTitulo(e) {
    this.setState({ titulo: e.target.value }); //
  }
  onChangeLibroAutor(e) {
    this.setState({ autor: e.target.value });
  }

  onChangeLibroGenero(e) {
    this.setState({ genero: e.target.value });
  }

  onChangeLibroCantidad(e) {
    this.setState({ cantidad: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const libroObject = {
      id: this.state.id,
      titulo: this.state.titulo,
      autor: this.state.autor,
      genero: this.state.genero,
      cantidad: this.state.cantidad,
    };

    axios
      .put(
        "http://localhost:4000/libros/update-libro"+
          this.props.match.params.id, 
        libroObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/lista-libro"); 
  }

  render() {
    return (
      <Container>
        <Row className='d-flex justify-content-center align-items-center h-100'>
          <Col col='12'>
            <div class='card bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}} >
              <div class="card-body p-5 w-100 d-flex flex-column">
                <div className="form">
                  <Form onSubmit={this.onSubmit} className="form">
                    <h3 className="fw-bold mb-4 text-center">Registrar Libro</h3>
                    <center>
                      <Form.Group controlId="id">
                        <FormLabel></FormLabel>
                        <Form.Control
                          type="number"
                          value={this.state.id}
                          onChange={this.onChangeLibroId}
                          placeholder = "ID"
                        />
                      </Form.Group>

                      <Form.Group controlId="titulo">
                        <FormLabel></FormLabel>
                        <Form.Control
                          type="text"
                          value={this.state.titulo}
                          onChange={this.onChangeLibroTitulo}
                          placeholder="Título"
                        />
                      </Form.Group>

                      <Form.Group controlId="autor">
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          value={this.state.autor}
                          onChange={this.onChangeLibroAutor}
                          placeholder="Autor"
                        />
                      </Form.Group>

                      <Form.Group controlId="genero">
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="text"
                          value={this.state.genero}
                          onChange={this.onChangeLibroGenero}
                          placeholder="Género"
                        />
                      </Form.Group>

                      <Form.Group controlId="cantidad">
                        <Form.Label></Form.Label>
                        <Form.Control
                          type="number"
                          value={this.state.cantidad}
                          onChange={this.onChangeLibroCantidad}
                          placeholder="Cantidad"
                        />
                      </Form.Group>
                    </center>
                    <center>
                      <Button
                        variant="danger"
                        size="lg"
                        block="block"
                        type="submit"
                        className="mt-4"
                      >
                        Guardar
                      </Button>
                    </center>
                  </Form>
                  <br></br>
                </div>
              </div>
            </div>
            </Col>
          </Row>
        </Container>

    );
  }
}
