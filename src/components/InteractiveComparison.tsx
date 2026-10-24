import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Shield, AlertTriangle, ArrowLeftRight } from 'lucide-react';

export const InteractiveComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="comparison" className="py-24 bg-neutral-950 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
            Technical Analysis
          </div>
          <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
            weathered coastal fatigue versus fortified protection
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Drag the divider to examine the contrast between salt-oxidized roofing surfaces and our nano-ceramic elastomeric marine shield.
          </p>
        </div>

        {/* Comparison Stage */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-label="Restoration comparison before and after slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="relative h-[380px] sm:h-[480px] overflow-hidden cursor-ew-resize select-none border border-white/20 shadow-2xl bg-black focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {/* Background Image: Weathered/Salt Damaged Roof */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
                alt="Severe weathered roof prior to restoration"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.7]"
              />
              {/* Left Label */}
              <div className="absolute top-5 left-5 p-3.5 bg-black/90 border border-amber-500/40 text-xs max-w-[210px] font-sans">
                <div className="flex items-center gap-1.5 font-bold text-amber-400 uppercase tracking-widest text-[10px] mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Salt-Fatigued
                </div>
                <p className="text-neutral-300 text-[11px] leading-snug">
                  Fastener oxidation, micro-fissures, moisture ingress, and thermal buildup.
                </p>
              </div>
            </div>

            {/* Foreground Clipped Image: Fortified Restored State */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural roof with marine protective shield applied"
                className="absolute inset-0 w-full h-full object-cover max-w-none filter contrast-110"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              {/* Right Label */}
              <div className="absolute top-5 right-5 p-3.5 bg-black/90 border border-teal-500/40 text-xs max-w-[210px] text-right font-sans">
                <div className="flex items-center justify-end gap-1.5 font-bold text-teal-400 uppercase tracking-widest text-[10px] mb-1">
                  <Shield className="w-3.5 h-3.5" /> Marine Fortified
                </div>
                <p className="text-neutral-300 text-[11px] leading-snug">
                  Continuous elastomeric barrier, C5-M salt sealing, and 92% infrared reflection.
                </p>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-black border-2 border-white text-white flex items-center justify-center shadow-2xl">
                <ArrowLeftRight className="w-3.5 h-3.5 text-teal-300" />
              </div>
            </div>

          </div>

          {/* Interactive Hint */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400 font-sans tracking-widest uppercase text-center">
            <span>&larr; Drag or tap anywhere to inspect the restorative contrast &rarr;</span>
          </div>
        </div>

      </div>
    </section>
  );
};
