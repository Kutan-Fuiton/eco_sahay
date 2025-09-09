# Eco-Sahay: Waste to Wealth
An AI-powered waste management ecosystem transforming India's waste management landscape through technology, community engagement, and sustainable practices.

## 🌿 Project Overview
Eco-Sahay is a comprehensive waste management platform that combines digital intelligence, physical infrastructure, and human networks to create a sustainable waste management ecosystem. The platform follows a three-layer model:


   Digital Platform (The Brain) - AI-powered intelligence driving smart waste management decisions
   
   - Rewards System: Gamified incentives for waste segregation
   - AI Logistics: Optimized collection routes and scheduling
   - Blockchain Traceability: Transparent waste tracking from source to processing
   - Analytics Dashboard: Real-time insights and performance metrics

   Eco-Hub (The Heart) - Physical processing centers transforming waste into valuable resources
   
   - E-waste Processing: Advanced recycling of electronic components
   - Organic to Bio-CNG: Converting organic waste to clean energy
   - Fertilizer Production: Creating nutrient-rich compost for agriculture
   - Energy Generation: Sustainable power from waste materials

   Human Network (The Hands) - Community-driven network of Eco-Sahayaks enabling local impact
   
   - Eco-Sahayaks: Trained community waste management champions
   - Door-to-Door Collection: Convenient household waste pickup services
   - Community Education: Awareness programs and training initiatives
   - Social Impact: Creating employment and environmental benefits

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Powered by React and Vite
- Styled with Tailwind CSS
