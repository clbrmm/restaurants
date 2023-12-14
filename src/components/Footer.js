import React from 'react';

// Footer component containing copyright information and links
const Footer = () => {
  return (
    <footer>
      {/* Copyright information */}
      <div className="copyright">
        <p>&copy; 2023 Restaurant Website. All rights reserved.</p>
      </div>

      {/* Additional links or information */}
      <div className="links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
