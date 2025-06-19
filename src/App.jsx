import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

// App component: main layout for the Django Store homepage
function App() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Top navigation bar */}
      <Navbar />
      {/* Hero/banner section */}
      <div className="container my-3">
        <HeroBanner />
      </div>
      {/* Horizontal category navigation */}
      <div className="container mb-3">
        <CategoryNav />
      </div>
      {/* Product grid sections */}
      <div className="container mb-4">
        <ProductGrid title="Mais Vendidos em Eletrônicos" />
        <ProductGrid title="Mais Vendidos em Games e Consoles" />
        <ProductGrid title="Mais Vendidos em Livros" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
