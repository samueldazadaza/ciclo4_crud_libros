import React from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
from 'mdb-react-ui-kit';

export default function UserRegister() {
    /*const[mdbdropdown, setMDBDropdown]=useState(false);

    /*const abrirCerrarDropdown=()=>{
        setMDBDropdown(!mdbdropdown);
    }*/
    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5'>
          <MDBCardBody className='px-5'>
            <h3 className="fw-bold mb-4 text-center">Crear cuenta</h3>
            <MDBInput wrapperClass='mb-3' placeholder='Nombre' size='lg' id='form1' type='text'/>
            <MDBInput wrapperClass='mb-3' placeholder='ID (Ultimo 3 digitos de la cc)' size='lg' id='form1' type='text'/>
            <MDBInput wrapperClass='mb-3' placeholder='Email' size='lg' id='form2' type='email'/>
            <MDBInput wrapperClass='mb-3' placeholder='Contraseña' size='lg' id='form3' type='password'/>
            <MDBInput wrapperClass='mb-3' placeholder='Repetir Contraseña' size='lg' id='form4' type='password'/>
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
}