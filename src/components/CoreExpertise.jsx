import React, { useState } from 'react';
import { Container, SectionHeading } from './ui/shared';
import { coreExpertise } from '../data';

const categoryMeta = [
  { icon: '⚡', color: '#f97316', label: 'Frontend Engineering' },
  { icon: '🔧', color: '#3b82f6', label: 'Backend Engineering' },
  { icon: '🗄️', color: '#10b981', label: 'Database' },
  { icon: '🔴', color: '#ef4444', label: 'Real-Time' },
  { icon: '🌐', color: '#8b5cf6', label: 'Web3' },
  { icon: '📱', color: '#06b6d4', label: 'Application Platforms' },
];

export default function CoreExpertise() {
  // Track which index is open; null = none
  const [openIdx, setOpenIdx] = useState(0); // first open by default
  const isUnlocked = openIdx !== null; // others unlocked only if any is open

  const handleToggle = (idx) => {
    if (idx === 0) {
      // First item: freely toggle; closing it locks all others
      const next = openIdx === 0 ? null : 0;
      setOpenIdx(next);
    } else {
      // Other items: only work if first is open OR if another (non-first) is already open
      if (!isUnlocked) return; // locked
      setOpenIdx(openIdx === idx ? null : idx);
    }
  };

  return (
    <div className="bg-dark-200 border-y border-white/5 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-orange-deep/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-orange-primary/3 rounded-full blur-[140px] pointer-events-none" />

      <Container id="core-expertise">
        <SectionHeading title="Core Expertise" subtitle="Specializations" />

        <div className="max-w-2xl mx-auto">

          {/* Status hint */}
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isUnlocked ? 'bg-emerald-400' : 'bg-white/20'}`} />
            <span className="text-[10px] md:text-xs text-white/30 font-medium">
              {isUnlocked ? 'All categories unlocked — click to explore' : 'Open the first category to unlock all others'}
            </span>
          </div>

          {/* Accordion container */}
          <div className="rounded-2xl border border-white/8 overflow-visible"
            style={{ background: 'rgba(8,7,5,0.85)', backdropFilter: 'blur(16px)' }}>

            {coreExpertise.map((item, idx) => {
              const isOpen = openIdx === idx;
              const locked = idx !== 0 && !isUnlocked;
              const meta = categoryMeta[idx] || categoryMeta[0];
              const isLast = idx === coreExpertise.length - 1;

              return (
                <div
                  key={idx}
                  className="relative"
                  style={{ zIndex: isOpen ? 20 : coreExpertise.length - idx }}
                >
                  {/* ── Header row ── */}
                  <button
                    onClick={() => handleToggle(idx)}
                    disabled={locked}
                    className={`w-full flex items-center justify-between px-4 md:px-7 py-3.5 md:py-4 text-left transition-all duration-200
                      ${!isLast ? 'border-b border-white/[0.05]' : ''}
                      ${locked ? 'opacity-35 cursor-not-allowed' : 'cursor-pointer'}
                      ${isOpen ? 'bg-white/[0.04]' : 'hover:bg-white/[0.025]'}
                    `}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Icon */}
                      <div
                        className="w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center text-sm md:text-base shrink-0 transition-all duration-300 border"
                        style={{
                          background: isOpen ? `${meta.color}18` : 'rgba(255,255,255,0.04)',
                          borderColor: isOpen ? `${meta.color}45` : 'rgba(255,255,255,0.08)',
                          boxShadow: isOpen ? `0 0 14px ${meta.color}25` : 'none',
                        }}
                      >
                        {locked ? '🔒' : meta.icon}
                      </div>

                      <div>
                        <h3
                          className="text-xs sm:text-sm md:text-base font-bold transition-colors duration-200"
                          style={{ color: isOpen ? meta.color : 'rgba(255,255,255,0.85)' }}
                        >
                          {item.category}
                        </h3>
                        <p className="text-[9px] md:text-[11px] text-white/30 mt-0.5 font-medium">
                          {locked ? 'Unlock by opening Frontend first' : `${item.skills.length} technologies`}
                        </p>
                      </div>
                    </div>

                    {/* Right: skill count badge + chevron */}
                    <div className="flex items-center gap-2 md:gap-3 shrink-0">
                      {!locked && (
                        <span
                          className="hidden sm:flex px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold border"
                          style={{
                            color: isOpen ? meta.color : 'rgba(255,255,255,0.3)',
                            borderColor: isOpen ? `${meta.color}35` : 'rgba(255,255,255,0.08)',
                            background: isOpen ? `${meta.color}10` : 'transparent',
                          }}
                        >
                          {item.skills.length}
                        </span>
                      )}
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isOpen ? `${meta.color}18` : 'rgba(255,255,255,0.05)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <svg
                          className="w-3 h-3"
                          style={{ color: isOpen ? meta.color : 'rgba(255,255,255,0.4)' }}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* ── Dropdown panel ── */}
                  <div
                    style={{
                      maxHeight: isOpen ? '360px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
                    }}
                  >
                    <div
                      className={`px-4 md:px-7 py-4 md:py-5 ${!isLast ? 'border-b border-white/[0.05]' : ''}`}
                      style={{
                        background: `linear-gradient(135deg, ${meta.color}08 0%, rgba(6,5,3,0.9) 70%)`,
                      }}
                    >
                      {/* Accent line */}
                      <div
                        className="h-px w-full mb-4 rounded-full"
                        style={{ background: `linear-gradient(to right, ${meta.color}50, ${meta.color}15, transparent)` }}
                      />

                      {/* Skill pills */}
                      <div className="flex flex-wrap gap-2 md:gap-2.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg text-[10px] md:text-xs font-semibold transition-all duration-200 cursor-default select-none"
                            style={{
                              color: meta.color,
                              borderColor: `${meta.color}25`,
                              background: `${meta.color}08`,
                              border: `1px solid ${meta.color}22`,
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = `${meta.color}16`;
                              e.currentTarget.style.borderColor = `${meta.color}45`;
                              e.currentTarget.style.boxShadow = `0 0 10px ${meta.color}20`;
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = `${meta.color}08`;
                              e.currentTarget.style.borderColor = `${meta.color}22`;
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <span
                              className="w-1 h-1 rounded-full shrink-0"
                              style={{ background: meta.color, opacity: 0.6 }}
                            />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

          <p className="text-center text-[9px] md:text-[11px] text-white/20 mt-4 font-medium tracking-wide">
            OPEN FRONTEND ENGINEERING TO UNLOCK ALL CATEGORIES
          </p>
        </div>
      </Container>
    </div>
  );
}
