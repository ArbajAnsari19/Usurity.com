import React from "react";
import { Clock, Users, AlertCircle, CheckCircle, Zap, Shield } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
          The future of insurance demands smarter operations
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Manual tasks and outdated processes no longer scale. To compete, insurers must empower teams to underwrite, audit, and process claims with speed, accuracy, and compliance at every step.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Legacy Way */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Traditional Way</h3>
            </div>
            
            {/* Mock Spreadsheet Interface */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500">Excel - Insurance Data</span>
              </div>
              
              {/* Fake Spreadsheet Rows */}
              <div className="space-y-1 sm:space-y-2 overflow-x-auto">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex space-x-1 min-w-max">
                    {[...Array(6)].map((_, cellIndex) => (
                      <div 
                        key={cellIndex} 
                        className={`h-4 sm:h-6 rounded ${
                          index === 0 || index === 2 || index === 4 || index === 6 || cellIndex < 2 ? 'bg-red-200' : 'bg-gray-100'
                        }`}
                        style={{ width: cellIndex === 0 ? '40px' : '60px' }}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legacy Pain Points */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Manual Processing</p>
                  <p className="text-xs sm:text-sm text-gray-600">Hours spent on data entry and validation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Error Prone</p>
                  <p className="text-xs sm:text-sm text-gray-600">High risk of human errors in critical processes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Resource Heavy</p>
                  <p className="text-xs sm:text-sm text-gray-600">Requires large teams for basic operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* The CUNE AI Way */}
          <div className="bg-gradient-to-br from-[rgba(188,124,228,0.35)] to-[rgba(188,124,228,0.5)] rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
  <div className="text-center mb-6 sm:mb-8">
    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black bg-white rounded-lg p-2 w-fit mx-auto">The CUNE AI Way</h3>
  </div>
  
  {/* Mock CUNE AI Dashboard - Now with solid background for better contrast */}
  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 text-gray-800">
    <div className="flex items-center justify-between mb-4">
      <img src="/Log02.png" alt="CUNE AI" className="w-40 h-10 bg-[rgba(188,124,228,0.45)] rounded-lg p-1" />
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-700">AI Assistant</span>
      </div>
    </div>
    
    {/* Dashboard Items */}
    <div className="space-y-2 sm:space-y-3">
      {/* Item 1: Increased background opacity for better separation. Changed green to lime-500 */}
      <div className="flex items-center justify-between bg-black/5 rounded-lg p-2 sm:p-3">
        <div className="flex items-center space-x-2 min-w-0">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-lime-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">Property Submissions</span>
        </div>
        <span className="text-xs text-lime-500 flex-shrink-0">✓ Processed</span>
      </div>
      
      {/* Item 2 */}
      <div className="flex items-center justify-between bg-black/5 rounded-lg p-2 sm:p-3">
        <div className="flex items-center space-x-2 min-w-0">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-lime-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">Policy Comparison</span>
        </div>
        <span className="text-xs text-lime-500 flex-shrink-0">✓ Completed</span>
      </div>
      
      {/* Item 3: Changed yellow to yellow-500 for better visibility */}
      <div className="flex items-center justify-between bg-black/5 rounded-lg p-2 sm:p-3">
        <div className="flex items-center space-x-2 min-w-0">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">Claims Intake</span>
        </div>
        <span className="text-xs text-yellow-500 flex-shrink-0">⚡ Processing</span>
      </div>
      
      {/* Item 4 */}
      <div className="flex items-center justify-between bg-black/5 rounded-lg p-2 sm:p-3">
        <div className="flex items-center space-x-2 min-w-0">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-lime-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">Underwriting Audit</span>
        </div>
        <span className="text-xs text-lime-500 flex-shrink-0">✓ Validated</span>
      </div>
      
      {/* Item 5 */}
      <div className="flex items-center justify-between bg-black/5 rounded-lg p-2 sm:p-3">
        <div className="flex items-center space-x-2 min-w-0">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-lime-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">Auto Submissions</span>
        </div>
        <span className="text-xs text-lime-500 flex-shrink-0">✓ Ready</span>
      </div>
    </div>
  </div>

  {/* CUNE AI Benefits - Text changed to white for contrast on the dark background */}
  <div className="space-y-3 sm:space-y-4">
    <div className="flex items-start space-x-2 sm:space-x-3 text-black bg-white rounded-lg p-2">
      {/* Changed green to lime-300 for better visibility on the darker purple background */}
      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-lime-300 mt-1 flex-shrink-0" />
      <div>
      <p className="font-medium text-sm sm:text-base">30x Faster Processing</p>
      <p className="text-xs sm:text-sm text-black">AI automates data extraction and validation</p>
      </div>
    </div>
    
    <div className="flex items-start space-x-2 sm:space-x-3 text-black bg-white rounded-lg p-2">
      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-lime-300 mt-1 flex-shrink-0" />
      <div>
      <p className="font-medium text-sm sm:text-base">95% Accuracy</p>
      <p className="text-xs sm:text-sm text-black">Machine learning reduces errors significantly</p>
      </div>
    </div>
    
    {/* <div className="flex items-start space-x-2 sm:space-x-3 text-black bg-white rounded-lg p-2">
      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-lime-300 mt-1 flex-shrink-0" />
      <div>
      <p className="font-medium text-sm sm:text-base">400% ROI</p>
      <p className="text-xs sm:text-sm text-black">Proven returns within months of implementation</p>
      </div>
    </div> */}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;