// App.tsx
import React from 'react';
import Contents from './components/Contents/Contents';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

  return (
    <>
      <main>
        <Cover />
        <Contents/>
      </main>
      <Footer />
    </>
  );
};

export default App;
