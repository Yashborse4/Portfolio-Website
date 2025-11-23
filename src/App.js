import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-poppins selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-white py-8 text-center border-t border-gray-200">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Yash Borse. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
