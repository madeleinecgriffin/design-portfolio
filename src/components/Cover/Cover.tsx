// Header.tsx
import React from 'react';
import './Cover.css';

const Cover: React.FC = () => {
  return (
    <div className="component cover">
      <div className="container component-container align-right">
        <div className="row">
          <div className="col-md-12">
            <h1>Madeleine Griffin</h1>
            <h2 className="beige-text">Architecture & Design Portfolio</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;

