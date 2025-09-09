import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CommunityMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const ecoSahayakLocations = [
    {
      id: 1,
      name: "Rajesh Kumar",
      area: "Sector 15, Noida",
      households: 45,
      collections: 128,
      rating: 4.8,
      coordinates: { x: 35, y: 25 },
      status: "active"
    },
    {
      id: 2,
      name: "Priya Sharma",
      area: "Koramangala, Bangalore",
      households: 62,
      collections: 156,
      rating: 4.9,
      coordinates: { x: 60, y: 70 },
      status: "active"
    },
    {
      id: 3,
      name: "Amit Singh",
      area: "Bandra West, Mumbai",
      households: 38,
      collections: 89,
      rating: 4.6,
      coordinates: { x: 20, y: 55 },
      status: "busy"
    },
    {
      id: 4,
      name: "Sunita Devi",
      area: "Lajpat Nagar, Delhi",
      households: 52,
      collections: 142,
      rating: 4.7,
      coordinates: { x: 75, y: 30 },
      status: "active"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-success';
      case 'busy': return 'bg-warning';
      case 'offline': return 'bg-muted-foreground';
      default: return 'bg-primary';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">Community Map</h3>
            <p className="text-sm font-caption text-muted-foreground">Eco-Sahayak locations & coverage</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-xs text-muted-foreground">Active</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span className="text-xs text-muted-foreground">Busy</span>
          </div>
        </div>
      </div>
      <div className="relative bg-muted/30 rounded-lg h-80 overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        
        {/* Location Markers */}
        {ecoSahayakLocations?.map((location) => (
          <div
            key={location?.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ 
              left: `${location?.coordinates?.x}%`, 
              top: `${location?.coordinates?.y}%` 
            }}
            onClick={() => setSelectedLocation(location)}
          >
            <div className={`w-4 h-4 ${getStatusColor(location?.status)} rounded-full border-2 border-white shadow-lg animate-pulse`}></div>
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-lg px-2 py-1 text-xs font-medium text-foreground whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
              {location?.name}
            </div>
          </div>
        ))}

        {/* Coverage Areas */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-sm font-medium text-foreground mb-2">Coverage Stats</div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Total Areas:</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Active Sahayaks:</span>
              <span className="font-medium text-success">18</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Households:</span>
              <span className="font-medium">1,247</span>
            </div>
          </div>
        </div>
      </div>
      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="mt-4 bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-foreground">{selectedLocation?.name}</h4>
            <button
              onClick={() => setSelectedLocation(null)}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{selectedLocation?.households}</div>
              <div className="text-xs text-muted-foreground">Households</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{selectedLocation?.collections}</div>
              <div className="text-xs text-muted-foreground">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{selectedLocation?.rating}</div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
            <div className="text-center">
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                selectedLocation?.status === 'active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
              }`}>
                {selectedLocation?.status}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityMap;