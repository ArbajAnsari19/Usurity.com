import React from "react";
import ScrollingStrips from "./ScrollingStrips";
import AnimatedButton from "./AnimatedButton";
import openCalendly from "../lib/calendly";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 overflow-x-hidden min-h-[90vh] flex items-center pt-20 sm:pt-24 lg:pt-0">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 pt-8 sm:pt-12 lg:pt-0">
            <div className="space-y-4 sm:space-y-6">
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trusted AI for 
                <br />
                <span className="text-[#6A5ACD]">Insurance Experts</span>
              </h1>
              
              {/* Responsive text with proper wrapping and sizing */}
              <div className="w-full text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed break-words hyphens-auto">
                <span className="font-bold text-[#6A5ACD] italic">CUNE AI</span> 
                delivers domain-specific artificial intelligence solutions tailored for Managing General Agents (MGAs), carriers, and brokers. 
                Our AI-driven platform automates critical insurance workflows including underwriting, claims management, and regulatory compliance.
              </div>
            </div>
            
            {/* Call to Action Button */}
            <div className="flex justify-center md:justify-start">
              <AnimatedButton onClick={openCalendly} />
            </div>
          </div>  

          {/* Right Column - Services Grid */}
          <div className="h-[300px] sm:h-[350px] lg:h-[400px] w-full border bg-gray-50 rounded-xl py-6 sm:py-9 px-1 mt-8 lg:mt-0 overflow-hidden">
            <ScrollingStrips />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
