import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for modern e-commerce platforms, providing real-time insights, sales tracking, and interactive data visualization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'An AI-powered application that generates high-quality marketing copy, blog posts, and social media content in seconds using advanced language models.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Fintech Mobile Wallet',
    description: 'A secure and intuitive mobile wallet application for managing cryptocurrencies and fiat money with seamless peer-to-peer transfers.',
    image: 'https://images.unsplash.com/photo-1616077168079-7e09a6a38f4d?q=80&w=800&auto=format&fit=crop',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Smart Home Automation',
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
              className="group relative bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-primary/30 transition-colors duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-dark-300/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-orange-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex gap-3 text-gray-400">
                    <a href={project.github} className="hover:text-white transition-colors" aria-label="GitHub">
                      <FiGithub size={22} />
                    </a>
                    <a href={project.live} className="hover:text-white transition-colors" aria-label="External Link">
                      <FiExternalLink size={22} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
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
