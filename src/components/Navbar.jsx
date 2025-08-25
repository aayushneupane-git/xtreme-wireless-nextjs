"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Set mounted state to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect for navbar and top detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      setIsAtTop(scrollY < 50); // Adjust this threshold as needed
    };
    
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync activeItem with route and top position
  useEffect(() => {
    if (pathname === "/career") {
      setActiveItem("/career");
    } else if (pathname === "/") {
      // If we're at the top of homepage, highlight Home
      if (isAtTop) {
        setActiveItem("/");
      } else {
        setActiveItem("#");
      }
    }
  }, [pathname, isAtTop]);

  // Highlight active section on homepage - FIXED
  useEffect(() => {
    if (pathname !== "/" || !isMounted) return;

    const sections = ["about", "locations", "team"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, isMounted]);

  // Handle click
  const handleItemClick = (path) => {
    setActiveItem(path);
    setIsOpen(false);

    if (path === "/") {
      // Home button behavior
      if (pathname !== "/") {
        router.push("/");
      } else if (isMounted) {
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveItem("/");
      }
    } else if (path.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/" + path);
      } else if (isMounted) {
        const section = document.querySelector(path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(path);
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#locations", label: "Locations" },
    { path: "#team", label: "Our Team" },
    { path: "/career", label: "Career" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4 shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => handleItemClick("/")}
          className="flex items-center group"
        >
          <img
            className="h-12 w-auto rounded-xl"
            src="/Xtreme.png"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeItem === item.path
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-gray-700 hover:text-yellow-600"
              }`}
            >
              {item.label}
              {activeItem === item.path && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-600 rounded-full"></span>
              )}
            </button>
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

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                activeItem === item.path
                  ? "bg-yellow-50 text-yellow-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};