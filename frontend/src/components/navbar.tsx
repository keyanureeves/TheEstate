"use client";

import { useState } from 'react';
import Link from 'next/link';
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
            <span>TheEstate</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><Link href="/" className="hover:text-gray-800">Home</Link></li>
          <li><Link href="/listings" className="hover:text-gray-800">Listings</Link></li>
          <li><Link href="/agents" className="hover:text-gray-800">Agents</Link></li>
          <li><Link href="/contact" className="hover:text-gray-800">Contact</Link></li>
        </ul>

        {/* Desktop Icons & Button */}
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="w-5 h-5" />
          <FaUser className="w-5 h-5" />
          <button className="bg-[#2B1B12] text-white px-4 py-2 rounded-md hover:bg-[#3c2b1c]">
            Connect Wallet
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
          <Link href="/" className="block font-medium hover:text-gray-800">Home</Link>
          <Link href="/listings" className="block font-medium hover:text-gray-800">Listings</Link>
          <Link href="/agents" className="block font-medium hover:text-gray-800">Agents</Link>
          <Link href="/contact" className="block font-medium hover:text-gray-800">Contact</Link>
          <div className="flex justify-center space-x-4 mt-2">
            <FaSearch className="w-5 h-5" />
            <FaUser className="w-5 h-5" />
          </div>
          <button className="bg-[#2B1B12] text-white px-4 py-2 rounded-md mt-2">
            Add Listing
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
