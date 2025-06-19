import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

// App component: main layout for the Web Store homepage
function App() {
  return (
    <div>
      {/* Top navigation bar */}
      <Navbar />
      {/* Hero/banner section */}
      <HeroBanner />
      {/* Horizontal category navigation */}
      <CategoryNav />
      {/* Product grid sections */}
      <ProductGrid title="Mais Vendidos em Eletrônicos" />
      <ProductGrid title="Mais Vendidos em Games e Consoles" />
      <ProductGrid title="Mais Vendidos em Livros" />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
