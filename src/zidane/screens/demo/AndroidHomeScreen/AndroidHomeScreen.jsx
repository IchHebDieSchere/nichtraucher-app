// Import React Hook
import React, { useState } from 'react';

// Import AnalogEmergencyButton component
import AnalogEmergencyButton from '../../../components/widgets/AnalogEmergencyButton/AnalogEmergencyButton';

// Import the coresponding css file
import './AndroidHomeScreen.css';

// Import the app logo
import AppLogo from '../../../../assets/favicon.svg';

// Create AppIcon component for mock
const AppIcon = ({ name, color }) => (
    <div className="app-icon">
      <div
        className="icon-box"
        style={{
          // set the style for the icon box
          backgroundColor: color,
          borderRadius: '28px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        }}
      >
        {/* Put a char at the middle of the icon*/}
        {name.charAt(0)}
      </div>
        {/* Put name underneath */}
      <div className="app-name">{name}</div>
    </div>
  );

// the actual component handler
const AndroidHomeScreen = () => {
  const [message, setMessage] = useState('');
  const [glowMode, setGlowMode] = useState(false);

  // onClick handler
  const handleEmergencyClick = () => {
    setMessage('Help request sent!');
    setTimeout(() => setMessage(''), 2000);
  };

  // formating
  const borderRadius = 6;
  const spacing = 8;

  return (
    // Home-Screen-Wrapper
    <div className="home-screen-wrapper">
      {/* Home-Screen-Container */}
      <div className="home-screen-container">
        {/* Put header  at the top*/}
        <div className="header">
          <img src={AppLogo} alt="App Logo" className="app-logo" />
          <h5 className="app-title">My Mobile Health App</h5>
        </div>

        {/* Use Phone Frame, put everything inside */}
        <div
          className="phone-frame"
          style={{
            padding: `${spacing * 2}px ${spacing}px`,
            borderRadius: `${spacing * borderRadius}px`,
          }}
        >
          {/* User Phone Screen */}
          <div
            className="phone-screen"
            style={{ borderRadius: `${spacing * borderRadius}px` }}
          >
            {/* Top Bar */}
            <div className="status-bar">
              <span>9:41</span>
              <div className="status-icons">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>
            {message ? <div className="notification">{message}</div> : null}
            {/* mid section */}
            <div className="content-area">
              {/* App grid */}
              <div className="app-grid">
                <AppIcon name="Phone" color="#34A853" />
                <AppIcon name="Messages" color="#4285F4" />
                <AppIcon name="Chrome" color="#EA4335" />
                <AppIcon name="Gmail" color="#EA4335" />
                <AppIcon name="Photos" color="#FBBC04" />
                <AppIcon name="Maps" color="#34A853" />
                <AppIcon name="YouTube" color="#FF0000" />
                <AppIcon name="Play Store" color="#01875f" />
              </div>

              {/* Emergency widget */}
              <AnalogEmergencyButton
                glowMode={glowMode}
                onClick={handleEmergencyClick}
              />

              {/* Demo toggle + description UNDER the button */}
              <div className="risk-demo-panel">
                <label className="risk-toggle">
                  <input
                    type="checkbox"
                    checked={glowMode}
                    onChange={() => setGlowMode(prev => !prev)}
                  />
                </label>

                <div className="risk-demo-text">
                  <strong>
                    {glowMode ? 'High-Risk Period' : 'Normal State'}
                  </strong>
                  <p>
                    {glowMode
                      ? 'Craving risk is elevated. Emergency access is emphasized.'
                      : 'No elevated craving detected. Emergency access remains available.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bottom-bar">
              <div className="nav-button">◁</div>
              <div className="nav-button">○</div>
              <div className="nav-button">▢</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidHomeScreen;