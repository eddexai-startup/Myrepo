import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Hammer } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Monochrome Photography Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded overflow-hidden border border-white/20 shadow-2xl bg-black">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                alt="Onshore Roofing craft technicians inspecting sheetmetal roofing"
                className="w-full h-[420px] object-cover filter grayscale contrast-[1.2] brightness-90 hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-neutral-950/90 border border-white/10 text-xs">
                <div className="text-teal-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-1">
                  Craft Philosophy
                </div>
                <div className="text-white font-medium">
                  Continuous concealed standing seam trays with zero surface fastener penetrations.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
              About Onshore Roofing
            </div>

            <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
              crafted for high-exposure environments and lasting architectural integrity
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
              We specialize in premium standing seam metal roofing, structural coastal re-roofing, and advanced nano-ceramic restorative membranes. Where salt mist, moisture, and high winds quickly degrade conventional roofing, our systems deliver unyielding resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-white/10 bg-neutral-950/50 rounded">
                <div className="font-serif-editorial italic text-2xl text-teal-300 font-normal">
                  Marine Alloys
                </div>
                <p className="text-xs text-neutral-400 mt-1 leading-normal">
                  Certified 5052 Marine Aluminum, 0.70mm Architectural Zinc, and Colorbond Ultra.
                </p>
              </div>

              <div className="p-4 border border-white/10 bg-neutral-950/50 rounded">
                <div className="font-serif-editorial italic text-2xl text-teal-300 font-normal">
                  Zero Penetrations
                </div>
                <p className="text-xs text-neutral-400 mt-1 leading-normal">
                  Concealed sliding clip engineering that naturally absorbs thermal expansion cycles.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white px-7 py-3 text-xs uppercase tracking-[0.2em] font-bold text-white hover:bg-white hover:text-black transition-all"
              >
                <span>View Our Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
