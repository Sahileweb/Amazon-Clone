import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
