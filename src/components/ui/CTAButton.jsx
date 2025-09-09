import React from 'react';
import Button from './Button';

const CTAButton = ({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  onClick, 
  className = '',
  loading = false,
  disabled = false,
  iconName,
  iconPosition = 'right',
  fullWidth = false,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elevated';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary/90 text-secondary-foreground';
      case 'accent':
        return 'bg-accent hover:bg-accent/90 text-accent-foreground';
      case 'success':
        return 'bg-success hover:bg-success/90 text-success-foreground';
      case 'outline':
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground';
      case 'ghost':
        return 'text-primary hover:bg-primary/10';
      default:
        return 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elevated';
    }
  };

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      // Add subtle scale animation
      e.currentTarget.style.transform = 'scale(0.98)';
      setTimeout(() => {
        if (e?.currentTarget) {
          e.currentTarget.style.transform = 'scale(1)';
        }
      }, 150);
      
      onClick(e);
    }
  };

  return (
    <Button
      variant={variant === 'primary' ? 'default' : variant}
      size={size}
      onClick={handleClick}
      loading={loading}
      disabled={disabled}
      fullWidth={fullWidth}
      iconName={iconName}
      iconPosition={iconPosition}
      className={`
        transition-all duration-200 ease-out
        hover:scale-105 active:scale-95
        ${getVariantStyles()}
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;