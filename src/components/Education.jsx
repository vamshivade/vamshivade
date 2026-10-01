import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { education } from '../data';

export default function Education() {
  return (
    <div className="bg-dark-200 border-t border-white/5 relative">
      <Container id="education">
        <SectionHeading title="Education" subtitle="Academic Background" />
        
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl border-l-4 border-l-orange-primary relative overflow-hidden group">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-orange-primary/10 transition-colors duration-500"></div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
              <h4 className="text-xl font-medium text-white/80 mb-1">{education.college}</h4>
              <p className="text-white/50">{education.university}</p>
            </div>
            
            <div className="flex flex-col gap-2 md:items-end">
              <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium text-white/70 border border-white/10">
                {education.duration}
              </span>
              <span className="text-orange-primary font-bold">
                CGPA: {education.cgpa}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
