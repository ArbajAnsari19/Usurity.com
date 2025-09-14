import React from "react";
import AnimatedButton from "./AnimatedButton";
import { CheckCircle, Clock, Eye } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2D5A3D] to-[#1E3A28] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                transform: `translate(-50%, -50%)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-400 to-transparent opacity-20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-400 to-transparent opacity-20 rounded-tr-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg">
            <span className="text-2xl font-bold text-[#2D5A3D]">F</span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Ready to Go Further & Transform Your Insurance Ops?
        </h2>

        {/* Subheading */}
        <p className="text-xl text-white opacity-90 mb-12 leading-relaxed max-w-3xl mx-auto">
          Reclaim your time for strategic work and let our AI Assistant handle the busywork. 
          Schedule a demo to see how you can achieve more, faster.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
            <div className="hidden md:flex items-center">
              <AnimatedButton />
            </div>
        </div>
        {/* Additional Info List */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2 text-sm text-white opacity-80">
            <CheckCircle className="w-4 h-4 text-green-300" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-white opacity-80">
            <Clock className="w-4 h-4 text-blue-300" />
            <span>15-minute demo</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-white opacity-80">
            <Eye className="w-4 h-4 text-orange-300" />
            <span>See results in real-time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;