import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Pattern from './components/Pattern';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Lenis from 'lenis';

// Eager load all components
import { About, Highlights } from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Process from './components/Process';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize honey-smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      direction: 'vertical', 
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-300 font-sans selection:bg-orange-primary/30 selection:text-orange-primary relative z-0">
      <CustomCursor />
      <Pattern />
      <Navbar />
      <ScrollToTop />
      
      <main>
        <Hero />
        <About />
        <Highlights />
        <Skills />
        <Services />
        <Experience />
        <Process />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
