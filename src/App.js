import React from 'react';
import './App.css';
import Certification from './Components/Certification/Certification'; // Correctly import the logo
import Header from './Layout/Header/Header';
import PartnerCarousel from './Components/Carousel/PartnerCarousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Certification />
      <PartnerCarousel/>
    </div>
  );
}

export default App;
