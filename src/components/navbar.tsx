"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // Implement actual search logic here
    }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold bg-gray-800 bg-clip-text text-transparent">
              PROFILE WEBSITE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-300"></div>

            {/* Search with improved design */}
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search here..."
                  className="w-48 border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                </div>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm font-medium shadow-md hover:shadow-lg"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-gray-700 font-bold text-lg">
                  {isOpen ? "✕" : "☰"}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with smooth animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 pb-4 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-2 border-t border-gray-200 mt-2">
              <form onSubmit={handleSearch} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search here..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200 font-medium w-full"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}