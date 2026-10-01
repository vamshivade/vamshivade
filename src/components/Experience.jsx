import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { experience } from '../data';

export default function Experience() {
  return (
    <Container id="experience">
      <SectionHeading title="Professional Experience" subtitle="Work History" />
      
      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-16 py-8">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-dark-300 border-2 border-orange-primary/50 group-hover:border-orange-bright group-hover:bg-orange-primary transition-colors duration-300"></div>
            
            {/* Timeline line glow on hover */}
            <div className="absolute -left-px top-6 bottom-[-64px] w-0.5 bg-gradient-to-b from-orange-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4 mb-4 md:mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{exp.position}</h3>
                <h4 className="text-lg md:text-xl font-medium text-orange-primary">{exp.company}</h4>
              </div>
              <span className="text-xs md:text-sm font-medium text-white/50 bg-white/5 px-3 md:px-4 py-1 md:py-1.5 rounded-full whitespace-nowrap self-start">
                {exp.duration}
              </span>
            </div>
            
            <ul className="space-y-3 md:space-y-4">
              {exp.responsibilities.map((resp, rIdx) => (
                <li key={rIdx} className="text-sm md:text-base text-white/70 leading-relaxed flex items-start gap-3">
                  <span className="mt-1.5 md:mt-2 w-1.5 h-1.5 rounded-full bg-orange-primary/50 shrink-0"></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* 
        NOTE: Future Projects section can be inserted after this component in App.jsx 
      */}
    </Container>
  );
}
