import React, { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';

const ProductionMetrics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const productionData = {
    daily: [
      { time: '00:00', eWaste: 45, organic: 180, bioCNG: 120, fertilizer: 85 },
      { time: '04:00', eWaste: 52, organic: 195, bioCNG: 135, fertilizer: 92 },
      { time: '08:00', eWaste: 68, organic: 220, bioCNG: 155, fertilizer: 110 },
      { time: '12:00', eWaste: 75, organic: 240, bioCNG: 170, fertilizer: 125 },
      { time: '16:00', eWaste: 82, organic: 235, bioCNG: 165, fertilizer: 118 },
      { time: '20:00', eWaste: 71, organic: 210, bioCNG: 145, fertilizer: 105 }
    ],
    weekly: [
      { time: 'Mon', eWaste: 1680, organic: 5040, bioCNG: 3600, fertilizer: 2520 },
      { time: 'Tue', eWaste: 1750, organic: 5250, bioCNG: 3750, fertilizer: 2625 },
      { time: 'Wed', eWaste: 1820, organic: 5460, bioCNG: 3900, fertilizer: 2730 },
      { time: 'Thu', eWaste: 1890, organic: 5670, bioCNG: 4050, fertilizer: 2835 },
      { time: 'Fri', eWaste: 1960, organic: 5880, bioCNG: 4200, fertilizer: 2940 },
      { time: 'Sat', eWaste: 1400, organic: 4200, bioCNG: 3000, fertilizer: 2100 },
      { time: 'Sun', eWaste: 1200, organic: 3600, bioCNG: 2580, fertilizer: 1800 }
    ],
    monthly: [
      { time: 'Week 1', eWaste: 11700, organic: 35100, bioCNG: 25080, fertilizer: 17550 },
      { time: 'Week 2', eWaste: 12250, organic: 36750, bioCNG: 26250, fertilizer: 18375 },
      { time: 'Week 3', eWaste: 11900, organic: 35700, bioCNG: 25500, fertilizer: 17850 },
      { time: 'Week 4', eWaste: 12600, organic: 37800, bioCNG: 27000, fertilizer: 18900 }
    ]
  };

  const efficiencyData = [
    { name: 'E-Waste Recovery', value: 92, color: 'var(--color-secondary)' },
    { name: 'Organic Conversion', value: 88, color: 'var(--color-accent)' },
    { name: 'Bio-CNG Production', value: 85, color: 'var(--color-success)' },
    { name: 'Fertilizer Quality', value: 94, color: 'var(--color-primary)' }
  ];

  const revenueData = [
    { category: 'Bio-CNG Sales', amount: 2850000, percentage: 45, color: 'var(--color-success)' },
    { category: 'Fertilizer Sales', amount: 1900000, percentage: 30, color: 'var(--color-primary)' },
    { category: 'Metal Recovery', amount: 950000, percentage: 15, color: 'var(--color-secondary)' },
    { category: 'Processing Fees', amount: 633000, percentage: 10, color: 'var(--color-accent)' }
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-IN')?.format(value);
  };

  const currentData = productionData?.[selectedPeriod];
  const totalRevenue = revenueData?.reduce((sum, item) => sum + item?.amount, 0);

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="BarChart3" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Production Metrics</h3>
            <p className="text-sm font-caption text-muted-foreground">Performance analytics & insights</p>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex space-x-1 bg-muted/30 rounded-lg p-1">
          {['daily', 'weekly', 'monthly']?.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedPeriod === period
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {period?.charAt(0)?.toUpperCase() + period?.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {/* Production Volume Chart */}
      <div className="mb-8">
        <h4 className="font-medium text-foreground mb-4">Production Volume Trends</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="time" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="eWaste" 
                stroke="var(--color-secondary)" 
                strokeWidth={2}
                name="E-Waste (kg)"
              />
              <Line 
                type="monotone" 
                dataKey="organic" 
                stroke="var(--color-accent)" 
                strokeWidth={2}
                name="Organic (kg)"
              />
              <Line 
                type="monotone" 
                dataKey="bioCNG" 
                stroke="var(--color-success)" 
                strokeWidth={2}
                name="Bio-CNG (m³)"
              />
              <Line 
                type="monotone" 
                dataKey="fertilizer" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                name="Fertilizer (kg)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Efficiency Metrics */}
        <div>
          <h4 className="font-medium text-foreground mb-4">System Efficiency</h4>
          <div className="space-y-4">
            {efficiencyData?.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{item?.name}</span>
                  <span className="text-lg font-bold text-foreground">{item?.value}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${item?.value}%`,
                      backgroundColor: item?.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div>
          <h4 className="font-medium text-foreground mb-4">Revenue Streams</h4>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-center mb-4">
              <p className="text-2xl font-bold text-foreground">{formatCurrency(totalRevenue)}</p>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
            </div>
            
            <div className="space-y-3">
              {revenueData?.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item?.color }}
                    ></div>
                    <span className="text-sm text-foreground">{item?.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{formatCurrency(item?.amount)}</p>
                    <p className="text-xs text-muted-foreground">{item?.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Key Performance Indicators */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-success/10 rounded-lg p-4 border border-success/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Uptime</span>
          </div>
          <p className="text-2xl font-bold text-foreground">98.5%</p>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Recycle" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Recovery Rate</span>
          </div>
          <p className="text-2xl font-bold text-foreground">91.2%</p>
          <p className="text-xs text-muted-foreground">Material recovery</p>
        </div>

        <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Zap" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Energy Saved</span>
          </div>
          <p className="text-2xl font-bold text-foreground">2.4 MW</p>
          <p className="text-xs text-muted-foreground">This month</p>
        </div>

        <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Leaf" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">CO₂ Reduced</span>
          </div>
          <p className="text-2xl font-bold text-foreground">156 T</p>
          <p className="text-xs text-muted-foreground">Carbon offset</p>
        </div>
      </div>
    </div>
  );
};

export default ProductionMetrics;