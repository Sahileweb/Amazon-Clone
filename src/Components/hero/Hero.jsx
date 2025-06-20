
import React from 'react';

function Hero() {
  return (
    <div className="relative">
    
      <img src="hero_image.jpg" alt="Hero" className="w-full" />

     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-[20px] border border-gray-300 shadow text-sm text-center w-[90%] max-w-4xl">
        <p>
          You are on amazon.com. You can also shop on millions of products with fast local delivery.
          <a href="#" className="text-blue-600 hover:underline"> Click here to go amazon.com</a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
