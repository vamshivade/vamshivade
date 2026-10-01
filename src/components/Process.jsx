import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { process } from '../data';

export default function Process() {
  return (
    <Container id="process">
      <SectionHeading title="Development Approach" subtitle="How I Build Applications" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px bg-white/10 z-0"></div>

        {process.map((item, idx) => (
          <div key={idx} className="relative z-10 flex flex-col p-4 sm:p-5 md:p-8 glass-card glass-card-hover rounded-xl md:rounded-2xl group">
            <div className="flex items-center justify-between gap-2 md:gap-4 mb-3 md:mb-6">
              <h3 className="text-sm sm:text-base md:text-2xl font-bold text-white group-hover:text-orange-primary transition-colors">
                {item.title}
              </h3>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 shrink-0 rounded-full bg-dark-300 border border-white/10 flex items-center justify-center text-xs sm:text-sm md:text-xl font-black text-orange-primary group-hover:scale-110 group-hover:border-orange-primary/30 group-hover:bg-orange-primary/10 transition-all duration-300">
                {item.step}
              </div>
            </div>

            <p className="text-[10px] sm:text-xs md:text-base text-white/60 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
