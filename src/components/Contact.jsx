import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Container, SectionHeading } from './ui/shared';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <Container id="contact" className="relative">
      <SectionHeading title="Let's Build Something Together" subtitle="Get In Touch" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            I'm open to opportunities in frontend and full-stack web development.
          </p>
          
          <div className="space-y-8">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-orange-primary/10 group-hover:border-orange-primary/30 transition-all duration-300">
                <img src="https://skillicons.dev/icons?i=gmail" alt="Email" className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-sm font-medium text-white/50 mb-1 uppercase tracking-wider">Email</div>
                <div className="text-lg font-medium text-white group-hover:text-orange-primary transition-colors">{personalInfo.email}</div>
              </div>
            </a>
            
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-orange-primary/10 group-hover:text-orange-primary group-hover:border-orange-primary/30 transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm font-medium text-white/50 mb-1 uppercase tracking-wider">Phone</div>
                <div className="text-lg font-medium text-white group-hover:text-orange-primary transition-colors">{personalInfo.phone}</div>
              </div>
            </a>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-orange-primary/10 group-hover:text-orange-primary group-hover:border-orange-primary/30 transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm font-medium text-white/50 mb-1 uppercase tracking-wider">Location</div>
                <div className="text-lg font-medium text-white group-hover:text-orange-primary transition-colors">{personalInfo.location}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <h3 className="text-3xl font-bold text-white mb-8">Start a Conversation</h3>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center gap-3 w-full py-5 bg-orange-primary text-dark-300 font-bold text-lg rounded-xl hover:bg-orange-bright hover:shadow-[0_0_30px_rgba(250,179,132,0.3)] transition-all duration-300 mb-8"
          >
            Get In Touch
            <img src="https://skillicons.dev/icons?i=gmail" alt="Email" className="w-6 h-6 object-contain" />
          </a>
          
          <div className="pt-8 border-t border-white/10">
            <div className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">Or connect on</div>
            <div className="flex gap-4">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-3 py-4 bg-dark-300 border border-white/10 rounded-xl text-white hover:text-orange-primary hover:border-orange-primary/30 hover:bg-orange-primary/5 transition-all duration-300 font-medium"
              >
                <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                LinkedIn
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-3 py-4 bg-dark-300 border border-white/10 rounded-xl text-white hover:text-orange-primary hover:border-orange-primary/30 hover:bg-orange-primary/5 transition-all duration-300 font-medium"
              >
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
