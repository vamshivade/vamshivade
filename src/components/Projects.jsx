import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetails from './ProjectDetails';
import stringGamesProject from '../data/stringgames';

import stringarc8RetroProject from '../data/stringarc8retro';
import stringarc8ModernProject from '../data/stringarc8modern';
import stringDriveProject from '../data/stringdrive';
import stringTetrisProject from '../data/stringtetris';

const projects = [
  {
    ...stringGamesProject,
    // Ensure backwards compatibility with Projects list view
    github: stringGamesProject.links?.github || null,
    live: stringGamesProject.links?.liveDemo || null,
    telegram: stringGamesProject.links?.liveDemo || null, // liveDemo acts as the bot link
  },
  {
    ...stringarc8RetroProject,
    title: 'Stringarc8Retro',
    github: null,
    live: null,
    telegram: 'https://t.me/Stringarc8Retrobot',
  },
  {
    ...stringarc8ModernProject,
    title: 'Stringarc8Modern',
    github: null,
    live: null,
    telegram: 'https://t.me/stringarc8modernbot',
  },
  {
    ...stringDriveProject,
    github: null,
    live: null,
    telegram: 'https://t.me/stringdrive_bot',
  },
  {
    ...stringTetrisProject,
    github: null,
    live: null,
    telegram: 'https://t.me/stringtetris_bot',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-orange-primary"></span>
              <h2 className="text-orange-primary font-mono text-sm tracking-widest uppercase">Portfolio</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-orange-primary">Featured <span className="text-gray-400">Projects</span></h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-dark-200/50 backdrop-blur-sm border border-orange-primary/20 rounded-2xl overflow-hidden hover:border-orange-primary/30 transition-colors duration-500 flex flex-col sm:flex-row sm:items-center cursor-pointer shadow-lg hover:shadow-orange-primary/5 p-4 sm:p-6"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-[160px] sm:max-w-none mx-auto sm:mx-0 sm:w-36 md:w-44 aspect-square overflow-hidden bg-dark-300 rounded-xl">
                    <div className="absolute inset-0 bg-dark-300/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Buttons below image */}
                  <div className="flex flex-wrap gap-2 justify-center w-full mt-4" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex justify-center items-center gap-1 bg-dark-300 hover:bg-white text-orange-primary hover:text-dark-300 px-2 py-1.5 rounded-lg transition-all duration-300 border border-orange-primary/30 font-medium text-xs sm:text-sm"
                    >
                      <span>Details</span>
                    </button>
                    {(project.live || project.telegram) && (
                      <a 
                        href={project.live || project.telegram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex justify-center items-center gap-1 bg-orange-primary/10 hover:bg-orange-primary text-orange-primary hover:text-orange-primary px-2 py-1.5 rounded-lg transition-all duration-300 border border-orange-primary/30 font-medium text-xs sm:text-sm"
                      >
                        <FiExternalLink size={14} /> <span>Live</span>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 hover:text-orange-primary transition-colors text-gray-400 p-1.5" aria-label="GitHub">
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-4 sm:p-0 sm:pl-6 md:pl-8 flex flex-col flex-grow relative z-30 justify-center">
                  <h4 className="text-xl md:text-2xl font-bold text-orange-primary group-hover:text-orange-primary transition-colors duration-300 mb-2 text-center sm:text-left">
                    {project.title}
                  </h4>
                  
                  {project.role && (
                    <p className="text-sm font-mono text-orange-primary/80 mb-2 text-center sm:text-left">Role: {project.role}</p>
                  )}

                  
                  <p className="text-gray-400 flex-grow whitespace-pre-wrap text-sm leading-relaxed text-center sm:text-left">
                    {project.description}
                  </p>
                </div>
                
                {/* Decorative gradient blur */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default Projects;
