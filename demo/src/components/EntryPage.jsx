// src/components/EntryPage.js
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useContext } from 'react';
import '../Styles/EntryPage.css';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext'; // Import UserContext

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

const EntryPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserId } = useContext(UserContext); // Get setUserId from UserContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(email === "admin@gmail.com" && password === "password"){
        navigate('/admin')
      }
      else{
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });
      if (response.data) {
        const userId = response.data.id; // Get user ID from response
        setUserId(userId); // Store user ID in context
        alert('Login successful');

        login(response.data); // Pass user data to login context

        navigate(`/`);
      } else {
        alert('Invalid credentials');
      }
    }
  } catch (error) {
    alert('Error: ' + error);
  }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <p className='loginname'>Login</p>

      <MDBInput
      
        wrapperClass='mb-4'
        label='Email address'
        id='form1'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        wrapperClass='mb-4'
        label='Password'
        id='form2'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>


      <div className="text-center">
      <MDBBtn className="mb-4" onClick={handleSubmit}>Sign in</MDBBtn>
      
        <p>Not a member? <a href="/signup">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{ width: '20%' }}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm" />
          </MDBBtn>
        </div>
      </div>
      <br/>
    </MDBContainer>
  );
}

export default EntryPage;
