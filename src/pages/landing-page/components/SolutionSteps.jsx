import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SolutionSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Schedule Pickup",
      subtitle: "Easy & Convenient",
      description: `Book a pickup slot that works for you through our intuitive app interface.\nOur AI-powered scheduling system finds the optimal time based on your location and availability.\nReceive real-time updates and notifications about your pickup status.`,
      icon: "Calendar",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Flexible time slots",
        "Real-time tracking",
        "SMS & email updates",
        "Recurring pickups available"
      ],
      color: "primary"
    },
    {
      id: 2,
      title: "AI Valuation",
      subtitle: "Smart Assessment",
      description: `Our advanced AI technology accurately assesses the value of your e-waste items.\nGet instant quotes based on current market rates and item condition.\nTransparent pricing with detailed breakdown of valuation factors.`,
      icon: "Brain",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Instant valuation",
        "Market-rate pricing",
        "Condition assessment",
        "Price history tracking"
      ],
      color: "accent"
    },
    {
      id: 3,
      title: "Earn Rewards",
      subtitle: "Get Compensated",
      description: `Receive Eco-Credits for every item you recycle with us.\nRedeem credits for cash, discounts, or donate to environmental causes.\nTrack your environmental impact and see the difference you're making.`,
      icon: "Gift",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Eco-Credits system",
        "Multiple redemption options",
        "Impact tracking",
        "Bonus rewards program"
      ],
      color: "success"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary',
        button: 'bg-primary hover:bg-primary/90'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent',
        button: 'bg-accent hover:bg-accent/90'
      },
      success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success',
        button: 'bg-success hover:bg-success/90'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section id="solutions" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Icon name="Lightbulb" size={16} className="mr-2" />
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your e-waste into rewards with our streamlined process designed for maximum convenience
          </p>
        </div>

        {/* Mobile: Accordion Style */}
        <div className="lg:hidden space-y-4">
          {steps?.map((step, index) => {
            const colors = getColorClasses(step?.color);
            const isActive = activeStep === index;
            
            return (
              <div
                key={step?.id}
                className={`
                  bg-card rounded-xl border-2 transition-all duration-300
                  ${isActive ? colors?.border : 'border-border'}
                  ${isActive ? 'shadow-elevated' : 'shadow-soft'}
                `}
              >
                <button
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${colors?.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={step?.icon} size={24} color={`var(--color-${step?.color})`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground">
                            {step?.title}
                          </h3>
                          <p className={`text-sm ${colors?.text}`}>
                            {step?.subtitle}
                          </p>
                        </div>
                        <Icon 
                          name={isActive ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          color="var(--color-muted-foreground)" 
                        />
                      </div>
                    </div>
                  </div>
                </button>
                {isActive && (
                  <div className="px-6 pb-6 space-y-4 animate-fade-in">
                    <Image
                      src={step?.image}
                      alt={`${step?.title} process illustration`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-muted-foreground whitespace-pre-line">
                      {step?.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {step?.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} color={`var(--color-${step?.color})`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: Side-by-side Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps Navigation */}
            <div className="space-y-6">
              {steps?.map((step, index) => {
                const colors = getColorClasses(step?.color);
                const isActive = activeStep === index;
                
                return (
                  <div
                    key={step?.id}
                    className={`
                      p-6 rounded-xl border-2 cursor-pointer transition-all duration-300
                      ${isActive ? colors?.border + ' shadow-elevated' : 'border-border shadow-soft hover:shadow-elevated'}
                    `}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colors?.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon name={step?.icon} size={24} color={`var(--color-${step?.color})`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-1">
                          {step?.title}
                        </h3>
                        <p className={`text-sm ${colors?.text} mb-3`}>
                          {step?.subtitle}
                        </p>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {step?.description}
                        </p>
                        
                        {isActive && (
                          <div className="mt-4 grid grid-cols-2 gap-2 animate-fade-in">
                            {step?.features?.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Icon name="Check" size={16} color={`var(--color-${step?.color})`} />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Step Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src={steps?.[activeStep]?.image}
                  alt={`${steps?.[activeStep]?.title} process illustration`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-soft border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">Step {activeStep + 1}</div>
                  <div className="text-sm text-muted-foreground">of 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSteps;