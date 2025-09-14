import React from "react";
import { Clock, Users, AlertCircle, CheckCircle, Zap, Shield } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Insurance teams are drowning in busy work
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Teams are being asked to underwrite more, audit faster, and manage increased claims
            volume - all while ensuring compliance with everchanging regulations.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Legacy Way */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Way</h3>
            </div>
            
            {/* Mock Spreadsheet Interface */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500">Excel - Insurance Data</span>
              </div>
              
              {/* Fake Spreadsheet Rows */}
              <div className="space-y-2">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex space-x-1">
                    {[...Array(6)].map((_, cellIndex) => (
                      <div 
                        key={cellIndex} 
                        className={`h-6 rounded ${
                          index === 4 || cellIndex < 3 ? 'bg-red-200' : 'bg-gray-100'
                        }`}
                        style={{ width: cellIndex === 0 ? '60px' : '80px' }}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legacy Pain Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Manual Processing</p>
                  <p className="text-sm text-gray-600">Hours spent on data entry and validation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Error Prone</p>
                  <p className="text-sm text-gray-600">High risk of human errors in critical processes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Resource Heavy</p>
                  <p className="text-sm text-gray-600">Requires large teams for basic operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* The FurtherAI Way */}
          <div className="bg-gradient-to-br from-[#2D5A3D] to-[#1E3A28] rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">The Usurity AI Way</h3>
            </div>
            
            {/* Mock FurtherAI Dashboard */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-black text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">
                    F
                  </div>
                  <span className="text-sm text-white">Usurity AI</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-white opacity-80">AI Assistant</span>
                </div>
              </div>
              
              {/* Dashboard Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">Property Submissions</span>
                  </div>
                  <span className="text-xs text-green-400">✓ Processed</span>
                </div>
                
                <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">Policy Comparison</span>
                  </div>
                  <span className="text-xs text-green-400">✓ Completed</span>
                </div>
                
                <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-white">Claims Intake</span>
                  </div>
                  <span className="text-xs text-yellow-400">⚡ Processing</span>
                </div>
                
                <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">Underwriting Audit</span>
                  </div>
                  <span className="text-xs text-green-400">✓ Validated</span>
                </div>
                
                <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">Auto Submissions</span>
                  </div>
                  <span className="text-xs text-green-400">✓ Ready</span>
                </div>
              </div>
            </div>

            {/* FurtherAI Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <p className="font-medium text-white">30x Faster Processing</p>
                  <p className="text-sm text-white opacity-80">AI automates data extraction and validation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <p className="font-medium text-white">95% Accuracy</p>
                  <p className="text-sm text-white opacity-80">Machine learning reduces errors significantly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <p className="font-medium text-white">400% ROI</p>
                  <p className="text-sm text-white opacity-80">Proven returns within months of implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;