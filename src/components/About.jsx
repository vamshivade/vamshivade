import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { highlights } from '../data';

export function About() {
  return (
    <Container id="about" className="relative">
      <SectionHeading title="About Me" subtitle="Introduction" />

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">
        <div className="text-lg md:text-xl lg:text-2xl font-medium text-white leading-relaxed">
          I'm a Full Stack Developer with <span className="text-orange-primary">2.6 years of professional experience</span> building responsive, scalable, and production-ready web applications.
        </div>

        <div className="space-y-4 md:space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
          <p>
            My core experience includes React.js, Next.js, JavaScript, Angular, Node.js, Express.js, and MongoDB. I have worked on reusable component-based interfaces, REST API integration, backend services, database management, authentication, and real-time functionality using WebSockets.
          </p>
          <p>
            I have also worked on Telegram Mini Apps and Web3 applications involving blockchain and wallet-related functionality.
          </p>
          <p>
            I focus on building reusable components, creating responsive user experiences, integrating APIs, improving application performance, and collaborating effectively with backend and cross-functional teams.
          </p>
        </div>
      </div>
    </Container>
  );
}

export function Highlights() {
  return (
    <div className="w-full relative py-12 md:py-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-orange-primary/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-12 relative z-10">
        <div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 group/grid"
          onMouseMove={(e) => {
            const cards = document.querySelectorAll('.highlight-card');
            for (const card of cards) {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
            }
          }}
        >
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="highlight-card glass-card glass-card-hover rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden border border-transparent hover:border-orange-primary/50 transition-colors duration-500"
            >
              {/* Spotlight hover effect with Grid */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{
                  backgroundImage: `
                    radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.15), transparent 40%),
                    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '100% 100%, 30px 30px, 30px 30px',
                  maskImage: 'radial-gradient(500px circle at var(--mouse-x, 0) var(--mouse-y, 0), black, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(500px circle at var(--mouse-x, 0) var(--mouse-y, 0), black, transparent 100%)'
                }}
              />


              <span className="relative z-10 text-xl sm:text-2xl md:text-4xl font-black text-white mb-2 md:mb-3 group-hover:text-orange-primary transition-colors duration-300">
                {highlight.value}
              </span>

              <span className="relative z-10 text-[9px] sm:text-[10px] md:text-sm font-bold text-white/50 uppercase tracking-[0.15em] md:tracking-[0.2em] leading-relaxed">
                {highlight.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
