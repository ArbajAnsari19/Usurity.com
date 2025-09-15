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
    'Risk Assessment': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-[#6A5ACD] mb-[70px] font-serif">Risk Assessment</h2>
          <p className="text-gray-700 text-lg mb-8">
            An AI assistant simulates an underwriter’s initial review to surface high-risk portfolios and accelerate decisioning across multiple programs. It aggregates property data, renovation history, occupancy, and external records to present a single risk snapshot.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Example impact (projected)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>Faster triage of high-risk submissions</li>
              <li>Reduced manual review time; improved decision consistency</li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Decision / Recommendation</h3>
              <p className="text-gray-700 text-sm">Decline or hold underwriting unless renovations are confirmed and vacancy data is provided.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Issues</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Building age violation: 78% of TIV are pre-1972 properties without renovations (limit = 10%).</li>
                <li>Occupancy missing: Cannot confirm required 80% occupancy.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Considerations</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Location: Los Angeles, CA — not excluded.</li>
                <li>Pricing: Target rate (0.45–0.50) and deductibles appear reasonable, but coverage specifics are incomplete.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Steps</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Verify renovations (roof, electrical, plumbing, HVAC).</li>
                <li>Confirm occupancy meets 80% requirement.</li>
                <li>Reassess once supporting documents received.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    'Policy Analysis': (
        <div className="flex flex-col lg:flex-row gap-8 p-8">
          {/* Left Panel */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-[#6A5ACD] mb-[70px] font-serif">Policy Analysis</h2>
            <p className="text-gray-700 text-lg mb-8">
              The AI reviews policy wordings, endorsements, and bind orders, comparing new submissions with existing program rules to detect conflicts, coverage gaps, or unintended double coverage.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Example impact (projected)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                <li>Faster bind checks and fewer post-binding corrections</li>
                <li>Consistent policy interpretation across underwriters</li>
              </ul>
            </div>
          </div>
  
          {/* Right Panel */}
          <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Decision / Recommendation</h3>
                <p className="text-gray-700 text-sm">Hold binding until discrepancies are resolved or apply conditional bind with documented exceptions.</p>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Issues</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Ambiguous endorsement language that may broaden coverage.</li>
                  <li>Overlapping coverages between endorsements and main policy.</li>
                  <li>Missing bind order verification details.</li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Considerations</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Confirm policy limits and exclusions against program rules.</li>
                  <li>Check historical claims tied to similar wording.</li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Steps</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Request clarified endorsements and redlines.</li>
                  <li>Run RAG to fetch precedent policies and regulatory citations.</li>
                  <li>Apply conditional bind or request underwriter sign-off.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    
      'Compliance Review': (
        <div className="flex flex-col lg:flex-row gap-8 p-8">
          {/* Left Panel */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-[#6A5ACD] mb-[70px] font-serif">Compliance Review</h2>
            <p className="text-gray-700 text-lg mb-8">
              The AI continuously scans submissions and policies for regulatory and internal compliance issues — licensing, sanctions, data-privacy flags, and jurisdictional restrictions — and surfaces items requiring legal or compliance attention.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Example impact (projected)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                <li>Faster regulatory checks at scale</li>
                <li>Reduced compliance breach risk</li>
              </ul>
            </div>
          </div>
  
          {/* Right Panel */}
          <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Decision / Recommendation</h3>
                <p className="text-gray-700 text-sm">Flag for compliance review and pause binding where regulatory criteria are unmet.</p>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Issues</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Missing proof of licensing for an intermediary or program.</li>
                  <li>Potential sanctions or PEP (politically exposed person) exposure in insured party.</li>
                  <li>Data residency/privacy concerns for certain policyholder records.</li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Considerations</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Check country/state-specific clauses and recent regulatory guidance.</li>
                  <li>Validate data handling procedures for personally identifiable information.</li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Steps</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Run automated sanctions and licensing checks.</li>
                  <li>Retrieve relevant regulations via RAG and attach evidentiary context.</li>
                  <li>Escalate to compliance officer with summarized findings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),

    'Claims Management': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-[#6A5ACD] mb-[70px] font-serif">Claims Management</h2>
          <p className="text-gray-700 text-lg mb-8">
            From FNOL through settlement, the AI triages claims, estimates severity using photos and historical data, and identifies cases for subrogation or fraud investigation, enabling faster, prioritized workflows.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Example impact (projected)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>Faster triage and settlement on simple claims</li>
              <li>Reduced leakage via early fraud/subrogation detection</li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Decision / Recommendation</h3>
              <p className="text-gray-700 text-sm">Fast-track straightforward claims; escalate high-risk or complex claims for detailed investigation.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Issues</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>FNOL incomplete or inconsistent (missing date, cause, or claimant info).</li>
                <li>Photo evidence insufficient to estimate damage.</li>
                <li>Pattern indicators suggesting potential fraud or subrogation opportunity.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Considerations</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Subrogation potential: presence of third-party liability or supporting evidence.</li>
                <li>Urgency: potential for business interruption or large loss exposure.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Steps</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Initiate FNOL follow-up to collect missing fields.</li>
                <li>Order vendor inspection or request additional imaging.</li>
                <li>Open subrogation workflow where applicable and preserve evidence.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    'Data Processing': (
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-[#6A5ACD] mb-[70px] font-serif">Data Processing</h2>
          <p className="text-gray-700 text-lg mb-8">
            The AI normalizes and extracts structured data from unstructured sources (PDFs, SOVs, loss runs), deduplicates records, and prepares clean datasets for underwriting, pricing, and analytics pipelines.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Example impact (projected)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>Improved data quality across systems</li>
              <li>Faster downstream analytics and model performance</li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Decision / Recommendation</h3>
              <p className="text-gray-700 text-sm">Integrate and normalize incoming data before automated underwriting decisions; flag low-confidence extractions for human review.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Issues</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>OCR / extraction errors from low-quality scans.</li>
                <li>Inconsistent field mapping across carriers/programs.</li>
                <li>Duplicate or incomplete records.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Considerations</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Maintain provenance metadata for regulatory audits.</li>
                <li>Implement confidence thresholds for automated acceptance vs human validation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Steps</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>Normalize fields and map to canonical schema.</li>
                <li>Run data quality checks and surface low-confidence items to reviewers.</li>
                <li>Feed cleaned data into underwriting models and monitor drift.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 sm:mb-12 bg-gray-100 rounded-xl p-1 sm:p-2 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300 whitespace-nowrap
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