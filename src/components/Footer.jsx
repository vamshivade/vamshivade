import React from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-dark-300 border-t border-white/5 py-12 relative overflow-hidden">
      {/* Subtle orange line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-white font-bold tracking-wider mb-2">
            VAMSHI<span className="text-orange-primary">.</span>
          </div>
          <p className="text-sm text-white/50 mb-1">
            Full Stack Developer | MERN Stack Developer | Frontend Developer
          </p>
          <p className="text-xs text-white/40">
            React.js • Next.js • Angular • Node.js • Express.js • MongoDB
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-5">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md hover:drop-shadow-[0_10px_20px_rgba(255,107,0,0.3)]">
              <span className="sr-only">LinkedIn</span>
              <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" loading="lazy" className="w-full h-full object-contain" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md hover:drop-shadow-[0_10px_20px_rgba(255,107,0,0.3)]">
              <span className="sr-only">GitHub</span>
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" loading="lazy" className="w-full h-full object-contain" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="w-8 h-8 md:w-10 md:h-10 hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md hover:drop-shadow-[0_10px_20px_rgba(255,107,0,0.3)]">
              <span className="sr-only">Email</span>
              <img src="https://skillicons.dev/icons?i=gmail" alt="Email" loading="lazy" className="w-full h-full object-contain" />
            </a>
          </div>
          
          <div className="text-sm text-white/40">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
