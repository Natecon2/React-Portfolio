import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;

import './style.css';
