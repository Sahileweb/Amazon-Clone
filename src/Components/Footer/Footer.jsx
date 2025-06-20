
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-base mt-10">
      
      <div className="text-center py-4 bg-darkblue1 font-bold">
        Back to Top
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-20 p-10 text-center md:text-left">
        {Array(4).fill(0).map((_, index)=>(
          <ul key={index}>
            <p className="font-bold  mb-4">Get to Know Us</p>
            <li className="font-[40] inline-block mx-1">Careers</li> <br/>
            <li className="font-[40] inline-block mx-1">Blog</li><br/>
            <li className="font-[40] inline-block mx-1">About Amazon</li><br/>
            <li className="font-[40] inline-block mx-1">Investor Relations</li><br/>
            <li className="font-[40] inline-block mx-1">Amazon Devices</li><br/>
            <li className="font-[40] inline-block mx-1">Contact Us</li><br/><br/><br/><br/>
          </ul>
        ))}
      </div>
<hr/>
     
      <div className="bg-black py-6 text-center text-sm">
        <div className="flex justify-center items-center space-x-4 mb-1">
          <img src="/amazon_logo.png" alt="Amazon Logo" className="h-10" />
        </div>
        <p className="text-white">
          Conditions of Use · Privacy Notice · Your Ads Privacy Choices
        </p>
        <p className="text-gray-500 mt-1">
          © {new Date().getFullYear()} Amazon.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
