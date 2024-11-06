// App.tsx
import React from 'react';
import Contents from './components/Contents/Contents';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';
import SectionHeader from './components/SectionHeader/SectionHeader';
import SectionContent5050 from './components/SectionContent5050/SectionContent5050';
import data from './data.json'
import images from './media';

const App: React.FC = () => {

  return (
    <>
      <main>
        <Cover />
        <Contents/>

        {/* Charcoal Drawings */}
        <SectionHeader 
          title={data[0].title} 
          subtitle={data[0].subtitle} 
          description={data[0].description} 
          alignment={2}
          color={"olive"}
        />
        <SectionContent5050 img={""} img2={images.charcoal3} color={"olive"}/>
        <SectionContent5050 img={images.charcoal1} img2={""} color={"olive"}/>
        <SectionContent5050 img={""} img2={images.charcoal5} color={"olive"}/>
        <SectionContent5050 img={images.charcoal6} img2={""} color={"olive"}/>

        {/* TryArch Project */}
        <SectionHeader 
          title={data[2].title} 
          subtitle={data[2].subtitle} 
          description={data[2].description} 
          alignment={1}
          color={"beige"}
        />
        <SectionContent5050 img={images.tryarch0} img2={images.tryarch1} color={"beige"}/>
        <SectionContent5050 img={images.tryarch2} img2={images.tryarch3} color={"beige"}/>
        <SectionContent5050 img={images.tryarch5} img2={images.tryarch7} color={"beige"}/>

        {/* Film Photos */}
        <SectionHeader 
          title={data[1].title} 
          subtitle={data[1].subtitle} 
          description={data[1].description} 
          alignment={2}
          color={"olive"}
        />
        <SectionContent5050 img={images.placeholder} img2={images.placeholder} color={"olive"}/>
        <SectionContent5050 img={images.placeholder} img2={images.placeholder} color={"olive"}/>
        <SectionContent5050 img={images.placeholder} img2={images.placeholder} color={"olive"}/>

      </main>
      <Footer />
    </>
  );
};

export default App;
