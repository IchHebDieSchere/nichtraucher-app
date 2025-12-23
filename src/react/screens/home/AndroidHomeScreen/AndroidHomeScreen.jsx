import React, { useState } from 'react';
import './AndroidHomeScreen.css';

// Simple Emergency Widget (your actual one would be imported)
const EmergencyWidget = ({ onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
    if (onClick) onClick();
  };

  return (
    <button 
      className={`emergency-button ${isPressed ? 'pressed' : ''}`}
      onClick={handlePress}
    >
      <div className="shield-icon">🛡️</div>
      <div className="button-text">
        <div className="main-text">STAY STRONG</div>
        <div className="sub-text">Tap for help</div>
      </div>
    </button>
  );
};

// Simple app icon component
const AppIcon = ({ name, color }) => {
  return (
    <div className="app-icon">
      <div className="icon-box" style={{ backgroundColor: color }}>
        {name.charAt(0)}
      </div>
      <div className="app-name">{name}</div>
    </div>
  );
};

// Main home screen component
const AndroidHomeScreen = () => {
  const [message, setMessage] = useState('');

  const handleEmergencyClick = () => {
    setMessage('Help request sent!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="home-screen">
      {/* Status bar */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      {/* Main content */}
      <div className="content-area">
        
        {/* App grid */}
        <div className="app-grid">
          <AppIcon name="Phone" color="#4CAF50" />
          <AppIcon name="Messages" color="#2196F3" />
          <AppIcon name="Chrome" color="#F44336" />
          <AppIcon name="Gmail" color="#EA4335" />
          <AppIcon name="Photos" color="#FBBC04" />
          <AppIcon name="Maps" color="#34A853" />
          <AppIcon name="YouTube" color="#FF0000" />
          <AppIcon name="Calendar" color="#1976D2" />
        </div>

        {/* Emergency widget */}
        <div className="widget-container">
          <EmergencyWidget onClick={handleEmergencyClick} />
        </div>

        {/* Notification message */}
        {message && (
          <div className="notification">
            {message}
          </div>
        )}
      </div>

      {/* Bottom nav bar */}
      <div className="bottom-bar">
        <div className="nav-button">◀</div>
        <div className="nav-button">⏺</div>
        <div className="nav-button">▢</div>
      </div>
    </div>
  );
};

export default AndroidHomeScreen;
