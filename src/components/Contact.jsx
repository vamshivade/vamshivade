import React, { useRef, useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Container, SectionHeading } from './ui/shared';
import { personalInfo } from '../data';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');
    setStatusType('');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatusMsg("Message sent successfully! Thanks for reaching out — I'll get back to you soon.");
        setStatusType('success');
        formRef.current.reset(); // Clear the form fields
      })
      .catch((error) => {
        setLoading(false);
        setStatusMsg('Something went wrong while sending your message. Please try again.');
        setStatusType('error');
        console.error('EmailJS Error:', error);
      });
  };
  return (
    <Container id="contact" className="relative">
      <SectionHeading title="Let's Build Something Together" subtitle="Get In Touch" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 leading-relaxed">
            I'm open to opportunities in frontend and full-stack web development.
          </p>

          <div className="space-y-6 md:space-y-8">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-orange-primary/10 group-hover:border-orange-primary/30 transition-all duration-300 shrink-0">
                <img src="https://skillicons.dev/icons?i=gmail" alt="Email" className="w-6 h-6 md:w-7 md:h-7 object-contain group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-xs md:text-sm font-medium text-white/50 mb-0.5 md:mb-1 uppercase tracking-wider">Email</div>
                <div className="text-base md:text-lg font-medium text-white group-hover:text-orange-primary transition-colors truncate">{personalInfo.email}</div>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-orange-primary/10 group-hover:border-orange-primary/30 transition-all duration-300 shrink-0">
                <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7 object-contain group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-xs md:text-sm font-medium text-white/50 mb-0.5 md:mb-1 uppercase tracking-wider">LinkedIn</div>
                <div className="text-base md:text-lg font-medium text-white group-hover:text-orange-primary transition-colors truncate">vamshivade</div>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-orange-primary/10 group-hover:text-orange-primary group-hover:border-orange-primary/30 transition-all duration-300 shrink-0">
                <Phone size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs md:text-sm font-medium text-white/50 mb-0.5 md:mb-1 uppercase tracking-wider">Phone</div>
                <div className="text-base md:text-lg font-medium text-white group-hover:text-orange-primary transition-colors truncate">{personalInfo.phone}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-orange-primary/10 group-hover:text-orange-primary group-hover:border-orange-primary/30 transition-all duration-300 shrink-0">
                <MapPin size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs md:text-sm font-medium text-white/50 mb-0.5 md:mb-1 uppercase tracking-wider">Location</div>
                <div className="text-base md:text-lg font-medium text-white group-hover:text-orange-primary transition-colors truncate">{personalInfo.location}</div>
              </div>
            </div>


          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Start a Conversation</h3>

          <form 
            ref={formRef}
            className="space-y-4" 
            onSubmit={sendEmail}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">Name</label>
                <input type="text" id="name" name="name" minLength="2" className="w-full bg-dark-300 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-orange-primary/50 focus:ring-1 focus:ring-orange-primary/50 transition-all" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-dark-300 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-orange-primary/50 focus:ring-1 focus:ring-orange-primary/50 transition-all" placeholder="john@example.com" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1.5">Subject</label>
              <input type="text" id="subject" name="subject" minLength="3" maxLength="100" className="w-full bg-dark-300 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-orange-primary/50 focus:ring-1 focus:ring-orange-primary/50 transition-all" placeholder="e.g. Frontend Developer Job Opportunity" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">Message</label>
              <textarea id="message" name="message" minLength="10" rows="5" className="w-full bg-dark-300 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-orange-primary/50 focus:ring-1 focus:ring-orange-primary/50 transition-all resize-y" placeholder="How can I help you?" required></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              aria-label={loading ? 'Sending message...' : 'Send Message'}
              className="inline-flex items-center justify-center gap-3 w-full py-3 mt-1 bg-orange-primary text-dark-300 font-bold text-lg rounded-xl hover:bg-orange-bright hover:shadow-[0_0_30px_rgba(250,179,132,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {statusMsg && (
              <div aria-live="polite" className={`mt-4 p-3 rounded-xl text-center text-sm font-medium ${statusType === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {statusMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}
