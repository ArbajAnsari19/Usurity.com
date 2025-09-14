import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesGrid from "../components/FeaturesGrid";
import SolutionsTabs from "../components/SolutionsTabs";
import TrustedBySection from "../components/TrustedBySection";
import ComparisonSection from "../components/ComparisonSection";
import TestimonialsSection from "../components/TestimonialsSection";
import IndustryCoverageSection from "../components/IndustryCoverageSection";
import SecuritySection from "../components/SecuritySection";
import FinalCtaSection from "../components/FinalCtaSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {/* <FeaturesGrid /> */}
      {/* <TrustedBySection /> */}
      <ComparisonSection />
      <TestimonialsSection />
      <SolutionsTabs />
      <SecuritySection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;