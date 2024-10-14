// App.tsx
import React from 'react';
import Container from './components/Container/Container';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

  return (
    <>
        <Cover />
        <Container>
        <main>
        </main>
        </Container>
        <Footer />
      
    </>
  );
};

export default App;
