import React from "react";
import { Button } from "./ui/button";

const TrustedBySection = () => {
  // Mock company logos - using placeholder rectangles with company initials
  const companies = [
    { name: "Liberty Mutual", initial: "LM", color: "bg-blue-600" },
    { name: "AIG", initial: "AIG", color: "bg-red-600" },
    { name: "Chubb", initial: "CHB", color: "bg-purple-600" },
    { name: "Travelers", initial: "TRV", color: "bg-green-600" },
    { name: "Zurich", initial: "ZUR", color: "bg-orange-600" },
    { name: "Hartford", initial: "HTF", color: "bg-indigo-600" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Testimonial Quote */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm mb-8">
            <span className="text-sm font-medium text-gray-600">Testimonial</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Trusted by leading commercial lines MGAs
          </h2>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            Including the largest MGA in the United States, the biggest surplus lines 
            exchange and a fast growing insurtech company.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div className={`${company.color} w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <span className="text-white font-bold text-sm">{company.initial}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {company.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            className="!bg-[#6A5ACD] hover:!bg-[#5A4ABD] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Join leading MGAs using FurtherAI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;