import React, { useState } from "react";
import "./AnalogEmergencyButton.css";

const AnalogEmergencyButton = ({ onClick, glowMode = false }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    if (onClick) onClick();
  };

  return (
    <div className="widget-container">
      {/* High-risk time indicator */}
      {glowMode && <div className="high-risk-indicator"></div>}

      <button
        className={`analog-button ${glowMode ? "glow-active" : ""}`}
        onClick={handlePress}
        aria-label="Emergency button"
      >
        {/* Glow effect layer */}
        {glowMode && <div className="glow-ring"></div>}

        {/* Button surface */}
        <div className={`button-surface ${isPressed ? "pressed" : ""}`}>
          <span className="exclamation">HELP</span>
        </div>

        {/* Button shadow/depth */}
        <div className="button-depth"></div>
      </button>
    </div>
  );
};

export default AnalogEmergencyButton;
