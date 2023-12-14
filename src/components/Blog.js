import React from 'react';

// Blog component displaying restaurant blog posts
const Blog = () => {
  // Sample blog data (replace with actual data from your JSON file or API)
  const blogPosts = [
    { id: 1, title: 'Behind the Scenes: Our Chef\'s Inspirations', content: 'Discover the stories and inspirations behind our chef\'s culinary creations.' },
    { id: 2, title: 'Tasting Event Recap: A Night of Exquisite Flavors', content: 'Recap of our recent tasting event featuring a diverse range of delectable dishes.' },
    { id: 3, title: 'Cooking Tips: Perfecting Your Home Pasta Game', content: 'Learn valuable tips from our chef on how to achieve pasta perfection in your own kitchen.' },
  ];

  return (
    <section className="blog">
      <h2>Latest Blog Posts</h2>

      {/* Render blog posts dynamically */}
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;