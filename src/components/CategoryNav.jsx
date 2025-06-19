import React from 'react';
import './CategoryNav.css';

// List of product categories for navigation
const categories = [
  "Dispositivos Django Store", "Livros", "eBooks", "Informática", "Cuidados Pessoais", "Games"
];

// CategoryNav component: displays a horizontal scrollable list of categories
const CategoryNav = () => (
  <div className="d-flex flex-row overflow-auto gap-2 py-2 px-1 bg-white rounded shadow-sm">
    {categories.map(cat => (
      <div className="badge bg-primary text-light fs-6 px-4 py-2 flex-shrink-0" key={cat}>{cat}</div>
    ))}
  </div>
);

export default CategoryNav; 
