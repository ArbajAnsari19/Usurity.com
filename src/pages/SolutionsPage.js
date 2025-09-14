import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  FileText, 
  Shield, 
  BarChart3, 
  Building2, 
  FileCheck,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Users
} from "lucide-react";

const SolutionsPage = () => {

  const solutions = [
    {
      icon: (
        <div className="relative w-10 h-10">
          {/* Document lines */}
          <div className="absolute top-1 left-1 w-6 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-2.5 left-1 w-5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-4 left-1 w-4 h-0.5 bg-white rounded-full"></div>
          {/* Checkmark */}
          <div className="absolute top-5.5 left-2 w-2 h-0.5 bg-white rounded-full transform rotate-45"></div>
          <div className="absolute top-6 left-1.5 w-1.5 h-0.5 bg-white rounded-full transform -rotate-45"></div>
          {/* Diamond arrow */}
          <div className="absolute bottom-1 left-3 w-2 h-2 bg-white transform rotate-45"></div>
          <div className="absolute bottom-0.5 left-4 w-1 h-1 bg-white transform rotate-45"></div>
        </div>
      ),
      iconBg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      title: "Submissions Processing",
      description: "An MGA partnered with Usurity AI for 30x faster submissions & 200%+ efficiency gains"
    },
    {
      icon: (
        <div className="relative w-10 h-10">
          {/* Bar chart */}
          <div className="absolute bottom-1 left-1 w-1 h-3 bg-white rounded-sm"></div>
          <div className="absolute bottom-1 left-2.5 w-1 h-4 bg-white rounded-sm"></div>
          <div className="absolute bottom-1 left-4 w-1 h-2 bg-white rounded-sm"></div>
          {/* Person icon */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-3 right-0.5 w-3 h-2 bg-white rounded-sm"></div>
          {/* Arrows */}
          <div className="absolute top-5 right-1 w-1 h-1 bg-white transform rotate-45"></div>
          <div className="absolute top-6 right-2 w-1 h-1 bg-white transform -rotate-45"></div>
        </div>
      ),
      iconBg: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600",
      title: "Underwriting Audit",
      description: "A reinsurer cut audit time 45%, from 200h to 110h per MGA, boosting compliance & decisions."
    },
    {
      icon: (
        <div className="relative w-10 h-10">
          {/* Vertical bars */}
          <div className="absolute bottom-1 left-1 w-1.5 h-3 bg-white rounded-sm"></div>
          <div className="absolute bottom-1 left-3 w-1.5 h-5 bg-white rounded-sm"></div>
          <div className="absolute bottom-1 left-5 w-1.5 h-2 bg-white rounded-sm"></div>
          {/* Comparison lines */}
          <div className="absolute top-1 left-0.5 w-6 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-2 left-1 w-4 h-0.5 bg-white rounded-full"></div>
        </div>
      ),
      iconBg: "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500",
      title: "Policy Comparison & Checks",
      description: "An insurer used Usurity AI to revamp policy management & saw 400% ROI in months"
    },
    {
      icon: (
        <div className="relative w-10 h-10">
          {/* Central hexagon */}
          <div className="absolute top-3 left-3 w-4 h-4 bg-white transform rotate-45 rounded-sm"></div>
          <div className="absolute top-4 left-4 w-2 h-2 bg-gray-300 transform rotate-45 rounded-sm"></div>
          {/* Connected nodes */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full"></div>
          {/* Connection lines */}
          <div className="absolute top-2 left-2 w-2 h-0.5 bg-white transform rotate-45"></div>
          <div className="absolute top-2 right-2 w-2 h-0.5 bg-white transform -rotate-45"></div>
        </div>
      ),
      iconBg: "bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-600",
      title: "Complex Property SOV Intake",
      description: "A carrier boosted quote speed, achieving 646% ROI with efficiency, accuracy & scalability"
    },
    {
      icon: (
        <div className="relative w-10 h-10">
          {/* Document folder */}
          <div className="absolute top-2 left-1 w-6 h-5 bg-white rounded-sm"></div>
          <div className="absolute top-1 left-2 w-5 h-4 bg-gray-200 rounded-sm"></div>
          {/* Document icon inside */}
          <div className="absolute top-3 left-3 w-3 h-3 bg-white rounded-sm"></div>
          <div className="absolute top-3.5 left-3.5 w-2 h-2 bg-gray-300 rounded-sm"></div>
          {/* Text lines */}
          <div className="absolute bottom-1 left-2 w-3 h-0.5 bg-white rounded-full"></div>
          <div className="absolute bottom-0.5 left-2 w-2 h-0.5 bg-white rounded-full"></div>
        </div>
      ),
      iconBg: "bg-gradient-to-br from-slate-500 via-gray-600 to-slate-700",
      title: "Claims Processing",
      description: "A Usurity AI Claim Intake hit 90% automation, $360k savings & 10x faster processing"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-7 h-7 text-[#6A5ACD]" />,
      text: "Dramatically reduce manual effort and operational costs"
    },
    {
      icon: <Clock className="w-7 h-7 text-[#6A5ACD]" />,
      text: "Accelerate submission and claims processing by 10x faster"
    },
    {
      icon: <Target className="w-7 h-7 text-[#6A5ACD]" />,
      text: "Enhance underwriting precision and ensure full compliance"
    },
    {
      icon: <Users className="w-7 h-7 text-[#6A5ACD]" />,
      text: "Empower teams to focus on high-value strategic initiatives"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Customer Stories
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Purpose-built for insurance, trusted by the industry's best.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Discover how leading carriers and Managing General Agents (MGAs) accelerate growth and scale faster with Usurity AI's powerful AI-driven workflows. Our AI Assistant automates critical commercial insurance processes—submission processing, policy comparison, underwriting audits—dramatically improving operational efficiency and accuracy.
            </p>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <span className="text-lg font-semibold text-gray-900">$30B premiums processed</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <span className="text-lg font-semibold text-gray-900">20+ lines of business</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Serving 50 states</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Insurance leaders partnering with Usurity AI have transformed their workflows to:
            </h2>
            <div className="w-24 h-1 bg-[#6A5ACD] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                With proven results in faster scaling and improved customer satisfaction, Usurity AI is the trusted AI assistant enabling the future of commercial insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-sm border border-gray-200 mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Whether you underwrite, broker, or reinsure
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-[#6A5ACD] rounded-full"></div>
                <div className="w-2 h-2 bg-[#6A5ACD] rounded-full"></div>
                <div className="w-2 h-2 bg-[#6A5ACD] rounded-full"></div>
              </div>
              <p className="text-xl text-[#6A5ACD] font-semibold">
                Explore how our customers use us
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-200 cursor-pointer group">
                    <div className="flex items-start space-x-5">
                      <div className={`${solution.iconBg} p-4 rounded-xl flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}>
                        <div className="w-10 h-10 flex items-center justify-center">
                          {solution.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#6A5ACD] transition-colors">{solution.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-base">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6A5ACD] to-[#4A3A9D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Insurance Operations?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join the future of insurance with AI-powered automation
          </p>
          <button className="bg-white text-[#6A5ACD] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
