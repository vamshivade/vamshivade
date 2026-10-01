import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { coreExpertise } from '../data';

export default function CoreExpertise() {
  return (
    <div className="bg-dark-200 border-y border-white/5 relative">
      {/* Background subtle elements */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-deep/5 rounded-full blur-[150px] pointer-events-none"></div>

      <Container id="core-expertise">
        <SectionHeading title="Core Expertise" subtitle="Specializations" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {coreExpertise.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Vertical line indicator */}
              <div className="absolute -left-4 top-2 bottom-0 w-px bg-white/10 group-hover:bg-orange-primary/50 transition-colors duration-300"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-orange-primary transition-colors">
                {item.category}
              </h3>
              
              <ul className="space-y-3">
                {item.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-white/80 font-medium">
                    <svg className="w-4 h-4 text-orange-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
