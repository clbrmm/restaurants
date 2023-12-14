import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedDishes from '../components/FeaturedDishes';
import Blog from '../components/Blog';
import SocialMediaFeed from '../components/SocialMediaFeed';  // Import the Social component
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      {/* Hero section */}
      <HeroSection />

      {/* Featured dishes section */}
      <FeaturedDishes />

      {/* Latest blog posts section */}
      <Blog />

      {/* Social media feed section */}
      <SocialMediaFeed />

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Index;
