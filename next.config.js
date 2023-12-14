module.exports = {
    // Specify additional plugins or custom configurations for Next.js
    // For example, adding support for images, fonts, or other assets
    // See Next.js documentation for more options: https://nextjs.org/docs/api-reference/next.config.js/introduction
    plugins: [],
  
    // Define environment variables accessible in the client-side code
    env: {
      // Add any environment variables required for your application
      // For example, API keys or configuration settings
      // These can be accessed in your code using process.env.VARIABLE_NAME
    },
  
    // Configure webpack, the build tool used by Next.js
    webpack: (config, { isServer }) => {
      // For example, to load SVG files using the 'file-loader'
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      // Modify webpack config based on whether it's a server or client build
      if (isServer) {
        // Server-side specific configurations
      } else {
        // Client-side specific configurations
      }
  
      return config;
    },
  
    // Customize the behavior of the Next.js image optimization
    // For example, configuring domains for external images
    images: {
      domains: ["example.com"],
    },
  
    // Specify custom headers for the application
    // Useful for setting security-related headers or enabling CORS
    async headers() {
      return [
        {
          // Example: Set X-Frame-Options header to deny framing of the website
          source: "/(.*)",
          headers: [
            {
              key: "X-Frame-Options",
              value: "DENY",
            },
          ],
        },
      ];
    },
  };
  