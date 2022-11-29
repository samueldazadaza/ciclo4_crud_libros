import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default class ConfirmPassword extends Component {
  render(){
    return (
      <Container fluid>

      <Row className='d-flex justify-content-center align-items-center h-100'>
        <Col col='12'>
            <div  class='card bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <div class="card-body p-5 w-100 d-flex flex-column">
                <section class="form-register">
                      <h3 className="fw-bold mb-4 text-center">Recuperación de Contraseña</h3>
                      <input class="mb-4 w-100 cm" type="text" name="email" id="email" placeholder =" Escriba su correo"/>
                      <select class="form-select mb-4 w-100" name="form-select" id="form-select">
                          <option selected>Seleccione la pregunta de seguridad</option>
                          <option value="1">¿Cuál fue su primer apodo de pequeño?</option>
                          <option value="2">¿Quién fue primer amor?</option>
                          <option value="3">¿Cuál fue el nombre de su bisabuela?</option>
                      </select>
                      <input class="mb-4 w-100 cm" type="password" name="security question" id="security question" placeholder="Escriba su respuesta"/>
                      <center><input class="btn btn-primary button" type="submit" value="Recuperar"/></center>
                </section>
              </div>
            </div>
        </Col>
      </Row>
    </Container>  
    );
  }
 
};


