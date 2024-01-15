import React from 'react';
import logo from './klelogo1.png'; // Add path to logo image

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="College Logo" className="logo" />
      <h1>CS ASSOCIATION MAGAZINE</h1>
    </header>
  );
}

export default Header;
