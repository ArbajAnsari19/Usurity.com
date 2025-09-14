import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-[#2D5A3D] text-white w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg">
                U
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">Usurity AI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About Us
              </Link>
              <Link to="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Solutions
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Blog
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button 
                className="bg-[#2D5A3D] hover:bg-[#234A30] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              >
                Book a demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                  About Us
                </Link>
                <Link to="/solutions" className="text-gray-600 hover:text-gray-900 font-medium">
                  Solutions
                </Link>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
                  Blog
                </Link>
                <Button 
                  className="bg-[#2D5A3D] hover:bg-[#234A30] text-white px-6 py-2 rounded-lg font-medium w-fit"
                >
                  Book a demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;