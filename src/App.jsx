import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Pattern from './components/Pattern';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Lenis from 'lenis';

// Eager load components above the fold
import { About, Highlights } from './components/About';

// Lazy load components below the fold
const Skills = React.lazy(() => import('./components/Skills'));
const Services = React.lazy(() => import('./components/Services'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Process = React.lazy(() => import('./components/Process'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

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
        <React.Suspense fallback={<div className="py-20 flex items-center justify-center text-orange-primary/50 text-sm animate-pulse font-mono">Loading...</div>}>
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Process />
          <Education />
          <Contact />
        </React.Suspense>
      </main>
      
      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
