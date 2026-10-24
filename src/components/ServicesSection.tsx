import React, { useState } from 'react';
import { ROOFING_SERVICES } from '../data/roofingData';
import { RoofingService } from '../types';
import { ArrowRight, Check, X, AlertTriangle } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceInEstimator: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceInEstimator }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<RoofingService | null>(null);

  const flagship = ROOFING_SERVICES[0];
  const midTierServices = ROOFING_SERVICES.slice(1, 4);
  const secondaryServices = ROOFING_SERVICES.slice(4);

  return (
    <section id="services" className="py-24 bg-neutral-950 border-t border-white/10 relative text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
            Our Roofing Capabilities
          </div>
          <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
            engineered systems designed for coastal weather resilience
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
            From millimeter-accurate standing seam metal profiles to high-tensile structural re-roofs and liquid-applied nano-ceramic restorations.
          </p>
        </div>

        {/* 1. Flagship Service Showcase: Architectural Standing Seam */}
        <div className="mb-16 p-6 sm:p-10 rounded border border-white/15 bg-neutral-900/90 shadow-2xl relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Photography Column */}
            <div className="lg:col-span-6 relative rounded overflow-hidden border border-white/10 h-80 sm:h-96">
              <img
                src={flagship.imageUrl}
                alt={flagship.title}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] bg-teal-500 text-black">
                  {flagship.badge}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 border border-white/10 text-xs text-neutral-300">
                <span className="text-teal-300 font-bold tracking-wider">SPECIFICATION:</span> AS/NZS 1562 &amp; ASTM E1592 Wind Test Certified
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-serif-editorial italic text-2xl font-bold text-teal-400">{flagship.number}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold font-sans">// Continuous Sheetmetal Craft</span>
              </div>
              
              <h3 className="font-serif-editorial italic text-2xl sm:text-3xl text-white font-normal leading-snug">
                {flagship.title}
              </h3>
              
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {flagship.description}
              </p>

              {/* Vulnerability Solved Box */}
              <div className="p-4 border border-teal-500/30 bg-black/60 text-xs text-neutral-300">
                <strong className="text-teal-300 block mb-1 uppercase tracking-wider font-sans text-[11px]">
                  Coastal Vulnerability Solved:
                </strong>
                {flagship.vulnerabilitySolved}
              </div>

              {/* Specifications preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-sans">
                {flagship.specifications.slice(0, 4).map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectServiceInEstimator(flagship.id)}
                  className="px-6 py-3 border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200"
                >
                  Configure In Estimator
                </button>
                <button
                  onClick={() => setSelectedServiceForModal(flagship)}
                  className="text-xs font-semibold text-neutral-400 hover:text-white underline underline-offset-4 tracking-wider uppercase font-sans"
                >
                  Full Technical Spec Sheet
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 2. Alternating Editorial Layouts for Services 02, 03, 04 */}
        <div className="space-y-12 mb-16">
          {midTierServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="p-6 sm:p-8 rounded border border-white/10 bg-neutral-900/60 hover:border-white/20 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded overflow-hidden border border-white/10 h-64 sm:h-72 group">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-neutral-950 text-teal-400 border border-white/20">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-serif-editorial italic text-xl font-bold text-teal-400">{service.number}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold font-sans">{service.tagline}</span>
                    </div>

                    <h3 className="font-serif-editorial italic text-2xl sm:text-3xl text-white font-normal">
                      {service.title}
                    </h3>

                    <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                      {service.description}
                    </p>

                    <div className="p-3.5 border border-white/10 bg-black/50 text-xs text-neutral-300 font-sans">
                      <span className="text-teal-300 font-bold block mb-1 uppercase tracking-wider text-[11px]">Problem Solved:</span>
                      {service.vulnerabilitySolved}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1 font-sans">
                      <span className="text-xs text-neutral-400 font-medium">Compatible Materials:</span>
                      {service.recommendedMaterials.map((mat, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 text-[11px] font-mono bg-neutral-800 text-neutral-300 border border-white/10">
                          {mat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <button
                        onClick={() => onSelectServiceInEstimator(service.id)}
                        className="px-5 py-2.5 border border-white/80 bg-transparent hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200"
                      >
                        Estimate This Scope
                      </button>
                      <button
                        onClick={() => setSelectedServiceForModal(service)}
                        className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 font-sans uppercase tracking-wider"
                      >
                        Details
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Secondary Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded border border-white/10 bg-neutral-900/60 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="relative rounded overflow-hidden h-48 mb-5 border border-white/10">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-neutral-950 text-teal-400 border border-white/20">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif-editorial italic text-xl sm:text-2xl text-white font-normal mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-white/10">
                <button
                  onClick={() => onSelectServiceInEstimator(service.id)}
                  className="text-xs font-bold text-teal-300 hover:text-teal-200 flex items-center gap-1.5 uppercase tracking-wider font-sans"
                >
                  <span>Select for Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedServiceForModal(service)}
                  className="text-xs text-neutral-400 hover:text-white uppercase tracking-wider font-sans"
                >
                  Specification
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Service Specification Deck */}
      {selectedServiceForModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 rounded shadow-2xl p-6 sm:p-8 text-neutral-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-[0.2em] font-sans">
                  SYSTEM SPECIFICATION // {selectedServiceForModal.number}
                </span>
                <h3 className="font-serif-editorial italic text-2xl text-white mt-1">
                  {selectedServiceForModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceForModal(null)}
                aria-label="Close service specification dialog"
                className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-neutral-300 font-sans">
              <p>{selectedServiceForModal.description}</p>

              <div>
                <h4 className="font-bold text-white mb-2 text-xs uppercase tracking-[0.15em] text-neutral-400">
                  Engineering Standards &amp; Protocols:
                </h4>
                <ul className="space-y-2">
                  {selectedServiceForModal.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-black/60 border border-white/10">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block mb-1">
                  Recommended Coastal Materials:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedServiceForModal.recommendedMaterials.map((mat, i) => (
                    <span key={i} className="px-2.5 py-1 bg-neutral-800 text-xs font-mono text-neutral-200 border border-white/10">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end gap-3 font-sans">
              <button
                onClick={() => {
                  const id = selectedServiceForModal.id;
                  setSelectedServiceForModal(null);
                  onSelectServiceInEstimator(id);
                }}
                className="px-6 py-3 border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors"
              >
                Estimate This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
