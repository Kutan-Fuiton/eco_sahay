import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onLearnMore, onGetStarted, onPartnerWithUs }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Leaf" size={16} />
                <span>Sustainable Innovation</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Turning Waste into{' '}
                <span className="text-primary">Wealth</span>,{' '}
                <span className="text-accent">Locally</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-powered, community-driven waste management ecosystem that transforms India's waste challenges into sustainable wealth opportunities through digital integration and local empowerment.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹50L+</div>
                <div className="text-sm text-muted-foreground">Revenue Potential</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">85%</div>
                <div className="text-sm text-muted-foreground">Waste Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                onClick={onGetStarted}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onLearnMore}
                iconName="Info"
                iconPosition="left"
              >
                Learn More
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={onPartnerWithUs}
                iconName="Handshake"
                iconPosition="left"
              >
                Partner with Us
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-elevation-2">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Eco-Sahay Waste Management Ecosystem"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-elevation-1">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-sm font-medium">Live Impact</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-elevation-1">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="text-sm font-medium">Community Driven</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;