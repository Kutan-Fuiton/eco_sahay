import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const AIRewardPredictor = () => {
  const [formData, setFormData] = useState({
    wasteType: '',
    quantity: '',
    location: '',
    frequency: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const wasteTypes = [
    { value: 'electronic', label: 'Electronic Waste (E-waste)' },
    { value: 'organic', label: 'Organic Waste' },
    { value: 'plastic', label: 'Plastic Waste' },
    { value: 'paper', label: 'Paper & Cardboard' },
    { value: 'metal', label: 'Metal Scrap' },
    { value: 'mixed', label: 'Mixed Waste' }
  ];

  const locations = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'pune', label: 'Pune' }
  ];

  const frequencies = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'occasional', label: 'Occasional' }
  ];

  const calculateRewards = async () => {
    setIsCalculating(true);
    
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 2000));

    const baseRates = {
      electronic: 150,
      organic: 25,
      plastic: 45,
      paper: 35,
      metal: 120,
      mixed: 40
    };

    const locationMultipliers = {
      mumbai: 1.3,
      delhi: 1.2,
      bangalore: 1.25,
      chennai: 1.1,
      kolkata: 1.0,
      pune: 1.15
    };

    const frequencyMultipliers = {
      daily: 1.5,
      weekly: 1.2,
      monthly: 1.0,
      occasional: 0.8
    };

    const baseRate = baseRates?.[formData?.wasteType] || 40;
    const locationMultiplier = locationMultipliers?.[formData?.location] || 1.0;
    const frequencyMultiplier = frequencyMultipliers?.[formData?.frequency] || 1.0;
    const quantity = parseFloat(formData?.quantity) || 1;

    const pointsPerKg = Math.round(baseRate * locationMultiplier * frequencyMultiplier);
    const totalPoints = Math.round(pointsPerKg * quantity);
    const cashValue = Math.round(totalPoints * 0.1); // 1 point = ₹0.10
    const carbonOffset = Math.round(quantity * 2.3); // kg CO2 equivalent

    setPrediction({
      pointsPerKg,
      totalPoints,
      cashValue,
      carbonOffset,
      wasteType: wasteTypes?.find(w => w?.value === formData?.wasteType)?.label,
      location: locations?.find(l => l?.value === formData?.location)?.label,
      frequency: frequencies?.find(f => f?.value === formData?.frequency)?.label
    });

    setIsCalculating(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setPrediction(null); // Reset prediction when inputs change
  };

  const isFormValid = formData?.wasteType && formData?.quantity && formData?.location && formData?.frequency;

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
            AI Reward Predictor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our AI-powered reward calculation system. See how much you can earn by contributing to sustainable waste management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-muted/20 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Calculator" size={20} color="white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Calculate Your Rewards</h3>
            </div>

            <div className="space-y-6">
              <Select
                label="Waste Type"
                placeholder="Select waste type"
                options={wasteTypes}
                value={formData?.wasteType}
                onChange={(value) => handleInputChange('wasteType', value)}
                required
              />

              <Input
                label="Quantity (kg)"
                type="number"
                placeholder="Enter quantity in kilograms"
                value={formData?.quantity}
                onChange={(e) => handleInputChange('quantity', e?.target?.value)}
                min="0.1"
                step="0.1"
                required
              />

              <Select
                label="Location"
                placeholder="Select your city"
                options={locations}
                value={formData?.location}
                onChange={(value) => handleInputChange('location', value)}
                required
              />

              <Select
                label="Collection Frequency"
                placeholder="How often do you dispose waste?"
                options={frequencies}
                value={formData?.frequency}
                onChange={(value) => handleInputChange('frequency', value)}
                required
              />

              <Button
                variant="default"
                size="lg"
                fullWidth
                onClick={calculateRewards}
                disabled={!isFormValid}
                loading={isCalculating}
                iconName="Zap"
                iconPosition="left"
              >
                Calculate AI Prediction
              </Button>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {!prediction && !isCalculating && (
              <div className="bg-muted/20 rounded-2xl p-8 text-center">
                <Icon name="Brain" size={64} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  AI Prediction Ready
                </h3>
                <p className="text-muted-foreground">
                  Fill in the form to see your personalized reward calculation powered by our AI engine.
                </p>
              </div>
            )}

            {isCalculating && (
              <div className="bg-primary/5 rounded-2xl p-8 text-center">
                <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  AI Processing...
                </h3>
                <p className="text-muted-foreground">
                  Our AI is analyzing market rates, location factors, and waste processing efficiency.
                </p>
              </div>
            )}

            {prediction && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-success/5 rounded-2xl p-8 border border-success/20"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} color="white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">AI Prediction Results</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Award" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Points per kg</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{prediction?.pointsPerKg}</div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Star" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Total Points</span>
                    </div>
                    <div className="text-2xl font-bold text-accent">{prediction?.totalPoints}</div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="IndianRupee" size={16} className="text-success" />
                      <span className="text-sm font-medium text-muted-foreground">Cash Value</span>
                    </div>
                    <div className="text-2xl font-bold text-success">₹{prediction?.cashValue}</div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Leaf" size={16} className="text-secondary" />
                      <span className="text-sm font-medium text-muted-foreground">CO₂ Offset</span>
                    </div>
                    <div className="text-2xl font-bold text-secondary">{prediction?.carbonOffset}kg</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-3">Calculation Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Waste Type:</span>
                      <span className="text-foreground">{prediction?.wasteType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground">{prediction?.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frequency:</span>
                      <span className="text-foreground">{prediction?.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="text-foreground">{formData?.quantity} kg</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Icon name="Info" size={16} className="text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="text-primary font-medium mb-1">AI-Powered Calculation</p>
                      <p className="text-muted-foreground">
                        This prediction uses machine learning algorithms considering market rates, location factors, waste processing efficiency, and environmental impact metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIRewardPredictor;