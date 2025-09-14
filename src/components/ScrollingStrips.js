import React from 'react';
import { TrendingUp, CheckCircle, FileText, Shield, Search, Globe, Building, Users, BarChart3, Zap, Target, Settings } from 'lucide-react';

const ScrollingStrips = () => {
  const strip1Items = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#2D5A3D]" />,
      title: "Risk Comparison",
      description: "AI-powered risk assessment and comparison tools"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#2D5A3D]" />,
      title: "Underwriting Audit",
      description: "Automated underwriting process validation"
    },
    {
      icon: <FileText className="w-6 h-6 text-[#2D5A3D]" />,
      title: "Submission Processing",
      description: "Streamlined submission intake and processing"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#2D5A3D]" />,
      title: "SOCO",
      description: "Statement of Commercial Operations management"
    },
    {
      icon: <Search className="w-6 h-6 text-[#2D5A3D]" />,
      title: "Web Research",
      description: "Intelligent web-based research capabilities"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#2D5A3D]" />,
      title: "FNOL",
      description: "First Notice of Loss processing automation"
    },
    {
      icon: <Building className="w-6 h-6 text-[#2D5A3D]" />,
      title: "Policy Analysis",
      description: "Comprehensive policy review and analysis"
    }
  ];

  const strip2Items = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Real-time Analytics",
      description: "Live data insights and performance metrics"
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Smart Automation",
      description: "Intelligent process automation workflows"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Compliance Monitoring",
      description: "Automated regulatory compliance tracking"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Team Collaboration",
      description: "Enhanced team communication and coordination"
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      title: "Process Optimization",
      description: "Continuous improvement and efficiency gains"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Quality Assurance",
      description: "Automated quality control and validation"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Performance Tracking",
      description: "Comprehensive performance monitoring and reporting"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* First strip - moving left to right */}
      <div className="flex animate-scroll-right h-[150px]">
        <div className="flex space-x-8 whitespace-nowrap">
          {[...strip1Items, ...strip1Items].map((item, index) => (
            <div
              key={`strip1-${index}`}
              className="flex items-center space-x-4 bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 min-w-[280px]"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-semibold text-sm">{item.title}</span>
                <span className="text-gray-600 text-xs">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second strip - moving right to left */}
      <div className="flex animate-scroll-left mt-4 h-[150px]">
        <div className="flex space-x-8 whitespace-nowrap">
          {[...strip2Items, ...strip2Items].map((item, index) => (
            <div
              key={`strip2-${index}`}
              className="flex items-center space-x-4 bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 min-w-[280px]"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-semibold text-sm">{item.title}</span>
                <span className="text-gray-600 text-xs">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default ScrollingStrips;
