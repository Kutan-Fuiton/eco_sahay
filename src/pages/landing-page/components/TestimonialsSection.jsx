import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Environmental Advocate",
      location: "San Francisco, CA",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      content: `Eco-Sahay has completely transformed how I handle e-waste disposal. The AI valuation is incredibly accurate, and I've earned over $500 in the past 6 months while making a positive environmental impact.\n\nThe pickup service is reliable and the app interface is intuitive. Highly recommended!`,
      impact: {
        itemsRecycled: 45,
        earningsTotal: 523,
        co2Reduced: 12.3
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Tech Entrepreneur",
      location: "Austin, TX",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      content: `As someone who frequently upgrades tech equipment, Eco-Sahay has been a game-changer. The scheduling system is flexible, and the community features keep me motivated to recycle more.\n\nThe transparency in the recycling process and blockchain tracking gives me confidence that my e-waste is being handled responsibly.`,
      impact: {
        itemsRecycled: 78,
        earningsTotal: 892,
        co2Reduced: 21.7
      }
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Small Business Owner",
      location: "Portland, OR",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      content: `Our office generates a lot of electronic waste, and Eco-Sahay has made corporate recycling effortless. The bulk pickup options and detailed reporting help us meet our sustainability goals.\n\nThe customer service team is responsive and the entire process is seamless from start to finish.`,
      impact: {
        itemsRecycled: 156,
        earningsTotal: 1247,
        co2Reduced: 38.9
      }
    },
    {
      id: 4,
      name: "David Park",
      role: "College Student",
      location: "Boston, MA",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      content: `Being a student, every dollar counts. Eco-Sahay not only helps me dispose of old electronics responsibly but also provides extra income. The gamification features make recycling fun and engaging.\n\nI love competing with friends on the leaderboard and seeing our collective environmental impact grow.`,
      impact: {
        itemsRecycled: 23,
        earningsTotal: 187,
        co2Reduced: 6.8
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "var(--color-accent)" : "var(--color-muted-foreground)"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            User Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Eco-Warriors Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who are making a difference while earning rewards
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials?.[currentTestimonial]?.rating)}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-center mb-8">
                <p className="text-lg md:text-xl text-card-foreground leading-relaxed whitespace-pre-line">
                  "{testimonials?.[currentTestimonial]?.content}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Image
                  src={testimonials?.[currentTestimonial]?.avatar}
                  alt={`${testimonials?.[currentTestimonial]?.name} profile picture`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    {testimonials?.[currentTestimonial]?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials?.[currentTestimonial]?.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials?.[currentTestimonial]?.location}
                  </p>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {testimonials?.[currentTestimonial]?.impact?.itemsRecycled}
                  </div>
                  <div className="text-xs text-muted-foreground">Items Recycled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">
                    ${testimonials?.[currentTestimonial]?.impact?.earningsTotal}
                  </div>
                  <div className="text-xs text-muted-foreground">Total Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {testimonials?.[currentTestimonial]?.impact?.co2Reduced}t
                  </div>
                  <div className="text-xs text-muted-foreground">CO₂ Reduced</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentTestimonial 
                    ? 'bg-primary w-8' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }
                `}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => goToTestimonial(index)}
                className={`
                  p-4 rounded-xl border-2 transition-all duration-300 text-left
                  ${index === currentTestimonial 
                    ? 'border-primary bg-primary/5 shadow-elevated' 
                    : 'border-border bg-card hover:border-muted-foreground/30 shadow-soft hover:shadow-elevated'
                  }
                `}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Image
                    src={testimonial?.avatar}
                    alt={`${testimonial?.name} profile picture`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-medium text-card-foreground truncate">
                      {testimonial?.name}
                    </h5>
                    <p className="text-xs text-muted-foreground truncate">
                      {testimonial?.role}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {renderStars(testimonial?.rating)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} color="var(--color-success)" />
            </div>
            <div className="text-sm font-medium text-foreground">Secure Platform</div>
            <div className="text-xs text-muted-foreground">SSL Encrypted</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={24} color="var(--color-primary)" />
            </div>
            <div className="text-sm font-medium text-foreground">Certified</div>
            <div className="text-xs text-muted-foreground">ISO 14001</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={24} color="var(--color-accent)" />
            </div>
            <div className="text-sm font-medium text-foreground">24/7 Support</div>
            <div className="text-xs text-muted-foreground">Always Available</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} color="var(--color-secondary)" />
            </div>
            <div className="text-sm font-medium text-foreground">Community</div>
            <div className="text-xs text-muted-foreground">125K+ Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;