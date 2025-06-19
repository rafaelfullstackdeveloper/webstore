import React from 'react';
import './HeroBanner.css';

// HeroBanner component: displays the main promotional banner at the top of the homepage
const HeroBanner = () => (
  <div className="p-4 mb-4 rounded bg-warning text-dark text-center shadow-sm">
    <div className="banner-content container">
      {/* Main headline */}
      <h2 className="display-5 fw-bold mb-2">Compre com segurança e rapidez na Django Store</h2>
      {/* Subheadline */}
      <p className="lead mb-3">Produtos, ofertas e entrega rápida como no Mercado Livre!</p>
      {/* Call-to-action button */}
      <button className="btn btn-primary btn-lg">Ver Ofertas</button>
    </div>
  </div>
);

export default HeroBanner; 
