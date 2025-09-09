import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import NavigationIndicator from '../../components/ui/NavigationIndicator';
import CTAButtonGroup from '../../components/ui/CTAButtonGroup';
import ContactModal from '../../components/ui/ContactModal';
import Icon from '../../components/AppIcon';
import CommunityMap from './components/CommunityMap';
import CommunityLeaderboard from './components/CommunityLeaderboard';
import ActivityDashboard from './components/ActivityDashboard';
import TestimonialsSection from './components/TestimonialsSection';
import SahayakManagement from './components/SahayakManagement';
import GamificationSection from './components/GamificationSection';
import ImpactMetrics from './components/ImpactMetrics';

const CommunityNetworkHub = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'map', label: 'Community Map', icon: 'MapPin' },
    { id: 'leaderboard', label: 'Leaderboard', icon: 'Trophy' },
    { id: 'activities', label: 'Live Activities', icon: 'Activity' },
    { id: 'sahayaks', label: 'Sahayak Management', icon: 'UserCheck' },
    { id: 'gamification', label: 'Challenges & Rewards', icon: 'Target' },
    { id: 'impact', label: 'Impact Metrics', icon: 'BarChart3' },
    { id: 'testimonials', label: 'Community Voices', icon: 'MessageSquare' }
  ];

  const communityStats = [
    {
      title: "Active Households",
      value: "1,247",
      change: "+18%",
      icon: "Home",
      color: "text-primary"
    },
    {
      title: "Eco-Sahayaks",
      value: "42",
      change: "+12%",
      icon: "UserCheck",
      color: "text-secondary"
    },
    {
      title: "Monthly Collections",
      value: "2,850",
      change: "+23%",
      icon: "Truck",
      color: "text-accent"
    },
    {
      title: "Community Score",
      value: "8.9/10",
      change: "+0.8",
      icon: "Star",
      color: "text-success"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "collection",
      message: "Rajesh Kumar completed collection in Sector 15",
      time: "2 minutes ago",
      icon: "Truck"
    },
    {
      id: 2,
      type: "reward",
      message: "Meera Patel earned 150 points for e-waste collection",
      time: "5 minutes ago",
      icon: "Award"
    },
    {
      id: 3,
      type: "challenge",
      message: "Weekly Organic Goal reached 78% completion",
      time: "10 minutes ago",
      icon: "Target"
    },
    {
      id: 4,
      type: "education",
      message: "Composting workshop started in Bandra Community Center",
      time: "15 minutes ago",
      icon: "BookOpen"
    }
  ];

  const handleLearnMore = () => {
    setActiveSection('impact');
  };

  const handleGetStarted = () => {
    setIsContactModalOpen(true);
  };

  const handlePartnerWithUs = () => {
    setIsContactModalOpen(true);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'map':
        return <CommunityMap />;
      case 'leaderboard':
        return <CommunityLeaderboard />;
      case 'activities':
        return <ActivityDashboard />;
      case 'sahayaks':
        return <SahayakManagement />;
      case 'gamification':
        return <GamificationSection />;
      case 'impact':
        return <ImpactMetrics />;
      case 'testimonials':
        return <TestimonialsSection />;
      default:
        return (
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityStats?.map((stat, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center`}>
                      <Icon name={stat?.icon} size={24} className={stat?.color} />
                    </div>
                    <span className="text-sm font-medium text-success">{stat?.change}</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat?.value}</div>
                  <div className="text-sm text-muted-foreground">{stat?.title}</div>
                </div>
              ))}
            </div>
            {/* Quick Actions */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setActiveSection('sahayaks')}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/30 transition-smooth text-left"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="UserPlus" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Recruit Sahayaks</div>
                    <div className="text-sm text-muted-foreground">Add new volunteers</div>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveSection('gamification')}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/30 transition-smooth text-left"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Launch Campaign</div>
                    <div className="text-sm text-muted-foreground">Start community challenge</div>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveSection('activities')}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/30 transition-smooth text-left"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Gift" size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Distribute Rewards</div>
                    <div className="text-sm text-muted-foreground">Manage point system</div>
                  </div>
                </button>
              </div>
            </div>
            {/* Recent Activities */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-foreground">Recent Activities</h3>
                <button 
                  onClick={() => setActiveSection('activities')}
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
                >
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {recentActivities?.map((activity) => (
                  <div key={activity?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-smooth">
                    <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={activity?.icon} size={16} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity?.message}</p>
                      <p className="text-xs text-muted-foreground">{activity?.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <NavigationIndicator showBreadcrumbs className="mb-4" />
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                  Community Network Hub
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Coordinate Eco-Sahayaks, engage communities, and track social impact across neighborhoods. 
                  The human network that makes waste-to-wealth transformation possible.
                </p>
              </div>
              
              <CTAButtonGroup
                variant="horizontal"
                showLearnMore={true}
                showGetStarted={true}
                showPartner={true}
                onLearnMore={handleLearnMore}
                onGetStarted={handleGetStarted}
                onPartner={handlePartnerWithUs}
                className="flex-shrink-0"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-4 sticky top-24">
                <h3 className="font-heading font-semibold text-foreground mb-4">Sections</h3>
                <nav className="space-y-1">
                  {navigationSections?.map((section) => (
                    <button
                      key={section?.id}
                      onClick={() => setActiveSection(section?.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth text-left ${
                        activeSection === section?.id
                          ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Icon name={section?.icon} size={16} />
                      <span>{section?.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {renderActiveSection()}
            </div>
          </div>
        </div>
      </main>
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default CommunityNetworkHub;