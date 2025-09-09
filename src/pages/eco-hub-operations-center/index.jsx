import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import NavigationIndicator from '../../components/ui/NavigationIndicator';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import FacilityLayout from './components/FacilityLayout';
import ProcessingStatus from './components/ProcessingStatus';
import OperationalControls from './components/OperationalControls';
import ProductionMetrics from './components/ProductionMetrics';
import ProcessingTimeline from './components/ProcessingTimeline';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import QualityControl from './components/QualityControl';

const EcoHubOperationsCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'LayoutDashboard' },
    { id: 'production', name: 'Production', icon: 'Factory' },
    { id: 'quality', name: 'Quality', icon: 'Shield' },
    { id: 'environment', name: 'Environment', icon: 'TreePine' }
  ];

  const operationalStats = [
    {
      title: 'Total Processing Capacity',
      value: '2,500 kg/day',
      change: '+12%',
      trend: 'up',
      icon: 'Factory',
      color: 'primary'
    },
    {
      title: 'Current Efficiency',
      value: '90.2%',
      change: '+2.1%',
      trend: 'up',
      icon: 'TrendingUp',
      color: 'success'
    },
    {
      title: 'Revenue Generated',
      value: '₹6,33,300',
      change: '+8.5%',
      trend: 'up',
      icon: 'IndianRupee',
      color: 'accent'
    },
    {
      title: 'Environmental Impact',
      value: '156 T CO₂',
      change: '+15%',
      trend: 'up',
      icon: 'Leaf',
      color: 'secondary'
    }
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(value);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operationalStats?.map((stat, index) => (
                <div key={index} className={`bg-card rounded-lg border border-border p-6 hover:shadow-elevation-1 transition-all duration-200`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${stat?.color}/10 rounded-lg flex items-center justify-center`}>
                      <Icon name={stat?.icon} size={24} className={`text-${stat?.color}`} />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm ${
                      stat?.trend === 'up' ? 'text-success' : 'text-destructive'
                    }`}>
                      <Icon name={stat?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                      <span>{stat?.change}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground mb-1">{stat?.value}</p>
                    <p className="text-sm text-muted-foreground">{stat?.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <FacilityLayout />
              </div>
              <div>
                <ProcessingStatus />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <OperationalControls />
              <ProcessingTimeline />
            </div>
          </div>
        );
      
      case 'production':
        return (
          <div className="space-y-6">
            <ProductionMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FacilityLayout />
              <ProcessingTimeline />
            </div>
          </div>
        );
      
      case 'quality':
        return (
          <div className="space-y-6">
            <QualityControl />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProcessingStatus />
              <OperationalControls />
            </div>
          </div>
        );
      
      case 'environment':
        return (
          <div className="space-y-6">
            <EnvironmentalImpact />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProductionMetrics />
              <ProcessingTimeline />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <NavigationIndicator showBreadcrumbs />
              <div className="mt-4">
                <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                  Eco-Hub Operations Center
                </h1>
                <p className="text-lg text-muted-foreground">
                  Real-time monitoring and control of waste processing infrastructure
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                Export Data
              </Button>
              <Button variant="outline" size="sm" iconName="Settings" iconPosition="left">
                Settings
              </Button>
              <Button variant="default" size="sm" iconName="AlertTriangle" iconPosition="left">
                Emergency
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-muted/30 rounded-lg p-1 mb-8 overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground shadow-elevation-1'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {renderTabContent()}

          {/* Emergency Alert Banner */}
          <div className="mt-8 bg-warning/10 border border-warning/20 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="AlertTriangle" size={20} className="text-warning" />
              <div className="flex-1">
                <h4 className="font-medium text-warning">System Status: All Operations Normal</h4>
                <p className="text-sm text-warning/80">
                  All processing units are operating within normal parameters. Next scheduled maintenance: 15/06/2024
                </p>
              </div>
              <Button variant="ghost" size="sm" iconName="X" iconPosition="left">
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EcoHubOperationsCenter;