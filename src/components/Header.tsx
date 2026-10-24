import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'MATERIALS', href: '#materials' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ESTIMATOR', href: '#estimator' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a
              href="#"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded flex-shrink-0"
              aria-label="Onshore Roofing Home"
            >
              <Logo />
            </a>

            {/* Desktop Navigation Links & Contact Icons */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-6 xl:gap-8 text-xs font-bold tracking-[0.2em] text-white/90" aria-label="Main Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-teal-300 transition-colors duration-150 py-1 uppercase relative group"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-200 group-hover:w-full" />
                  </a>
                ))}
              </nav>

              {/* Social and Direct Contact Icons (No star symbol) */}
              <div className="flex items-center gap-4 pl-4 border-l border-white/20">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mobile Hamburger Button with Smooth Icon Morphing */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="relative z-50 p-2.5 rounded bg-black/50 text-white border border-white/20 hover:border-teal-400 hover:text-teal-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Redesigned Mobile Drawer: Smooth Slide-In from Right with Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Menu Panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed top-0 right-0 bottom-0 w-[300px] sm:w-[360px] bg-neutral-950 border-l border-white/15 p-6 sm:p-8 flex flex-col justify-between z-50 shadow-2xl animate-in slide-in-from-right duration-300"
          >
            {/* Header in drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo showTagline={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Navigation"
                className="p-2 rounded border border-white/20 bg-neutral-900 text-neutral-300 hover:text-white hover:border-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list with staggered vertical feel */}
            <nav className="py-6 flex flex-col space-y-3 font-sans overflow-y-auto">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-400 mb-2">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-bold tracking-widest text-white/90 hover:text-teal-300 hover:translate-x-1.5 transition-all py-2 border-b border-white/5 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-teal-300 transition-colors" />
                </a>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3 font-sans">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-3.5 px-4 border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-center block text-xs uppercase tracking-[0.2em] transition-colors"
              >
                Get In Touch
              </a>
              <div className="flex items-center justify-center gap-6 pt-2 text-neutral-400">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
