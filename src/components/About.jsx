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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden"
            >
              {/* Subtle tech background grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              ></div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/0 to-orange-primary/0 group-hover:from-orange-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

              {/* Subtle top border highlight */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


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
