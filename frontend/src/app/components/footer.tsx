"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F3] text-[#2B1B12] border-t border-[#E7D6C9] py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm text-gray-700">
            <span className="font-bold">TheEstate</span> is your decentralized
            real estate marketplace — secure, transparent, and accessible to everyone.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-gray-700">FAQ</Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-gray-700">Help Center</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Find Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Find Us</h3>
          <p className="text-sm text-gray-700">
            Nairobi, Kenya <br />
            info@theestate.com <br />
            +254 700 123 456
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://twitter.com" target="_blank" className="hover:text-gray-700">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-gray-700">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-gray-700">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t border-[#E7D6C9] pt-6">
        © {new Date().getFullYear()} TheEstate. All rights reserved.
      </div>
    </footer>
  );
}
