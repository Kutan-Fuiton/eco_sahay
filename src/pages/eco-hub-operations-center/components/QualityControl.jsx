import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QualityControl = () => {
  const [selectedProduct, setSelectedProduct] = useState('bio-cng');

  const qualityData = {
    'bio-cng': {
      name: 'Bio-CNG',
      icon: 'Fuel',
      color: 'success',
      parameters: [
        { name: 'Methane Content', value: 92, unit: '%', min: 85, max: 95, status: 'good' },
        { name: 'Hydrogen Sulfide', value: 15, unit: 'ppm', min: 0, max: 20, status: 'good' },
        { name: 'Carbon Dioxide', value: 6, unit: '%', min: 0, max: 10, status: 'good' },
        { name: 'Moisture Content', value: 0.02, unit: '%', min: 0, max: 0.1, status: 'excellent' }
      ],
      trend: [
        { time: '00:00', methane: 91, h2s: 18, co2: 7, moisture: 0.03 },
        { time: '04:00', methane: 92, h2s: 16, co2: 6, moisture: 0.02 },
        { time: '08:00', methane: 93, h2s: 14, co2: 5, moisture: 0.02 },
        { time: '12:00', methane: 92, h2s: 15, co2: 6, moisture: 0.02 },
        { time: '16:00', methane: 91, h2s: 17, co2: 7, moisture: 0.03 },
        { time: '20:00', methane: 92, h2s: 15, co2: 6, moisture: 0.02 }
      ]
    },
    'fertilizer': {
      name: 'Organic Fertilizer',
      icon: 'Sprout',
      color: 'primary',
      parameters: [
        { name: 'Nitrogen (N)', value: 2.8, unit: '%', min: 2.0, max: 4.0, status: 'good' },
        { name: 'Phosphorus (P)', value: 1.5, unit: '%', min: 1.0, max: 2.0, status: 'good' },
        { name: 'Potassium (K)', value: 1.2, unit: '%', min: 1.0, max: 2.0, status: 'good' },
        { name: 'pH Level', value: 6.8, unit: 'pH', min: 6.0, max: 7.5, status: 'excellent' }
      ],
      trend: [
        { time: '00:00', nitrogen: 2.6, phosphorus: 1.4, potassium: 1.1, ph: 6.9 },
        { time: '04:00', nitrogen: 2.7, phosphorus: 1.5, potassium: 1.2, ph: 6.8 },
        { time: '08:00', nitrogen: 2.8, phosphorus: 1.5, potassium: 1.2, ph: 6.8 },
        { time: '12:00', nitrogen: 2.9, phosphorus: 1.6, potassium: 1.3, ph: 6.7 },
        { time: '16:00', nitrogen: 2.8, phosphorus: 1.5, potassium: 1.2, ph: 6.8 },
        { time: '20:00', nitrogen: 2.7, phosphorus: 1.4, potassium: 1.1, ph: 6.9 }
      ]
    }
  };

  const testResults = [
    {
      id: 'QC-2024-001',
      product: 'Bio-CNG',
      batchId: 'BCG-240523-01',
      testDate: '23/05/2024',
      result: 'Pass',
      score: 94,
      tester: 'Dr. Priya Sharma'
    },
    {
      id: 'QC-2024-002',
      product: 'Fertilizer',
      batchId: 'FRT-240523-01',
      testDate: '23/05/2024',
      result: 'Pass',
      score: 96,
      tester: 'Rajesh Kumar'
    },
    {
      id: 'QC-2024-003',
      product: 'Bio-CNG',
      batchId: 'BCG-240522-02',
      testDate: '22/05/2024',
      result: 'Pass',
      score: 91,
      tester: 'Dr. Priya Sharma'
    },
    {
      id: 'QC-2024-004',
      product: 'Fertilizer',
      batchId: 'FRT-240522-01',
      testDate: '22/05/2024',
      result: 'Retest',
      score: 78,
      tester: 'Rajesh Kumar'
    }
  ];

  const getParameterStatus = (status) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'warning': return 'text-warning';
      case 'critical': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getParameterBg = (status) => {
    switch (status) {
      case 'excellent': return 'bg-success/10 border-success/20';
      case 'good': return 'bg-primary/10 border-primary/20';
      case 'warning': return 'bg-warning/10 border-warning/20';
      case 'critical': return 'bg-destructive/10 border-destructive/20';
      default: return 'bg-muted/10 border-border';
    }
  };

  const getResultColor = (result) => {
    switch (result) {
      case 'Pass': return 'text-success';
      case 'Retest': return 'text-warning';
      case 'Fail': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getResultBg = (result) => {
    switch (result) {
      case 'Pass': return 'bg-success/10 border-success/20';
      case 'Retest': return 'bg-warning/10 border-warning/20';
      case 'Fail': return 'bg-destructive/10 border-destructive/20';
      default: return 'bg-muted/10 border-border';
    }
  };

  const currentProduct = qualityData?.[selectedProduct];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Quality Control</h3>
            <p className="text-sm font-caption text-muted-foreground">Product specifications & testing</p>
          </div>
        </div>

        <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
          Export Report
        </Button>
      </div>
      {/* Product Selector */}
      <div className="flex space-x-3 mb-6">
        {Object.entries(qualityData)?.map(([key, product]) => (
          <button
            key={key}
            onClick={() => setSelectedProduct(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              selectedProduct === key
                ? `bg-${product?.color}/10 border-${product?.color}/20 text-${product?.color}`
                : 'bg-muted/30 border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={product?.icon} size={16} />
            <span className="font-medium">{product?.name}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Current Parameters */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <h4 className="font-medium text-foreground mb-4">Current Quality Parameters</h4>
          
          <div className="space-y-4">
            {currentProduct?.parameters?.map((param, index) => (
              <div key={index} className={`rounded-lg p-3 border ${getParameterBg(param?.status)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{param?.name}</span>
                  <span className={`text-xs font-medium uppercase ${getParameterStatus(param?.status)}`}>
                    {param?.status}
                  </span>
                </div>
                
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="text-lg font-bold text-foreground">{param?.value}</span>
                  <span className="text-sm text-muted-foreground">{param?.unit}</span>
                </div>

                {/* Parameter Range */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Min: {param?.min}{param?.unit}</span>
                  <span>Max: {param?.max}{param?.unit}</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-1 mt-2">
                  <div 
                    className={`h-1 rounded-full transition-all duration-300 ${
                      param?.status === 'excellent' ? 'bg-success' :
                      param?.status === 'good' ? 'bg-primary' :
                      param?.status === 'warning' ? 'bg-warning' : 'bg-destructive'
                    }`}
                    style={{ 
                      width: `${((param?.value - param?.min) / (param?.max - param?.min)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Trend Chart */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <h4 className="font-medium text-foreground mb-4">24-Hour Quality Trend</h4>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentProduct?.trend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="time" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
                {selectedProduct === 'bio-cng' ? (
                  <>
                    <Line type="monotone" dataKey="methane" stroke="var(--color-success)" strokeWidth={2} name="Methane %" />
                    <Line type="monotone" dataKey="h2s" stroke="var(--color-warning)" strokeWidth={2} name="H₂S ppm" />
                    <Line type="monotone" dataKey="co2" stroke="var(--color-secondary)" strokeWidth={2} name="CO₂ %" />
                  </>
                ) : (
                  <>
                    <Line type="monotone" dataKey="nitrogen" stroke="var(--color-primary)" strokeWidth={2} name="Nitrogen %" />
                    <Line type="monotone" dataKey="phosphorus" stroke="var(--color-accent)" strokeWidth={2} name="Phosphorus %" />
                    <Line type="monotone" dataKey="potassium" stroke="var(--color-success)" strokeWidth={2} name="Potassium %" />
                  </>
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Recent Test Results */}
      <div className="bg-muted/30 rounded-lg p-4 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-foreground">Recent Test Results</h4>
          <Button variant="ghost" size="sm" iconName="RefreshCw" iconPosition="left">
            Refresh
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Test ID</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Product</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Batch ID</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Result</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Score</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-muted-foreground">Tester</th>
              </tr>
            </thead>
            <tbody>
              {testResults?.map((test, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-3 px-3 text-sm font-mono text-foreground">{test?.id}</td>
                  <td className="py-3 px-3 text-sm text-foreground">{test?.product}</td>
                  <td className="py-3 px-3 text-sm font-mono text-foreground">{test?.batchId}</td>
                  <td className="py-3 px-3 text-sm text-foreground">{test?.testDate}</td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getResultBg(test?.result)} ${getResultColor(test?.result)}`}>
                      {test?.result}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-sm font-semibold text-foreground">{test?.score}%</td>
                  <td className="py-3 px-3 text-sm text-foreground">{test?.tester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Quality Summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-success/10 rounded-lg p-4 border border-success/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Pass Rate</span>
          </div>
          <p className="text-2xl font-bold text-foreground">94.2%</p>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Avg Score</span>
          </div>
          <p className="text-2xl font-bold text-foreground">91.8</p>
          <p className="text-xs text-muted-foreground">Quality score</p>
        </div>

        <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TestTube" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Tests Today</span>
          </div>
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </div>

        <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Avg Time</span>
          </div>
          <p className="text-2xl font-bold text-foreground">2.5h</p>
          <p className="text-xs text-muted-foreground">Per test</p>
        </div>
      </div>
    </div>
  );
};

export default QualityControl;