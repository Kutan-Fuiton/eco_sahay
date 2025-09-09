import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessingStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const processingStreams = [
    {
      id: 'e-waste',
      name: 'E-Waste Processing',
      icon: 'Cpu',
      status: 'active',
      currentLoad: 850,
      maxCapacity: 1000,
      efficiency: 92,
      outputRate: '45 kg/hr',
      color: 'secondary',
      alerts: []
    },
    {
      id: 'organic',
      name: 'Organic Waste Processing',
      icon: 'Leaf',
      status: 'active',
      currentLoad: 1200,
      maxCapacity: 1500,
      efficiency: 88,
      outputRate: '180 m³/day',
      color: 'accent',
      alerts: ['Temperature slightly elevated']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success';
      case 'idle': return 'text-warning';
      case 'maintenance': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getProgressColor = (streamId) => {
    return streamId === 'e-waste' ? 'bg-secondary' : 'bg-accent';
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-IN', { 
      hour12: false,
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Activity" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Processing Status</h3>
            <p className="text-sm font-caption text-muted-foreground">Real-time operational overview</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">{formatTime(currentTime)}</p>
          <p className="text-xs text-muted-foreground">IST</p>
        </div>
      </div>
      <div className="space-y-6">
        {processingStreams?.map((stream) => {
          const loadPercentage = (stream?.currentLoad / stream?.maxCapacity) * 100;
          
          return (
            <div key={stream?.id} className="bg-muted/30 rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-${stream?.color}/10 rounded-lg flex items-center justify-center`}>
                    <Icon name={stream?.icon} size={20} className={`text-${stream?.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{stream?.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        stream?.status === 'active' ? 'bg-success animate-pulse' : 
                        stream?.status === 'idle' ? 'bg-warning' : 'bg-destructive'
                      }`}></div>
                      <span className={`text-sm capitalize ${getStatusColor(stream?.status)}`}>
                        {stream?.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">{stream?.efficiency}%</p>
                  <p className="text-xs text-muted-foreground">Efficiency</p>
                </div>
              </div>
              {/* Capacity Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Capacity Utilization</span>
                  <span className="text-sm font-medium text-foreground">
                    {stream?.currentLoad} / {stream?.maxCapacity} kg
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(stream?.id)}`}
                    style={{ width: `${loadPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">0%</span>
                  <span className="text-xs font-medium text-foreground">{Math.round(loadPercentage)}%</span>
                  <span className="text-xs text-muted-foreground">100%</span>
                </div>
              </div>
              {/* Output Rate */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-sm text-muted-foreground">Output Rate</span>
                </div>
                <span className="text-sm font-medium text-foreground">{stream?.outputRate}</span>
              </div>
              {/* Alerts */}
              {stream?.alerts?.length > 0 && (
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="AlertTriangle" size={16} className="text-warning" />
                    <span className="text-sm font-medium text-warning">Alerts</span>
                  </div>
                  {stream?.alerts?.map((alert, index) => (
                    <p key={index} className="text-sm text-warning">{alert}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Overall Status Summary */}
      <div className="mt-6 bg-primary/5 rounded-lg p-4 border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircle" size={18} className="text-success" />
            </div>
            <div>
              <p className="font-medium text-foreground">System Status: Operational</p>
              <p className="text-sm text-muted-foreground">All critical systems running normally</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-success">90%</p>
            <p className="text-xs text-muted-foreground">Overall Efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingStatus;