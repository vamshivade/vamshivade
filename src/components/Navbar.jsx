import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';
import { cn } from './ui/shared';
import resumePDF from '../data/resume/VAMSHI_VADE_02102026.pdf';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  // { name: 'Projects', to: 'projects' }, // Ready for future
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-dark-300/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="home" 
          smooth={true} 
          duration={500}
          offset={-68}
          className="text-white font-bold text-xl tracking-wider cursor-pointer hover:text-orange-primary transition-colors"
        >
          VAMSHI<span className="text-orange-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-68}
                  spy={true}
                  activeClass="text-orange-primary"
                  className="text-sm font-medium text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a 
            href={resumePDF}
            download="Vamshi_Vade_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium bg-orange-primary/10 text-orange-primary border border-orange-primary/20 rounded-full hover:bg-orange-primary hover:text-dark-300 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-dark-200 border-b border-white/5 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-68}
                spy={true}
                activeClass="text-orange-primary"
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-white/70 hover:text-white cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pt-2">
             <a 
              href={resumePDF}
              download="Vamshi_Vade_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-orange-primary/10 text-orange-primary border border-orange-primary/20 rounded-full hover:bg-orange-primary hover:text-dark-300 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
