import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { services } from '../data';

export default function Services() {
  return (
    <div className="bg-dark-200 relative">
      <Container id="services">
        <SectionHeading title="What I Do" subtitle="Capabilities" />

        {/* Desktop: 2-col grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 -m-4 md:-m-6 rounded-2xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className="text-xl md:text-2xl font-black text-orange-primary/30 group-hover:text-orange-primary transition-colors">
                {service.id}
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-orange-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Card slides UP and overlaps on top of previous (new card covers old) */}
        <div className="md:hidden relative">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="sticky rounded-2xl p-5 mx-1"
              style={{
                top: `${72 + idx * 18}px`,
                zIndex: idx + 1,
                marginBottom: '12px',
                /* Orange-shaded glassmorphism */
                background: `linear-gradient(135deg, rgba(20,18,14,0.92) 0%, rgba(30,22,10,0.88) 100%)`,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: `
                  0 ${8 + idx * 6}px ${32 + idx * 8}px rgba(0,0,0,0.55),
                  inset 0 1px 0 rgba(255,140,60,0.12),
                  0 0 0 1px rgba(255,120,40,${0.15 + idx * 0.04})
                `,
                border: `1px solid rgba(255,130,50,${0.2 + idx * 0.05})`,
              }}
            >
              {/* Subtle orange glow top-left */}
              <div
                className="absolute -top-6 -left-4 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,130,40,0.12) 0%, transparent 70%)' }}
              />
              <div className="relative flex items-start gap-3">
                <span className="text-2xl font-black leading-none pt-0.5 shrink-0"
                  style={{ color: `rgba(255,140,50,${0.35 + idx * 0.08})` }}>
                  {service.id}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-white/55 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Extra scroll room so last card can fully settle */}
          <div style={{ height: `${services.length * 44}px` }} />
        </div>

      </Container>
    </div>
  );
}
