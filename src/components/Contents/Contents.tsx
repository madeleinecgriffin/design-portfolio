// Contents.tsx
import React from 'react';
import './Contents.css';

const Contents: React.FC = () => {
  return (
    <div className="component beige">
      <div className="container component-container">
        <div className="row">
          <div className="offset-md-4 col-md-4 col-sm-8 col-xs-12">
            <ul>
              <li><span>⊳ Charcoal Portraits & Studies: Exploring Light & Shadow</span><span className="right">...01</span></li>
              <li><span>⊳ TryArch 2024: Disrupting Architectural Frameworks</span><span className="right">...02</span></li>
              <li><span>⊳ 35mm Film: Through the Looking Glass</span><span className="right">...03</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;