import React from 'react';
import './ProductGrid.css';

// Example product data (replace with real data as needed)
const products = [
  { title: "Echo Dot", img: '/media/echo-dot.png', price: "R$ 299" },
  { title: "Fone Bluetooth", img: '/media/fone-bluetooth.png', price: "R$ 99" },
  { title: "Smart TV", img: '/media/smart-tv.png', price: "R$ 1999" },
  { title: "Notebook", img: '/media/notebook.png', price: "R$ 2999" },
];

// ProductGrid component: displays a section with a title and a grid of product cards
const ProductGrid = ({ title }) => (
  <section className="mb-4">
    {/* Section title */}
    <h3 className="mb-3 fw-bold">{title}</h3>
    {/* Product cards grid */}
    <div className="row g-3">
      {products.map((p, i) => (
        <div className="col-12 col-sm-6 col-md-3" key={i}>
          <div className="card h-100 shadow-sm">
            <img src={p.img} alt={p.title} className="card-img-top p-3" style={{height: 180, objectFit: 'contain'}} />
            <div className="card-body text-center">
              <div className="card-title fw-bold">{p.title}</div>
              <div className="card-text text-success fs-5">{p.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProductGrid; 
