"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active item based on current path
  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  const handleItemClick = (path) => {
    setActiveItem(path);
    setIsOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/team", label: "Our Team" },
    { path: "/career", label: "Career" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center group"
          onClick={() => handleItemClick("/")}
        >
          <img
            className="h-12 w-auto rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7KXe4YL8SkRgv-hmGyxlZQkAcVc4ip67fg&s"
            alt="Logo"
          />
          <span className="ml-3 text-gray-900 font-semibold text-lg tracking-tight">
            Xtreme<span className="text-orange-600">Wireless</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeItem === item.path
                  ? "text-orange-600 bg-orange-50"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              {item.label}
              {activeItem === item.path && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                activeItem === item.path
                  ? "bg-orange-50 text-orange-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
