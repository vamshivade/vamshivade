import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { services } from '../data';

const NAVBAR_H = 76; // Navbar height when scrolled

export default function Services() {
  return (
    <div className="bg-dark-200 relative" id="services">

      {/* Desktop: normal layout with Container */}
      <div className="hidden md:block">
        <Container>
          <SectionHeading title="What I Do" subtitle="Capabilities" />
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
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
        </Container>
      </div>

      {/* ── Mobile: sticky heading + stacked cards ── */}
      <div className="md:hidden">

        {/* Sticky section heading — sticks right below navbar */}
        <div
          className="sticky z-40 bg-dark-200/95 backdrop-blur-md px-6 pt-5 pb-3 border-b border-white/5"
          style={{ top: `${NAVBAR_H}px` }}
        >
          <span className="text-orange-primary font-medium tracking-wider uppercase text-[10px] block mb-0.5">
            Capabilities
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">
            What I Do
          </h2>
        </div>

        {/* Stacked cards — collapse under the sticky heading */}
        <div className="relative px-4 pt-4 pb-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="sticky rounded-2xl p-5 mx-1 mb-3"
              style={{
                /* Cards stack starting just below the sticky heading */
                top: `${NAVBAR_H + 80 + idx * 20}px`,
                zIndex: 10 + idx,
                background: `linear-gradient(135deg, rgba(20,18,14,0.95) 0%, rgba(30,22,10,0.92) 100%)`,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: `
                  0 -10px 30px rgba(0,0,0,0.5),
                  inset 0 1px 1px rgba(255,140,60,0.3),
                  0 0 0 1px rgba(255,120,40,${0.2 + idx * 0.05})
                `,
                border: `1px solid rgba(255,130,50,0.1)`,
              }}
            >
              {/* Subtle glow */}
              <div
                className="absolute -top-6 -left-4 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,130,40,0.10) 0%, transparent 70%)' }}
              />
              <div className="relative flex items-start gap-3">
                <span
                  className="text-2xl font-black leading-none pt-0.5 shrink-0"
                  style={{ color: `rgba(255,140,50,${0.35 + idx * 0.08})` }}
                >
                  {service.id}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
