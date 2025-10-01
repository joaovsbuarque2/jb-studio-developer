import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import JSStudioApp from './pages/JSStudioApp';
import ElevaApp from './pages/ElevaApp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<JSStudioApp />} />
          <Route path="/js-studio" element={<JSStudioApp />} />
          <Route path="/eleva" element={<ElevaApp />} />
          <Route path="/eleva/*" element={<ElevaApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
