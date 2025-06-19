import React from 'react';
import './Navbar.css';

// Navbar component: displays the top navigation bar with logo, search, and links
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      {/* Logo section */}
      <a className="navbar-brand fw-bold" href="#">Django Store</a>
      {/* Search input */}
      <form className="d-flex mx-auto" style={{ maxWidth: 400 }}>
        <input type="text" className="form-control me-2" placeholder="Buscar produtos, marcas e muito mais..." />
      </form>
      {/* Navigation links */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" href="#">Ofertas</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Mais Vendidos</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Premium</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Conta</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Carrinho</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar; 
