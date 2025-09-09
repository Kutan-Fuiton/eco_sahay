import React from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const MobileNavigationMenu = ({ 
  isOpen, 
  onClose, 
  navigationItems, 
  onAuthClick, 
  onNavigate 
}) => {
  if (!isOpen) return null;

  const handleNavigate = (href) => {
    onNavigate(href);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />
      {/* Mobile Menu */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-background border-b border-border shadow-elevated md:hidden animate-slide-in">
        <div className="px-4 py-6 space-y-6">
          {/* Navigation Items */}
          <nav className="space-y-4">
            {navigationItems?.map((item) => (
              <button
                key={item?.label}
                onClick={() => handleNavigate(item?.href)}
                className="flex items-center space-x-3 w-full p-3 rounded-lg text-left hover:bg-muted transition-colors duration-200"
              >
                <Icon name={item?.icon} size={20} color="currentColor" />
                <span className="text-base font-medium text-foreground">
                  {item?.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Auth Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                onAuthClick('login');
                onClose();
              }}
              className="justify-center"
            >
              Login
            </Button>
            <Button
              variant="default"
              fullWidth
              onClick={() => {
                onAuthClick('signup');
                onClose();
              }}
              className="justify-center bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* App Info */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Leaf" size={16} color="currentColor" />
              <span>Building a sustainable future together</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigationMenu;