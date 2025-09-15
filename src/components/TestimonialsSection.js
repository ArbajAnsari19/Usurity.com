import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      metric: "50%",
      metricDescription: "Potential reduction in manual work per process",
      quote: "Nearly 50% of manual activities across insurance processes are expected to be eliminated through use of generative AI—automating claim routing, document review, and other repetitive tasks that slow down operations",
      author: "“Gen AI insurance use cases: A comprehensive approach",
      company: "McKinsey"
    },
    {
      metric: "$160B",
      metricDescription: "Potential fraud savings by 2032",
      quote: "By implementing AI-driven technologies across the claims life cycle and integrating real-time analysis from multiple modalities, insurers could reduce fraudulent claims and save between $80 billion and $160 billion by 2032",
      author: "Property & Casualty Insurance Report",
      company: "Deloitte"
    },
    {
      metric: "60%",
      metricDescription: "of insurers improved efficiency with AI",
      quote: "AI is helping insurers drive operational efficiency and reduce costs — 60% of insurance executives reported measurable gains in efficiency after adopting AI solutions.",
      author: "“World Insurance Report",
      company: "Capgemini"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-6">
          Forward-Looking Framing 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The insurance industry is already being reshaped by AI—here’s what experts report.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Metric */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#6A5ACD] mb-2">
                  {testimonial.metric}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {testimonial.metricDescription}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-[#6A5ACD] mb-4" />
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="border-t border-gray-100 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;