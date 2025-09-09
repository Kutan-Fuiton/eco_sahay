import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';

const MarketPotential = () => {
  const [activeChart, setActiveChart] = useState('growth');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const growthData = [
    { year: '2020', value: 850, label: '2020' },
    { year: '2021', value: 1200, label: '2021' },
    { year: '2022', value: 1650, label: '2022' },
    { year: '2023', value: 2100, label: '2023' },
    { year: '2024', value: 2800, label: '2024' },
    { year: '2025', value: 3500, label: '2025 (Projected)' }
  ];

  const wasteTypeData = [
    { name: 'Smartphones', value: 35, color: '#2D5A27' },
    { name: 'Laptops', value: 25, color: '#4A7C59' },
    { name: 'Tablets', value: 15, color: '#F4A261' },
    { name: 'Accessories', value: 15, color: '#059669' },
    { name: 'Others', value: 10, color: '#D97706' }
  ];

  const impactData = [
    { month: 'Jan', recycled: 120, emissions: 45 },
    { month: 'Feb', recycled: 150, emissions: 52 },
    { month: 'Mar', recycled: 180, emissions: 61 },
    { month: 'Apr', recycled: 220, emissions: 75 },
    { month: 'May', recycled: 280, emissions: 89 },
    { month: 'Jun', recycled: 350, emissions: 112 }
  ];

  const chartOptions = [
    {
      id: 'growth',
      title: 'Market Growth',
      subtitle: 'E-waste recycling market expansion',
      icon: 'TrendingUp',
      color: 'primary'
    },
    {
      id: 'distribution',
      title: 'Waste Distribution',
      subtitle: 'Types of e-waste processed',
      icon: 'PieChart',
      color: 'accent'
    },
    {
      id: 'impact',
      title: 'Environmental Impact',
      subtitle: 'Monthly recycling & emissions reduction',
      icon: 'Leaf',
      color: 'success'
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

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent'
      },
      success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card p-3 rounded-lg border border-border shadow-elevated">
          <p className="text-sm font-medium text-card-foreground">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value}
              {activeChart === 'growth' && ' tons'}
              {activeChart === 'impact' && (entry?.name === 'recycled' ? ' tons' : ' tons CO₂')}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (activeChart) {
      case 'growth':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="year" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill="var(--color-primary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'distribution':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={wasteTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {wasteTypeData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'impact':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impactData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="month" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="recycled" 
                stroke="var(--color-primary)" 
                strokeWidth={3}
                name="Recycled"
              />
              <Line 
                type="monotone" 
                dataKey="emissions" 
                stroke="var(--color-success)" 
                strokeWidth={3}
                name="CO₂ Reduced"
              />
            </LineChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Icon name="BarChart3" size={16} className="mr-2" />
            Market Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Massive Market Potential
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The e-waste recycling market is experiencing unprecedented growth, creating opportunities for sustainable impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Selection */}
          <div className="space-y-4">
            {chartOptions?.map((option) => {
              const colors = getColorClasses(option?.color);
              const isActive = activeChart === option?.id;
              
              return (
                <button
                  key={option?.id}
                  onClick={() => setActiveChart(option?.id)}
                  className={`
                    w-full p-6 rounded-xl border-2 text-left transition-all duration-300
                    ${isActive 
                      ? `${colors?.border} shadow-elevated bg-card` 
                      : 'border-border shadow-soft hover:shadow-elevated bg-card hover:border-muted-foreground/30'
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${colors?.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={option?.icon} size={24} color={`var(--color-${option?.color})`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 ${isActive ? colors?.text : 'text-card-foreground'}`}>
                        {option?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option?.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Key Statistics */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Key Statistics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Market Size (2024)</span>
                  <span className="text-sm font-medium text-card-foreground">$65.8B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Annual Growth Rate</span>
                  <span className="text-sm font-medium text-success">+23.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Global E-waste</span>
                  <span className="text-sm font-medium text-card-foreground">54M tons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Recycling Rate</span>
                  <span className="text-sm font-medium text-accent">20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Display */}
          <div className="lg:col-span-2">
            <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {chartOptions?.find(opt => opt?.id === activeChart)?.title}
                </h3>
                <p className="text-muted-foreground">
                  {chartOptions?.find(opt => opt?.id === activeChart)?.subtitle}
                </p>
              </div>

              <div className={`transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                {renderChart()}
              </div>

              {/* Chart Legend for Pie Chart */}
              {activeChart === 'distribution' && (
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {wasteTypeData?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item?.color }}
                      />
                      <span className="text-sm text-muted-foreground">{item?.name}</span>
                      <span className="text-sm font-medium text-card-foreground">{item?.value}%</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Market Insights */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Opportunity</h4>
                    <p className="text-sm text-muted-foreground">
                      80% of e-waste remains unrecycled, representing a massive opportunity for sustainable solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={20} color="var(--color-success)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Global Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Proper e-waste recycling can reduce CO₂ emissions by up to 15 million tons annually
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPotential;