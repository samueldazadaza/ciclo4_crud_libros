
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}from 'mdb-react-ui-kit';


import React, { Component } from 'react'

export default class LoginLibro extends Component {
  render() {
    return (
        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
  
                <h3 className="fw-bold mb-5 text-center">Iniciar sesion</h3>
                
  
                <MDBInput wrapperClass='mb-4 w-100' placeholder="Correo electrónico"  id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Contraseña' id='formControlLg' type='password' size="lg"/>
  
                <MDBCheckbox wrapperClass='w-50' name='flexCheck' id='flexCheckDefault' className='mb-4' label='Recordar contraseña' />
                <a href="confirm-password">
                  <p>Olvidaste tu contraseña</p>
                </a>
                <a href="user-register">
                  <p>Crear cuenta nueva</p>
                </a>
                <MDBBtn className= "m-3"size='lg' href="home-libro">
                  Ingresar
                </MDBBtn>
  
                <hr className="my-4" />
  
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
    )
  }
}