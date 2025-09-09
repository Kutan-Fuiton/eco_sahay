import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ThreeLayerModel from './components/ThreeLayerModel';
import RevenueStreams from './components/RevenueStreams';
import CompetitiveLandscape from './components/CompetitiveLandscape';
import AIRewardPredictor from './components/AIRewardPredictor';
import EcoHubDashboard from './components/EcoHubDashboard';
import CallToAction from './components/CallToAction';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const LandingPage = () => {
  const handleLearnMore = () => {
    // Smooth scroll to three-layer model section
    const element = document.getElementById('three-layer-model');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    // Smooth scroll to AI predictor section
    const element = document.getElementById('ai-predictor');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerWithUs = () => {
    // Smooth scroll to call-to-action section
    const element = document.getElementById('call-to-action');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Eco-Sahay - Turning Waste into Wealth, Locally | AI-Powered Waste Management</title>
        <meta
          name="description"
          content="India's most comprehensive waste management ecosystem. AI-powered, community-driven platform transforming waste challenges into sustainable wealth opportunities through digital integration and local empowerment."
        />
        <meta name="keywords" content="waste management, AI, sustainability, India, eco-friendly, waste to wealth, community driven, environmental technology" />
        <meta property="og:title" content="Eco-Sahay - Turning Waste into Wealth, Locally" />
        <meta property="og:description" content="Join India's waste-to-wealth revolution with our AI-powered, community-driven ecosystem." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/landing-page" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <HeroSection
            onLearnMore={handleLearnMore}
            onGetStarted={handleGetStarted}
            onPartnerWithUs={handlePartnerWithUs}
          />

          {/* Three Layer Model */}
          <div id="three-layer-model">
            <ThreeLayerModel />
          </div>

          {/* Revenue Streams */}
          <RevenueStreams />

          {/* Competitive Landscape */}
          <CompetitiveLandscape />

          {/* AI Reward Predictor */}
          <div id="ai-predictor">
            <AIRewardPredictor />
          </div>

          {/* Eco-Hub Dashboard */}
          <EcoHubDashboard />

          {/* Call to Action */}
          <div id="call-to-action">
            <CallToAction />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-heading font-bold">Eco-Sahay</div>
                    <div className="text-sm text-white/70">Waste to Wealth</div>
                  </div>
                </div>
                <p className="text-white/70 mb-4 max-w-md">
                  Transforming India's waste management landscape through AI-powered
                  solutions, community engagement, and sustainable practices.
                </p>
                <div className="text-sm text-white/50">
                  © {new Date().getFullYear()} Eco-Sahay. All rights reserved.
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Digital Platform</li>
                  <li>Eco-Hub Operations</li>
                  <li>Community Network</li>
                  <li>AI Analytics</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>About Us</li>
                  <li>Partnerships</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default LandingPage;