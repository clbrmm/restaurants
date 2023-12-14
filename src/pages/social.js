import React from 'react';

// Social component displaying the restaurant's social media feed
const Social = () => {
  // Sample social media feed data (replace with actual data from your API or feed)
  const socialMediaPosts = [
    { id: 1, content: 'Exciting moments from our latest event! 🎉 #RestaurantEvents #FoodieLife', timestamp: '2 hours ago' },
    { id: 2, content: 'Discover the chef\'s special of the week: a mouthwatering seafood paella. 🥘 #ChefSpecial #FoodArt', timestamp: '1 day ago' },
    { id: 3, content: 'Happy customers enjoying a delightful evening at our restaurant. Thanks for sharing your moments! 📸 #CustomerAppreciation', timestamp: '3 days ago' },
  ];

  return (
    <section className="social-media-feed">
      <h2>Social Media Feed</h2>

      {/* Render social media posts dynamically */}
      <ul>
        {socialMediaPosts.map(post => (
          <li key={post.id} className="social-media-post">
            <p>{post.content}</p>
            <span className="timestamp">{post.timestamp}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Social;
