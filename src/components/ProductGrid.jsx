import React from 'react';
import './ProductGrid.css';

// Example product data (replace with real data as needed)
const products = [
  { title: "Echo Dot", img: "https://via.placeholder.com/100", price: "R$ 299" },
  { title: "Fone Bluetooth", img: "https://via.placeholder.com/100", price: "R$ 99" },
  { title: "Smart TV", img: "https://via.placeholder.com/100", price: "R$ 1999" },
  { title: "Notebook", img: "https://via.placeholder.com/100", price: "R$ 2999" },
];

// ProductGrid component: displays a section with a title and a grid of product cards
const ProductGrid = ({ title }) => (
  <section className="product-section">
    {/* Section title */}
    <h3>{title}</h3>
    {/* Product cards grid */}
    <div className="product-grid">
      {products.map((p, i) => (
        <div className="product-card" key={i}>
          <img src={p.img} alt={p.title} />
          <div>{p.title}</div>
          <div>{p.price}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProductGrid; 
