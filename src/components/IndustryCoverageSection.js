import React from "react";
import { Play } from "lucide-react";

const IndustryCoverageSection = () => {
  const industryLogos = [
    { name: "InsurTech Insights", className: "text-2xl font-bold text-gray-700" },
    { name: "The Insurer", className: "text-xl font-semibold text-gray-600" },
    { name: "Insurance Journal", className: "text-lg font-medium text-gray-500" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-8">
            As Seen In
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            FurtherAI in Industry Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore interviews and industry panels featuring FurtherAI across leading insurance publications and events
          </p>
        </div>

        {/* Industry Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {industryLogos.map((logo, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={logo.className}>
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#2D5A3D] to-[#1E3A28] rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Video Thumbnail Background */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Play Button */}
                <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all cursor-pointer group">
                  <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" fill="white" />
                </div>

                {/* Mock Video Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-black bg-opacity-50 rounded-lg p-3">
                    <div className="text-sm font-medium">Introduction to FurtherAI</div>
                    <div className="text-xs opacity-80">CEO discusses AI transformation in insurance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Introduction to FurtherAI
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Watch our CEO discuss how AI is transforming the insurance industry and why domain-specific solutions 
                  matter for MGAs, carriers, and brokers looking to scale efficiently.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2D5A3D] rounded-full mt-2"></div>
                  <span className="text-gray-700">How AI reduces manual underwriting by 95%</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2D5A3D] rounded-full mt-2"></div>
                  <span className="text-gray-700">Industry best practices for AI implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2D5A3D] rounded-full mt-2"></div>
                  <span className="text-gray-700">Future of insurance technology and automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCoverageSection;