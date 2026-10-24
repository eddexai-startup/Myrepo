import React from 'react';
import { Logo } from './Logo';
import { ROOFING_SERVICES } from '../data/roofingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-neutral-400 text-xs font-sans">
      {/* Top Footer Tier */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Architectural standing seam metal roofing, structural coastal re-roofing, and marine protective barrier engineering. Built with unyielding tolerances for coastal atmospheric exposure.
            </p>
            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 bg-neutral-900 text-white font-bold text-xs hover:bg-white hover:text-black transition-colors uppercase tracking-[0.2em]"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Quick Nav Anchors (2 columns) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: 'About Onshore', href: '#about' },
                { label: 'Roofing Systems', href: '#services' },
                { label: 'Material Studio', href: '#materials' },
                { label: 'Restoration Viewer', href: '#comparison' },
                { label: 'Featured Projects', href: '#projects' },
                { label: 'Scope Estimator', href: '#estimator' },
                { label: 'Technical FAQ', href: '#faq' },
                { label: 'Get In Touch', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Directory (3 columns) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Roofing Systems
            </div>
            <ul className="space-y-2">
              {ROOFING_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors block truncate">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards Column (3 columns) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Engineering Standards
            </div>
            <div className="space-y-2 text-neutral-400">
              <div className="p-3 bg-neutral-950 border border-white/10 text-[11px] leading-relaxed">
                <span className="text-teal-300 font-bold uppercase tracking-wider block mb-0.5">Atmospheric Exposure:</span>
                ISO 9223 Marine Class C4 &amp; C5-M compliant specifications with sacrificial priming &amp; 316 stainless fixings.
              </div>
              <div className="p-3 bg-neutral-950 border border-white/10 text-[11px] leading-relaxed">
                <span className="text-amber-300 font-bold uppercase tracking-wider block mb-0.5">Wind Uplift Compliance:</span>
                AS/NZS 1562 &amp; ASTM E1592 cyclonic load continuous interlocking standing seams.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Tier */}
      <div className="border-t border-white/10 bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Onshore Roofing Co. All rights reserved. Precision architectural &amp; coastal roofing.
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-teal-300 transition-colors">
              Roofing Systems
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-teal-300 transition-colors">
              Contact &amp; Estimator
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
