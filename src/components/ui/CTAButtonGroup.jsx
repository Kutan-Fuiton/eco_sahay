import React from 'react';
import Button from './Button';

const CTAButtonGroup = ({ 
  variant = 'horizontal', 
  showLearnMore = true, 
  showGetStarted = true, 
  showPartner = false,
  onLearnMore,
  onGetStarted,
  onPartner,
  className = ''
}) => {
  const buttonClasses = variant === 'vertical' ? 'flex flex-col space-y-4' : 'flex flex-wrap gap-4';

  return (
    <div className={`${buttonClasses} ${className}`}>
      {showLearnMore && (
        <Button 
          variant="outline" 
          size="lg"
          onClick={onLearnMore}
          iconName="Info"
          iconPosition="left"
        >
          Learn More
        </Button>
      )}
      
      {showGetStarted && (
        <Button 
          variant="default" 
          size="lg"
          onClick={onGetStarted}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Get Started
        </Button>
      )}
      
      {showPartner && (
        <Button 
          variant="secondary" 
          size="lg"
          onClick={onPartner}
          iconName="Handshake"
          iconPosition="left"
        >
          Partner with Us
        </Button>
      )}
    </div>
  );
};

export default CTAButtonGroup;