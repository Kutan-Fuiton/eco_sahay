import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompetitiveLandscape = () => {
  const competitors = [
    {
      name: 'Eco-Sahay',
      isUs: true,
      logo: 'Leaf',
      focus: 'Integrated Ecosystem',
      aiPowered: true,
      communityDriven: true,
      multiStream: true,
      scalability: 'High',
      sustainability: 'High',
      profitability: 'High',
      uniqueValue: 'AI + Community + Multi-waste processing'
    },
    {
      name: 'Recykal',
      isUs: false,
      logo: 'Recycle',
      focus: 'Digital Platform',
      aiPowered: false,
      communityDriven: false,
      multiStream: false,
      scalability: 'Medium',
      sustainability: 'Medium',
      profitability: 'Medium',
      uniqueValue: 'B2B waste management platform'
    },
    {
      name: 'Scrapcart',
      isUs: false,
      logo: 'Truck',
      focus: 'Collection Services',
      aiPowered: false,
      communityDriven: true,
      multiStream: false,
      scalability: 'Medium',
      sustainability: 'Low',
      profitability: 'Low',
      uniqueValue: 'Door-to-door scrap collection'
    },
    {
      name: 'Attero',
      isUs: false,
      logo: 'Cpu',
      focus: 'E-waste Processing',
      aiPowered: false,
      communityDriven: false,
      multiStream: false,
      scalability: 'Low',
      sustainability: 'Medium',
      profitability: 'Medium',
      uniqueValue: 'E-waste recycling specialist'
    },
    {
      name: 'GPS Renewables',
      isUs: false,
      logo: 'Zap',
      focus: 'Bio-energy',
      aiPowered: false,
      communityDriven: false,
      multiStream: false,
      scalability: 'Medium',
      sustainability: 'High',
      profitability: 'Medium',
      uniqueValue: 'Biogas and bio-CNG production'
    },
    {
      name: 'Carbon Loops',
      isUs: false,
      logo: 'RotateCcw',
      focus: 'Carbon Credits',
      aiPowered: true,
      communityDriven: false,
      multiStream: false,
      scalability: 'High',
      sustainability: 'High',
      profitability: 'Low',
      uniqueValue: 'Carbon footprint management'
    }
  ];

  const getScoreColor = (score) => {
    switch (score) {
      case 'High': return 'text-success bg-success/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Low': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  const getBooleanIcon = (value) => {
    return value ? (
      <Icon name="Check" size={16} className="text-success" />
    ) : (
      <Icon name="X" size={16} className="text-error" />
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Competitive Landscape Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How Eco-Sahay stands out in the Indian waste management ecosystem with our integrated approach
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-elevation-1 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/20">
                  <tr>
                    <th className="text-left p-6 font-heading font-semibold text-foreground">Company</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Focus Area</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">AI-Powered</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Community</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Multi-Stream</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Scalability</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Sustainability</th>
                    <th className="text-center p-6 font-heading font-semibold text-foreground">Profitability</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((competitor, index) => (
                    <motion.tr
                      key={competitor.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`border-b border-border hover:bg-muted/10 transition-colors ${
                        competitor.isUs ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td className="p-6">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            competitor.isUs ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon name={competitor.logo} size={20} />
                          </div>
                          <div>
                            <div className={`font-medium ${competitor.isUs ? 'text-primary' : 'text-foreground'}`}>
                              {competitor.name}
                              {competitor.isUs && (
                                <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded-full">US</span>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">{competitor.uniqueValue}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-sm font-medium text-foreground">{competitor.focus}</span>
                      </td>
                      <td className="p-6 text-center">{getBooleanIcon(competitor.aiPowered)}</td>
                      <td className="p-6 text-center">{getBooleanIcon(competitor.communityDriven)}</td>
                      <td className="p-6 text-center">{getBooleanIcon(competitor.multiStream)}</td>
                      <td className="p-6 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getScoreColor(competitor.scalability)}`}>
                          {competitor.scalability}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getScoreColor(competitor.sustainability)}`}>
                          {competitor.sustainability}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getScoreColor(competitor.profitability)}`}>
                          {competitor.profitability}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-elevation-1 p-6 ${
                competitor.isUs ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  competitor.isUs ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={competitor.logo} size={24} />
                </div>
                <div className="flex-1">
                  <div className={`font-semibold text-lg ${competitor.isUs ? 'text-primary' : 'text-foreground'}`}>
                    {competitor.name}
                    {competitor.isUs && (
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded-full">US</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{competitor.focus}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">AI-Powered</span>
                  {getBooleanIcon(competitor.aiPowered)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Community Driven</span>
                  {getBooleanIcon(competitor.communityDriven)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Multi-Stream</span>
                  {getBooleanIcon(competitor.multiStream)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Scalability</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(competitor.scalability)}`}>
                    {competitor.scalability}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">{competitor.uniqueValue}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-primary/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Why Eco-Sahay Leads the Market
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={32} color="white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">AI + Community Synergy</h4>
              <p className="text-sm text-muted-foreground">
                Only platform combining advanced AI with grassroots community engagement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} color="white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Multi-Problem Solving</h4>
              <p className="text-sm text-muted-foreground">
                Addresses e-waste, organic waste, and energy generation simultaneously
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} color="white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Self-Sustaining Model</h4>
              <p className="text-sm text-muted-foreground">
                Revenue-positive from day one with multiple income streams
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveLandscape;