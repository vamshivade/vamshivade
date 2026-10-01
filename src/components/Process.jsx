import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { process } from '../data';

export default function Process() {
  return (
    <Container id="process">
      <SectionHeading title="Development Approach" subtitle="How I Build Applications" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px bg-white/10 z-0"></div>
        
        {process.map((item, idx) => (
          <div key={idx} className="relative z-10 flex flex-col p-8 glass-card glass-card-hover rounded-2xl group">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-primary transition-colors">
                {item.title}
              </h3>
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-dark-300 border border-white/10 flex items-center justify-center text-xl font-black text-orange-primary group-hover:scale-110 group-hover:border-orange-primary/30 group-hover:bg-orange-primary/10 transition-all duration-300">
                {item.step}
              </div>
            </div>
            
            <p className="text-white/60 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
