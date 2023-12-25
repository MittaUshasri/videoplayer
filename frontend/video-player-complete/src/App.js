// App.js
import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import { Element } from 'react-scroll';
import Home from './Component/Home';
import AboutSection from './Component/AboutSection';
import SourceCode from './Component/SourceCode';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <AboutSection />
      </Element>
      <Element name="sourceCode">
        <SourceCode />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
