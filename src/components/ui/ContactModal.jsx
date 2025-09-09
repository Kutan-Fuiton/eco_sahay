import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Icon from '../AppIcon';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'investment', label: 'Investment Inquiry' },
    { value: 'implementation', label: 'Implementation Support' },
    { value: 'government', label: 'Government Collaboration' },
    { value: 'community', label: 'Community Program' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', formData);
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: '',
      message: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-elevation-2 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">Contact Us</h2>
              <p className="text-sm font-caption text-muted-foreground">Let's discuss partnership opportunities</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your name"
              value={formData?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              required
            />
            
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
            />
          </div>

          <Input
            label="Organization"
            type="text"
            placeholder="Your organization or company"
            value={formData?.organization}
            onChange={(e) => handleInputChange('organization', e?.target?.value)}
          />

          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            value={formData?.inquiryType}
            onChange={(value) => handleInputChange('inquiryType', value)}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              rows={4}
              placeholder="Tell us about your interest in Eco-Sahay..."
              value={formData?.message}
              onChange={(e) => handleInputChange('message', e?.target?.value)}
              required
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              fullWidth
              className="sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName="Send"
              iconPosition="right"
              fullWidth
              className="sm:w-auto"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;