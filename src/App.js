import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
