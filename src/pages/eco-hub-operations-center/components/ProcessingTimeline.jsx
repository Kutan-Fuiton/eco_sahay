import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessingTimeline = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');

  const timelineData = {
    today: [
      {
        time: '06:00',
        event: 'Morning Shift Started',
        type: 'operational',
        details: 'E-waste and organic processing lines activated',
        status: 'completed'
      },
      {
        time: '08:30',
        event: 'First Batch Processing',
        type: 'production',
        details: '850 kg e-waste, 1200 kg organic waste processed',
        status: 'completed'
      },
      {
        time: '10:15',
        event: 'Quality Check - Bio-CNG',
        type: 'quality',
        details: 'Methane content: 92%, meets quality standards',
        status: 'completed'
      },
      {
        time: '12:00',
        event: 'Maintenance Alert',
        type: 'maintenance',
        details: 'Metal separator requires cleaning - scheduled for 14:00',
        status: 'pending'
      },
      {
        time: '14:00',
        event: 'Scheduled Maintenance',
        type: 'maintenance',
        details: 'Metal separator cleaning and calibration',
        status: 'in-progress'
      },
      {
        time: '16:30',
        event: 'Output Collection',
        type: 'logistics',
        details: 'Bio-CNG: 180 m³, Fertilizer: 125 kg collected',
        status: 'scheduled'
      }
    ],
    week: [
      {
        time: 'Monday',
        event: 'Weekly Production Target',
        type: 'production',
        details: 'Target: 11,700 kg e-waste, 35,100 kg organic',
        status: 'completed'
      },
      {
        time: 'Tuesday',
        event: 'Equipment Upgrade',
        type: 'maintenance',
        details: 'Biogas reactor efficiency improvement installed',
        status: 'completed'
      },
      {
        time: 'Wednesday',
        event: 'Quality Audit',
        type: 'quality',
        details: 'External audit for ISO 14001 compliance',
        status: 'completed'
      },
      {
        time: 'Thursday',
        event: 'Peak Production Day',
        type: 'production',
        details: 'Highest daily output: 1,890 kg e-waste processed',
        status: 'completed'
      },
      {
        time: 'Friday',
        event: 'Staff Training',
        type: 'operational',
        details: 'Safety protocols and new equipment training',
        status: 'completed'
      },
      {
        time: 'Weekend',
        event: 'Reduced Operations',
        type: 'operational',
        details: 'Maintenance mode - essential operations only',
        status: 'scheduled'
      }
    ],
    month: [
      {
        time: 'Week 1',
        event: 'Monthly Kickoff',
        type: 'operational',
        details: 'Production targets set, team briefings completed',
        status: 'completed'
      },
      {
        time: 'Week 2',
        event: 'Mid-Month Review',
        type: 'production',
        details: 'Performance review: 102% of target achieved',
        status: 'completed'
      },
      {
        time: 'Week 3',
        event: 'Equipment Maintenance',
        type: 'maintenance',
        details: 'Comprehensive maintenance of all processing units',
        status: 'completed'
      },
      {
        time: 'Week 4',
        event: 'Month-End Reporting',
        type: 'operational',
        details: 'Financial and operational reports generation',
        status: 'in-progress'
      }
    ]
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'operational': return 'Settings';
      case 'production': return 'Factory';
      case 'quality': return 'CheckCircle';
      case 'maintenance': return 'Wrench';
      case 'logistics': return 'Truck';
      default: return 'Clock';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'operational': return 'primary';
      case 'production': return 'success';
      case 'quality': return 'secondary';
      case 'maintenance': return 'warning';
      case 'logistics': return 'accent';
      default: return 'muted';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-warning';
      case 'pending': return 'text-muted-foreground';
      case 'scheduled': return 'text-secondary';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'CheckCircle';
      case 'in-progress': return 'Clock';
      case 'pending': return 'AlertCircle';
      case 'scheduled': return 'Calendar';
      default: return 'Circle';
    }
  };

  const currentData = timelineData?.[selectedTimeframe];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Timeline" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Processing Timeline</h3>
            <p className="text-sm font-caption text-muted-foreground">Activity history & schedule</p>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex space-x-1 bg-muted/30 rounded-lg p-1">
          {['today', 'week', 'month']?.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedTimeframe === timeframe
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {timeframe?.charAt(0)?.toUpperCase() + timeframe?.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-6">
          {currentData?.map((item, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              {/* Timeline Node */}
              <div className={`relative z-10 w-16 h-16 bg-${getEventColor(item?.type)}/10 border-2 border-${getEventColor(item?.type)}/20 rounded-lg flex items-center justify-center`}>
                <Icon 
                  name={getEventIcon(item?.type)} 
                  size={20} 
                  className={`text-${getEventColor(item?.type)}`} 
                />
              </div>

              {/* Event Content */}
              <div className="flex-1 bg-muted/30 rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-foreground">{item?.event}</h4>
                    <span className="text-sm text-muted-foreground">{item?.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={getStatusIcon(item?.status)} 
                      size={16} 
                      className={getStatusColor(item?.status)} 
                    />
                    <span className={`text-sm font-medium capitalize ${getStatusColor(item?.status)}`}>
                      {item?.status?.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{item?.details}</p>

                {/* Event Type Badge */}
                <div className="mt-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${getEventColor(item?.type)}/10 text-${getEventColor(item?.type)}`}>
                    {item?.type?.charAt(0)?.toUpperCase() + item?.type?.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Timeline Summary */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="CheckCircle" size={20} className="text-success" />
            </div>
            <p className="text-lg font-semibold text-foreground">
              {currentData?.filter(item => item?.status === 'completed')?.length}
            </p>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="Clock" size={20} className="text-warning" />
            </div>
            <p className="text-lg font-semibold text-foreground">
              {currentData?.filter(item => item?.status === 'in-progress')?.length}
            </p>
            <p className="text-xs text-muted-foreground">In Progress</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="Calendar" size={20} className="text-secondary" />
            </div>
            <p className="text-lg font-semibold text-foreground">
              {currentData?.filter(item => item?.status === 'scheduled')?.length}
            </p>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-muted/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="AlertCircle" size={20} className="text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold text-foreground">
              {currentData?.filter(item => item?.status === 'pending')?.length}
            </p>
            <p className="text-xs text-muted-foreground">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingTimeline;