import React from "react";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-1 bg-black/30 backdrop-blur-sm">
      <div>
        <img src="src/assets/logo.webp" alt="Logo" className="h-[70px]" />
      </div>
      <ul className="flex space-x-6 mr-[200px] text-gray-200 font-medium">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">Apartment</li>
        <li className="hover:text-yellow-400 cursor-pointer">Features</li>
        <li className="hover:text-yellow-400 cursor-pointer">Portfolio</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600">👤</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
