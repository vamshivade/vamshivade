import React from 'react';
import { Container, SectionHeading } from './ui/shared';

const skillsData = [
  { name: 'JavaScript', slug: 'js' },
  { name: 'TypeScript', slug: 'ts' },
  { name: 'HTML5', slug: 'html' },
  { name: 'CSS3', slug: 'css' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextjs' },
  { name: 'Angular', slug: 'angular' },
  { name: 'Tailwind', slug: 'tailwind' },
  { name: 'Redux', slug: 'redux' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'Express', slug: 'express' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Postman', slug: 'postman' },
  { name: 'Vite', slug: 'vite' },
];

export default function Skills() {
  return (
    <Container id="skills" className="overflow-hidden">
      <SectionHeading title="Technical Skills" subtitle="Technologies I Use" />

      {/* ── Desktop: infinite marquee ── */}
      <div className="hidden md:block py-2">
        <style>{`
          .marquee-container {
            display: flex;
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 2rem 0;
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
          .marquee-content {
            display: flex;
            align-items: center;
            animation: scrolling 25s linear infinite;
            width: max-content;
          }
          .marquee-content:hover { animation-play-state: paused; }
          .marquee-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            flex-shrink: 0;
            margin: 0 1.5rem;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .marquee-item:hover { transform: translateY(-12px) scale(1.15); }
          @keyframes scrolling {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...skillsData, ...skillsData, ...skillsData, ...skillsData].map((skill, idx) => (
              <div key={idx} className="marquee-item group">
                <img
                  src={`https://skillicons.dev/icons?i=${skill.slug}`}
                  alt={skill.name}
                  loading="lazy"
                  className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl"
                />
                <span className="text-sm md:text-base font-medium text-white/50 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: centered 4-column grid ── */}
      <div className="md:hidden py-4">
        <div className="grid grid-cols-4 gap-x-3 gap-y-6 place-items-center">
          {skillsData.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <img
                src={`https://skillicons.dev/icons?i=${skill.slug}`}
                alt={skill.name}
                loading="lazy"
                className="w-12 h-12 drop-shadow-lg"
              />
              <span className="text-xs font-medium text-white/60 text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </Container>
  );
}
