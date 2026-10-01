import React from 'react';
import { education } from '../data';

export default function Education() {
  return (
    <div className="bg-dark-200 border-t border-white/5 relative" id="education">
      <div className="w-full py-8 lg:py-12 px-6 md:px-12 max-w-7xl mx-auto">

        {/* Single full-width row: heading left, card right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          {/* Left: section label */}
          <div className="shrink-0">
            <span className="text-orange-primary font-medium tracking-wider uppercase text-xs md:text-sm block mb-1">
              Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Education
            </h2>
          </div>

          {/* Right: education card */}
          <div className="glass-card rounded-2xl px-6 py-5 border-l-4 border-l-orange-primary relative overflow-hidden group flex-1 sm:max-w-xl">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-primary/5 rounded-full blur-[60px] -z-10 group-hover:bg-orange-primary/10 transition-colors duration-500" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">{education.degree}</h3>
                <h4 className="text-xs sm:text-sm font-medium text-white/75 mb-0.5">{education.college}</h4>
                <p className="text-[11px] sm:text-xs text-white/45">{education.university}</p>
              </div>

              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] sm:text-xs font-medium text-white/65 border border-white/10 whitespace-nowrap">
                  {education.duration}
                </span>
                <span className="text-orange-primary font-bold text-xs sm:text-sm whitespace-nowrap">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
