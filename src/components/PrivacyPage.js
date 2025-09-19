import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Eye, Lock, Database, Users, Mail, Globe, Cpu, FileClock, Baby, MapPin, Link as LinkIcon, FileText } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: 18 September 2025
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction & Scope</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This Privacy Policy explains how CUNE (“Company,” “we,” “us,” or “our”), operated by Masteryoda Solutions Pvt. Ltd., collects, uses, discloses, and safeguards personal information when you visit our website, use our product demo(s), or access our AI-powered workspace for insurance operations (collectively, the “Services”).
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-base">
                <p className="font-semibold text-gray-800 mb-2">We act as:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>A <strong>data controller</strong> for personal information we collect through our website, marketing, and account administration.</li>
                  <li>A <strong>data processor/service provider</strong> for Customer Content processed within our enterprise platform pursuant to a Data Processing Addendum (“DPA”) with our business customers.</li>
                </ul>
                <p className="mt-4 text-gray-700">If you are a Customer, your agreement with us (including the DPA) governs our processing of Customer Content on your behalf.</p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Categories of Personal Information We Collect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-[#6A5ACD] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">A. Information You Provide</h3>
                </div>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Contact details:</strong> name, business email, phone, company, role</li>
                  <li><strong>Account and profile data:</strong> username, preferences</li>
                  <li><strong>Content shared with support:</strong> tickets, attachments, feedback</li>
                  <li><strong>Marketing preferences:</strong> subscriptions, event registrations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-[#6A5ACD] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">B. Automatically Collected Information</h3>
                </div>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Device and technical data:</strong> browser/OS, device type, IP address, general location</li>
                  <li><strong>Usage and telemetry:</strong> pages visited, session duration, feature usage, crash logs</li>
                  <li><strong>Cookies and similar technologies</strong></li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sources of Personal Information</h3>
                <ul className="text-lg text-gray-700 space-y-3 list-disc pl-5">
                    <li>Directly from you (forms, emails, in-product prompts)</li>
                    <li>Automatically via the Services (telemetry, cookies)</li>
                    <li>From your employer (when they provision platform access)</li>
                    <li>From service providers and partners (e.g., analytics, payment, CRM)</li>
                    <li>From integrations you enable (e.g., email/calendar, data storage, or AMS/CRM connectors)</li>
                </ul>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="text-lg text-gray-700 space-y-3 mb-6 list-disc pl-5">
                <li><strong>Provide and secure the Services:</strong> authentication, hosting, fraud prevention, incident response</li>
                <li><strong>Operate, maintain, and improve features:</strong> including diagnostics, analytics, and quality</li>
                <li><strong>Customer support</strong> and service communications</li>
                <li><strong>Research & development</strong> for new capabilities and workflows (de-identified/aggregated where feasible)</li>
                <li><strong>Marketing:</strong> with your consent or as otherwise permitted by law; you can opt out anytime</li>
                <li><strong>Legal compliance:</strong> and enforcing terms, protecting rights, safety, and property</li>
              </ul>
            </div>
          </div>
          
          {/* AI & Automated Processing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">AI & Automated Processing</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                    <Cpu className="w-8 h-8 text-[#6A5ACD] mr-4" />
                    <h3 className="text-2xl font-semibold text-gray-900">Our Use of AI</h3>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p>We use AI models to assist with workflow automation (e.g., intake, routing, summarization) within the scope of the Services and applicable law. We implement strict access controls, encryption, and audits. We do not use Customer Content to train external foundation models.</p>
                    <p>Where possible, we anonymize or aggregate data for model quality and safety evaluations. If the Services surface automated outputs, your organization remains the decision-maker; human-in-the-loop and override mechanisms are available within the product.</p>
                </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <div className="bg-gradient-to-r from-[#6A5ACD] to-[#4A3A9D] p-8 rounded-lg text-white">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-semibold">Our Security Commitment</h3>
              </div>
              <p className="mb-6 opacity-90">We maintain administrative, organizational, and technical safeguards designed to protect personal information against unauthorized access, loss, misuse, alteration, or destruction. However, no method of transmission or storage is 100% secure.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technical Safeguards</h4>
                  <ul className="space-y-2 text-white opacity-90 list-disc pl-5">
                    <li>Encryption in transit and at rest</li>
                    <li>Strict access controls</li>
                    <li>Continuous monitoring & audits</li>
                    <li>Incident response plans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Operational Safeguards</h4>
                  <ul className="space-y-2 text-white opacity-90 list-disc pl-5">
                    <li>Alignment with ISO standards</li>
                    <li>Vendor security assessments</li>
                    <li>Data minimization practices</li>
                    <li>Regular employee training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We do not sell personal information, and we do not share it for cross-context behavioral advertising where prohibited without required notices/rights. We may share information only in the following circumstances:
              </p>
              <ul className="text-lg text-gray-700 space-y-3 mb-6 list-disc pl-5">
                <li>With <strong>service providers</strong> for hosting, analytics, communications, and security</li>
                <li>With <strong>professional advisors</strong> such as legal, audit, and insurance</li>
                <li>For <strong>compliance and safety</strong> to prevent fraud or respond to lawful requests</li>
                <li>In connection with <strong>business transfers</strong> like a merger or acquisition, where we’ll require the recipient to honor this Policy</li>
              </ul>
            </div>
          </div>
          
          {/* International Transfers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">International Transfers</h2>
            <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 p-6 rounded-lg flex items-start">
                    <Globe className="w-10 h-10 text-[#6A5ACD] mr-5 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Global Data Processing</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mt-2">
                            We may process and store data in countries other than where it originates (e.g., the United States, the EU, the UK, India). When transferring personal data internationally, we implement appropriate safeguards (such as Standard Contractual Clauses) consistent with applicable laws.
                        </p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Data Retention */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 p-6 rounded-lg flex items-start">
                    <FileClock className="w-10 h-10 text-[#6A5ACD] mr-5 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">How Long We Keep Information</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mt-2">
                            We keep personal information only as long as necessary for the purposes described in this policy, or as required by law. For Customer Content, retention follows the customer’s instructions and our DPA. We may retain limited records after account closure to comply with legal obligations, resolve disputes, and enforce agreements.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
            <p className="prose prose-lg max-w-none text-lg text-gray-700 leading-relaxed mb-6">Depending on your location, you may have rights regarding your personal information. We will not discriminate against you for exercising your rights.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Access & Control</h3>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li>Access and port your personal information</li>
                  <li>Correct inaccuracies</li>
                  <li>Delete/erase personal information</li>
                  <li>Restrict or object to processing</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Preferences</h3>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li>Withdraw consent (where processing is based on consent)</li>
                  <li>Opt out of marketing</li>
                  <li>Manage cookie preferences</li>
                </ul>
              </div>
            </div>
            <p className="prose prose-lg max-w-none text-lg text-gray-700 leading-relaxed mt-6">
                To exercise rights, contact us at <a href="mailto:hello@getcune.com" className="text-[#6A5ACD] font-medium">hello@getcune.com</a>. We may need to verify your identity.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies for authentication, analytics, feature performance, and remembering preferences. You can manage cookies via your browser settings and, where required, via our cookie banner or preference center.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do Not Track Signals:</h3>
                <p className="text-gray-700">Some browsers send “DNT” signals. We currently do not respond to DNT signals.</p>
              </div>
            </div>
          </div>
          
          {/* Children's Privacy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Children’s Privacy</h2>
            <div className="prose prose-lg max-w-none flex items-center bg-gray-50 p-6 rounded-lg">
                <Baby className="w-8 h-8 text-[#6A5ACD] mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                    The Services are not directed to children under 13. If we learn we collected personal information from a child under 13 without required consent, we will delete it.
                </p>
            </div>
          </div>
          
          {/* Regional Disclosures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Regional Disclosures</h2>
            <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                        <MapPin className="w-6 h-6 text-[#6A5ACD] mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">India (Digital Personal Data Protection Act, 2023)</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                        <li>We act as a <strong>Data Fiduciary</strong> for our own data collection and a <strong>Data Processor</strong> on behalf of our customers.</li>
                        <li>You may exercise applicable rights (e.g., access, correction, erasure, grievance redressal) by contacting our Grievance Officer.</li>
                        <li><strong>Grievance Officer (DPDP 2023):</strong> Hardik Agarwal, <a href="mailto:hello@getcune.com" className="text-[#6A5ACD]">hello@getcune.com</a></li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                        <MapPin className="w-6 h-6 text-[#6A5ACD] mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">California (CCPA/CPRA)</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                        <li>We do not “sell” personal information as defined by the CCPA/CPRA, nor do we “share” it for cross-context behavioral advertising without required notices/rights.</li>
                        <li>California residents may exercise access, deletion, and correction rights by contacting us.</li>
                    </ul>
                </div>
            </div>
          </div>
          
          {/* Third-Party Sites */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Sites & Integrations</h2>
            <div className="prose prose-lg max-w-none flex items-center bg-gray-50 p-6 rounded-lg">
                <LinkIcon className="w-8 h-8 text-[#6A5ACD] mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                    The Services may link to third-party sites or allow integrations. We don’t control third-party privacy practices; please review their policies before providing personal information.
                </p>
            </div>
          </div>
          
          {/* DPA */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Processing Addendum (DPA)</h2>
            <div className="prose prose-lg max-w-none flex items-center bg-gray-50 p-6 rounded-lg">
                <FileText className="w-8 h-8 text-[#6A5ACD] mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                    If your organization needs a DPA (including SCCs/UK IDTA and India DPDP alignment), contact <a href="mailto:hello@getcune.com" className="text-[#6A5ACD] font-medium">hello@getcune.com</a> for our standard DPA and Trust Pack.
                </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-[#6A5ACD] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Questions or Concerns?</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For any questions, security incidents, suspected misuse, or rights requests, please contact us:
              </p>
              <div className="text-gray-700 space-y-1">
                <p><strong>Company:</strong> Masteryoda Solutions Pvt. Ltd. (d/b/a CUNE)</p>
                <p><strong>Email:</strong> <a href="mailto:hello@getcune.com" className="text-[#6A5ACD] font-medium">hello@getcune.com</a></p>
                <p><strong>Address:</strong> Mantri Commercio Tower-A, Marathahalli - Sarjapur Outer Ring Rd, Kariyammana Agrahara, Bellandur, Bengaluru, Karnataka 560103</p>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to this Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                We may update this Policy from time to time. If changes are material, we will notify you by updating the “Last updated” date and, where appropriate, through the Services or email.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;