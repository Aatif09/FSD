import React from 'react';
import Title from './components/Title';
import Header from './components/Header';
import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
import Article from './components/Article';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Title />
      <Header />
      
     
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Left aside */}
        <AsideLeft />
        
       
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <Article />
          
          <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
            <AsideRight />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
