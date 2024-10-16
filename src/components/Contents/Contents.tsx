// Projects.tsx
import React from 'react';
import './Contents.css';

const Resume: React.FC = () => {
  return (
    <div className="component resume beige">
      <div className="container component-container">
        <div className="row">
          <div className="offset-md-4 col-md-4 col-sm-8 col-xs-12">
            <ul>
              <li><span>⊳ TryArch Project</span><span className="right">...X</span></li>
              <li><span>⊳ Charcoal Portraits & Studies</span><span className="right">...X</span></li>
              <li><span>⊳ Chicago Brick on Film</span><span className="right">...X</span></li>
              <li><span>⊳ Perhaps, this Website</span><span className="right">...X</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;