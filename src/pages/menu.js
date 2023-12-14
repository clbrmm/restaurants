import React from 'react';

// Menu component displaying the restaurant's menu
const Menu = () => {
  // Sample menu data (replace with actual data from your JSON file or API)
  const menuItems = [
    { id: 1, name: 'Appetizer 1', description: 'Delicious description of appetizer 1.', price: 9.99 },
    { id: 2, name: 'Main Course 1', description: 'Savory description of main course 1.', price: 19.99 },
    { id: 3, name: 'Dessert 1', description: 'Sweet description of dessert 1.', price: 7.99 },
  ];

  return (
    <section className="menu">
      <h2>Menu</h2>

      {/* Render menu items dynamically */}
      <ul>
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
