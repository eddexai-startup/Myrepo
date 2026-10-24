import React, { useState, useEffect } from 'react';
import { GALLERY_PROJECTS } from '../data/roofingData';
import { GalleryProject } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Architectural Metal', 'Coastal Residential', 'Protective Restoration', 'Commercial & Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredProjects.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : 0));
      }
    };
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, filteredProjects.length]);

  const activeProject = activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : null;

  return (
    <section id="projects" className="py-24 bg-neutral-900 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
              Project Portfolio
            </div>
            <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
              crafted for discerning coastal residences &amp; estates
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
              Clean continuous trays, double-lock mechanical seaming, and custom architectural sheetmetal detailing.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-black/60 p-3 border border-white/10 self-start font-sans">
            <span className="text-teal-400 font-bold uppercase tracking-wider block">// READY FOR REAL ASSETS</span>
            Populated with illustrative captures ready for client portfolio integration.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-thin font-sans">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all whitespace-nowrap border ${
                activeCategory === cat
                  ? 'border-white bg-white text-black'
                  : 'border-white/15 bg-transparent text-neutral-400 hover:text-white hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative overflow-hidden bg-neutral-950 border border-white/15 hover:border-white/40 cursor-pointer transition-all duration-300 shadow-xl"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/90 text-teal-400 border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Lightbox Trigger icon */}
                <div className="absolute top-4 right-4 p-2 bg-black/80 text-neutral-300 group-hover:text-black group-hover:bg-white transition-colors border border-white/10">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                  <h3 className="font-serif-editorial italic text-2xl text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-neutral-300 font-mono">
                    {project.material}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans tracking-wide">
                    {project.scope}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeProject && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-900 border border-white/20 rounded shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-10 p-2 bg-black/90 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next controls */}
            <button
              onClick={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : 0))}
              aria-label="Previous project image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/90 text-white hover:bg-white hover:text-black transition-colors border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredProjects.length : 0))}
              aria-label="Next project image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/90 text-white hover:bg-white hover:text-black transition-colors border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Stage */}
            <div className="relative h-[360px] sm:h-[480px] bg-black">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lightbox Information Bar */}
            <div className="p-6 bg-neutral-950 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.2em] font-sans">
                    {activeProject.category} // {activeProject.material}
                  </span>
                  <h3 className="font-serif-editorial italic text-2xl sm:text-3xl text-white mt-0.5">
                    {activeProject.title}
                  </h3>
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  SCOPE: {activeProject.scope}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 mb-1.5 font-sans">
                  Craft Notes &amp; Detailing:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-sans">
                  {activeProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
