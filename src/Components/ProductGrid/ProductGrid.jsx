import React from "react";
import ProductBox from "./ProductBox";

const products = [
  { title: "Health & Personal Care", image: "/box2_image.jpg" },
  { title: "Clothes", image: "/box1_image.jpg" },
  { title: "Furnitures", image: "/box3_image.jpg" },
  { title: "Electronics", image: "/box4_image.jpg" },
  { title: "Beauty Picks", image: "/box5_image.jpg" },
  { title: "Pets Care", image: "/box6_image.jpg" },
  { title: "New Toys", image: "/box7_image.jpg" },
  { title: "Fashion Trends", image: "/box8_image.jpg" },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 bg-gray-100">
      {products.map((p, index) => (
        <ProductBox key={index} title={p.title} image={p.image} />
      ))}
    </div>
  );
};

export default ProductGrid;
