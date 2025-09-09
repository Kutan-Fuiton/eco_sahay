import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import Icon from '../../../components/AppIcon';

const EnvironmentalImpact = () => {
  const [selectedMetric, setSelectedMetric] = useState('carbon');

  const impactData = {
    carbon: {
      title: 'Carbon Footprint Reduction',
      unit: 'tonnes CO₂',
      icon: 'Leaf',
      color: 'success',
      current: 156,
      target: 200,
      trend: [
        { month: 'Jan', value: 120 },
        { month: 'Feb', value: 135 },
        { month: 'Mar', value: 142 },
        { month: 'Apr', value: 148 },
        { month: 'May', value: 156 }
      ]
    },
    energy: {
      title: 'Energy Recovery',
      unit: 'MWh',
      icon: 'Zap',
      color: 'warning',
      current: 2.4,
      target: 3.0,
      trend: [
        { month: 'Jan', value: 1.8 },
        { month: 'Feb', value: 2.0 },
        { month: 'Mar', value: 2.1 },
        { month: 'Apr', value: 2.3 },
        { month: 'May', value: 2.4 }
      ]
    },
    waste: {
      title: 'Waste Diverted from Landfill',
      unit: 'tonnes',
      icon: 'Recycle',
      color: 'secondary',
      current: 48.5,
      target: 60.0,
      trend: [
        { month: 'Jan', value: 38.2 },
        { month: 'Feb', value: 41.5 },
        { month: 'Mar', value: 44.8 },
        { month: 'Apr', value: 46.7 },
        { month: 'May', value: 48.5 }
      ]
    },
    water: {
      title: 'Water Conservation',
      unit: 'kilolitres',
      icon: 'Droplets',
      color: 'primary',
      current: 12.8,
      target: 15.0,
      trend: [
        { month: 'Jan', value: 9.5 },
        { month: 'Feb', value: 10.2 },
        { month: 'Mar', value: 11.1 },
        { month: 'Apr', value: 11.9 },
        { month: 'May', value: 12.8 }
      ]
    }
  };

  const resourceRecoveryData = [
    { name: 'Metals', value: 35, color: 'var(--color-secondary)' },
    { name: 'Plastics', value: 25, color: 'var(--color-accent)' },
    { name: 'Bio-CNG', value: 30, color: 'var(--color-success)' },
    { name: 'Fertilizer', value: 10, color: 'var(--color-primary)' }
  ];

  const complianceData = [
    {
      regulation: 'E-Waste Management Rules 2016',
      status: 'compliant',
      lastAudit: '15/03/2024',
      nextAudit: '15/09/2024',
      score: 98
    },
    {
      regulation: 'Solid Waste Management Rules 2016',
      status: 'compliant',
      lastAudit: '22/02/2024',
      nextAudit: '22/08/2024',
      score: 95
    },
    {
      regulation: 'Water (Prevention & Control) Act',
      status: 'compliant',
      lastAudit: '08/01/2024',
      nextAudit: '08/07/2024',
      score: 92
    },
    {
      regulation: 'Air (Prevention & Control) Act',
      status: 'review',
      lastAudit: '12/04/2024',
      nextAudit: '12/10/2024',
      score: 88
    }
  ];

  const currentMetric = impactData?.[selectedMetric];
  const progressPercentage = (currentMetric?.current / currentMetric?.target) * 100;

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'text-success';
      case 'review': return 'text-warning';
      case 'non-compliant': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'compliant': return 'bg-success/10 border-success/20';
      case 'review': return 'bg-warning/10 border-warning/20';
      case 'non-compliant': return 'bg-destructive/10 border-destructive/20';
      default: return 'bg-muted/10 border-border';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="TreePine" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Environmental Impact</h3>
            <p className="text-sm font-caption text-muted-foreground">Sustainability metrics & compliance</p>
          </div>
        </div>
      </div>
      {/* Impact Metrics Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {Object.entries(impactData)?.map(([key, metric]) => (
          <button
            key={key}
            onClick={() => setSelectedMetric(key)}
            className={`p-4 rounded-lg border transition-all duration-200 text-left ${
              selectedMetric === key
                ? `bg-${metric?.color}/10 border-${metric?.color}/20`
                : 'bg-muted/30 border-border hover:bg-muted/50'
            }`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Icon 
                name={metric?.icon} 
                size={16} 
                className={selectedMetric === key ? `text-${metric?.color}` : 'text-muted-foreground'} 
              />
              <span className={`text-xs font-medium ${
                selectedMetric === key ? `text-${metric?.color}` : 'text-muted-foreground'
              }`}>
                {metric?.title}
              </span>
            </div>
            <p className="text-lg font-bold text-foreground">{metric?.current}</p>
            <p className="text-xs text-muted-foreground">{metric?.unit}</p>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Selected Metric Trend */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-foreground">{currentMetric?.title}</h4>
            <div className="text-right">
              <p className="text-lg font-bold text-foreground">
                {currentMetric?.current} / {currentMetric?.target}
              </p>
              <p className="text-xs text-muted-foreground">{currentMetric?.unit}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progress to Target</span>
              <span className="text-sm font-medium text-foreground">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 bg-${currentMetric?.color}`}
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Trend Chart */}
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentMetric?.trend}>
                <defs>
                  <linearGradient id={`gradient-${selectedMetric}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={`var(--color-${currentMetric?.color})`} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={`var(--color-${currentMetric?.color})`} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={`var(--color-${currentMetric?.color})`}
                  fillOpacity={1} 
                  fill={`url(#gradient-${selectedMetric})`}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resource Recovery Breakdown */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <h4 className="font-medium text-foreground mb-4">Resource Recovery Distribution</h4>
          
          <div className="h-40 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resourceRecoveryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {resourceRecoveryData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Recovery Rate']}
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {resourceRecoveryData?.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item?.color }}
                  ></div>
                  <span className="text-sm text-foreground">{item?.name}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{item?.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Compliance Status */}
      <div className="bg-muted/30 rounded-lg p-4 border border-border">
        <h4 className="font-medium text-foreground mb-4">Regulatory Compliance Status</h4>
        
        <div className="space-y-3">
          {complianceData?.map((item, index) => (
            <div key={index} className={`rounded-lg p-3 border ${getStatusBg(item?.status)}`}>
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-foreground">{item?.regulation}</h5>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-foreground">{item?.score}%</span>
                  <Icon 
                    name={item?.status === 'compliant' ? 'CheckCircle' : 'AlertCircle'} 
                    size={16} 
                    className={getStatusColor(item?.status)} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Last Audit: </span>
                  <span className="text-foreground">{item?.lastAudit}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Next Audit: </span>
                  <span className="text-foreground">{item?.nextAudit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalImpact;