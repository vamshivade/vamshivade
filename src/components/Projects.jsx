import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'String Games',
    role: 'Frontend Developer',
    description: 'A Telegram-focused gaming and rewards platform featuring interactive casino-style games, wallet management, referrals, leaderboards, and real-time interactions. \n\nMy Contribution: Developed responsive React interfaces, integrated REST APIs and Socket.IO, implemented authentication, wallet workflows, and interactive gaming experiences.',
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'JavaScript', 'Socket.IO', 'Bootstrap', 'TON Connect'],
    github: null,
    live: 'https://t.me/string_gamesbot',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    role: 'Full Stack Developer',
    description: 'An AI-powered application that generates high-quality marketing copy, blog posts, and social media content in seconds using advanced language models.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Fintech Mobile Wallet',
    role: 'Mobile Developer',
    description: 'A secure and intuitive mobile wallet application for managing cryptocurrencies and fiat money with seamless peer-to-peer transfers.',
    image: 'https://images.unsplash.com/photo-1616077168079-7e09a6a38f4d?q=80&w=800&auto=format&fit=crop',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Smart Home Automation',
    role: 'Frontend Developer',
    description: 'A centralized control panel for smart home IoT devices, featuring automated routines, energy monitoring, and remote access capabilities.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    tags: ['Vue.js', 'Express', 'WebSockets', 'PostgreSQL'],
    github: '#',
    live: '#',
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
  return (
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
          <h3 className="text-4xl md:text-5xl font-bold text-white">Featured <span className="text-gray-400">Projects</span></h3>
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
              className="group relative bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-primary/30 transition-colors duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-dark-300/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-2xl font-bold text-white group-hover:text-orange-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex gap-3 text-gray-400 shrink-0 ml-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                        <FiGithub size={22} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="External Link">
                        <FiExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                
                {project.role && (
                  <p className="text-sm font-mono text-orange-primary/80 mb-4">Role: {project.role}</p>
                )}
                
                <p className="text-gray-400 mb-6 flex-grow whitespace-pre-wrap text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-orange-primary/90 bg-orange-primary/10 rounded-full border border-orange-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative gradient blur */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
