import React, { useState, useEffect } from 'react';

const icons = [
  'react', 'nextjs', 'angular', 'nodejs', 'express', 
  'mongodb', 'ts', 'js', 'html', 'css', 'git', 'postman'
];

export default function Loader({ onComplete }) {
  const [stage, setStage] = useState('start');
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    // Capture actual window size for precise top-left calculation
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    const timeouts = [];

    // Stage 1: Fly to circle one by one
    timeouts.push(setTimeout(() => setStage('circle'), 100));
    // Stage 2: Explode outward (after all icons have landed)
    // 12 icons * 150ms = 1800ms. Animation takes 1000ms. Total ~2800ms.
    timeouts.push(setTimeout(() => setStage('explode'), 3200));
    // Stage 3: Fade out the overlay
    timeouts.push(setTimeout(() => setStage('fadeout'), 4500));
    // Stage 4: Unmount and callback
    timeouts.push(setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete();
    }, 5000));

    return () => {
      timeouts.forEach(clearTimeout);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  // Calculate transform for each icon based on the current stage
  const getIconStyle = (index) => {
    const N = icons.length;
    // -Math.PI / 2 starts it at the top of the circle
    const angle = (index * 2 * Math.PI) / N - (Math.PI / 2);
    
    // Default positions (center of screen is 0,0)
    let x = 0;
    let y = 0;
    let scale = 1;
    let opacity = 1;
    let rotate = 0;
    
    // The top-left corner relative to the center
    const topLeftX = -(windowSize.width / 2) + 40;
    const topLeftY = -(windowSize.height / 2) + 40;

    const radius = Math.min(windowSize.width, windowSize.height) * 0.28; 
    const startRadius = Math.max(windowSize.width, windowSize.height) * 1.5; 

    let transitionDelay = '0ms';
    let transitionDuration = '1.2s';
    let transitionTiming = 'cubic-bezier(0.34, 1.56, 0.64, 1)'; // bouncy

    switch (stage) {
      case 'start':
        // Start far offscreen in the direction of their angle
        x = startRadius * Math.cos(angle - Math.PI); // Offset angle for spiral curve
        y = startRadius * Math.sin(angle - Math.PI);
        scale = 0;
        opacity = 0; // Starts invisible
        rotate = -1080; // Massive spinning
        transitionDuration = '0s';
        break;
      case 'circle':
        // Move to final circle position
        x = radius * Math.cos(angle);
        y = radius * Math.sin(angle);
        scale = 1;
        opacity = 1;
        rotate = 0;
        transitionDelay = `${index * 150}ms`; // Staggered entrance
        break;
      case 'explode':
      case 'fadeout':
        // Explode outward beyond the screen
        const explodeRadius = Math.max(windowSize.width, windowSize.height) * 1.5;
        x = explodeRadius * Math.cos(angle);
        y = explodeRadius * Math.sin(angle);
        scale = 2;
        opacity = 0;
        rotate = 360;
        transitionDuration = '1.5s';
        transitionTiming = 'cubic-bezier(0.5, 0, 0.2, 1)'; // Snappy explosion
        transitionDelay = '0ms'; // All explode at once
        break;
      default:
        break;
    }

    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale}) rotate(${rotate}deg)`,
      opacity: opacity,
      transition: `all ${transitionDuration} ${transitionTiming} ${transitionDelay}`,
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '60px',
      height: '60px',
      zIndex: 100,
    };
  };

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-[1.5s] ease-in-out ${
        (stage === 'explode' || stage === 'fadeout') ? 'bg-transparent pointer-events-none' : 'bg-dark-300'
      }`}
    >
      <div 
        className="relative w-full h-full overflow-hidden flex items-center justify-center transition-all duration-[3s] ease-out"
        style={{
          transform: stage === 'start' ? 'rotate(-180deg) scale(1.5)' : 'rotate(0deg) scale(1)'
        }}
      >
        {icons.map((tech, idx) => (
          <img
            key={tech}
            src={`https://skillicons.dev/icons?i=${tech}`}
            alt={tech}
            style={getIconStyle(idx)}
          />
        ))}
      </div>
    </div>
  );
}
