
import React from "react";


const ProductBox = ({ title, image }) => {
 
  return (
    <div className="bg-white p-4 rounded shadow-md hover:scale-105 transition-transform h-[400px] flex flex-col justify-between">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>

      <div
        className="h-64 bg-cover bg-center mb-3 rounded"
        style={{ backgroundImage: `url(${image})` }}
      />

      <p className="text-blue-600 cursor-pointer">See more</p>
     
    </div>
  );
};

export default ProductBox;
