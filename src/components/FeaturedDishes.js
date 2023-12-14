import React from 'react';

// FeaturedDishes component displaying featured dishes
const FeaturedDishes = () => {
  // Sample featured dishes data (replace with actual data from your JSON file or API)
  const featuredDishes = [
    { id: 1, name: 'Special Dish 1', description: 'A delightful combination of flavors and textures that will tantalize your taste buds.', image: '/images/dish1.jpg' },
    { id: 2, name: 'Chef\'s Special Pasta', description: 'Our chef\'s special pasta creation, made with the freshest ingredients and love.', image: '/images/dish2.jpg' },
    { id: 3, name: 'Decadent Dessert', description: 'Indulge in our decadent dessert, a perfect way to conclude your dining experience.', image: '/images/dish3.jpg' },
  ];

  return (
    <section className="featured-dishes">
      <div className="container">
        <h2>Featured Dishes</h2>

        {/* Render featured dishes dynamically */}
        <div className="featured-dishes-list">
          {featuredDishes.map(dish => (
            <div key={dish.id} className="featured-dish-card">
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
