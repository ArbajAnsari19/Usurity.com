import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FileText, Scale, Shield, Users, Mail, Globe, Cpu, Copyright, Handshake, Lock, DollarSign, RefreshCw } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            These terms govern your access to and use of our AI-powered workspace and related services.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Effective date: 18 September 2025
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Agreement */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                These Terms of Use (the “Terms”) govern your access to and use of the website(s), product demo(s), and AI-powered workspace and related services (collectively, the “Services”) offered by Masteryoda Solutions Pvt. Ltd. (doing business as “CUNE”) (“CUNE,” “we,” “us,” or “our”).
              </p>
              <p>
                By accessing or using the Services, you agree to be bound by these Terms. If you are using the Services on behalf of an organization, you agree to these Terms for that organization and represent that you have authority to bind that organization to these Terms. If you do not agree, do not use the Services.
              </p>
            </div>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to the Terms</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may update these Terms from time to time. The updated Terms are effective when posted. Your continued use of the Services after the updated Terms are posted constitutes your acceptance of the changes.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility and Accounts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-[#6A5ACD] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eligibility</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>You must be at least 13 years old to use the Services.</li>
                  <li>If you are under 18, you may use the Services only with parent or guardian involvement.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-[#6A5ACD] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Accounts</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>You must provide accurate, current, and complete information.</li>
                  <li>You are responsible for all activities under your account and keeping credentials confidential.</li>
                  <li>Promptly notify us of any unauthorized use.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customer Agreements */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Agreements and Conflicts</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you or your organization have executed a separate agreement with us (e.g., Master Services Agreement, Order Form, or Data Processing Addendum), that agreement governs to the extent of any conflict with these Terms for the Services covered by that agreement.
            </p>
          </div>

          {/* Acceptable Use */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptable Use</h2>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Prohibited Activities</h3>
              <ul className="list-disc pl-5 space-y-2 text-red-800">
                <li>Copy, modify, host, sublicense, or resell the Services except as permitted.</li>
                <li>Access the Services to build a competing product or for benchmarking without consent.</li>
                <li>Reverse engineer, decompile, decrypt, disassemble, or attempt to derive source code.</li>
                <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                <li>Upload or transmit malware or destructive code.</li>
                <li>Use the Services to violate law or third-party rights.</li>
                <li>Bypass or circumvent security or rate-limiting features.</li>
                <li>Misrepresent your identity or affiliation.</li>
                <li>Engage in high-risk use without appropriate human oversight.</li>
              </ul>
            </div>
          </div>

          {/* Your Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Content and Customer Content</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Customer Content is owned by the customer. We process it only as instructed and per agreement/DPA.</li>
              <li>User Content (like feedback) is licensed to us for operating, maintaining, and improving the Services.</li>
              <li>You are responsible for having all necessary rights to submit your content.</li>
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Features and Outputs</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Cpu className="w-6 h-6 text-[#6A5ACD] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Important Notes</h3>
              </div>
              <p className="text-gray-700 mb-2">Outputs may be probabilistic and can contain errors. Human oversight is required.</p>
              <p className="text-gray-700 mb-2">Customer Content is not used to train publicly available foundation models.</p>
              <p className="text-gray-700">Do not rely on outputs for professional advice. They are for informational purposes only.</p>
            </div>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services and Integrations</h2>
            <p className="text-lg text-gray-700">
              The Services may interoperate with third-party products and services. Their use is governed by their terms and privacy policies; we are not responsible for them.
            </p>
          </div>

          {/* IP */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <Copyright className="w-8 h-8 text-[#6A5ACD] mr-4 mt-1" />
              <div>
                <p className="text-gray-700 mb-2">
                  The Services, documentation, and all related IP are owned by CUNE and its licensors. Except as expressly granted, no rights are granted.
                </p>
                <p className="text-gray-700 mb-2">
                  Feedback may be used without restriction or obligation to you.
                </p>
                <p className="text-gray-700">
                  Trademarks and logos remain property of their owners; no license is granted without written consent.
                </p>
              </div>
            </div>
          </div>

          {/* Confidentiality */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Confidentiality</h2>
            <p className="text-lg text-gray-700">
              If you receive non-public information from us marked confidential, you must protect it with reasonable care and use it only to access the Services.
            </p>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy</h2>
            <p className="text-lg text-gray-700">
              Our Privacy Policy describes how we collect and use personal information. By using the Services, you acknowledge this processing.
            </p>
          </div>

          {/* Fees */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fees, Trials, and Taxes</h2>
            <p className="text-lg text-gray-700">
              If you purchase paid Services, you agree to pay all specified fees. Fees are non-refundable unless required by law. You are responsible for applicable taxes. We may suspend or terminate access for non-payment.
            </p>
          </div>

          {/* Service Changes */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Changes; Beta Features</h2>
            <p className="text-lg text-gray-700">
              We may modify or discontinue the Services or any feature at any time. Beta features are provided “AS IS,” may be unstable, and may have additional terms.
            </p>
          </div>

          {/* Disclaimers */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimers</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <Scale className="w-8 h-8 text-yellow-600 mb-4" />
              <p className="text-yellow-800">
                The Services are provided “AS IS” and “AS AVAILABLE.” We disclaim all warranties, express or implied, including merchantability, fitness for purpose, and non-infringement.
              </p>
              <p className="text-yellow-800 mt-2">
                We do not warrant uninterrupted or error-free operation, or accuracy of outputs.
              </p>
            </div>
          </div>

          {/* Limitation */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <p className="text-lg text-gray-700">
              To the maximum extent permitted by law, CUNE will not be liable for indirect, incidental, or consequential damages. Aggregate liability is limited to the greater of (A) fees paid in the past 12 months, or (B) USD $1,000.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <Handshake className="w-8 h-8 text-[#6A5ACD] mr-4 mt-1" />
              <p className="text-gray-700">
                You will defend, indemnify, and hold harmless CUNE and its affiliates against claims, losses, and expenses from your Content, your use of the Services, or your violation of law or these Terms.
              </p>
            </div>
          </div>

          {/* Export & Compliance */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Export, Sanctions, and Anti-Corruption</h2>
            <p className="text-lg text-gray-700">
              You must comply with applicable export, sanctions, and anti-corruption laws and confirm you are not restricted under such laws.
            </p>
          </div>

          {/* Suspension */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Suspension and Termination</h2>
            <p className="text-lg text-gray-700">
              We may suspend or terminate your access if you violate these Terms, pose a security or legal risk, or for non-payment. Upon termination, your right to use the Services ceases immediately.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Dispute Resolution</h2>
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-[#6A5ACD] mr-4 mt-1" />
              <div>
                <p className="text-gray-700 mb-2">These Terms are governed by the laws of India.</p>
                <p className="text-gray-700">Courts in Bengaluru, Karnataka, India have exclusive jurisdiction. Both parties will attempt good-faith discussions for 30 days before filing suit.</p>
              </div>
            </div>
          </div>

          {/* Notices */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notices</h2>
            <p className="text-lg text-gray-700 mb-2">
              Legal notices to CUNE must be sent to:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Email:</strong> hello@getcune.com</p>
              <p><strong>Address:</strong> Masteryoda Solutions Pvt. Ltd., Mantri Commercio Tower-A, Marathahalli - Sarjapur Outer Ring Rd, Kariyammana Agrahara, Bellandur, Bengaluru, Karnataka 560103</p>
              <p><strong>Website:</strong> <a href="https://getcune.com" className="text-[#6A5ACD] font-medium">https://getcune.com</a></p>
            </div>
          </div>

          {/* Miscellaneous */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Miscellaneous</h2>
            <p className="text-lg text-gray-700">
              These Terms are the entire agreement between you and CUNE regarding the Services. If any provision is held invalid, the remainder continues in effect. You may not assign these Terms without consent. We may assign in connection with merger, acquisition, or sale of assets. No agency, partnership, or joint venture is created by these Terms.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;