import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import MorphStatus from './MorphStatus';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* path can be /privacy or /privacy.html */}
          <Route exact path="/privacy.html" element={<PrivacyPolicy />} />
          <Route exact path="/privacy" element={<PrivacyPolicy />} />
          {/* link terms of service */}
          <Route exact path="/terms-of-service" element={<TermsOfService />} />
          <Route exact path="/terms-of-service.html" element={<TermsOfService />} />

          {/* link the morph status component */}
          <Route exact path="/morph-status" element={<MorphStatus />} />

          {/* Route a url like http://localhost:3000/morph-status/76e47208-7d27-44cd-91f0-347c858c9fea to the morph status component */}
          {/* pass in the morph id as a prop to the component */}
          <Route exact path="/morph-status/:morphId" element={<MorphStatus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
