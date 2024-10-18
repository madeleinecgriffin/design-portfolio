// Contents.tsx
import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  alignment: number;
  color: string;
}

//alignment
//1 == right
//2 == left

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, alignment, color }) => {
  return (
    <div className={"component sectionHeader " + color} >
      <div className="container component-container">
        <div className="row">
          {alignment && alignment === 1 ? 
            (
              <>
                <div className="col-md-6 col-sm-12"></div>
                <div className="col-md-6 col-sm-12 sectionHeader_text">
                  <h2>{title}</h2>
                  <p className="subtitle">
                    <i>{subtitle}</i>
                  </p>
                  <p className="description">
                    {description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 col-sm-12 sectionHeader_text">
                  <h2>{title}</h2>
                  <p className="subtitle">
                    <i>{subtitle}</i>
                  </p>
                  <p className="description">
                    {description}
                  </p>
                </div>
                <div className="col-md-6 col-sm-12"></div>
              </>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

