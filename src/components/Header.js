import React, { useState } from "react";
import openCalendly from "../lib/calendly";
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
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center  -ml-3">
            <img src="./usurity1.png" className="w-[50px] h-[40px]" />
            <h1 className="text-2xl font-bold text-[#695acdea]">CUNE AI</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
                About Us
              </Link>
              <Link to="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
                Solutions
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button 
                className="!bg-[#6A5ACD] hover:!bg-[#5A4ABD] text-white px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg text-sm lg:text-base"
                onClick={() => openCalendly()}
              >
                Book a demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/solutions" 
                  className="text-gray-600 hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <div className="pt-2">
                  <Button 
                    className="!bg-[#6A5ACD] hover:!bg-[#5A4ABD] text-white px-6 py-2 rounded-lg font-medium w-full sm:w-fit"
                    onClick={() => { setIsMenuOpen(false); openCalendly(); }}
                  >
                    Book a demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;