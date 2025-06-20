

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  
  return (
    <>
      
      <header className="bg-black text-white py-2 px-4 flex items-center justify-between">

        <div className="mr-6">
          <img
            src="/amazon_logo.png"
            alt="Amazon Logo"
            className="h-10 object-contain"
          />
        </div>

        <div className="flex flex-col text-white mr-6">
          <span className="text-xs">Deliver to</span>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-white text-sm" />
            <span className="font-bold text-sm">INDIA</span>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2 h-9">
          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-grow px-4 py-1 text-black text-sm outline-none"
          />
          <div className="bg-yellow-400 flex items-center justify-center px-3 h-full">
            <FaSearch className="text-black" />
          </div>
        </div>

        <div className="flex space-x-6 text-sm ml-6">
          <Link to="/signin" className="cursor-pointer hover:underline text-left">
            <span>Hello, Sign in</span>
            <span className="font-bold block">Account & Lists</span>
          </Link>
          <div className="cursor-pointer hover:underline text-left">
            <span>Returns</span>
            <span className="font-bold block">& Orders</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center gap-1">
            <FaShoppingCart className="text-xl" />
            <span className="">
              <Link to="/Cart">Cart</Link></span>
          </div>
        </div>
      </header>

      <div className="bg-[#222f3d] text-white text-sm px-6 py-2">
        <div className="flex space-x-6">
          <div className="cursor-pointer hover:underline">ALL</div>
          <div className="cursor-pointer hover:underline">Today's Deals</div>
          <div  className="cursor-pointer hover:underline">Customer Service</div>
          <div className="cursor-pointer hover:underline ">
            <Link to="/signin" >Registry</Link></div>
          <div className="cursor-pointer hover:underline">Gift Cards</div>
          <div className="cursor-pointer hover:underline">Sell</div>
        </div>
      </div>
      

    </>
  );
};

export default Header;
