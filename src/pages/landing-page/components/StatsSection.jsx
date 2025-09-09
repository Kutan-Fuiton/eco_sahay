import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      icon: "Recycle",
      value: 2450000,
      suffix: "+",
      label: "Tons E-Waste Recycled",
      description: "Electronic waste properly processed and recycled",
      color: "success"
    },
    {
      id: 2,
      icon: "Users",
      value: 125000,
      suffix: "+",
      label: "Active Community Members",
      description: "Eco-warriors making a difference daily",
      color: "primary"
    },
    {
      id: 3,
      icon: "MapPin",
      value: 850,
      suffix: "+",
      label: "Eco-Hubs Nationwide",
      description: "Collection and processing centers",
      color: "accent"
    },
    {
      id: 4,
      icon: "Leaf",
      value: 15600,
      suffix: " tons",
      label: "CO₂ Emissions Reduced",
      description: "Carbon footprint reduction achieved",
      color: "secondary"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(value * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    const formatNumber = (num) => {
      if (num >= 1000000) {
        return (num / 1000000)?.toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000)?.toFixed(0) + 'K';
      }
      return num?.toLocaleString();
    };

    return (
      <span className="text-3xl md:text-4xl font-bold">
        {formatNumber(count)}{suffix}
      </span>
    );
  };

  const getColorClasses = (color) => {
    const colorMap = {
      success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success/20'
      },
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/20'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent/20'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary/20'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Real-Time Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Making a Measurable Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our community's collective efforts are creating tangible environmental impact across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => {
            const colors = getColorClasses(stat?.color);
            return (
              <div
                key={stat?.id}
                className={`
                  bg-card p-6 rounded-xl border ${colors?.border} shadow-soft hover:shadow-elevated
                  transition-all duration-300 hover:scale-105
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 ${colors?.bg} rounded-full flex items-center justify-center mx-auto`}>
                    <Icon name={stat?.icon} size={24} color={`var(--color-${stat?.color})`} />
                  </div>
                  
                  <div>
                    <div className={`${colors?.text} mb-2`}>
                      <AnimatedCounter value={stat?.value} suffix={stat?.suffix} />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {stat?.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat?.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Impact Metrics */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">98.5%</div>
              <div className="text-sm text-muted-foreground">Recycling Efficiency Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success">24/7</div>
              <div className="text-sm text-muted-foreground">Pickup Availability</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">User Satisfaction Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;