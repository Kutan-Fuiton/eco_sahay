import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sunita Devi",
      role: "Homemaker",
      location: "Lajpat Nagar, Delhi",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Eco-Sahay has transformed how our community thinks about waste. My family now earns ₹500 monthly just by segregating waste properly. The Eco-Sahayak, Rajesh bhai, is very helpful and always on time.`,
      impact: "₹6,000 earned this year",
      wasteReduced: "240 kg"
    },
    {
      id: 2,
      name: "Dr. Ramesh Gupta",
      role: "Resident Welfare Association President",
      location: "Sector 62, Noida",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Our society of 200 flats has seen remarkable improvement in cleanliness. The gamification approach motivates residents, and we've reduced waste going to landfills by 80%. The transparency in the app builds trust.`,
      impact: "80% waste reduction",
      wasteReduced: "2.4 tons"
    },
    {
      id: 3,
      name: "Kavita Sharma",
      role: "School Teacher",
      location: "Koramangala, Bangalore",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `The educational workshops have been amazing for our children. They now understand composting and e-waste recycling. My daughter has become the 'Eco Champion' of her class and teaches other kids too.`,
      impact: "50+ children educated",
      wasteReduced: "180 kg"
    },
    {
      id: 4,
      name: "Arjun Patel",
      role: "IT Professional",
      location: "Bandra West, Mumbai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      content: `The app is user-friendly and the reward system is motivating. I love tracking my environmental impact. The pickup scheduling is convenient for working professionals like me. Great initiative for urban India.`,
      impact: "Top 10 contributor",
      wasteReduced: "320 kg"
    }
  ];

  const successStories = [
    {
      title: "Community Garden Project",
      description: "Sector 15 residents created a garden using compost from organic waste",
      impact: "500 kg compost produced",
      participants: 45,
      icon: "Sprout"
    },
    {
      title: "E-waste Drive Success",
      description: "Collected 2 tons of e-waste in Koramangala neighborhood drive",
      impact: "₹15,000 community fund",
      participants: 120,
      icon: "Smartphone"
    },
    {
      title: "School Education Program",
      description: "Trained 200+ children across 5 schools in waste management",
      impact: "200 eco-champions",
      participants: 200,
      icon: "GraduationCap"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="space-y-6">
      {/* Featured Testimonial */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Community Voices</h3>
              <p className="text-sm font-caption text-muted-foreground">Real stories from our users</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-6">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image 
                src={currentTestimonial?.avatar} 
                alt={currentTestimonial?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-foreground">{currentTestimonial?.name}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{currentTestimonial?.role} • {currentTestimonial?.location}</p>
            </div>
          </div>
          
          <blockquote className="text-foreground mb-4 italic">
            "{currentTestimonial?.content}"
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-sm font-semibold text-primary">{currentTestimonial?.impact}</div>
                <div className="text-xs text-muted-foreground">Impact</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-success">{currentTestimonial?.wasteReduced}</div>
                <div className="text-xs text-muted-foreground">Waste Reduced</div>
              </div>
            </div>
            
            <div className="flex space-x-1">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Success Stories */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={20} className="text-success" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Success Stories</h3>
            <p className="text-sm font-caption text-muted-foreground">Community achievements & milestones</p>
          </div>
        </div>

        <div className="space-y-4">
          {successStories?.map((story, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-smooth">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={story?.icon} size={20} className="text-primary" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{story?.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{story?.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Target" size={14} className="text-success" />
                    <span className="text-xs font-medium text-success">{story?.impact}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} className="text-secondary" />
                    <span className="text-xs text-muted-foreground">{story?.participants} participants</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;