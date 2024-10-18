// Contents.tsx
import React from 'react';
import './SectionContent5050.css';

interface SectionContent5050Props {
  img: string;
  img2: string;
  color: string;
}

const SectionContent5050: React.FC<SectionContent5050Props> = ({ img, img2, color }) => {
  return (
    <div className={"SectionContent5050 " + color}>
      <div className="container component-container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {img && img !== "" && 
              <img src={img} alt=""/>
            }
          </div>
          <div className="col-md-6 col-sm-12">
            {img2 && img2 !== "" && 
              <img src={img2} alt=""/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent5050;

