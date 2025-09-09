import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityLeaderboard = () => {
  const [activeTab, setActiveTab] = useState('contributors');

  const topContributors = [
    {
      id: 1,
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      points: 2450,
      collections: 89,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      badge: "Eco Champion",
      rank: 1
    },
    {
      id: 2,
      name: "Ravi Krishnan",
      location: "Chennai, Tamil Nadu",
      points: 2280,
      collections: 76,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      badge: "Green Hero",
      rank: 2
    },
    {
      id: 3,
      name: "Anjali Singh",
      location: "Pune, Maharashtra",
      points: 2150,
      collections: 82,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      badge: "Waste Warrior",
      rank: 3
    },
    {
      id: 4,
      name: "Suresh Kumar",
      location: "Hyderabad, Telangana",
      points: 1980,
      collections: 68,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      badge: "Eco Supporter",
      rank: 4
    },
    {
      id: 5,
      name: "Kavita Sharma",
      location: "Jaipur, Rajasthan",
      points: 1850,
      collections: 71,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      badge: "Green Guardian",
      rank: 5
    }
  ];

  const ecoSahayaks = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Noida, UP",
      households: 45,
      efficiency: 96,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      rank: 1
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      households: 62,
      efficiency: 94,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      rank: 2
    },
    {
      id: 3,
      name: "Amit Singh",
      location: "Mumbai, Maharashtra",
      households: 38,
      efficiency: 92,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      rank: 3
    }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return { icon: 'Trophy', color: 'text-yellow-500' };
      case 2: return { icon: 'Award', color: 'text-gray-400' };
      case 3: return { icon: 'Medal', color: 'text-amber-600' };
      default: return { icon: 'Star', color: 'text-muted-foreground' };
    }
  };

  const tabs = [
    { id: 'contributors', label: 'Top Contributors', icon: 'Users' },
    { id: 'sahayaks', label: 'Eco-Sahayaks', icon: 'UserCheck' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Trophy" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Community Leaderboard</h3>
            <p className="text-sm font-caption text-muted-foreground">Top performers this month</p>
          </div>
        </div>
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
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Contributors Tab */}
      {activeTab === 'contributors' && (
        <div className="space-y-4">
          {topContributors?.map((contributor) => {
            const rankInfo = getRankIcon(contributor?.rank);
            return (
              <div key={contributor?.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-smooth">
                <div className="flex items-center space-x-3">
                  <Icon name={rankInfo?.icon} size={20} className={rankInfo?.color} />
                  <span className="text-sm font-medium text-muted-foreground w-6">#{contributor?.rank}</span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={contributor?.avatar} 
                    alt={contributor?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-foreground truncate">{contributor?.name}</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {contributor?.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{contributor?.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">{contributor?.points?.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Eco-Sahayaks Tab */}
      {activeTab === 'sahayaks' && (
        <div className="space-y-4">
          {ecoSahayaks?.map((sahayak) => {
            const rankInfo = getRankIcon(sahayak?.rank);
            return (
              <div key={sahayak?.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-smooth">
                <div className="flex items-center space-x-3">
                  <Icon name={rankInfo?.icon} size={20} className={rankInfo?.color} />
                  <span className="text-sm font-medium text-muted-foreground w-6">#{sahayak?.rank}</span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={sahayak?.avatar} 
                    alt={sahayak?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground">{sahayak?.name}</h4>
                  <p className="text-xs text-muted-foreground">{sahayak?.location}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={12} className="text-yellow-500" />
                      <span className="text-xs text-muted-foreground">{sahayak?.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{sahayak?.households} households</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-success">{sahayak?.efficiency}%</div>
                  <div className="text-xs text-muted-foreground">efficiency</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full flex items-center justify-center space-x-2 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-smooth">
          <span>View Full Leaderboard</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default CommunityLeaderboard;