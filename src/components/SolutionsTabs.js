import React, { useState } from 'react';
import { CheckCircle, Mail, FileText, X, ChevronDown, ChevronUp, Upload, Search, MapPin, Globe } from 'lucide-react';

const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('Risk Assessment');

  const tabs = [
    { id: 'Risk Assessment', label: 'Risk Assessment' },
    { id: 'Policy Analysis', label: 'Policy Analysis' },
    { id: 'Compliance Review', label: 'Compliance Review' },
    { id: 'Claims Management', label: 'Claims Management' },
    { id: 'Data Processing', label: 'Data Processing' },
  ];

  const tabContent = {
    'Claims Management': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-[#2D5A3D] mb-4 w-fit">
            Case Study
          </span>
          <h2 className="text-4xl font-bold text-[#2D5A3D] mb-6 font-serif">Claims Management</h2>
          <p className="text-gray-700 text-lg mb-8">
            A specialty insurer with over three consecutive years of &gt;20% premium growth and an expansion
            from five to ten insurance programs faced a critical operational bottleneck - claims workflows.
          </p>
          <button className="bg-[#2D5A3D] hover:bg-[#234A30] text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg self-start">
            Learn More
          </button>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              Claims Intake Successfully Executed
            </h3>
            <span className="text-gray-500 text-sm">5 Steps <span className="ml-1">^</span></span>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Received Submission
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Read Email
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Classified document(s) as GAP
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Extracted GAP claim information
            </li>
          </ul>
          <div className="flex items-center text-gray-700 mt-auto pt-4 border-t border-gray-200">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Outgoing Email
            <button className="ml-auto bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center">
              View <Mail className="w-4 h-4 ml-2" /> To john@johndoe.com
            </button>
          </div>
        </div>
      </div>
    ),

    'Risk Assessment': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-[#2D5A3D] mb-4 w-fit">
            Case Study
          </span>
          <h2 className="text-4xl font-bold text-[#2D5A3D] mb-6 font-serif">Risk Assessment</h2>
          <p className="text-gray-700 text-lg mb-8">
            One of the largest Managing General Agencies (MGA) in the U.S., with over $1.5 billion in premiums across 20+ insurance programs and serving more than 1 million policyholders, sought to streamline its underwriting process.
          </p>
          <button className="bg-[#2D5A3D] hover:bg-[#234A30] text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg self-start">
            Learn More
          </button>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Decline Risk</h3>
              <p className="text-gray-700 text-sm">Decline underwriting unless renovations are confirmed and vacancy data is provided.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Issues</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Building Age Violation: 78% TIV consists of pre-1972 properties without renovations; far exceeding the 10% limit.</li>
                <li>Vacancy Information Missing: This prevents confirmation of the required 80% occupancy.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Considerations</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Location & Pricing: Los Angeles, California, is not on the excluded list.</li>
                <li>Coverage Details: Reasonable target rate (0.45-0.50) and deductibles, but coverage details are missing.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Steps</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Verify renovations (roof, electrical, plumbing, HVAC) to reassess building age concern</li>
                <li>Confirm occupancy meets 80% requirement</li>
              </ol>
            </div>

            <div className="flex items-center justify-center pt-4 border-t border-gray-200">
              <button className="flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">+</span>
                </span>
                AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    ),

    'Compliance Review': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-[#2D5A3D] mb-4 w-fit">
            Case Study
          </span>
          <h2 className="text-4xl font-bold text-[#2D5A3D] mb-6 font-serif">Compliance Review</h2>
          <p className="text-gray-700 text-lg mb-8">
            A leading insurance company, responsible for supporting over 100 MGAs, faced a time-intensive and inefficient underwriting audit process. For each MGA audit, it would audit the underwriting files for about 20 portfolio companies, consuming 200 hours per MGA audit.
          </p>
          <button className="bg-[#2D5A3D] hover:bg-[#234A30] text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg self-start">
            Learn More
          </button>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Ask anything..." 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Submission_vs_Guidelines_Findings.pdf</span>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Breach_and_Risk_Analysis.xls</span>
                </div>
                <X className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Underwriting_Audit_Comparison_Report.docx</span>
                </div>
                <X className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
              <span className="w-4 h-4 bg-white rounded-sm mr-2"></span>
              Ask Further AI
            </button>
          </div>
        </div>
      </div>
    ),

    'Policy Analysis': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-[#2D5A3D] mb-4 w-fit">
            Case Study
          </span>
          <h2 className="text-4xl font-bold text-[#2D5A3D] mb-6 font-serif">Policy Analysis</h2>
          <p className="text-gray-700 text-lg mb-8">
            A mid-sized insurer with over 1,500 employees and $1 billion in annual revenue partnered with FurtherAI to streamline their policy comparison processes.
          </p>
          <button className="bg-[#2D5A3D] hover:bg-[#234A30] text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg self-start">
            Learn More
          </button>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Widgets, Inc</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Policy Forms</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Policy No: D95237113</div>
                  <div>Item 1. Named Insured: TOWN OF DANVILLE</div>
                  <div>Principal Address: 49 N Wayne St, Danville, IN 46122-1322</div>
                  <div>Item 2. Policy Period: From: 02-04-2002 To: 02-04-2023</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-300 rounded-lg mb-2">
                <span className="text-2xl font-bold text-gray-800">F</span>
              </div>
              <div className="text-sm text-gray-600 bg-gray-100 rounded-lg p-2">
                The insured names match in both locations.
              </div>
            </div>

            <div className="flex items-center justify-center pt-4 border-t border-gray-200">
              <button className="flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">+</span>
                </span>
                AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    ),

    'Data Processing': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-[#2D5A3D] mb-4 w-fit">
            Case Study
          </span>
          <h2 className="text-4xl font-bold text-[#2D5A3D] mb-6 font-serif">Data Processing</h2>
          <p className="text-gray-700 text-lg mb-8">
            A top-10 global insurance carrier with over $20B in gross written premium (GWP) and a portfolio spanning 25+ commercial insurance products partnered with FurtherAI to overhaul its Large Property unit's operational backbone.
          </p>
          <button className="bg-[#2D5A3D] hover:bg-[#234A30] text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg self-start">
            Learn More
          </button>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700">Data Processing</span>
                <span className="text-xs text-gray-500 ml-2">propertysovintake</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-3 bg-gray-100 border-b border-gray-200 text-sm font-medium text-gray-700">
                <div>Address</div>
                <div>Country</div>
                <div>Latitude</div>
                <div>Longitude</div>
              </div>
              
              <div className="max-h-64 overflow-y-auto">
                {[
                  { address: "123 Desert View Rd, Victorville, CA", country: "United States", lat: "-", lng: "-" },
                  { address: "456 Northern Lights Blvd, Fairbanks, AK", country: "United States", lat: "-", lng: "-" },
                  { address: "789 Market Street, San Francisco, CA", country: "United States", lat: "-", lng: "-" },
                  { address: "1102 Maple Leaf Way, Toronto, ON", country: "Canada", lat: "-", lng: "-" },
                  { address: "321 Ocean Drive, Miami, FL", country: "United States", lat: "-", lng: "-" },
                  { address: "654 Mountain View, Denver, CO", country: "United States", lat: "-", lng: "-" },
                  { address: "987 Broadway, New York, NY", country: "United States", lat: "-", lng: "-" },
                  { address: "147 Sunset Blvd, Los Angeles, CA", country: "United States", lat: "-", lng: "-" },
                  { address: "258 River Road, Portland, OR", country: "United States", lat: "-", lng: "-" },
                  { address: "369 Lake Street, Chicago, IL", country: "United States", lat: "-", lng: "-" },
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-3 text-sm text-gray-600 border-b border-gray-100">
                    <div>{row.address}</div>
                    <div>{row.country}</div>
                    <div>{row.lat}</div>
                    <div>{row.lng}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <button className="flex items-center">
                <ChevronUp className="w-4 h-4" />
              </button>
              <span>Showing 1 to 15 of 100 Results</span>
              <button className="flex items-center">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 bg-gray-100 rounded-xl p-2 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600 hover:bg-gray-200'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          {tabContent[activeTab]}
        </div>
      </div>
    </section>
  );
};

export default SolutionsTabs;
