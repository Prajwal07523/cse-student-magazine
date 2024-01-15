import React from "react";
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:4000/users', {
        method: 'GET', // GET method is used here to fetch data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const users = await response.json();

      // Find if any user matches the input credentials
      const userExists = users.some(user => 
        user.username === inputUsername && user.password === inputPassword
      );

      if (userExists) {
        navigate('/login/add'); // Navigate to the next page if credentials match
        console.log('Login sucessfully');
      } else {
        console.log('Login failed: Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <div className="signin-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
