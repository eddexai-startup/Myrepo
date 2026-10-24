import React from 'react';
import { PROCESS_STEPS } from '../data/roofingData';
import { Clock, FileCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-neutral-950 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
            Execution Protocol
          </div>
          <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
            the five stages of precision roofing craft
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
            From preliminary aerial photogrammetry to cyclonic tie-down engineering and the final torrential water test.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded border border-white/15 bg-neutral-900/80 flex flex-col justify-between hover:border-white/30 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-editorial italic text-3xl font-bold text-teal-400">
                    {step.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans uppercase tracking-wider text-neutral-400 bg-black/60 px-2.5 py-1 border border-white/10">
                    <Clock className="w-3 h-3 text-teal-400" /> {step.duration}
                  </span>
                </div>

                <h3 className="font-serif-editorial italic text-lg text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-4">
                  {step.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 font-sans">
                <div className="text-[10px] uppercase font-bold tracking-widest text-teal-300 mb-1 flex items-center gap-1">
                  <FileCheck className="w-3 h-3 text-teal-400" /> Stage Deliverable:
                </div>
                <div className="text-xs text-neutral-300">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
