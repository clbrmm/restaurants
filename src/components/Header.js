import React from 'react';

// Header component containing the navigation menu and restaurant logo
const Header = () => {
  return (
    <header>
      {/* Restaurant logo */}
      <div className="logo">
        <img src="/images/logo.png" alt="Restaurant Logo" />
      </div>

      {/* Navigation menu */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/reservation">Reservation</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/social">Social</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
