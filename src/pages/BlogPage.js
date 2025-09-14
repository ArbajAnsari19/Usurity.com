import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  BookOpen, 
  Clock, 
  Mail, 
  ArrowRight,
  PenTool,
  Users,
  TrendingUp,
  Lightbulb
} from "lucide-react";

const BlogPage = () => {
  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Expert Insights",
      description: "Deep dives into insurance technology and AI innovations"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Industry Trends",
      description: "Latest developments in commercial insurance and automation"
    },
    {
      icon: <Users className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Customer Stories",
      description: "Real-world success stories from our insurance partners"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#6A5ACD]" />,
      title: "Best Practices",
      description: "Actionable tips for modernizing insurance operations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <BookOpen className="w-20 h-20 text-[#6A5ACD] mx-auto mb-6" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Blog
          </h1>
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-[#6A5ACD] rounded-full"></div>
              <div className="w-2 h-2 bg-[#6A5ACD] rounded-full"></div>
              <div className="w-2 h-2 bg-[#6A5ACD] rounded-full"></div>
            </div>
            <p className="text-xl text-[#6A5ACD] font-semibold">
              Stay tuned for insightful content
            </p>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're crafting valuable insights, industry trends, and expert perspectives on AI-powered insurance solutions. 
            Get ready for content that transforms how you think about commercial insurance.
          </p>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <div className="w-24 h-1 bg-[#6A5ACD] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">Content that drives innovation in insurance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <Mail className="w-12 h-12 text-[#6A5ACD] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Be the First to Know
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new insights, case studies, and industry updates. 
              Join our community of insurance professionals driving innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5ACD] focus:border-transparent outline-none"
              />
              <button className="bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Clock className="w-12 h-12 text-[#6A5ACD] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Launch Timeline</h2>
            <p className="text-lg text-gray-600">We're working hard to bring you exceptional content</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-[#6A5ACD] rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Strategy & Planning</h3>
                <p className="text-gray-600">Developing comprehensive content themes and editorial calendar</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Interviews & Research</h3>
                <p className="text-gray-600">Gathering insights from industry leaders and technical experts</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Platform Development</h3>
                <p className="text-gray-600">Building a seamless reading experience with advanced features</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch & Community Building</h3>
                <p className="text-gray-600">Going live with our first articles and building our reader community</p>
              </div>
            </div>
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
            While you wait for our blog, explore our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#6A5ACD] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#6A5ACD] transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
