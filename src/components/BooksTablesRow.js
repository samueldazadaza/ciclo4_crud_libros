import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class BooksTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteLibro = this.deleteLibro.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-libro/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.titulo}</td>
        <td>{this.props.obj.autor}</td>
        <td>{this.props.obj.genero}</td>
        <td>{this.props.obj.cantidad}</td>
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-student/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}