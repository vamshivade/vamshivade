import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const isClickable = 
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(e.target).cursor === 'pointer';
        
      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const cursorVariants = {
    default: {
      x: mousePosition.x - 12, // center for 24x24
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      scale: 1,
      backgroundColor: '#ffffff', // pure white for difference blending
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }
    },
    hover: {
      x: mousePosition.x - 32, // center for 64x64
      y: mousePosition.y - 32,
      width: 64,
      height: 64,
      scale: 1,
      backgroundColor: '#ffffff',
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', stiffness: 300, damping: 20, mass: 0.1 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
    />
  );
}
