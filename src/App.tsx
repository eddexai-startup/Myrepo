import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MaterialVisualizer } from './components/MaterialVisualizer';
import { InteractiveComparison } from './components/InteractiveComparison';
import { ProjectGallery } from './components/ProjectGallery';
import { ProcessSection } from './components/ProcessSection';
import { ScopeEstimator } from './components/ScopeEstimator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { MaterialId } from './types';

export default function App() {
  const [selectedMaterialId, setSelectedMaterialId] = useState<MaterialId>('standing-seam-zinc');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('standing-seam');

  const handleSelectServiceInEstimator = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const estimatorEl = document.getElementById('estimator');
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyMaterialToEstimator = (materialId: MaterialId) => {
    setSelectedMaterialId(materialId);
    const estimatorEl = document.getElementById('estimator');
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToEstimator = () => {
    const estimatorEl = document.getElementById('estimator');
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-teal-400 selection:text-black relative">
      
      {/* Sleek Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Header with fixed mobile drawer */}
      <Header />

      <main>
        {/* High-Impact Hero with 3 Auto-sliding Roofing Images & Legibility Scrim */}
        <Hero onOpenEstimator={handleScrollToEstimator} />

        {/* Dedicated About & Craft Philosophy Section */}
        <AboutSection />

        {/* Specialized Coastal Roofing Systems */}
        <ServicesSection onSelectServiceInEstimator={handleSelectServiceInEstimator} />

        {/* Material Metallurgy & Finish Studio */}
        <MaterialVisualizer onApplyMaterialToEstimator={handleApplyMaterialToEstimator} />

        {/* Technical Restoration Comparison Viewer */}
        <InteractiveComparison />

        {/* Featured Projects & Lightbox Gallery */}
        <ProjectGallery />

        {/* Architectural 5-Step Process */}
        <ProcessSection />

        {/* Interactive Scope & Quote Estimator */}
        <ScopeEstimator
          initialMaterialId={selectedMaterialId}
          initialServiceId={selectedServiceId}
        />

        {/* Knowledge Base & Technical FAQ */}
        <FaqSection />

        {/* Direct Consultation & Booking */}
        <ContactSection />
      </main>

      {/* Architectural Clean Footer (without star symbol or unwanted modal) */}
      <Footer />
    </div>
  );
}
