import React from "react";

function AddMagazine() {
  const handleClick = () => {
    // Add your login logic here, e.g., call an API to authenticate
    alert("Login button clicked!");
  };

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>

      <input type="text" id="username" />

      <label htmlFor="password">Password:</label>

      <input type="password" id="password" />

      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default AddMagazine;