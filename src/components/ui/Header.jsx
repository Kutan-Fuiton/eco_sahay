import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/landing-page', icon: 'Home' },
    { name: 'Operations', path: '/eco-hub-operations-center', icon: 'Factory' },
    { name: 'Community', path: '/community-network-hub', icon: 'Users' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-header bg-white border-b border-border shadow-elevation-1">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link to="/landing-page" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Leaf" size={24} color="white" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-foreground">Eco-Sahay</span>
              <span className="text-xs font-caption text-muted-foreground">Waste to Wealth</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.name}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Learn More
            </Button>
            <Button variant="default" size="sm" iconName="ArrowRight" iconPosition="right">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.name}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-smooth ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Button variant="outline" fullWidth>
                  Learn More
                </Button>
                <Button variant="default" fullWidth iconName="ArrowRight" iconPosition="right">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;