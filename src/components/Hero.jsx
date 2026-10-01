import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Mail, ArrowRight, Download } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.5 5.5 0 0 0-.15-3.8s-1.2-.38-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.78-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.15 3.8 5.5 5.5 0 0 0-1.5 3.89c0 5.26 3 6.46 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path></svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
import { personalInfo } from '../data';
import { Container } from './ui/shared';
import profileImg from '../assets/Profile.webp';

import reactIcon from '../assets/icons/react.svg';
import jsIcon from '../assets/icons/js.svg';
import nextjsIcon from '../assets/icons/nextjs.svg';
import tsIcon from '../assets/icons/ts.svg';
import angularIcon from '../assets/icons/angular.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import expressIcon from '../assets/icons/express.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';

const TypingEffect = ({ titles }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause at end of word
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Deleting speed
      }
    } else {
      const fullText = titles[currentTitleIndex];
      if (currentText === fullText) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 100); // Typing speed
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTitleIndex, titles]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-primary to-orange-bright font-bold">
      {currentText}
      <span className="animate-pulse text-orange-primary">|</span>
    </span>
  );
};

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Container id="home" className="flex flex-col relative overflow-hidden py-0 pt-[125px] pb-8 lg:py-0 lg:min-h-screen lg:justify-center lg:pt-0">
      {/* Dynamic Background Elements */}
      <div className="hidden md:block absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-orange-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none animate-pulse-slow"></div>
      <div className="hidden md:block absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-orange-deep/10 rounded-full blur-[150px] -z-10 pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none"></div>

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center lg:items-stretch w-full lg:flex-1 z-10 lg:mt-20">

        {/* Left Column - Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center lg:col-span-7 xl:col-span-7 relative z-20 w-full">

          <div className="relative mb-6">
            <h1 className="font-extrabold text-white leading-[1.1] tracking-tighter flex flex-col gap-2">
              <span className="text-3xl md:text-4xl lg:text-5xl text-white/80 font-bold">Hi, I'm</span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem]">{personalInfo.name}.</span>
            </h1>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white/80 mb-8 h-[1.2em] whitespace-nowrap">
            I'm a <TypingEffect titles={personalInfo.titles} />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl font-light">
            {personalInfo.description}
          </p>


          <div className="flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-5">
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-68}
              className="group flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-orange-primary text-dark-300 text-xs sm:text-sm md:text-base font-bold rounded-xl hover:bg-orange-bright hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(255,107,0,0.3)]"
            >
              View My Work
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#"
              className="group flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/5 text-white text-xs sm:text-sm md:text-base font-semibold border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              Download CV
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

        </div>

        {/* Right Column - Profile Image */}
        <div className="lg:col-span-5 xl:col-span-5 relative w-full flex items-center justify-center lg:mt-0">
          <div className="relative w-full max-w-[450px] flex items-center justify-center">

            {/* Animated Rings Behind Profile - Re-enabled on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] z-10 pointer-events-none">

              {/* Mask Wrapper to fade bottom of rings and icons */}
              <div
                className="absolute -inset-24"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 80%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 80%)'
                }}
              >
                <div className="absolute inset-24">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-primary/30 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-6 rounded-full border border-orange-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
                  {/* Subtle glowing backdrop */}
                  <div className="absolute inset-0 bg-orange-primary/5 rounded-full blur-2xl" />

                  {/* Orbiting Icons */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute inset-0 rounded-full animate-[spin_25s_linear_infinite]">
                      {[
                        { name: 'react', src: reactIcon },
                        { name: 'js', src: jsIcon },
                        { name: 'nextjs', src: nextjsIcon },
                        { name: 'ts', src: tsIcon },
                        { name: 'angular', src: angularIcon },
                        { name: 'nodejs', src: nodejsIcon },
                        { name: 'express', src: expressIcon },
                        { name: 'mongodb', src: mongodbIcon }
                      ].map((tech, i) => (
                        <div
                          key={tech.name}
                          className="absolute inset-0"
                          style={{ transform: `rotate(${i * 45}deg)` }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                            <div className="w-10 h-10 md:w-12 md:h-12 animate-[spin_25s_linear_infinite_reverse]">
                              <div className="w-full h-full" style={{ transform: `rotate(-${i * 45}deg)` }}>
                                <div className="relative group cursor-pointer w-full h-full">
                                  <div className="absolute inset-0 bg-orange-primary/20 rounded-xl blur-md group-hover:bg-orange-primary/40 transition-colors duration-300" />
                                  <div className="relative bg-dark-secondary/80 backdrop-blur-sm border border-white/10 p-2 rounded-xl hover:border-orange-primary/50 transition-all duration-300 w-full h-full flex items-center justify-center">
                                    <img
                                      src={tech.src}
                                      alt={tech.name}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image with Loading Skeleton */}
            <div className="relative z-20 transition-all duration-700 hover:scale-105 hover:-translate-y-2 min-h-[220px] md:min-h-[300px] lg:min-h-[330px] flex items-end justify-center w-[220px] md:w-[300px] lg:w-[330px]">
              {/* Skeleton Loader - visible while image loads */}
              {!imgLoaded && (
                <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse drop-shadow-[0_20px_50px_rgba(255,107,0,0.1)]" />
              )}
              
              <img
                src={profileImg}
                alt="Profile"
                fetchPriority="high"
                onLoad={() => setImgLoaded(true)}
                className={`w-[220px] md:w-[300px] lg:w-[330px] h-auto object-contain drop-shadow-xl md:drop-shadow-[0_20px_50px_rgba(255,107,0,0.4)] transition-all duration-1000 ${
                  imgLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              />
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}
