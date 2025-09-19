import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building2, Users, Target, Zap, Shield, TrendingUp } from "lucide-react";

const AboutPage = () => {
  const teamExperience = [
    {
      name: "Mitacs",
      logo: "https://www.mitacs.ca/wp-content/uploads/2023/11/Mitacs_logo_blue.png",
      description: "Research & Innovation"
    },
    {
      name: "WorldQuant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/WorldQuant_Text_Logo_2022.jpg/500px-WorldQuant_Text_Logo_2022.jpg",
      description: "Quantitative Finance"
    },
    {
      name: "Armilla AI",
      logo: "https://cdn.prod.website-files.com/65e15cf052fdefda5f7d51c3/65e18c0f21c0aa06fe3c43a2_logo.svg",
      description: "Insurance Technology"
    },
    {
      name: "CoverTree",
      logo: "https://covertree.com/wp-content/uploads/2024/03/Logo-Covertree.svg",
      description: "Insurance Technology"
    },
    {
      name: "JM Financial",
      logo: "https://jmfl.com/Content/assets/images/logo.png",
      description: "Financial Services"
    },
    {
      name: "Swiss Re",
      logo: "https://imgs.search.brave.com/pET-beuV-9t5IVu6lR5Il8EBiZ7oZPheJQZq1BJtTCc/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8x/MS9zd2lzc19yZS1s/b2dvX2JyYW5kbG9n/b3MubmV0X3VpYzVu/LTUxMngxMjAucG5n",
      description: "Insurance"
    },
    {
      name: "Amazon",
      logo: "https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png",
      description: "Technology"
    },
    {
      name: "Liberty Mutual Insurance",
      logo: "https://imgs.search.brave.com/9r8YZtE_IW66lOjFDRBtdOIFC_7YrSJ7JvEG749g718/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1saWJlcnR5/LW11dHVhbC1pbnN1/cmFuY2UtbG9nb2xv/Z29icmFuZC1sb2dv/aWNvbnNsb2dvcy0y/NTE1MTk5Mzk2OTU0/cHF5dS5wbmc",
      description: "Insurance Technology"
    },
    {
      name: "KPMG",
      logo: "https://imgs.search.brave.com/30JFAPMMknUIo62hekhXxIZ_4CTooq86fu5hZ96CmUA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDgvS1BNRy1Mb2dv/LTUwMHgyODEucG5n",
      description: "Consulting"
    },

  ];

  const getLogoHeightClass = (companyName) => {
    const name = (companyName || "").toLowerCase();
    if (name.includes("kpmg") || name.includes("liberty mutual")) {
      return "max-h-16"; // bump height for smaller original assets
    }
    return "max-h-12";
  };

  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Mission-Driven",
      description: "Transforming insurance operations through intelligent automation"
    },
    {
      icon: <Users className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Expert Team",
      description: "Seasoned insurance operators and AI experts working together"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Innovation",
      description: "Building advanced AI solutions for commercial insurance"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Trust & Security",
      description: "Enterprise-grade security and compliance standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming insurance operations through intelligent automation and AI-powered solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-[#6A5ACD] mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At CUNE AI, the belief is that just like energy, insurance fundamentally shapes the global economy—its cost and efficiency ripple through every business and household. CUNE AI harnesses artificial intelligence to create smarter, faster, and more cost-effective insurance operations, delivering tangible benefits industry-wide.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              CUNE AI brings together seasoned insurance operators and AI experts, united by the goal of unlocking unprecedented efficiencies for commercial insurers. The company is building an advanced AI Insurance Assistant—think ChatGPT, but custom-built for commercial insurance—automating high-touch workflows such as submission processing, policy comparison, compliance checks, and underwriting audits. The result is that insurers, brokers, and underwriters can focus on strategic decisions and high-value relationships, rather than repetitive manual tasks.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              By integrating intelligent automation, CUNE AI empowers insurance teams to boost productivity, reduce operating costs, and improve accuracy—placing it at the forefront of the emerging AI insurance technology sector.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600">Core values that guide our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team's Experience</h2>
            <p className="text-xl text-gray-600">Behind every logo is real work, real wins, and real lessons.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {teamExperience.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-center">
                  <div className="mb-4 flex justify-center items-center h-16">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className={`${getLogoHeightClass(company.name)} max-w-full object-contain`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="text-2xl font-bold text-gray-400 hidden">{company.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
                  <p className="text-gray-600 text-sm">{company.description}</p>
                </div>
              </div>
            ))}
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
          <button onClick={() => openCalendly()} className="bg-white text-[#6A5ACD] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
