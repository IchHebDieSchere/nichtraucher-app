import React, { useState } from 'react';
import AnalogEmergencyButton from '../../../components/widget/AnalogEmergencyButton/AnalogEmergencyButton';
import './AndroidHomeScreen.css';
import AppLogo from '../../../../assets/favicon.svg';

const AppIcon = ({ name, color }) => {
  return (
    <div className="app-icon">
      <div
        className="icon-box"
        style={{
          backgroundColor: color,
          borderRadius: '28px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        }}
      >
        {name.charAt(0)}
      </div>
      <div className="app-name">{name}</div>
    </div>
  );
};

const AndroidHomeScreen = () => {
  const [message, setMessage] = useState('');
  const [glowMode, setGlowMode] = useState(false); // 🔴 toggle

  const handleEmergencyClick = () => {
    setMessage('Help request sent!');
    setTimeout(() => setMessage(''), 2000);
  };

  const borderRadius = 6;
  const spacing = 8;

  return (
    <div className="home-screen-wrapper">
      <div className="home-screen-container">
        <div className="header">
          <img src={AppLogo} alt="App Logo" className="app-logo" />
          <h5 className="app-title">My Mobile Health App</h5>
        </div>

        <div
          className="phone-frame"
          style={{
            padding: `${spacing * 2}px ${spacing}px`,
            borderRadius: `${spacing * borderRadius}px`,
          }}
        >
          <div
            className="phone-screen"
            style={{ borderRadius: `${spacing * borderRadius}px` }}
          >
            <div className="status-bar">
              <span>9:41</span>
              <div className="status-icons">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>

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
                  <span className="slider" />
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

              {message && <div className="notification">{message}</div>}
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
