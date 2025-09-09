import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ThreeLayerModel = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = [
    {
      id: 'digital',
      title: 'Digital Platform',
      subtitle: 'The Brain',
      icon: 'Brain',
      color: 'primary',
      description: 'AI-powered intelligence driving smart waste management decisions',
      features: [
        { icon: 'Gift', title: 'Rewards System', desc: 'Gamified incentives for waste segregation' },
        { icon: 'Truck', title: 'AI Logistics', desc: 'Optimized collection routes and scheduling' },
        { icon: 'Shield', title: 'Blockchain Traceability', desc: 'Transparent waste tracking from source to processing' },
        { icon: 'BarChart3', title: 'Analytics Dashboard', desc: 'Real-time insights and performance metrics' }
      ]
    },
    {
      id: 'ecohub',
      title: 'Eco-Hub',
      subtitle: 'The Heart',
      icon: 'Factory',
      color: 'secondary',
      description: 'Physical processing centers transforming waste into valuable resources',
      features: [
        { icon: 'Cpu', title: 'E-waste Processing', desc: 'Advanced recycling of electronic components' },
        { icon: 'Leaf', title: 'Organic to Bio-CNG', desc: 'Converting organic waste to clean energy' },
        { icon: 'Sprout', title: 'Fertilizer Production', desc: 'Creating nutrient-rich compost for agriculture' },
        { icon: 'Zap', title: 'Energy Generation', desc: 'Sustainable power from waste materials' }
      ]
    },
    {
      id: 'human',
      title: 'Human Network',
      subtitle: 'The Hands',
      icon: 'Users',
      color: 'accent',
      description: 'Community-driven network of Eco-Sahayaks enabling local impact',
      features: [
        { icon: 'UserCheck', title: 'Eco-Sahayaks', desc: 'Trained community waste management champions' },
        { icon: 'Home', title: 'Door-to-Door Collection', desc: 'Convenient household waste pickup services' },
        { icon: 'GraduationCap', title: 'Community Education', desc: 'Awareness programs and training initiatives' },
        { icon: 'Heart', title: 'Social Impact', desc: 'Creating employment and environmental benefits' }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        hover: 'hover:bg-primary/5'
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        hover: 'hover:bg-secondary/5'
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        hover: 'hover:bg-accent/5'
      }
    };
    return colorMap?.[color];
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
            Three-Layer Ecosystem Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An integrated approach combining digital intelligence, physical infrastructure, and human networks for comprehensive waste management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {layers?.map((layer, index) => {
            const colors = getColorClasses(layer?.color);
            const isActive = activeLayer === layer?.id;

            return (
              <motion.div
                key={layer?.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-elevation-1 overflow-hidden cursor-pointer transition-all duration-300 ${colors?.hover} ${
                  isActive ? 'ring-2 ' + colors?.border : ''
                }`}
                onClick={() => setActiveLayer(isActive ? null : layer?.id)}
              >
                {/* Card Header */}
                <div className="p-8">
                  <div className={`w-16 h-16 ${colors?.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon name={layer?.icon} size={32} color="white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {layer?.title}
                  </h3>
                  <p className={`text-lg font-medium ${colors?.text} mb-4`}>
                    {layer?.subtitle}
                  </p>
                  <p className="text-muted-foreground">
                    {layer?.description}
                  </p>
                </div>
                {/* Expandable Features */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border bg-muted/20"
                    >
                      <div className="p-6 space-y-4">
                        {layer?.features?.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className={`w-8 h-8 ${colors?.bg}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Icon name={feature?.icon} size={16} className={colors?.text} />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{feature?.title}</h4>
                              <p className="text-sm text-muted-foreground">{feature?.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Click Indicator */}
                <div className="absolute top-4 right-4">
                  <Icon 
                    name={isActive ? 'ChevronUp' : 'ChevronDown'} 
                    size={20} 
                    className={`${colors?.text} transition-transform duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreeLayerModel;