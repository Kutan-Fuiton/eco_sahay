import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SahayakManagement = () => {
  const [activeTab, setActiveTab] = useState('profiles');

  const sahayakProfiles = [
    {
      id: 1,
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@ecosahay.in",
      area: "Sector 15, Noida",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      joinDate: "2024-01-15",
      status: "active",
      rating: 4.8,
      households: 45,
      collections: 128,
      efficiency: 96,
      trainingProgress: 100,
      specializations: ["E-waste", "Organic"],
      languages: ["Hindi", "English"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      phone: "+91 87654 32109",
      email: "priya.sharma@ecosahay.in",
      area: "Koramangala, Bangalore",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      joinDate: "2024-02-01",
      status: "active",
      rating: 4.9,
      households: 62,
      collections: 156,
      efficiency: 94,
      trainingProgress: 100,
      specializations: ["Organic", "Plastic"],
      languages: ["English", "Kannada"]
    },
    {
      id: 3,
      name: "Amit Singh",
      phone: "+91 76543 21098",
      email: "amit.singh@ecosahay.in",
      area: "Bandra West, Mumbai",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      joinDate: "2024-01-20",
      status: "busy",
      rating: 4.6,
      households: 38,
      collections: 89,
      efficiency: 92,
      trainingProgress: 85,
      specializations: ["E-waste"],
      languages: ["Hindi", "Marathi"]
    }
  ];

  const trainingModules = [
    {
      id: 1,
      title: "Waste Segregation Basics",
      duration: "2 hours",
      completion: 100,
      status: "completed",
      participants: 24
    },
    {
      id: 2,
      title: "Customer Service Excellence",
      duration: "1.5 hours",
      completion: 85,
      status: "in-progress",
      participants: 18
    },
    {
      id: 3,
      title: "Digital Platform Training",
      duration: "3 hours",
      completion: 92,
      status: "completed",
      participants: 22
    },
    {
      id: 4,
      title: "Safety Protocols",
      duration: "1 hour",
      completion: 78,
      status: "in-progress",
      participants: 15
    }
  ];

  const performanceMetrics = [
    {
      sahayak: "Rajesh Kumar",
      collections: 128,
      onTime: 96,
      customerRating: 4.8,
      revenue: 12400,
      trend: "up"
    },
    {
      sahayak: "Priya Sharma",
      collections: 156,
      onTime: 94,
      customerRating: 4.9,
      revenue: 15600,
      trend: "up"
    },
    {
      sahayak: "Amit Singh",
      collections: 89,
      onTime: 92,
      customerRating: 4.6,
      revenue: 8900,
      trend: "stable"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-success/10 text-success';
      case 'busy': return 'bg-warning/10 text-warning';
      case 'offline': return 'bg-muted-foreground/10 text-muted-foreground';
      default: return 'bg-primary/10 text-primary';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return { icon: 'TrendingUp', color: 'text-success' };
      case 'down': return { icon: 'TrendingDown', color: 'text-destructive' };
      default: return { icon: 'Minus', color: 'text-muted-foreground' };
    }
  };

  const tabs = [
    { id: 'profiles', label: 'Sahayak Profiles', icon: 'Users' },
    { id: 'training', label: 'Training Progress', icon: 'BookOpen' },
    { id: 'performance', label: 'Performance Analytics', icon: 'BarChart3' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="UserCheck" size={20} className="text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Eco-Sahayak Management</h3>
            <p className="text-sm font-caption text-muted-foreground">Volunteer coordination & development</p>
          </div>
        </div>
        
        <Button variant="default" size="sm" iconName="Plus" iconPosition="left">
          Add Sahayak
        </Button>
      </div>
      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted/50 rounded-lg p-1">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth flex-1 justify-center ${
              activeTab === tab?.id
                ? 'bg-white text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span className="hidden sm:inline">{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Profiles Tab */}
      {activeTab === 'profiles' && (
        <div className="space-y-4">
          {sahayakProfiles?.map((sahayak) => (
            <div key={sahayak?.id} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={sahayak?.avatar} 
                    alt={sahayak?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-foreground">{sahayak?.name}</h4>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(sahayak?.status)}`}>
                      {sahayak?.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">{sahayak?.area}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-foreground">{sahayak?.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-foreground">{sahayak?.households}</div>
                      <div className="text-xs text-muted-foreground">Households</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-foreground">{sahayak?.collections}</div>
                      <div className="text-xs text-muted-foreground">Collections</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-foreground">{sahayak?.efficiency}%</div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Languages" size={14} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{sahayak?.languages?.join(', ')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Award" size={14} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{sahayak?.specializations?.join(', ')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="xs" iconName="MessageSquare">
                        Contact
                      </Button>
                      <Button variant="ghost" size="xs" iconName="MoreVertical">
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Training Tab */}
      {activeTab === 'training' && (
        <div className="space-y-4">
          {trainingModules?.map((module) => (
            <div key={module.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-foreground">{module.title}</h4>
                  <p className="text-sm text-muted-foreground">{module.duration} • {module.participants} participants</p>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  module.status === 'completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                }`}>
                  {module.status}
                </span>
              </div>
              
              <div className="mb-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{module.completion}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${module.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-4">
          {performanceMetrics?.map((metric, index) => {
            const trendInfo = getTrendIcon(metric?.trend);
            return (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-foreground">{metric?.sahayak}</h4>
                  <div className="flex items-center space-x-1">
                    <Icon name={trendInfo?.icon} size={16} className={trendInfo?.color} />
                    <span className="text-sm text-muted-foreground">{metric?.trend}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{metric?.collections}</div>
                    <div className="text-xs text-muted-foreground">Collections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{metric?.onTime}%</div>
                    <div className="text-xs text-muted-foreground">On Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{metric?.customerRating}</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">₹{metric?.revenue?.toLocaleString('en-IN')}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SahayakManagement;