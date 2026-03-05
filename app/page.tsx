"use client";
import { useState, useEffect } from 'react';
import { portfolioData, Project } from '../data/protfolio';
import { Github, Linkedin, Mail, Phone, ExternalLink, X, Download, GraduationCap, Briefcase, User, Layers, Send, ChevronUp, Menu } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.pageYOffset > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const navLinks = ["About", "Education", "Projects", "Experience", "Skills", "Contact"];

  return (
    <div className="min-h-screen relative selection:bg-[var(--accent-color)] selection:text-white overflow-x-hidden bg-white text-black">

      {/* --- Glass Navbar --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-6xl">
        <div className="bg-black/5 backdrop-blur-xl border border-black/10 px-6 py-4 rounded-full flex justify-center items-center shadow-2xl relative">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-bold tracking-widest uppercase text-black hover:text-[var(--accent-color)] transition-all">
                {link}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black flex flex-col gap-1.5 p-1 absolute right-6">
            <div className="w-6 h-[2px] bg-black"></div>
            <div className="w-4 h-[2px] bg-black"></div>
          </button>

          <div className="md:hidden text-black text-[10px] font-bold tracking-widest uppercase">MENU</div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-black hover:opacity-50 transition-all">
            <X size={40} strokeWidth={1.5} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-4xl font-black italic uppercase tracking-tighter text-black hover:text-[var(--accent-color)] transition-all">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* --- SECTION: ABOUT --- */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[var(--accent-color)] font-mono text-sm tracking-widest uppercase font-bold">
              <User size={16} /> ABOUT ME
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic transform lg:-skew-x-6 text-black leading-tight">
              {portfolioData.name.toUpperCase()}
            </h1>
            <p className="text-base text-black/80 max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-[var(--accent-color)] lg:pl-6 leading-relaxed">
              {portfolioData.bio}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a
                href="/cv.pdf" // Path relative to the public folder
                download="My_Awesome_Resume.pdf" // Optional: renames the file for the user
                className="flex items-center gap-2 px-8 py-3 bg-[var(--accent-color)] text-white font-black rounded-full hover:scale-105 transition-all shadow-lg text-sm"
              >
                <Download size={18} /> DOWNLOAD CV
              </a>
              <a href={portfolioData.github} target="_blank" className="flex items-center gap-2 px-8 py-3 bg-black text-white font-black rounded-full hover:scale-105 transition-all text-sm">
                <Github size={18} /> GITHUB
              </a>
              <a href={portfolioData.linkedin} target="_blank" className="flex items-center gap-2 px-8 py-3 border-2 border-black text-black font-black rounded-full hover:bg-black hover:text-white transition-all text-sm">
                <Linkedin size={18} /> LINKEDIN
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group">
              <div className="absolute inset-0 bg-[var(--accent-color)] opacity-20 rounded-[40px] blur-3xl group-hover:opacity-40 transition-all"></div>
              <img src={portfolioData.profileImage} className="w-full h-full object-cover rounded-[40px] border border-black/10 relative z-10 shadow-2xl" alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: EDUCATION --- */}
      {/* --- SECTION: EDUCATION --- */}
      <section id="education" className="max-w-6xl mx-auto py-24 px-6 border-t border-black/5">
        <div className="flex items-center gap-4 mb-16">
          <GraduationCap className="text-black" size={32} />
          <h2 className="text-3xl md:text-4xl font-black italic tracking-widest uppercase text-black">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="bg-black/5 p-8 rounded-[30px] border border-transparent hover:border-black/20 transition-all flex flex-col sm:flex-row gap-6 items-start">

              {/* 1. Institute Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 overflow-hidden flex items-center justify-center shadow-sm">
                  <img
                    src={edu.logo} // Ensure 'logo' is a key in your portfolioData.education objects
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/100?text=EDU" }}
                  />
                </div>
              </div>

              {/* 2. Education Details */}
              <div className="flex-1">
                <span className="text-black/60 font-mono text-sm font-bold">{edu.year}</span>
                <h3 className="text-2xl font-bold mt-1 text-black leading-tight">{edu.degree}</h3>
                <p className="text-black/70 italic mb-4 font-medium">{edu.institution}</p>
                <p className="text-black/80 text-sm leading-relaxed">{edu.description}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION: PROJECTS --- */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black italic tracking-widest uppercase text-black text-center mb-16">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {portfolioData.projects.map((p) => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="cursor-pointer group">
                <div className="bg-black/5 p-8 md:p-10 rounded-[40px] transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-black/10">
                  <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[var(--accent-color)]">{p.title}</h3>
                  <p className="text-black/70 text-sm line-clamp-2 mb-6">{p.shortDesc}</p>
                  <div className="w-12 h-[2px] bg-black group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: EXPERIENCE --- */}
      <section id="experience" className="max-w-4xl mx-auto py-24 px-6">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="text-[var(--accent-color)]" size={32} />
          <h2 className="text-3xl md:text-4xl font-black italic tracking-widest uppercase text-black">Experience</h2>
        </div>
        <div className="space-y-12">
          {portfolioData.experience.map((ex, i) => (
            <div key={i} className="relative pl-10 border-l-2 border-black/10 hover:border-[var(--accent-color)] transition-all">
              <div className="absolute -left-[7px] top-0 w-3 h-3 bg-black rounded-full"></div>
              <h4 className="text-2xl md:text-3xl font-bold text-black">{ex.company}</h4>
              <p className="text-[var(--accent-color)] font-mono text-sm mt-1 uppercase font-bold">{ex.role} — {ex.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION: SKILLS --- */}
      <section id="skills" className="max-w-4xl mx-auto py-24 px-6 border-t border-black/5">
        <h2 className="text-3xl md:text-4xl font-black italic tracking-widest uppercase text-black text-center md:text-right mb-12">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center md:justify-end">
          {portfolioData.skills.map(s => (
            <span key={s} className="px-6 py-2 bg-black/5 rounded-full text-xs font-black tracking-widest hover:bg-black hover:text-white transition-all uppercase text-black">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* --- SECTION: CONTACT --- */}
      <section id="contact" className="py-24 px-6 text-center bg-black/5">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <Send className="text-black" size={32} />
          <h2 className="text-3xl md:text-4xl font-black italic tracking-widest uppercase text-black">Contact</h2>
        </div>
        <div className="w-full flex items-center justify-center mb-16">
          <div className="w-full max-w-md p-8 rounded-2xl bg-white border border-black/10 shadow-2xl text-left">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-black/5 border border-black/10 text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-lg bg-black/5 border border-black/10 text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none" placeholder="How can we help?" />
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-colors duration-300">Send Message</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 font-mono">
          <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-3 text-black font-bold hover:text-[var(--accent-color)] transition-all text-sm md:text-lg">
            <Mail size={20} className="text-black" /> {portfolioData.email}
          </a>
          <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-3 text-black font-bold hover:text-[var(--accent-color)] transition-all text-sm md:text-lg">
            <Phone size={20} className="text-black" /> {portfolioData.phone}
          </a>
        </div>
        <p className="mt-20 text-[10px] tracking-[0.4em] opacity-60 uppercase text-black font-bold">
          Designed & Developed by {portfolioData.name} {new Date().getFullYear()}
        </p>
      </section>

      {/* --- Scroll to Top --- */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-8 right-8 p-4 bg-black text-white rounded-full shadow-2xl transition-all duration-300 z-[90] ${showScroll ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
        <ChevronUp size={24} />
      </button>

      {/* --- Project Modal --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-white/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white border border-black/10 p-5 md:p-10 rounded-[30px] md:rounded-[50px] max-w-2xl w-full relative max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-black hover:opacity-50 z-[310]"><X size={28} /></button>
            <div className="relative w-full h-48 md:h-72 mb-6">
              <img src={selectedProject.image} className="w-full h-full rounded-[20px] md:rounded-[30px] border border-black/10 shadow-xl" alt={selectedProject.title} />
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-4 text-black italic uppercase leading-tight">{selectedProject.title}</h2>
            <p className="text-black/80 leading-relaxed text-sm md:text-base mb-8">{selectedProject.fullDesc}</p>
            <div className="flex justify-center md:justify-start">
              <a href={selectedProject.link} target="_blank" className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white font-black rounded-full hover:scale-105 transition-all text-xs md:text-sm shadow-lg">
                LIVE PREVIEW <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}