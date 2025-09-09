import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import ContactModal from '../../../components/ui/ContactModal';
import Icon from '../../../components/AppIcon';

const CallToAction = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGetStarted = () => {
    // Simulate navigation to onboarding
    console.log('Navigate to onboarding flow');
  };

  const handleLearnMore = () => {
    // Simulate navigation to detailed information
    console.log('Navigate to detailed information');
  };

  const handlePartnerWithUs = () => {
    setIsContactModalOpen(true);
  };

  const stakeholderBenefits = [
    {
      title: 'Government Officials',
      icon: 'Building',
      benefits: ['Policy compliance', 'Citizen satisfaction', 'Environmental goals'],
      color: 'primary'
    },
    {
      title: 'Investors',
      icon: 'TrendingUp',
      benefits: ['High ROI potential', 'ESG alignment', 'Scalable model'],
      color: 'secondary'
    },
    {
      title: 'Communities',
      icon: 'Users',
      benefits: ['Employment creation', 'Clean environment', 'Reward earnings'],
      color: 'accent'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary',
      secondary: 'bg-secondary/10 text-secondary',
      accent: 'bg-accent/10 text-accent'
    };
    return colorMap?.[color];
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Transform Waste into{' '}
              <span className="text-primary">Wealth</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join India's most comprehensive waste management ecosystem. Whether you're a government official, investor, or community leader, Eco-Sahay has the perfect partnership model for you.
            </p>
          </motion.div>

          {/* Stakeholder Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stakeholderBenefits?.map((stakeholder, index) => (
              <motion.div
                key={stakeholder?.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-elevation-1 p-8 text-center"
              >
                <div className={`w-16 h-16 ${getColorClasses(stakeholder?.color)} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon name={stakeholder?.icon} size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {stakeholder?.title}
                </h3>
                <ul className="space-y-2">
                  {stakeholder?.benefits?.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-elevation-2 p-12 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
                Start Your Sustainable Journey Today
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Choose your path to join India's waste-to-wealth revolution. Our team is ready to customize the perfect solution for your needs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  variant="default" 
                  size="xl"
                  onClick={handleGetStarted}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="sm:w-auto"
                >
                  Get Started Now
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={handleLearnMore}
                  iconName="BookOpen"
                  iconPosition="left"
                  className="sm:w-auto"
                >
                  Learn More
                </Button>
                <Button 
                  variant="secondary" 
                  size="xl"
                  onClick={handlePartnerWithUs}
                  iconName="Handshake"
                  iconPosition="left"
                  className="sm:w-auto"
                >
                  Partner with Us
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-success" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Government Approved</div>
                    <div className="text-sm text-muted-foreground">Compliant with all regulations</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Proven Impact</div>
                    <div className="text-sm text-muted-foreground">₹50L+ revenue generated</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Community Driven</div>
                    <div className="text-sm text-muted-foreground">1000+ communities served</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Have questions? Our team is here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-sm text-foreground">partnerships@eco-sahay.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-sm text-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-sm text-foreground">24/7 Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default CallToAction;