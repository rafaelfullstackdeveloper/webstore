import React from 'react';
import './Navbar.css';

// Navbar component: displays the top navigation bar with logo, search, and links
const Navbar = () => (
  <nav className="navbar">
    {/* Logo section */}
    <div className="logo">Web Store</div>
    {/* Search input */}
    <input type="text" placeholder="Search..." className="search" />
    {/* Navigation links */}
    <div className="nav-links">
      <a href="#">Ofertas</a>
      <a href="#">Mais Vendidos</a>
      <a href="#">Premium</a>
      <a href="#">Conta</a>
      <a href="#">Carrinho</a>
    </div>
  </nav>
);

export default Navbar; 
