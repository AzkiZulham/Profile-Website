"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <h1 className="text-lg font-bold text-gray-800">PROFILE WEBSITE</h1>

        
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              ☰
            </button>
          </div>

        
          <div className="hidden lg:flex items-center gap-6">
            <a href="#about" className="text-gray-800 font-bold hover:text-blue-500">
              About
            </a>
            <a href="#profile" className="text-gray-800 font-bold hover:text-blue-500">
              Profile
            </a>
            <a href="#contact" className="text-gray-800 font-bold hover:text-blue-500">
              Contact
            </a>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search here"
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 placeholder-gray-400"
              />
              <button className="bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-700 text-sm">
                Search
              </button>
            </div>
          </div>
        </div>

        
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-4 pb-4">
            <a href="#about" className="text-gray-800 font-bold hover:text-blue-500">
              About
            </a>
            <a href="#profile" className="text-gray-800 font-bold hover:text-blue-500">
              Profile
            </a>
            <a href="#contact" className="text-gray-800 font-bold hover:text-blue-500">
              Contact
            </a>
            <div className="flex items-center gap-3 mt-2">
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 placeholder-gray-400"
              />
              <button className="bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-700 text-sm">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
