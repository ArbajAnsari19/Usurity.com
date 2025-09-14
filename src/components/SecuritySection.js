import React from "react";
import { Shield, Lock, Globe, CheckCircle, Eye, Database } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Client prompts & data are never used for training"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Completely isolated firm-specific data storage"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Regularly audited & tested by third-party security specialists"
    }
  ];

  const certifications = [
    { name: "SOC 2", icon: <Shield className="w-6 h-6" /> },
    { name: "ISO 27001", icon: <Globe className="w-6 h-6" /> },
    { name: "GDPR", icon: <Eye className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#2D5A3D] text-white px-4 py-2 rounded-full text-sm font-medium">
            Security
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise-grade security you can trust
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Security Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Security
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                That adheres to industry best practices and compliance standards.
              </p>
            </div>

            {/* Security Features List */}
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-[#2D5A3D] mt-0.5 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Security Visualization */}
          <div className="flex flex-col items-center">
            {/* Main Security Card */}
            <div className="bg-gradient-to-br from-[#2D5A3D] to-[#1E3A28] rounded-2xl p-8 w-full max-w-lg relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 gap-0.5 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="bg-white rounded-sm opacity-30"></div>
                  ))}
                </div>
              </div>

              {/* Security Features with Icons */}
              <div className="relative z-10 space-y-6">
                {/* Data Protection */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Data Protection</div>
                    <div className="text-sm opacity-90">Encrypted storage & isolation</div>
                  </div>
                </div>

                {/* Access Control */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Access Control</div>
                    <div className="text-sm opacity-90">Multi-factor authentication</div>
                  </div>
                </div>

                {/* Security Monitoring */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Security Monitoring</div>
                    <div className="text-sm opacity-90">24/7 threat detection</div>
                  </div>
                </div>
              </div>

              {/* Platform Title */}
              <div className="relative z-10 text-center mt-8 pt-6 border-t border-white border-opacity-20">
                <div className="text-white">
                  <div className="text-xl font-semibold mb-2">Secure AI Platform</div>
                  <div className="text-sm opacity-90">Enterprise-grade protection</div>
                </div>
             </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;