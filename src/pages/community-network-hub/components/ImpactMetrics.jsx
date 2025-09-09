import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ImpactMetrics = () => {
  const [timeRange, setTimeRange] = useState('month');

  const communityGrowthData = [
    { month: 'Jan', households: 120, sahayaks: 8, collections: 450 },
    { month: 'Feb', households: 180, sahayaks: 12, collections: 680 },
    { month: 'Mar', households: 250, sahayaks: 16, collections: 920 },
    { month: 'Apr', households: 320, sahayaks: 20, collections: 1200 },
    { month: 'May', households: 420, sahayaks: 25, collections: 1580 },
    { month: 'Jun', households: 520, sahayaks: 30, collections: 1950 },
    { month: 'Jul', households: 650, sahayaks: 35, collections: 2400 },
    { month: 'Aug', households: 780, sahayaks: 42, collections: 2850 }
  ];

  const wasteReductionData = [
    { month: 'Jan', organic: 2400, ewaste: 800, plastic: 1200, paper: 600 },
    { month: 'Feb', organic: 3200, ewaste: 1100, plastic: 1600, paper: 850 },
    { month: 'Mar', organic: 4100, ewaste: 1400, plastic: 2000, paper: 1100 },
    { month: 'Apr', organic: 5200, ewaste: 1800, plastic: 2500, paper: 1400 },
    { month: 'May', organic: 6800, ewaste: 2300, plastic: 3200, paper: 1800 },
    { month: 'Jun', organic: 8400, ewaste: 2800, plastic: 3900, paper: 2200 },
    { month: 'Jul', organic: 10200, ewaste: 3400, plastic: 4700, paper: 2700 },
    { month: 'Aug', organic: 12500, ewaste: 4200, plastic: 5800, paper: 3300 }
  ];

  const behaviorChangeData = [
    { category: 'Proper Segregation', before: 25, after: 85, improvement: 60 },
    { category: 'Regular Collection', before: 40, after: 92, improvement: 52 },
    { category: 'Composting Adoption', before: 15, after: 68, improvement: 53 },
    { category: 'E-waste Awareness', before: 30, after: 78, improvement: 48 },
    { category: 'Community Participation', before: 20, after: 74, improvement: 54 }
  ];

  const impactDistribution = [
    { name: 'Waste Diverted', value: 45, color: '#2D5A3D' },
    { name: 'Carbon Reduced', value: 25, color: '#4A90A4' },
    { name: 'Jobs Created', value: 15, color: '#F4A261' },
    { name: 'Revenue Generated', value: 15, color: '#10B981' }
  ];

  const keyMetrics = [
    {
      title: "Total Waste Diverted",
      value: "125.8",
      unit: "tons",
      change: "+23%",
      trend: "up",
      icon: "Recycle",
      color: "text-success"
    },
    {
      title: "Carbon Footprint Reduced",
      value: "45.2",
      unit: "tons CO₂",
      change: "+18%",
      trend: "up",
      icon: "Leaf",
      color: "text-primary"
    },
    {
      title: "Community Participation",
      value: "89",
      unit: "%",
      change: "+12%",
      trend: "up",
      icon: "Users",
      color: "text-secondary"
    },
    {
      title: "Behavioral Change Score",
      value: "7.8",
      unit: "/10",
      change: "+1.2",
      trend: "up",
      icon: "TrendingUp",
      color: "text-accent"
    }
  ];

  const getTrendIcon = (trend) => {
    return trend === 'up' ? 'TrendingUp' : trend === 'down' ? 'TrendingDown' : 'Minus';
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-success' : trend === 'down' ? 'text-destructive' : 'text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics?.map((metric, index) => (
          <div key={index} className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center`}>
                <Icon name={metric?.icon} size={20} className={metric?.color} />
              </div>
              <div className={`flex items-center space-x-1 ${getTrendColor(metric?.trend)}`}>
                <Icon name={getTrendIcon(metric?.trend)} size={14} />
                <span className="text-xs font-medium">{metric?.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {metric?.value}
              <span className="text-sm font-normal text-muted-foreground ml-1">{metric?.unit}</span>
            </div>
            <div className="text-sm text-muted-foreground">{metric?.title}</div>
          </div>
        ))}
      </div>
      {/* Community Growth Chart */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Community Growth</h3>
              <p className="text-sm font-caption text-muted-foreground">Households, Sahayaks & Collections</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e?.target?.value)}
              className="text-sm border border-border rounded-md px-3 py-1 bg-background"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={communityGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--color-card)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px'
                }} 
              />
              <Line type="monotone" dataKey="households" stroke="var(--color-primary)" strokeWidth={3} />
              <Line type="monotone" dataKey="sahayaks" stroke="var(--color-secondary)" strokeWidth={3} />
              <Line type="monotone" dataKey="collections" stroke="var(--color-accent)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Households</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Sahayaks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="text-sm text-muted-foreground">Collections</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Waste Reduction Chart */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Recycle" size={20} className="text-success" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Waste Reduction</h3>
              <p className="text-sm font-caption text-muted-foreground">By category (kg)</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={wasteReductionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--color-card)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }} 
                />
                <Area type="monotone" dataKey="organic" stackId="1" stroke="var(--color-success)" fill="var(--color-success)" fillOpacity={0.6} />
                <Area type="monotone" dataKey="plastic" stackId="1" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.6} />
                <Area type="monotone" dataKey="ewaste" stackId="1" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity={0.6} />
                <Area type="monotone" dataKey="paper" stackId="1" stroke="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Behavioral Change */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Behavioral Change</h3>
              <p className="text-sm font-caption text-muted-foreground">Before vs After (%)</p>
            </div>
          </div>

          <div className="space-y-4">
            {behaviorChangeData?.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item?.category}</span>
                  <span className="text-sm text-success font-medium">+{item?.improvement}%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-muted-foreground h-2 rounded-full"
                      style={{ width: `${item?.before}%` }}
                    ></div>
                  </div>
                  <Icon name="ArrowRight" size={14} className="text-muted-foreground" />
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-success h-2 rounded-full"
                      style={{ width: `${item?.after}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Before: {item?.before}%</span>
                  <span>After: {item?.after}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Impact Distribution */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="PieChart" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Impact Distribution</h3>
            <p className="text-sm font-caption text-muted-foreground">Environmental & social impact breakdown</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={impactDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {impactDistribution?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--color-card)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-col justify-center space-y-4">
            {impactDistribution?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item?.color }}
                ></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">{item?.name}</div>
                  <div className="text-xs text-muted-foreground">{item?.value}% of total impact</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;