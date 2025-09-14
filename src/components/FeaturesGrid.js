import React from "react";
import { Zap, Target, CheckCircle2 } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Instant Policy Comparison",
      description: "Our AI-powered comparisons instantly spot discrepancies, reduce manual effort, and drive efficiency—delivering up to 400% ROI within a few months.",
      background: "bg-gradient-to-br from-orange-400 to-orange-500",
      textColor: "text-white"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Optimize Every Workflow", 
      description: "From claims validation to compliance checks, boost compliance accuracy & speed decision-making.",
      background: "bg-gradient-to-br from-[#6A5ACD] to-[#4A3A9D]",
      textColor: "text-white"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#6A5ACD]" />,
      title: "30x Faster Processing",
      description: "Transform your client intake 30X faster so you can focus on risk evaluation.",
      background: "bg-gradient-to-br from-blue-400 to-blue-500", 
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            FurtherAI is trusted by
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.background} ${feature.textColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="space-y-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-lg w-fit">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>
                
                <p className="text-sm opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;