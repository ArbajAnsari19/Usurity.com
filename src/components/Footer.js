import React from "react";
import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="./Log02.png" className="w-[95px] h-[25px]" />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Transforming insurance operations with intelligent automation and AI-powered solutions for MGAs, carriers, and brokers.
            </p>
            
            {/* Social Links
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-gray-300">Navigate</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors block py-2"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-400">
            © 2025 Masteryoda Solutions Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;