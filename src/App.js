import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Company from './components/Company';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Company />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
