import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ActivityDashboard = () => {
  const [timeFilter, setTimeFilter] = useState('today');

  const realtimeActivities = [
    {
      id: 1,
      type: "collection",
      sahayak: "Rajesh Kumar",
      location: "Sector 15, Noida",
      amount: "12 kg",
      timestamp: new Date(Date.now() - 300000),
      status: "completed"
    },
    {
      id: 2,
      type: "reward",
      user: "Meera Patel",
      points: 150,
      reason: "E-waste collection",
      timestamp: new Date(Date.now() - 600000),
      status: "credited"
    },
    {
      id: 3,
      type: "challenge",
      title: "Weekly Organic Goal",
      participants: 45,
      progress: 78,
      timestamp: new Date(Date.now() - 900000),
      status: "active"
    },
    {
      id: 4,
      type: "education",
      program: "Composting Workshop",
      attendees: 23,
      location: "Community Center, Bandra",
      timestamp: new Date(Date.now() - 1200000),
      status: "ongoing"
    },
    {
      id: 5,
      type: "collection",
      sahayak: "Priya Sharma",
      location: "Koramangala, Bangalore",
      amount: "8 kg",
      timestamp: new Date(Date.now() - 1500000),
      status: "in-progress"
    }
  ];

  const communityStats = [
    {
      label: "Active Collections",
      value: "24",
      change: "+12%",
      icon: "Truck",
      color: "text-primary"
    },
    {
      label: "Participants Today",
      value: "156",
      change: "+8%",
      icon: "Users",
      color: "text-secondary"
    },
    {
      label: "Points Distributed",
      value: "2,340",
      change: "+15%",
      icon: "Award",
      color: "text-accent"
    },
    {
      label: "Challenges Active",
      value: "7",
      change: "+2",
      icon: "Target",
      color: "text-success"
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'collection': return 'Truck';
      case 'reward': return 'Award';
      case 'challenge': return 'Target';
      case 'education': return 'BookOpen';
      default: return 'Activity';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'credited': return 'text-accent';
      case 'active': return 'text-primary';
      case 'ongoing': return 'text-secondary';
      case 'in-progress': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const minutes = Math.floor((Date.now() - timestamp?.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {communityStats?.map((stat, index) => (
          <div key={index} className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center`}>
                <Icon name={stat?.icon} size={16} className={stat?.color} />
              </div>
              <span className="text-xs font-medium text-success">{stat?.change}</span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
            <div className="text-sm text-muted-foreground">{stat?.label}</div>
          </div>
        ))}
      </div>
      {/* Real-time Activity Feed */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Activity" size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Live Activity Feed</h3>
              <p className="text-sm font-caption text-muted-foreground">Real-time community updates</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {realtimeActivities?.map((activity) => (
            <div key={activity?.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-smooth">
              <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={getActivityIcon(activity?.type)} size={16} className="text-muted-foreground" />
              </div>
              
              <div className="flex-1 min-w-0">
                {activity?.type === 'collection' && (
                  <div>
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity?.sahayak}</span> collected{' '}
                      <span className="font-medium text-primary">{activity?.amount}</span> from{' '}
                      <span className="text-muted-foreground">{activity?.location}</span>
                    </p>
                  </div>
                )}
                
                {activity?.type === 'reward' && (
                  <div>
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity?.user}</span> earned{' '}
                      <span className="font-medium text-accent">{activity?.points} points</span> for{' '}
                      <span className="text-muted-foreground">{activity?.reason}</span>
                    </p>
                  </div>
                )}
                
                {activity?.type === 'challenge' && (
                  <div>
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity?.title}</span> - {activity?.participants} participants,{' '}
                      <span className="font-medium text-primary">{activity?.progress}% complete</span>
                    </p>
                  </div>
                )}
                
                {activity?.type === 'education' && (
                  <div>
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity?.program}</span> started with{' '}
                      <span className="font-medium text-secondary">{activity?.attendees} attendees</span> at{' '}
                      <span className="text-muted-foreground">{activity?.location}</span>
                    </p>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-muted-foreground">{formatTimeAgo(activity?.timestamp)}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className={`text-xs font-medium ${getStatusColor(activity?.status)}`}>
                    {activity?.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <button className="w-full flex items-center justify-center space-x-2 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-smooth">
            <span>View All Activities</span>
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDashboard;