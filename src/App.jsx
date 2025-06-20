
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/hero/Hero";
import ProductGrid from "./Components/ProductGrid/ProductGrid";
import Footer from "./Components/Footer/Footer";
import SignIn from "./pages/SignIn"; 
import Cart from "./pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductGrid />
            <Footer />
          </>
        } />
        <Route path="/signin" element={<SignIn />} />
         <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
