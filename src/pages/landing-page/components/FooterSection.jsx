import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "How It Works", href: "#solutions" },
        { label: "Pricing", href: "#pricing" },
        { label: "Mobile App", href: "#app" },
        { label: "API Documentation", href: "#api" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Press Kit", href: "#press" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Help Center", href: "#help" },
        { label: "Community", href: "#community" },
        { label: "Sustainability Report", href: "#report" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Policy", href: "#cookies" },
        { label: "Data Protection", href: "#data" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#twitter" },
    { name: "Facebook", icon: "Facebook", href: "#facebook" },
    { name: "Instagram", icon: "Instagram", href: "#instagram" },
    { name: "LinkedIn", icon: "Linkedin", href: "#linkedin" },
    { name: "YouTube", icon: "Youtube", href: "#youtube" }
  ];

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.log(`Navigate to: ${href}`);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    const formData = new FormData(e.target);
    const email = formData?.get('email');
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription
    e?.target?.reset();
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Icon name="Leaf" size={24} color="white" />
              </div>
              <span className="text-2xl font-bold text-card-foreground">
                Eco-Sahay
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming e-waste management through innovative technology, community engagement, and sustainable practices. Join us in building a cleaner, greener future for generations to come.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground">
                Stay Updated
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    className="bg-primary hover:bg-primary/90 whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Get updates on new features, sustainability tips, and community impact.
                </p>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks?.map((social) => (
                  <button
                    key={social?.name}
                    onClick={() => handleLinkClick(social?.href)}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={`Follow us on ${social?.name}`}
                  >
                    <Icon name={social?.icon} size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections?.map((section) => (
              <div key={section?.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  {section?.title}
                </h4>
                <ul className="space-y-3">
                  {section?.links?.map((link) => (
                    <li key={link?.label}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link?.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Eco-Sahay. All rights reserved.
            </div>

            {/* Certifications & Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span className="text-xs text-muted-foreground">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} color="var(--color-primary)" />
                <span className="text-xs text-muted-foreground">ISO 14001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={16} color="var(--color-success)" />
                <span className="text-xs text-muted-foreground">Carbon Neutral</span>
              </div>
            </div>

            {/* Language & Region */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Globe" size={16} />
                <span>English (US)</span>
                <Icon name="ChevronDown" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-elevated hover:shadow-elevated-hover flex items-center justify-center transition-all duration-200 hover:scale-105 z-40"
        aria-label="Back to top"
      >
        <Icon name="ArrowUp" size={20} />
      </button>
    </footer>
  );
};

export default FooterSection;