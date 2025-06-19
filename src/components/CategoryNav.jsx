import React from 'react';
import './CategoryNav.css';

// List of product categories for navigation
const categories = [
  "Dispositivos webstore", "Livros", "eBooks", "Informática", "Cuidados Pessoais", "Games"
];

// CategoryNav component: displays a horizontal scrollable list of categories
const CategoryNav = () => (
  <div className="category-nav">
    {categories.map(cat => (
      <div className="category" key={cat}>{cat}</div>
    ))}
  </div>
);

export default CategoryNav; 
