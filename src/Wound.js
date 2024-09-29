import React from 'react';
import './Wound.css'; // Import a CSS file for styles if you want to keep styles separate

const Wound = ({ url, height, width }) => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <iframe
        src={url}
        width={width || '100%'}
        height={height || '100vh'}
        frameBorder="0"
        allow="microphone"
        title="LiveKit KITT"
        style={{ border: 'none' }}
      />
      <div className="overlay">
        <div className="text">WoundAI</div>
      </div>
    </div>
  );
};

export default Wound;