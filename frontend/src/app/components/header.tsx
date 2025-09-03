"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { ConnectBtn } from "./connectButton"; // ✅ use your existing connect button

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
          <li>
            <Link href="/" className="hover:text-gray-800">
              HomePage
            </Link>
          </li>
          <li>
            <Link href="/marketplace" className="hover:text-gray-800">
              MarketPlace
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-800">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/admin" className="hover:text-gray-800">
              Admin
            </Link>
          </li>
        </ul>

        {/* Desktop Connect Button */}
        <div className="hidden md:flex items-center">
          <ConnectBtn />
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link href="/" className="block font-medium hover:text-gray-800">
            HomePage
          </Link>
          <Link
            href="/marketplace"
            className="block font-medium hover:text-gray-800"
          >
            MarketPlace
          </Link>
          <Link href="/profile" className="block font-medium hover:text-gray-800">
            Profile
          </Link>
          <Link href="/admin" className="block font-medium hover:text-gray-800">
            Admin
          </Link>
          <div className="flex justify-center mt-4">
            <ConnectBtn />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
