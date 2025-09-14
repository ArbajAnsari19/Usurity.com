import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      metric: "2X",
      metricDescription: "Increase in lead generation",
      quote: "I really like what FurtherAI is doing in the AI world. Gonna have a big impact in insurance for sure especially in ensuring right risk is underwritten.",
      author: "President, Commercial Property",
      company: "MGA with $1.5B in Premiums"
    },
    {
      metric: "30X",
      metricDescription: "Faster processing speed",
      quote: "FurtherAI has transformed how we handle submissions. What used to take hours now happens in minutes with incredible accuracy.",
      author: "VP of Underwriting",
      company: "Major Insurance Carrier"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading insurance companies are transforming their operations with FurtherAI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Metric */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#2D5A3D] mb-2">
                  {testimonial.metric}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {testimonial.metricDescription}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-[#2D5A3D] mb-4" />
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