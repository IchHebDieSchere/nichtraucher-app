/* eslint-disable */

import React, { useState } from 'react';
import './EmergencyWidget.css';

const EmergencyWidget = ({ onClick, size = 'large' }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
    if (onClick) onClick();
  };

  return (
    <button
      className={`emergency-widget ${size} ${isPressed ? 'pressed' : ''}`}
      onClick={handlePress}
      aria-label="Emergency help button"
    >
      <div className="widget-glow"></div>
      
      <div className="widget-content">
        {/* Icon */}
        <div className="icon-container">
          <svg 
            className="emergency-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shield with heart - protection symbol */}
            <path 
              d="M12 2L4 6V11C4 16.55 7.84 21.74 13 23C18.16 21.74 22 16.55 22 11V6L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path 
              d="M12 8.5L10.5 10L9 8.5L10.5 7L12 8.5Z" 
              fill="currentColor"
            />
            <path 
              d="M12 10.5C13.38 10.5 14.5 11.62 14.5 13C14.5 13.88 14.03 14.65 13.31 15.06L12 17L10.69 15.06C9.97 14.65 9.5 13.88 9.5 13C9.5 11.62 10.62 10.5 12 10.5Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="widget-text">
          <span className="primary-text">STAY STRONG</span>
          <span className="secondary-text">Tap for help</span>
        </div>

        {/* Pulse indicator */}
        <div className="pulse-ring"></div>
        <div className="pulse-ring pulse-ring-2"></div>
      </div>

      {/* Surface tint overlay (M3 pattern) */}
      <div className="surface-tint"></div>
    </button>
  );
};

export default EmergencyWidget;