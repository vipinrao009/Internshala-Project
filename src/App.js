import React from 'react';
import './App.css';
import Certification from './Components/Certification/Certification'; // Correctly import the logo
import Header from './Layout/Header/Header';
import PartnerCarousel from './Components/Carousel/PartnerCarousel';
import Prerequisites from './Components/Prerequisites/Prerequisites';
import ExamDetails from './Components/ExamDetails/ExamDetails';
import CertificationModules from './Components/CertificationModules/CertificationModules';

function App() {
  return (
    <div className="App">
      <Header/>
      <Certification />
      <PartnerCarousel/>
      <Prerequisites/>
      <ExamDetails/>
      <CertificationModules/>
    </div>
  );
}

export default App;
