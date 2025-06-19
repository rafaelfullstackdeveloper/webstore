import React from 'react';
import './HeroBanner.css';

// HeroBanner component: displays the main promotional banner at the top of the homepage
const HeroBanner = () => (
  <div className="hero-banner">
    <div className="banner-content">
      {/* Main headline */}
      <h2>Teste grátis por 30 dias</h2>
      {/* Subheadline */}
      <p>Prime Video, Frete Grátis e muito mais</p>
      {/* Call-to-action button */}
      <button>Experimente Prime</button>
    </div>
  </div>
);

export default HeroBanner; 
