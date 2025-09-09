import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FacilityLayout = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const equipmentData = [
    {
      id: 'shredder-01',
      name: 'E-Waste Shredder',
      type: 'e-waste',
      status: 'operational',
      capacity: '85%',
      position: { x: 20, y: 30 },
      temperature: '45°C',
      efficiency: '92%'
    },
    {
      id: 'biogas-01',
      name: 'Biogas Reactor',
      type: 'organic',
      status: 'operational',
      capacity: '78%',
      position: { x: 60, y: 25 },
      temperature: '38°C',
      efficiency: '88%'
    },
    {
      id: 'separator-01',
      name: 'Metal Separator',
      type: 'e-waste',
      status: 'maintenance',
      capacity: '0%',
      position: { x: 35, y: 50 },
      temperature: '22°C',
      efficiency: '0%'
    },
    {
      id: 'composter-01',
      name: 'Organic Composter',
      type: 'organic',
      status: 'operational',
      capacity: '95%',
      position: { x: 75, y: 60 },
      temperature: '55°C',
      efficiency: '94%'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'bg-success text-success-foreground';
      case 'maintenance': return 'bg-warning text-warning-foreground';
      case 'offline': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type) => {
    return type === 'e-waste' ? 'border-secondary' : 'border-accent';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Factory" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Facility Layout</h3>
            <p className="text-sm font-caption text-muted-foreground">Real-time equipment monitoring</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-xs text-muted-foreground">Operational</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span className="text-xs text-muted-foreground">Maintenance</span>
          </div>
        </div>
      </div>
      <div className="relative bg-muted/30 rounded-lg h-80 overflow-hidden">
        {/* Facility Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40"></div>
        
        {/* Processing Flow Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-primary)" opacity="0.6" />
            </marker>
          </defs>
          
          {/* E-waste flow */}
          <path d="M 60 100 Q 120 120 280 160" stroke="var(--color-secondary)" 
                strokeWidth="2" fill="none" strokeDasharray="5,5" 
                markerEnd="url(#arrowhead)" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
          </path>
          
          {/* Organic flow */}
          <path d="M 200 80 Q 260 100 400 200" stroke="var(--color-accent)" 
                strokeWidth="2" fill="none" strokeDasharray="5,5" 
                markerEnd="url(#arrowhead)" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Equipment Nodes */}
        {equipmentData?.map((equipment) => (
          <div
            key={equipment?.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
              selectedEquipment?.id === equipment?.id ? 'scale-110 z-10' : ''
            }`}
            style={{ left: `${equipment?.position?.x}%`, top: `${equipment?.position?.y}%` }}
            onClick={() => setSelectedEquipment(equipment)}
          >
            <div className={`w-12 h-12 rounded-lg border-2 ${getTypeColor(equipment?.type)} ${getStatusColor(equipment?.status)} flex items-center justify-center shadow-elevation-1`}>
              <Icon 
                name={equipment?.type === 'e-waste' ? 'Cpu' : 'Leaf'} 
                size={20} 
              />
            </div>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-white rounded px-2 py-1 shadow-elevation-1 min-w-max">
              <p className="text-xs font-medium text-foreground">{equipment?.name}</p>
              <p className="text-xs text-muted-foreground">{equipment?.capacity}</p>
            </div>
          </div>
        ))}

        {/* Input/Output Areas */}
        <div className="absolute top-4 left-4 bg-secondary/20 rounded-lg p-3 border border-secondary/30">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={16} className="text-secondary" />
            <span className="text-xs font-medium text-secondary">E-Waste Input</span>
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-accent/20 rounded-lg p-3 border border-accent/30">
          <div className="flex items-center space-x-2">
            <Icon name="Recycle" size={16} className="text-accent" />
            <span className="text-xs font-medium text-accent">Organic Input</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 bg-success/20 rounded-lg p-3 border border-success/30">
          <div className="flex items-center space-x-2">
            <Icon name="Fuel" size={16} className="text-success" />
            <span className="text-xs font-medium text-success">Bio-CNG Output</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-primary/20 rounded-lg p-3 border border-primary/30">
          <div className="flex items-center space-x-2">
            <Icon name="Sprout" size={16} className="text-primary" />
            <span className="text-xs font-medium text-primary">Fertilizer Output</span>
          </div>
        </div>
      </div>
      {/* Equipment Details Panel */}
      {selectedEquipment && (
        <div className="mt-6 bg-muted/30 rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-foreground">{selectedEquipment?.name}</h4>
            <button
              onClick={() => setSelectedEquipment(null)}
              className="p-1 rounded text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className={`w-2 h-2 rounded-full ${
                  selectedEquipment?.status === 'operational' ? 'bg-success' : 
                  selectedEquipment?.status === 'maintenance' ? 'bg-warning' : 'bg-destructive'
                }`}></div>
                <span className="text-sm font-medium capitalize">{selectedEquipment?.status}</span>
              </div>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground">Capacity</p>
              <p className="text-sm font-medium text-foreground mt-1">{selectedEquipment?.capacity}</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground">Temperature</p>
              <p className="text-sm font-medium text-foreground mt-1">{selectedEquipment?.temperature}</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground">Efficiency</p>
              <p className="text-sm font-medium text-foreground mt-1">{selectedEquipment?.efficiency}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilityLayout;