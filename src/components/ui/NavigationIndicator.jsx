import React from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const NavigationIndicator = ({ showBreadcrumbs = false, className = '' }) => {
  const location = useLocation();

  const getPageInfo = (pathname) => {
    switch (pathname) {
      case '/landing-page':
        return { 
          title: 'Home', 
          description: 'Ecosystem Overview',
          icon: 'Home',
          breadcrumbs: [{ name: 'Home', path: '/landing-page' }]
        };
      case '/eco-hub-operations-center':
        return { 
          title: 'Operations Center', 
          description: 'Infrastructure & Processing',
          icon: 'Factory',
          breadcrumbs: [
            { name: 'Home', path: '/landing-page' },
            { name: 'Operations', path: '/eco-hub-operations-center' }
          ]
        };
      case '/community-network-hub':
        return { 
          title: 'Community Hub', 
          description: 'Social Impact & Coordination',
          icon: 'Users',
          breadcrumbs: [
            { name: 'Home', path: '/landing-page' },
            { name: 'Community', path: '/community-network-hub' }
          ]
        };
      default:
        return { 
          title: 'Eco-Sahay', 
          description: 'Waste to Wealth Platform',
          icon: 'Leaf',
          breadcrumbs: [{ name: 'Home', path: '/landing-page' }]
        };
    }
  };

  const pageInfo = getPageInfo(location?.pathname);

  if (showBreadcrumbs) {
    return (
      <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
        {pageInfo?.breadcrumbs?.map((crumb, index) => (
          <React.Fragment key={crumb?.path}>
            {index > 0 && (
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            )}
            <span 
              className={
                index === pageInfo?.breadcrumbs?.length - 1 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }
            >
              {crumb?.name}
            </span>
          </React.Fragment>
        ))}
      </nav>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon name={pageInfo?.icon} size={18} className="text-primary" />
      </div>
      <div>
        <h1 className="text-lg font-heading font-semibold text-foreground">{pageInfo?.title}</h1>
        <p className="text-sm font-caption text-muted-foreground">{pageInfo?.description}</p>
      </div>
    </div>
  );
};

export default NavigationIndicator;