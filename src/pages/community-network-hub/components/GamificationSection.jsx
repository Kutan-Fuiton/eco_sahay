import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GamificationSection = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);

  const activeChallenges = [
    {
      id: 1,
      title: "Weekly Organic Goal",
      description: "Collect 50kg organic waste this week",
      progress: 78,
      target: 50,
      current: 39,
      unit: "kg",
      participants: 45,
      timeLeft: "2 days",
      reward: 500,
      type: "community",
      icon: "Leaf"
    },
    {
      id: 2,
      title: "E-waste Champion",
      description: "Collect 10 electronic items",
      progress: 60,
      target: 10,
      current: 6,
      unit: "items",
      participants: 23,
      timeLeft: "5 days",
      reward: 750,
      type: "individual",
      icon: "Smartphone"
    },
    {
      id: 3,
      title: "Neighborhood Clean-up",
      description: "Organize community cleaning drive",
      progress: 90,
      target: 1,
      current: 1,
      unit: "event",
      participants: 67,
      timeLeft: "1 day",
      reward: 1000,
      type: "community",
      icon: "Users"
    }
  ];

  const achievementBadges = [
    {
      id: 1,
      name: "Eco Warrior",
      description: "Collected 100kg waste in a month",
      icon: "Shield",
      rarity: "gold",
      earned: true,
      earnedDate: "2024-08-15"
    },
    {
      id: 2,
      name: "Green Pioneer",
      description: "First in neighborhood to join",
      icon: "Flag",
      rarity: "silver",
      earned: true,
      earnedDate: "2024-07-20"
    },
    {
      id: 3,
      name: "Community Leader",
      description: "Referred 10+ neighbors",
      icon: "Crown",
      rarity: "gold",
      earned: false,
      progress: 7
    },
    {
      id: 4,
      name: "Consistency King",
      description: "30 days streak of waste collection",
      icon: "Calendar",
      rarity: "bronze",
      earned: true,
      earnedDate: "2024-08-10"
    },
    {
      id: 5,
      name: "E-waste Expert",
      description: "Collected 50+ electronic items",
      icon: "Cpu",
      rarity: "silver",
      earned: false,
      progress: 32
    },
    {
      id: 6,
      name: "Compost Master",
      description: "Created 20kg compost",
      icon: "Sprout",
      rarity: "bronze",
      earned: false,
      progress: 15
    }
  ];

  const leaderboardData = [
    {
      rank: 1,
      name: "Meera Patel",
      points: 2450,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      badge: "Eco Champion"
    },
    {
      rank: 2,
      name: "Ravi Krishnan",
      points: 2280,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      badge: "Green Hero"
    },
    {
      rank: 3,
      name: "Anjali Singh",
      points: 2150,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      badge: "Waste Warrior"
    }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'gold': return 'text-yellow-500 bg-yellow-500/10';
      case 'silver': return 'text-gray-400 bg-gray-400/10';
      case 'bronze': return 'text-amber-600 bg-amber-600/10';
      default: return 'text-muted-foreground bg-muted-foreground/10';
    }
  };

  const getChallengeTypeColor = (type) => {
    return type === 'community' ? 'text-secondary bg-secondary/10' : 'text-primary bg-primary/10';
  };

  return (
    <div className="space-y-6">
      {/* Active Challenges */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Target" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Active Challenges</h3>
              <p className="text-sm font-caption text-muted-foreground">Ongoing community competitions</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {activeChallenges?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveChallenge(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === activeChallenge ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
          {activeChallenges?.map((challenge, index) => (
            <div
              key={challenge?.id}
              className={`${index === activeChallenge ? 'block' : 'hidden'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Icon name={challenge?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{challenge?.title}</h4>
                    <p className="text-sm text-muted-foreground">{challenge?.description}</p>
                  </div>
                </div>
                
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getChallengeTypeColor(challenge?.type)}`}>
                  {challenge?.type}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">
                    {challenge?.current}/{challenge?.target} {challenge?.unit}
                  </span>
                </div>
                <div className="w-full bg-white/50 rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${challenge?.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">{challenge?.participants}</div>
                  <div className="text-xs text-muted-foreground">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">{challenge?.timeLeft}</div>
                  <div className="text-xs text-muted-foreground">Time Left</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">₹{challenge?.reward}</div>
                  <div className="text-xs text-muted-foreground">Reward</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Achievement Badges */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Award" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Achievement Badges</h3>
            <p className="text-sm font-caption text-muted-foreground">Unlock rewards for your contributions</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievementBadges?.map((badge) => (
            <div
              key={badge?.id}
              className={`border rounded-lg p-4 text-center transition-smooth ${
                badge?.earned 
                  ? 'border-primary/20 bg-primary/5 hover:bg-primary/10' :'border-border bg-muted/30 hover:bg-muted/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center ${
                badge?.earned ? getRarityColor(badge?.rarity) : 'bg-muted-foreground/10'
              }`}>
                <Icon 
                  name={badge?.icon} 
                  size={24} 
                  className={badge?.earned ? '' : 'text-muted-foreground/50'} 
                />
              </div>
              
              <h4 className={`font-medium mb-1 ${badge?.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                {badge?.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">{badge?.description}</p>
              
              {badge?.earned ? (
                <div className="text-xs text-success font-medium">
                  Earned {new Date(badge.earnedDate)?.toLocaleDateString('en-IN')}
                </div>
              ) : (
                <div className="text-xs text-muted-foreground">
                  Progress: {badge?.progress || 0}/{badge?.target || 100}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Mini Leaderboard */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Trophy" size={20} className="text-success" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Top Performers</h3>
              <p className="text-sm font-caption text-muted-foreground">This month's leaders</p>
            </div>
          </div>
          
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth">
            View All
          </button>
        </div>

        <div className="space-y-3">
          {leaderboardData?.map((user) => (
            <div key={user?.rank} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-smooth">
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  user?.rank === 1 ? 'bg-yellow-500 text-white' :
                  user?.rank === 2 ? 'bg-gray-400 text-white' :
                  user?.rank === 3 ? 'bg-amber-600 text-white': 'bg-muted text-muted-foreground'
                }`}>
                  {user?.rank}
                </div>
                
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image 
                    src={user?.avatar} 
                    alt={user?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-medium text-foreground">{user?.name}</h4>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {user?.badge}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-semibold text-foreground">{user?.points?.toLocaleString('en-IN')}</div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamificationSection;