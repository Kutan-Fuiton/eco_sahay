import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
import Input from './Input';

const AuthenticationModal = ({ isOpen, onClose, mode, onModeChange }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData?.password) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (mode === 'signup') {
      if (!formData?.name) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData?.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData?.password !== formData?.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      if (!formData?.agreeToTerms) {
        newErrors.agreeToTerms = 'Please agree to the terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle successful authentication
      console.log(`${mode} successful:`, formData);
      onClose();
      
      // Reset form
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        agreeToTerms: false
      });
    } catch (error) {
      setErrors({ submit: 'Authentication failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleModeSwitch = (newMode) => {
    onModeChange(newMode);
    setErrors({});
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-card rounded-lg shadow-elevated animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Icon name="Leaf" size={20} color="white" />
              </div>
              <h2 className="text-xl font-semibold text-card-foreground">
                {mode === 'login' ? 'Welcome Back' : 'Join Eco-Sahay'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
              aria-label="Close modal"
            >
              <Icon name="X" size={20} color="currentColor" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {mode === 'signup' && (
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData?.name}
                onChange={handleInputChange}
                error={errors?.name}
                required
              />
            )}

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData?.email}
              onChange={handleInputChange}
              error={errors?.email}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData?.password}
              onChange={handleInputChange}
              error={errors?.password}
              required
            />

            {mode === 'signup' && (
              <>
                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData?.confirmPassword}
                  onChange={handleInputChange}
                  error={errors?.confirmPassword}
                  required
                />

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData?.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-muted-foreground">
                    I agree to the{' '}
                    <button
                      type="button"
                      className="text-primary hover:underline"
                      onClick={() => console.log('Open terms')}
                    >
                      Terms of Service
                    </button>
                    {' '}and{' '}
                    <button
                      type="button"
                      className="text-primary hover:underline"
                      onClick={() => console.log('Open privacy')}
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>
                {errors?.agreeToTerms && (
                  <p className="text-sm text-error">{errors?.agreeToTerms}</p>
                )}
              </>
            )}

            {errors?.submit && (
              <div className="p-3 bg-error/10 border border-error/20 rounded-md">
                <p className="text-sm text-error">{errors?.submit}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="default"
              fullWidth
              loading={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>

            {/* Mode Switch */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                {' '}
                <button
                  type="button"
                  onClick={() => handleModeSwitch(mode === 'login' ? 'signup' : 'login')}
                  className="text-primary hover:underline font-medium"
                >
                  {mode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {/* Social Login */}
            <div className="space-y-3 pt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => console.log('Google auth')}
                  iconName="Chrome"
                  iconPosition="left"
                  iconSize={16}
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => console.log('GitHub auth')}
                  iconName="Github"
                  iconPosition="left"
                  iconSize={16}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthenticationModal;