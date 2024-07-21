import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;