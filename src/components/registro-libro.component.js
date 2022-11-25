import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class RegistroLibro extends Component {
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
      .post("http://localhost:4000/libros/registro-libro", libroObject)
      .then((res) => console.log(res.data));
    this.setState({ id: "", titulo: "", autor: "", genero: "", cantidad: "" });
  }

  render() {
    return (
      <body card="card text-center m-5">
        <div class="card-body ">
          <div className="form-wrapper ">
            <br></br>
            <center>
              <h4>REGISTRAR LIBRO</h4>
            </center>
            <br></br>
            <Form onSubmit={this.onSubmit}>
              <center>
                <Form.Group controlId="id_libro">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.id}
                    onChange={this.onChangeLibroId}
                  />
                </Form.Group>

                <Form.Group controlId="titulo">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.titulo}
                    onChange={this.onChangeLibroTitulo}
                  />
                </Form.Group>

                <Form.Group controlId="autor">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.autor}
                    onChange={this.onChangeLibroAutor}
                  />
                </Form.Group>

                <Form.Group controlId="genero">
                  <Form.Label>Género</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.genero}
                    onChange={this.onChangeLibroGenero}
                  />
                </Form.Group>

                <Form.Group controlId="cantidad">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.cantidad}
                    onChange={this.onChangeLibroCantidad}
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
      </body>

/*.card-body{
  box-shadow: 3px 3px 20px 3px #ccc;
  width: 600px;
  height: 520px;
  border-radius: 2%;
}*/
/* .control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
} */
    );
  }
}
