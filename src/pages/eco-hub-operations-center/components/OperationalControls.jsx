import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OperationalControls = () => {
  const [selectedSystem, setSelectedSystem] = useState('e-waste');

  const systemControls = {
    'e-waste': {
      name: 'E-Waste Processing',
      icon: 'Cpu',
      color: 'secondary',
      parameters: [
        { name: 'Shredder Speed', value: 1200, unit: 'RPM', min: 800, max: 1500, status: 'normal' },
        { name: 'Temperature', value: 45, unit: '°C', min: 20, max: 60, status: 'normal' },
        { name: 'Pressure', value: 2.3, unit: 'bar', min: 1.5, max: 3.0, status: 'normal' },
        { name: 'Throughput', value: 850, unit: 'kg/hr', min: 0, max: 1000, status: 'high' }
      ],
      alerts: [
        { type: 'maintenance', message: 'Metal separator requires cleaning in 2 hours', priority: 'medium' }
      ]
    },
    'organic': {
      name: 'Organic Processing',
      icon: 'Leaf',
      color: 'accent',
      parameters: [
        { name: 'Reactor Temp', value: 38, unit: '°C', min: 35, max: 45, status: 'normal' },
        { name: 'pH Level', value: 7.2, unit: 'pH', min: 6.5, max: 8.0, status: 'normal' },
        { name: 'Gas Pressure', value: 1.8, unit: 'bar', min: 1.0, max: 2.5, status: 'normal' },
        { name: 'Biogas Rate', value: 180, unit: 'm³/day', min: 0, max: 250, status: 'normal' }
      ],
      alerts: [
        { type: 'warning', message: 'Temperature slightly elevated - monitoring', priority: 'low' }
      ]
    }
  };

  const getParameterStatus = (status) => {
    switch (status) {
      case 'normal': return 'text-success';
      case 'high': return 'text-warning';
      case 'critical': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'maintenance': return 'bg-warning/10 border-warning/20 text-warning';
      case 'warning': return 'bg-warning/10 border-warning/20 text-warning';
      case 'error': return 'bg-destructive/10 border-destructive/20 text-destructive';
      default: return 'bg-muted/10 border-border text-muted-foreground';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'maintenance': return 'Wrench';
      case 'warning': return 'AlertTriangle';
      case 'error': return 'AlertCircle';
      default: return 'Info';
    }
  };

  const currentSystem = systemControls?.[selectedSystem];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Settings" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Operational Controls</h3>
            <p className="text-sm font-caption text-muted-foreground">System monitoring & control</p>
          </div>
        </div>
      </div>
      {/* System Selector */}
      <div className="flex space-x-2 mb-6">
        {Object.entries(systemControls)?.map(([key, system]) => (
          <button
            key={key}
            onClick={() => setSelectedSystem(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              selectedSystem === key
                ? `bg-${system?.color}/10 border-${system?.color}/20 text-${system?.color}`
                : 'bg-muted/30 border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={system?.icon} size={16} />
            <span className="text-sm font-medium">{system?.name}</span>
          </button>
        ))}
      </div>
      {/* Parameters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {currentSystem?.parameters?.map((param, index) => (
          <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{param?.name}</span>
              <span className={`text-xs font-medium ${getParameterStatus(param?.status)}`}>
                {param?.status?.toUpperCase()}
              </span>
            </div>
            
            <div className="flex items-baseline space-x-1 mb-3">
              <span className="text-2xl font-bold text-foreground">{param?.value}</span>
              <span className="text-sm text-muted-foreground">{param?.unit}</span>
            </div>

            {/* Parameter Range Indicator */}
            <div className="relative">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    param?.status === 'normal' ? 'bg-success' :
                    param?.status === 'high' ? 'bg-warning' : 'bg-destructive'
                  }`}
                  style={{ 
                    width: `${((param?.value - param?.min) / (param?.max - param?.min)) * 100}%` 
                  }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-muted-foreground">{param?.min}</span>
                <span className="text-xs text-muted-foreground">{param?.max}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Control Actions */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button variant="outline" size="sm" iconName="Play" iconPosition="left">
          Start Process
        </Button>
        <Button variant="outline" size="sm" iconName="Pause" iconPosition="left">
          Pause
        </Button>
        <Button variant="outline" size="sm" iconName="RotateCcw" iconPosition="left">
          Reset
        </Button>
        <Button variant="secondary" size="sm" iconName="Download" iconPosition="left">
          Export Data
        </Button>
      </div>
      {/* Alerts Section */}
      {currentSystem?.alerts?.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-foreground flex items-center space-x-2">
            <Icon name="Bell" size={16} />
            <span>Active Alerts</span>
          </h4>
          
          {currentSystem?.alerts?.map((alert, index) => (
            <div key={index} className={`rounded-lg p-3 border ${getAlertColor(alert?.type)}`}>
              <div className="flex items-start space-x-3">
                <Icon name={getAlertIcon(alert?.type)} size={16} className="mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert?.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-80">Priority: {alert?.priority}</span>
                    <div className="flex space-x-2">
                      <button className="text-xs hover:underline">Acknowledge</button>
                      <button className="text-xs hover:underline">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Emergency Controls */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-foreground">Emergency Controls</h4>
            <p className="text-sm text-muted-foreground">Critical system overrides</p>
          </div>
          <Button variant="destructive" size="sm" iconName="AlertTriangle" iconPosition="left">
            Emergency Stop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OperationalControls;