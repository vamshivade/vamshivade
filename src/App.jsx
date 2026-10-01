import React, { useEffect } from 'react';
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
import Projects from './components/Projects';
import Experience from './components/Experience';
import Process from './components/Process';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  // Initialize honey-smooth scrolling
  useEffect(() => {
    // Disable Lenis on touch devices and small screens to improve mobile performance
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      direction: 'vertical', 
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };
    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
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
        <Projects />
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
