import React, { useState } from 'react';
import { FAQS } from '../data/roofingData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-900 border-t border-white/10 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
            Technical Advisory
          </div>
          <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
            frequently asked questions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Essential considerations for coastal roofing installations, material metallurgy, and structural maintenance in marine atmospheres.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 font-sans">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="border border-white/10 bg-neutral-950 overflow-hidden transition-colors"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 group"
                >
                  <span className="text-base sm:text-lg font-medium text-white group-hover:text-teal-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 text-neutral-400 group-hover:text-white transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-teal-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 sm:px-6 text-neutral-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-sans"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
