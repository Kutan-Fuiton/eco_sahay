import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
import AuthenticationModal from './AuthenticationModal';
import MobileNavigationMenu from './MobileNavigationMenu';

const NavigationHeader = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/landing-page', icon: 'Home' },
    { label: 'Solutions', href: '#solutions', icon: 'Lightbulb' },
    { label: 'Impact', href: '#impact', icon: 'TrendingUp' },
  ];

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Icon name="Leaf" size={20} color="white" />
              </div>
              <span className="text-xl font-semibold text-foreground">
                Eco-Sahay
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.label}
                  onClick={() => scrollToSection(item?.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105"
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleAuthClick('login')}
                className="text-muted-foreground hover:text-foreground"
              >
                Login
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleAuthClick('signup')}
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="currentColor" 
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Navigation Menu */}
      <MobileNavigationMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        onAuthClick={handleAuthClick}
        onNavigate={scrollToSection}
      />
      {/* Authentication Modal */}
      <AuthenticationModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default NavigationHeader;