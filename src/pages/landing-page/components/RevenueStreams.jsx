import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const RevenueStreams = () => {
  const [activeStream, setActiveStream] = useState('primary');

  const revenueData = {
    primary: {
      title: 'Primary Revenue (High-Margin)',
      color: '#2D5A3D',
      data: [
        { name: 'E-waste Processing', value: 1500000, margin: '45%' },
        { name: 'Bio-CNG Sales', value: 1200000, margin: '40%' },
        { name: 'Premium Fertilizer', value: 800000, margin: '35%' },
        { name: 'Recycled Materials', value: 600000, margin: '30%' }
      ]
    },
    secondary: {
      title: 'Secondary Revenue (Volume-Driven)',
      color: '#4A90A4',
      data: [
        { name: 'Collection Services', value: 2000000, margin: '20%' },
        { name: 'Logistics Platform', value: 1500000, margin: '25%' },
        { name: 'Bulk Composting', value: 1000000, margin: '18%' },
        { name: 'Waste Consulting', value: 500000, margin: '15%' }
      ]
    },
    future: {
      title: 'Future-Facing Revenue',
      color: '#F4A261',
      data: [
        { name: 'Carbon Credits', value: 800000, margin: '60%' },
        { name: 'Data Analytics', value: 600000, margin: '70%' },
        { name: 'AI Licensing', value: 400000, margin: '80%' },
        { name: 'Blockchain Services', value: 300000, margin: '65%' }
      ]
    }
  };

  const totalRevenue = Object.values(revenueData)?.reduce((total, stream) => 
    total + stream?.data?.reduce((sum, item) => sum + item?.value, 0), 0
  );

  const pieData = Object.entries(revenueData)?.map(([key, stream]) => ({
    name: stream?.title,
    value: stream?.data?.reduce((sum, item) => sum + item?.value, 0),
    color: stream?.color
  }));

  const formatCurrency = (value) => {
    return `₹${(value / 100000)?.toFixed(1)}L`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-3 border border-border rounded-lg shadow-elevation-1">
          <p className="font-medium text-foreground">{label}</p>
          <p className="text-primary">
            Revenue: {formatCurrency(payload?.[0]?.value)}
          </p>
          <p className="text-muted-foreground text-sm">
            Margin: {payload?.[0]?.payload?.margin}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Revenue Streams Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Diversified revenue model with multiple income sources ensuring sustainable growth and profitability
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Icon name="TrendingUp" size={20} />
            <span className="text-lg font-semibold">Total Projected Revenue: {formatCurrency(totalRevenue)}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Revenue Distribution Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-muted/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Revenue Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100)?.toFixed(1)}%`}
                  >
                    {pieData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Stream Selector */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">Revenue Stream Details</h3>
            
            <div className="space-y-3">
              {Object.entries(revenueData)?.map(([key, stream]) => (
                <button
                  key={key}
                  onClick={() => setActiveStream(key)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activeStream === key
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{stream?.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatCurrency(stream?.data?.reduce((sum, item) => sum + item?.value, 0))} annual
                      </p>
                    </div>
                    <Icon 
                      name={activeStream === key ? 'ChevronDown' : 'ChevronRight'} 
                      size={20} 
                      className="text-muted-foreground"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-success/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-sm font-medium text-success">Growth Rate</span>
                </div>
                <div className="text-2xl font-bold text-foreground">35%</div>
                <div className="text-xs text-muted-foreground">Year over Year</div>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Target" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">Profit Margin</span>
                </div>
                <div className="text-2xl font-bold text-foreground">42%</div>
                <div className="text-xs text-muted-foreground">Average Margin</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-muted/20 rounded-2xl p-8"
        >
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
            {revenueData?.[activeStream]?.title} - Breakdown
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData?.[activeStream]?.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tickFormatter={formatCurrency}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill={revenueData?.[activeStream]?.color}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueStreams;