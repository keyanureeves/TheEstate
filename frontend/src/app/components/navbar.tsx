"use client";

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF8F3] text-[#2B1B12] px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-xl font-bold">
          <div>
            <div className="border-t-4 border-[#2B1B12] w-4 mb-[-6px]"></div>
            <span> TheEstate </span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><a href="/home" className="hover:text-gray-800">Home</a></li>
          <li><a href="/services" className="hover:text-gray-800">Service</a></li>
          <li><a href="/agents" className="hover:text-gray-800">Agents</a></li>
          <li><a href="/contact" className="hover:text-gray-800">Contact</a></li>
        </ul>

        {/* Desktop Icons & Button */}
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="w-5 h-5" />
          <FaUser className="w-5 h-5" />
          <button className="bg-[#2B1B12] text-white px-4 py-2 rounded-md hover:bg-[#3c2b1c]">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <a href="/home" className="block font-medium hover:text-gray-800">Home</a>
          <a href="/services" className="block font-medium hover:text-gray-800">Service</a>
          <a href="/agents" className="block font-medium hover:text-gray-800">Agents</a>
          <a href="/contact" className="block font-medium hover:text-gray-800">Contact</a>
          <div className="flex justify-center space-x-4 mt-2">
            <FaSearch className="w-5 h-5" />
            <FaUser className="w-5 h-5" />
          </div>
          <button className="bg-[#2B1B12] text-white px-4 py-2 rounded-md mt-2">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
