import React, { useState } from 'react';
import { ROOFING_MATERIALS } from '../data/roofingData';
import { RoofingMaterial, MaterialId } from '../types';
import { ShieldCheck, Sun, Wind, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface MaterialVisualizerProps {
  onApplyMaterialToEstimator: (materialId: MaterialId) => void;
}

export const MaterialVisualizer: React.FC<MaterialVisualizerProps> = ({ onApplyMaterialToEstimator }) => {
  const [selectedMaterialId, setSelectedMaterialId] = useState<MaterialId>('standing-seam-zinc');
  const [activeSwatchIndex, setActiveSwatchIndex] = useState<number>(0);

  const currentMaterial = ROOFING_MATERIALS.find((m) => m.id === selectedMaterialId) || ROOFING_MATERIALS[0];
  const activeSwatch = currentMaterial.swatchColors[activeSwatchIndex] || currentMaterial.swatchColors[0];

  const handleSelectMaterial = (id: MaterialId) => {
    setSelectedMaterialId(id);
    setActiveSwatchIndex(0);
  };

  return (
    <section id="materials" className="py-24 bg-neutral-900 border-t border-white/10 relative text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
              Material Metallurgy &amp; Performance
            </div>
            <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
              noble metals crafted for coastal atmospheres
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
              Explore how each material responds to maritime salt aerosol, intense ultraviolet radiation, and thermal expansion cycles.
            </p>
          </div>

          <div className="text-xs text-neutral-400 font-mono bg-black/60 p-3 border border-white/10 self-start">
            // ATMOSPHERIC CORROSIVITY GRADE: C4 TO C5-M
          </div>
        </div>

        {/* Material Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {ROOFING_MATERIALS.map((mat) => {
            const isSelected = mat.id === selectedMaterialId;
            return (
              <button
                key={mat.id}
                onClick={() => handleSelectMaterial(mat.id)}
                className={`flex-shrink-0 px-5 py-3 border text-left transition-all ${
                  isSelected
                    ? 'bg-neutral-950 text-white border-teal-400 shadow-lg'
                    : 'bg-neutral-950/40 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <div className="font-serif-editorial italic text-base">{mat.name}</div>
                <div className="text-[10px] tracking-wider uppercase text-neutral-500 font-sans mt-0.5">{mat.category}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Material Showcase Stage */}
        <div className="p-6 sm:p-10 rounded border border-white/15 bg-neutral-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Preview Frame with Swatch Indicator */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded overflow-hidden border border-white/10 shadow-inner h-80 sm:h-96 group">
                <img
                  src={currentMaterial.imageUrl}
                  alt={currentMaterial.name}
                  className="w-full h-full object-cover filter contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Swatch Color Tint Overlay */}
                <div
                  className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none transition-colors duration-500"
                  style={{ backgroundColor: activeSwatch.hex }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Swatch active badge overlay */}
                <div className="absolute top-4 left-4 p-3 bg-black/90 backdrop-blur-md border border-white/15 flex items-center gap-3">
                  <div
                    className="w-6 h-6 border border-white/80"
                    style={{ backgroundColor: activeSwatch.hex }}
                  />
                  <div className="font-sans">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Architectural Finish</div>
                    <div className="text-xs font-bold text-white font-mono">
                      {activeSwatch.name} ({activeSwatch.code})
                    </div>
                  </div>
                </div>

                {/* Aesthetic notes badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-black/90 border border-white/10 text-xs text-neutral-300 font-sans">
                  <span className="text-teal-300 font-bold uppercase tracking-wider text-[10px] block mb-0.5">Visual Profile:</span>
                  {currentMaterial.aestheticNotes}
                </div>
              </div>

              {/* Swatch Picker Bar */}
              <div className="mt-4 p-4 bg-neutral-900 border border-white/10 flex items-center justify-between flex-wrap gap-3 font-sans">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Select Architectural Swatch:
                </div>
                <div className="flex items-center gap-3">
                  {currentMaterial.swatchColors.map((swatch, idx) => (
                    <button
                      key={swatch.code}
                      onClick={() => setActiveSwatchIndex(idx)}
                      aria-label={`Select swatch ${swatch.name}`}
                      className={`relative p-1 border transition-all ${
                        activeSwatchIndex === idx
                          ? 'border-teal-400 scale-110 shadow-md'
                          : 'border-transparent hover:scale-105 opacity-70'
                      }`}
                    >
                      <div
                        className="w-7 h-7 border border-white/30"
                        style={{ backgroundColor: swatch.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Specifications & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400 font-sans">
                  {currentMaterial.category}
                </span>
                <h3 className="font-serif-editorial italic text-3xl sm:text-4xl text-white mt-1">
                  {currentMaterial.name}
                </h3>
                <p className="mt-3 text-sm text-neutral-300 font-sans leading-relaxed">
                  {currentMaterial.description}
                </p>
              </div>

              {/* Technical Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 font-sans">
                
                {/* Salt Mist Resistance */}
                <div className="p-4 bg-neutral-900 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
                      <ShieldCheck className="w-4 h-4 text-teal-400" /> Salt Resilience
                    </span>
                    <span className="font-mono text-teal-300 font-bold">{currentMaterial.saltResistanceScore}/100</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 overflow-hidden mt-2">
                    <div
                      className="bg-teal-400 h-full transition-all duration-500"
                      style={{ width: `${currentMaterial.saltResistanceScore}%` }}
                    />
                  </div>
                </div>

                {/* Solar Reflectance Index */}
                <div className="p-4 bg-neutral-900 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
                      <Sun className="w-4 h-4 text-amber-400" /> Solar SRI
                    </span>
                    <span className="font-mono text-amber-300 font-bold">SRI {currentMaterial.solarReflectanceIndex}</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 overflow-hidden mt-2">
                    <div
                      className="bg-amber-400 h-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (currentMaterial.solarReflectanceIndex / 110) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Wind Uplift Rating */}
                <div className="p-4 bg-neutral-900 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1 font-bold uppercase tracking-wider text-[10px]">
                    <Wind className="w-4 h-4 text-teal-400" /> Wind Uplift
                  </div>
                  <div className="text-xs font-semibold text-white mt-1 leading-snug">
                    {currentMaterial.windRating}
                  </div>
                </div>

                {/* Lifespan */}
                <div className="p-4 bg-neutral-900 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1 font-bold uppercase tracking-wider text-[10px]">
                    <Clock className="w-4 h-4 text-emerald-400" /> Typical Lifespan
                  </div>
                  <div className="font-serif-editorial italic text-2xl text-emerald-400 mt-0.5">
                    {currentMaterial.typicalLifespan}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2 font-sans">
                <button
                  onClick={() => onApplyMaterialToEstimator(currentMaterial.id)}
                  className="w-full sm:w-auto px-7 py-3.5 border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200"
                >
                  Apply in Scope Estimator
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
