import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AppPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const mockScreens = [
    {
      id: 1,
      title: "Dashboard Overview",
      description: "Track your environmental impact and earnings in real-time",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Impact metrics", "Earnings tracker", "Quick actions"]
    },
    {
      id: 2,
      title: "Schedule Pickup",
      description: "Book convenient pickup slots with our smart scheduling system",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Calendar integration", "Time slot selection", "Location tracking"]
    },
    {
      id: 3,
      title: "AI Valuation",
      description: "Get instant quotes for your e-waste items using advanced AI",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Photo recognition", "Instant pricing", "Market rates"]
    },
    {
      id: 4,
      title: "Community Hub",
      description: "Connect with eco-warriors and track collective impact",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Leaderboards", "Challenges", "Social sharing"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockScreens?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, mockScreens?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockScreens?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockScreens?.length) % mockScreens?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Icon name="Smartphone" size={16} className="mr-2" />
            Mobile Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful App, Simple Interface
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the full power of Eco-Sahay with our intuitive mobile application designed for seamless waste management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup Carousel */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative mx-auto w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-elevated">
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                {/* Screen Content */}
                <div className="relative w-full h-full">
                  {mockScreens?.map((screen, index) => (
                    <div
                      key={screen?.id}
                      className={`
                        absolute inset-0 transition-all duration-500 ease-in-out
                        ${index === currentSlide 
                          ? 'opacity-100 transform translate-x-0' 
                          : index < currentSlide 
                            ? 'opacity-0 transform -translate-x-full'
                            : 'opacity-0 transform translate-x-full'
                        }
                      `}
                    >
                      <Image
                        src={screen?.image}
                        alt={`${screen?.title} app screen mockup`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Screen Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-6 left-4 right-4 text-white">
                          <h3 className="text-lg font-semibold mb-2">{screen?.title}</h3>
                          <p className="text-sm opacity-90">{screen?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-200"
                  aria-label="Previous screen"
                >
                  <Icon name="ChevronLeft" size={16} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-200"
                  aria-label="Next screen"
                >
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {mockScreens?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === currentSlide 
                      ? 'bg-primary w-8' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {mockScreens?.[currentSlide]?.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {mockScreens?.[currentSlide]?.description}
              </p>
              
              {/* Features List */}
              <div className="space-y-3">
                {mockScreens?.[currentSlide]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} color="var(--color-primary)" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Download the app:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => console.log('Download from App Store')}
                  iconName="Smartphone"
                  iconPosition="left"
                  className="justify-center sm:justify-start"
                >
                  App Store
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => console.log('Download from Google Play')}
                  iconName="Play"
                  iconPosition="left"
                  className="justify-center sm:justify-start"
                >
                  Google Play
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={20} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Secure & Private</h4>
                  <p className="text-sm text-muted-foreground">
                    Your data is protected with enterprise-grade security and privacy measures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;