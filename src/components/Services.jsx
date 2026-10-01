import React from 'react';
import { Container, SectionHeading } from './ui/shared';
import { services } from '../data';

export default function Services() {
  return (
    <div className="bg-dark-200 relative">
      <Container id="services">
        <SectionHeading title="What I Do" subtitle="Capabilities" />
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group flex flex-col sm:flex-row gap-6 p-6 -m-6 rounded-2xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className="text-2xl font-black text-orange-primary/30 group-hover:text-orange-primary transition-colors">
                {service.id}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
