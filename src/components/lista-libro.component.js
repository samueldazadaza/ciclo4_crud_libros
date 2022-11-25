import React, { Component } from 'react'
import axios from "axios";
import Table from "react-bootstrap/Table";
import BooksTableRow from "./BooksTablesRow"


export default class ListaLibro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          libros: [],
        };
      }
    
      componentDidMount() {
        axios
          .get("http://localhost:4000/libros/")
          .then((res) => {
            this.setState({
              libros: res.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      DataTable() {
        return this.state.libros.map((res, i) => {
          return <BooksTableRow obj={res} key={i} />;
        });
      }
  render() {
    return (
      <div className="table-wrapper m-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Género</th>
              <th>Cantidad</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}