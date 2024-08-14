import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/SignUp.css'; // Import the CSS file

const SignUp = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phn_no, setPhn] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if(name !== '' && password !=='' && email !=='' && phn_no !== ''){
        const response = await axios.post('http://localhost:8080/add', {
          name,
          password, 
          email,
          phn_no
        });
        if(response.data){
          alert('User signed up successfully:');
          window.location.href = '/login';
        } else {
          alert('No response from the server');
        }
      } else {
        alert('Please fill all the credentials.');
      }
    } catch (error) {
      alert('Error signing up:', error);
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form id='myForm' onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone no:</label>
          <input
            type="text"
            value={phn_no}
            onChange={(e) => setPhn(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
