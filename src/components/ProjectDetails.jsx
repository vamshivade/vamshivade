import React, { useEffect, useState, useRef } from 'react';
import { FiX, FiGithub, FiExternalLink, FiArrowUp, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

const CollapsibleSection = ({ title, description, technologies, children, isOpen, onToggle }) => {
  return (
    <section className="mb-10 sm:mb-12">
      <div 
        className="flex justify-between items-center cursor-pointer border-b border-white/10 pb-2 mb-3 sm:mb-4 group"
        onClick={onToggle}
      >
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-primary group-hover:text-orange-bright transition-colors">{title}</h2>
        <div className="text-gray-400 group-hover:text-orange-primary transition-colors">
          {isOpen ? <FiChevronUp className="w-5 h-5 sm:w-6 sm:h-6" /> : <FiChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4">
              {description && <p className="leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">{description}</p>}
              
              {technologies && (
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {technologies.map(t => (
                    <span key={typeof t === 'string' ? t : t.name} className="px-2.5 sm:px-3 py-1 bg-orange-primary/10 text-orange-primary rounded-full text-xs sm:text-sm border border-orange-primary/20">
                      {typeof t === 'string' ? t : t.name}
                    </span>
                  ))}
                </div>
              )}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectDetails = ({ project, onClose }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSectionId, setOpenSectionId] = useState(null);
  const scrollRef = useRef(null);

  // Lock body scroll when modal is open and initialize local Lenis
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    let lenis;
    if (scrollRef.current) {
      lenis = new Lenis({
        wrapper: scrollRef.current,
        content: scrollRef.current.firstElementChild,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenis.on('scroll', (e) => {
        if (e.targetScroll > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (lenis) lenis.destroy();
    };
  }, []);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999]"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Dynamic Background layer */}
      <div className="absolute inset-0 z-0 bg-dark-300">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url("${project.coverImage || project.image}")` }}
        />
        <div className="absolute inset-0 bg-dark-300/60 backdrop-blur-lg" />
      </div>

      {/* Fixed Close Button */}
      <div className="absolute top-10 right-4 sm:top-8 sm:right-8 md:top-10 md:right-10 lg:top-12 lg:right-12 z-[100]">
        <button 
          onClick={onClose}
          className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 shadow-lg ${
            isScrolled 
              ? 'bg-orange-primary text-dark-300 shadow-orange-primary/30 scale-110' 
              : 'bg-dark-200 hover:bg-orange-primary hover:text-dark-300 text-white border border-white/10'
          }`}
          aria-label="Close details"
        >
          <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Scroll Up Button - Bottom Right */}
      <div className="absolute bottom-20 right-4 sm:bottom-12 sm:right-8 md:bottom-14 md:right-10 lg:bottom-16 lg:right-12 z-[100]">
        <AnimatePresence>
          {isScrolled && (
            <motion.button 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 rounded-full bg-orange-primary hover:bg-white text-dark-300 hover:text-dark-300 transition-all duration-300 shadow-lg shadow-orange-primary/30"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Scrollable Content Layer */}
      <div 
        ref={scrollRef}
        className="relative w-full h-full overflow-y-auto overflow-x-hidden"
        data-lenis-prevent="true"
      >
        <div className="min-h-screen py-16 px-4 sm:px-8 md:px-12 lg:px-24 max-w-7xl mx-auto">

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', damping: 20 }}
          className="mt-8 pb-20"
        >
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-8 lg:mb-12">
              <div className="max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  {project.title}
                </h1>
                
                <h3 className="text-base sm:text-lg md:text-xl text-orange-primary font-mono">
                  {project.role}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-dark-200 hover:bg-white text-gray-300 hover:text-dark-300 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 border border-white/10 font-medium text-sm sm:text-base">
                    <FiGithub size={20} /> <span>Source Code</span>
                  </a>
                )}
                {project.telegram ? (
                  <a href={project.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#2AABEE]/10 hover:bg-[#2AABEE] text-[#2AABEE] hover:text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 border border-[#2AABEE]/30 font-medium text-sm sm:text-base">
                    <FaTelegramPlane size={20} /> <span>Open Telegram Bot</span>
                  </a>
                ) : project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-orange-primary/10 hover:bg-orange-primary text-orange-primary hover:text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 border border-orange-primary/30 font-medium text-sm sm:text-base">
                    <FiExternalLink size={20} /> <span>Live Demo</span>
                  </a>
                ) : null}
              </div>
            </div>

            {(project.coverImage || project.image) && (
              <div className="w-full max-w-5xl mx-auto h-40 sm:h-56 md:h-72 lg:h-[350px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-primary/5">
                <img src={project.coverImage || project.image} alt={project.title} className="w-full h-full object-cover object-center" />
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="prose prose-invert prose-orange max-w-none text-gray-300">
            {/* Fallback for simple projects */}
            {!project.overview && !project.content && (
              <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-6">
                <p>{project.description}</p>
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-dark-200 border border-white/5 rounded-md text-xs sm:text-sm text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Old JSX Content Support */}
            {project.content && project.content}

            {/* New Structured Data Rendering */}
            {project.overview && (
              <section className="mb-10 sm:mb-12">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-primary mb-3 sm:mb-4 border-b border-orange-primary/30 pb-2">{project.overview.title}</h2>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg">{project.overview.content}</p>
              </section>
            )}

            {project.myRole && (
              <section className="mb-10 sm:mb-12">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-primary mb-3 sm:mb-4 border-b border-orange-primary/30 pb-2">{project.myRole.title}</h2>
                <div className="bg-dark-200/30 p-4 sm:p-6 rounded-xl border border-white/5">
                  <h3 className="text-orange-primary font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-4">{project.myRole.position}</h3>
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg">{project.myRole.description}</p>
                </div>
              </section>
            )}

            {project.frontend && (
              <section className="mb-10 sm:mb-12">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-primary mb-3 sm:mb-4 border-b border-orange-primary/30 pb-2">{project.frontend.title}</h2>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg">{project.frontend.description}</p>
              </section>
            )}

            {project.features && (
              <CollapsibleSection 
                title="Key Features"
                isOpen={openSectionId === 'features'}
                onToggle={() => setOpenSectionId(openSectionId === 'features' ? null : 'features')}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="bg-dark-200/50 p-4 sm:p-6 rounded-xl border border-white/5 hover:border-orange-primary/30 transition-colors">
                      <h3 className="text-base sm:text-lg font-bold text-orange-primary mb-2 sm:mb-3">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            )}

            {/* Render any additional structured sections with responsibilities or features */}
            {[project.apiIntegration, project.realTime, project.telegramIntegration, project.walletIntegration, project.responsiveDesign, project.uiUx, project.navigation, project.stateManagement, project.authentication, project.uiTechnologies, project.chartsAndVisualization, project.formsAndValidation, project.notifications, project.userExperience].filter(Boolean).map((section, idx) => {
              const sectionId = section.title;
              return (
                <CollapsibleSection
                  key={idx}
                  title={section.title}
                  description={section.description}
                  technologies={section.technologies}
                  isOpen={openSectionId === sectionId}
                  onToggle={() => setOpenSectionId(openSectionId === sectionId ? null : sectionId)}
                >
              </CollapsibleSection>
              );
            })}

            {project.challenges && (
              <section className="mb-12">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-primary mb-6 border-b border-orange-primary/30 pb-2">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="border-l-2 border-orange-primary pl-4">
                      <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                      <p className="text-gray-400">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {project.learning && (
              <section className="mb-12">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-primary mb-4 border-b border-orange-primary/30 pb-2">Key Learnings</h2>
                <div className="flex flex-wrap gap-3">
                  {project.learning.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-sm shadow-sm">{item}</span>
                  ))}
                </div>
              </section>
            )}

            {project.frontendTechnologyStack && (
              <section className="mb-12">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-primary mb-6 border-b border-orange-primary/30 pb-2">Complete Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project.frontendTechnologyStack).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-orange-primary font-mono text-sm uppercase mb-3">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                      <ul className="space-y-1">
                        {items.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </motion.div>
      </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
