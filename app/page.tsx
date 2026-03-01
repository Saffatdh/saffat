"use client";
import { useState, useEffect } from 'react';
import { portfolioData, Project } from '../data/protfolio';
import { Github, Linkedin, Mail, Phone, ExternalLink, X, Download, GraduationCap, Code, Briefcase, User, Layers, Send, ChevronUp } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top button visibility logic
  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) setShowScroll(true);
      else if (showScroll && window.pageYOffset <= 400) setShowScroll(false);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  return (
    <div className="min-h-screen relative selection:bg-[var(--accent-color)] selection:text-white">

      {/* Background Aesthetic Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent-glow)] blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--accent-glow)] opacity-20 blur-[100px]"></div>
      </div>

      {/* Glass Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[var(--nav-bg)] backdrop-blur-lg border border-white/10 px-8 py-3 rounded-full flex gap-6 shadow-2xl overflow-x-auto max-w-[95%] no-scrollbar">
        {["About", "Education", "Projects", "Experience", "Skills", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 hover:opacity-100 hover:text-[var(--accent-color)] transition-all whitespace-nowrap">
            {link}
          </a>
        ))}
      </nav>

      {/* SECTION: ABOUT */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2 text-[var(--accent-color)] font-mono text-sm tracking-widest">
              <User size={16} /> ABOUT ME
            </div>
            <h1 className="text-6xl md:text-5xl font-black italic transform -skew-x-6 bg-gradient-to-r from-[var(--text-main)] to-[var(--text-dim)] bg-clip-text text-transparent leading-tight">
              {portfolioData.name.toUpperCase()}
            </h1>
            <p className="text-sm text-[var(--text-dim)] max-w-md border-l-2 border-[var(--accent-color)] pl-6 leading-relaxed">
              {portfolioData.bio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={portfolioData.cvLink} download className="flex items-center gap-2 px-8 py-3 bg-[var(--accent-color)] text-white font-black rounded-full hover:scale-105 transition-all shadow-[0_0_20px_var(--accent-glow)]">
                <Download size={18} /> DOWNLOAD CV
              </a>
              <a href={portfolioData.github} target="_blank" className="flex items-center gap-2 px-8 py-3 bg-[var(--text-main)] text-[var(--bg-color)] font-black rounded-full hover:scale-105 transition-all">
                <Github size={18} /> GITHUB
              </a>
              {/* LinkedIn Button (Missing logic fixed here) */}
              <a
                href={portfolioData.linkedin}
                target="_blank"
                className="flex items-center gap-2 px-8 py-3 border border-[var(--accent-color)] text-[var(--text-main)] font-black rounded-full hover:bg-[var(--accent-color)] hover:text-white transition-all shadow-[0_0_15px_rgba(var(--accent-color),0.1)]"
              >
                <Linkedin size={18} /> LINKEDIN
              </a>
            </div>
          </div>

          <div className="relative group perspective-1000 hidden md:block">
            <div className="relative w-80 h-80 mx-auto transition-all duration-700 transform-gpu group-hover:rotate-y-12 shadow-2xl">
              <div className="absolute inset-0 bg-[var(--accent-color)] opacity-20 rounded-[40px] blur-3xl group-hover:opacity-40 transition-all"></div>
              <img
                src={portfolioData.profileImage}
                className="w-full h-full object-cover rounded-[40px] border border-white/10 relative z-10 shadow-2xl"
                alt="Profile"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=Profile" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto py-32 px-6 border-t border-white/5">
        <div className="flex items-center gap-4 mb-16">
          <GraduationCap className="text-[var(--accent-color)]" size={32} />
          <h2 className="text-4xl font-black italic tracking-widest uppercase text-black border-b-2 border-[var(--accent-color)] pb-2">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="card-glass p-8 rounded-[30px] border border-white/5 hover:border-[var(--accent-color)]/30 transition-all group relative">
              <span className="text-[var(--accent-color)] font-mono text-xs font-bold">{edu.year}</span>
              <h3 className="text-2xl font-bold mt-2 group-hover:text-[var(--accent-color)] transition-colors">{edu.degree}</h3>
              <p className="text-[var(--text-main)] opacity-70 italic mb-4">{edu.institution}</p>
              <p className="text-[var(--text-dim)] text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: PROJECTS */}
      <section id="projects" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-20 justify-center">
            <Code className="text-[var(--accent-color)]" size={32} />
            <h2 className="text-4xl font-black italic tracking-widest uppercase text-black">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {portfolioData.projects.map((p) => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="group cursor-pointer perspective-1000">
                <div className="card-glass p-10 rounded-[40px] transition-all duration-500 transform-gpu group-hover:rotate-x-6 group-hover:-translate-y-4 group-hover:border-[var(--accent-color)] shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent-color)]">{p.title}</h3>
                  <p className="text-[var(--text-dim)] text-sm line-clamp-2 mb-6">{p.shortDesc}</p>
                  <div className="w-8 h-[2px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: EXPERIENCE */}
      <section id="experience" className="max-w-4xl mx-auto py-32 px-6">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="text-[var(--accent-color)]" size={32} />
          <h2 className="text-4xl font-black italic tracking-widest uppercase text-black border-b-2 border-[var(--accent-color)] pb-2">Experience</h2>
        </div>
        <div className="space-y-12">
          {portfolioData.experience.map((ex, i) => (
            <div key={i} className="relative pl-10 border-l border-white/10 hover:border-[var(--accent-color)] transition-all group">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[var(--accent-color)] rounded-full shadow-[0_0_15px_var(--accent-color)] group-hover:scale-150 transition-all"></div>
              <h4 className="text-3xl font-bold">{ex.company}</h4>
              <p className="text-[var(--accent-color)] font-mono text-sm mt-1 tracking-widest uppercase font-bold">{ex.role} — {ex.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: SKILLS */}
      <section id="skills" className="max-w-4xl mx-auto py-32 px-6 border-t border-white/5">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <h2 className="text-4xl font-black italic tracking-widest uppercase text-black border-b-2 border-[var(--accent-color)] pb-2">Tech Stack</h2>
          <Layers className="text-[var(--accent-color)]" size={32} />
        </div>
        <div className="flex flex-wrap gap-4 justify-end">
          {portfolioData.skills.map(s => (
            <span key={s} className="px-8 py-3 card-glass rounded-full text-xs font-black tracking-widest hover:bg-[var(--accent-color)] hover:text-white transition-all uppercase cursor-default border border-white/5">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION: CONTACT */}
      <section id="contact" className="py-32 px-6 text-center bg-gradient-to-b from-transparent to-[var(--accent-glow)] rounded-t-[100px]">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <Send className="text-[var(--accent-color)]" size={32} />
          <h2 className="text-4xl font-black italic tracking-widest uppercase text-black">Get In Touch</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12 font-mono text-lg">
          <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-3 text-[var(--text-dim)] hover:text-[var(--accent-color)] transition-all">
            <Mail size={24} className="text-[var(--accent-color)]" /> {portfolioData.email}
          </a>
          <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-3 text-[var(--text-dim)] hover:text-[var(--accent-color)] transition-all">
            <Phone size={24} className="text-[var(--accent-color)]" /> {portfolioData.phone}
          </a>
        </div>
        <p className="mt-20 text-[10px] tracking-[0.5em] opacity-30 uppercase">Design & Developed by {new Date().getFullYear()} {portfolioData.name}</p>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-4 bg-[var(--accent-color)] text-white rounded-full shadow-2xl transition-all duration-300 z-[90] ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Project Modal (Keep same as before) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md animate-in fade-in">
          <div className="bg-[var(--bg-color)] border border-[var(--accent-color)] p-12 rounded-[50px] max-w-2xl w-full relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-[var(--text-dim)] hover:text-[var(--text-main)]"><X size={32} /></button>
            <h2 className="text-4xl font-black mb-6 text-[var(--accent-color)] italic uppercase">{selectedProject.title}</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-10">{selectedProject.fullDesc}</p>
            <a href={selectedProject.link} target="_blank" className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--accent-color)] text-white font-black rounded-full hover:scale-105 transition-all">
              LIVE PREVIEW <ExternalLink size={18} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}