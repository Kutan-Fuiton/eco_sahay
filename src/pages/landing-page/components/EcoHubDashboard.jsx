import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Icon from '../../../components/AppIcon';

const EcoHubDashboard = () => {
  const [activeMetric, setActiveMetric] = useState('processing');
  const [liveData, setLiveData] = useState({
    totalProcessed: 2847,
    energyGenerated: 1256,
    co2Saved: 4892,
    revenueToday: 45600
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        totalProcessed: prev?.totalProcessed + Math.floor(Math.random() * 5),
        energyGenerated: prev?.energyGenerated + Math.floor(Math.random() * 3),
        co2Saved: prev?.co2Saved + Math.floor(Math.random() * 8),
        revenueToday: prev?.revenueToday + Math.floor(Math.random() * 100)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const processingData = [
    { time: '06:00', eWaste: 45, organic: 120, total: 165 },
    { time: '08:00', eWaste: 78, organic: 185, total: 263 },
    { time: '10:00', eWaste: 92, organic: 220, total: 312 },
    { time: '12:00', eWaste: 115, organic: 280, total: 395 },
    { time: '14:00', eWaste: 134, organic: 315, total: 449 },
    { time: '16:00', eWaste: 156, organic: 380, total: 536 },
    { time: '18:00', eWaste: 178, organic: 420, total: 598 }
  ];

  const energyData = [
    { time: '06:00', bioCNG: 25, electricity: 15, total: 40 },
    { time: '08:00', bioCNG: 42, electricity: 28, total: 70 },
    { time: '10:00', bioCNG: 58, electricity: 35, total: 93 },
    { time: '12:00', bioCNG: 75, electricity: 48, total: 123 },
    { time: '14:00', bioCNG: 89, electricity: 56, total: 145 },
    { time: '16:00', bioCNG: 105, electricity: 68, total: 173 },
    { time: '18:00', bioCNG: 118, electricity: 78, total: 196 }
  ];

  const revenueData = [
    { time: '06:00', primary: 1200, secondary: 800, future: 300, total: 2300 },
    { time: '08:00', primary: 2100, secondary: 1400, future: 520, total: 4020 },
    { time: '10:00', primary: 3200, secondary: 2100, future: 780, total: 6080 },
    { time: '12:00', primary: 4500, secondary: 2900, future: 1100, total: 8500 },
    { time: '14:00', primary: 5800, secondary: 3700, future: 1400, total: 10900 },
    { time: '16:00', primary: 7200, secondary: 4600, future: 1750, total: 13550 },
    { time: '18:00', primary: 8600, secondary: 5500, future: 2100, total: 16200 }
  ];

  const getChartData = () => {
    switch (activeMetric) {
      case 'processing': return processingData;
      case 'energy': return energyData;
      case 'revenue': return revenueData;
      default: return processingData;
    }
  };

  const metrics = [
    {
      id: 'processing',
      title: 'Waste Processing',
      icon: 'Recycle',
      color: 'primary',
      unit: 'kg',
      description: 'Real-time waste processing across all streams'
    },
    {
      id: 'energy',
      title: 'Energy Generation',
      icon: 'Zap',
      color: 'secondary',
      unit: 'kWh',
      description: 'Bio-CNG and electricity generation from waste'
    },
    {
      id: 'revenue',
      title: 'Revenue Streams',
      icon: 'TrendingUp',
      color: 'accent',
      unit: '₹',
      description: 'Live revenue tracking across all income sources'
    }
  ];

  const hubStatus = [
    { name: 'Mumbai Central Hub', status: 'active', capacity: 85, processed: 1247 },
    { name: 'Delhi North Hub', status: 'active', capacity: 92, processed: 1089 },
    { name: 'Bangalore Tech Hub', status: 'maintenance', capacity: 0, processed: 0 },
    { name: 'Chennai Coastal Hub', status: 'active', capacity: 78, processed: 892 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success bg-success/10';
      case 'maintenance': return 'text-warning bg-warning/10';
      case 'offline': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted/20';
    }
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
            Live Eco-Hub Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring of our Eco-Hub operations across India, showcasing live processing data and impact metrics
          </p>
        </motion.div>

        {/* Live Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-elevation-1 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Recycle" size={24} className="text-primary" />
              </div>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{liveData?.totalProcessed?.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">kg Processed Today</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl shadow-elevation-1 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-secondary" />
              </div>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{liveData?.energyGenerated?.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">kWh Generated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-xl shadow-elevation-1 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={24} className="text-success" />
              </div>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{liveData?.co2Saved?.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">kg CO₂ Saved</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-xl shadow-elevation-1 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="IndianRupee" size={24} className="text-accent" />
              </div>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">₹{liveData?.revenueToday?.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Revenue Today</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-elevation-1 p-8"
            >
              {/* Metric Selector */}
              <div className="flex flex-wrap gap-3 mb-8">
                {metrics?.map((metric) => (
                  <button
                    key={metric?.id}
                    onClick={() => setActiveMetric(metric?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeMetric === metric?.id
                        ? `bg-${metric?.color} text-white`
                        : 'bg-muted/20 text-muted-foreground hover:bg-muted/40'
                    }`}
                  >
                    <Icon name={metric?.icon} size={16} />
                    <span className="text-sm font-medium">{metric?.title}</span>
                  </button>
                ))}
              </div>

              {/* Chart */}
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={getChartData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }}
                    />
                    {activeMetric === 'processing' && (
                      <>
                        <Area type="monotone" dataKey="eWaste" stackId="1" stroke="#2D5A3D" fill="#2D5A3D" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="organic" stackId="1" stroke="#4A90A4" fill="#4A90A4" fillOpacity={0.6} />
                      </>
                    )}
                    {activeMetric === 'energy' && (
                      <>
                        <Area type="monotone" dataKey="bioCNG" stackId="1" stroke="#4A90A4" fill="#4A90A4" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="electricity" stackId="1" stroke="#F4A261" fill="#F4A261" fillOpacity={0.6} />
                      </>
                    )}
                    {activeMetric === 'revenue' && (
                      <>
                        <Area type="monotone" dataKey="primary" stackId="1" stroke="#2D5A3D" fill="#2D5A3D" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="secondary" stackId="1" stroke="#4A90A4" fill="#4A90A4" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="future" stackId="1" stroke="#F4A261" fill="#F4A261" fillOpacity={0.6} />
                      </>
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {metrics?.find(m => m?.id === activeMetric)?.description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hub Status */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-elevation-1 p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-6">Hub Status</h3>
              <div className="space-y-4">
                {hubStatus?.map((hub, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{hub?.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hub?.status)}`}>
                        {hub?.status}
                      </span>
                    </div>
                    
                    {hub?.status === 'active' && (
                      <>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Capacity</span>
                          <span className="text-foreground">{hub?.capacity}%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2 mb-3">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${hub?.capacity}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Processed Today</span>
                          <span className="text-foreground">{hub?.processed} kg</span>
                        </div>
                      </>
                    )}
                    
                    {hub?.status === 'maintenance' && (
                      <div className="flex items-center space-x-2 text-sm text-warning">
                        <Icon name="Wrench" size={14} />
                        <span>Scheduled maintenance in progress</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Today's Impact</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Eco-Sahayaks Active</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Home" size={16} className="text-secondary" />
                    <span className="text-sm text-muted-foreground">Households Served</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">1,892</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">Rewards Distributed</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">₹12,450</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoHubDashboard;