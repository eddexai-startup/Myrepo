import React, { useState, useMemo } from 'react';
import { calculateEstimatedScope, validateQuoteForm, MATERIAL_SPECS } from '../utils/roofingCalculator';
import { PropertyType, RoofPitch, MaterialId, QuoteFormData, ValidationErrors } from '../types';
import { Calculator, ArrowRight, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

interface ScopeEstimatorProps {
  initialMaterialId?: MaterialId;
  initialServiceId?: string;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({
  initialMaterialId = 'standing-seam-zinc',
  initialServiceId = 'standing-seam',
}) => {
  const [propertyType, setPropertyType] = useState<PropertyType>('architectural-modern');
  const [roofPitch, setRoofPitch] = useState<RoofPitch>('medium');
  const [materialId, setMaterialId] = useState<MaterialId>(initialMaterialId);
  const [estimatedAreaSqm, setEstimatedAreaSqm] = useState<number>(220);
  const [urgency, setUrgency] = useState<'immediate' | 'planning-30d' | 'planning-quarter'>('planning-30d');

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    contactMethod: '',
    propertyAddress: '',
    serviceCategory: initialServiceId,
    timeline: 'Within 30 Days',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  React.useEffect(() => {
    if (initialMaterialId) setMaterialId(initialMaterialId);
  }, [initialMaterialId]);

  React.useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceCategory: initialServiceId }));
    }
  }, [initialServiceId]);

  const calculatedScope = useMemo(() => {
    return calculateEstimatedScope({
      propertyType,
      roofPitch,
      materialId,
      estimatedAreaSqm,
      urgency,
    });
  }, [propertyType, roofPitch, materialId, estimatedAreaSqm, urgency]);

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field as keyof ValidationErrors]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateQuoteForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      contactMethod: '',
      propertyAddress: '',
      serviceCategory: 'standing-seam',
      timeline: 'Within 30 Days',
      notes: '',
    });
  };

  return (
    <section id="estimator" className="py-24 bg-neutral-900 border-t border-white/10 relative text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
            Interactive Scope Engine
          </div>
          <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
            estimate your project &amp; schedule on-site diagnostic
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
            Select your architectural profile, roof pitch geometry, and material specification. Review calculated quantities and submit for a fixed-price quotation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configurator Controls (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 bg-neutral-950 p-6 sm:p-8 rounded border border-white/15 shadow-xl font-sans">
            
            {/* 1. Property Type Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-3">
                1. Property Architecture &amp; Structure:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'residential-coastal', label: 'Coastal Home', sub: 'Beachfront Villa' },
                  { id: 'architectural-modern', label: 'Architectural', sub: 'Custom Build' },
                  { id: 'commercial-industrial', label: 'Commercial', sub: 'Engineered Shed' },
                  { id: 'strata-multi', label: 'Strata Complex', sub: 'Multi-Dwelling' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as PropertyType)}
                    className={`p-3 border text-left transition-all ${
                      propertyType === item.id
                        ? 'bg-neutral-900 border-teal-400 text-white shadow-sm'
                        : 'bg-black/40 border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Roof Pitch & Complexity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                  2. Roof Pitch Geometry:
                </label>
                <span className="text-xs font-mono text-teal-400">
                  Multiplier: {calculatedScope.pitchMultiplier}x
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'low', label: 'Low Pitch', desc: '5° – 15° Minimal' },
                  { id: 'medium', label: 'Moderate Gable', desc: '16° – 30° Standard' },
                  { id: 'steep', label: 'Steep Pitch', desc: '31° – 45° Alpine' },
                  { id: 'complex', label: 'Multi-Hip / Valley', desc: 'Complex Rooflines' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRoofPitch(item.id as RoofPitch)}
                    className={`p-3 border text-left transition-all ${
                      roofPitch === item.id
                        ? 'bg-neutral-900 border-teal-400 text-white shadow-sm'
                        : 'bg-black/40 border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Noble Material Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-3">
                3. Premium Roofing Material:
              </label>
              <div className="space-y-2">
                {(Object.keys(MATERIAL_SPECS) as MaterialId[]).map((matKey) => {
                  const spec = MATERIAL_SPECS[matKey];
                  const isSelected = materialId === matKey;
                  return (
                    <button
                      key={matKey}
                      type="button"
                      onClick={() => setMaterialId(matKey)}
                      className={`w-full p-3.5 border text-left flex items-center justify-between gap-3 transition-all ${
                        isSelected
                          ? 'bg-neutral-900 border-teal-400 text-white shadow-md'
                          : 'bg-black/40 border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                          {spec.name}
                          {isSelected && <span className="w-2 h-2 rounded-full bg-teal-400" />}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          {spec.marineGradeRating}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-mono font-semibold text-teal-300">
                          ${spec.sqmPriceMin} – ${spec.sqmPriceMax} / m²
                        </div>
                        <div className="text-[10px] text-neutral-500">Installed Material</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Footprint Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                  4. Estimated Footprint Area (m²):
                </label>
                <div className="font-mono text-base font-bold text-white bg-black px-3 py-1 border border-white/15">
                  {estimatedAreaSqm} m² <span className="text-xs text-neutral-400 font-normal">({Math.round(estimatedAreaSqm * 10.764)} sq ft)</span>
                </div>
              </div>
              <input
                type="range"
                min="40"
                max="800"
                step="10"
                value={estimatedAreaSqm}
                onChange={(e) => setEstimatedAreaSqm(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-2 bg-neutral-900"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                <span>Compact (40 m²)</span>
                <span>Average Residence (220 m²)</span>
                <span>Expansive Compound (800 m²)</span>
              </div>
            </div>

            {/* 5. Project Urgency */}
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-2">
                5. Project Timeframe:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'immediate', label: 'Immediate / Urgent Repair' },
                  { id: 'planning-30d', label: 'Next 30 – 60 Days' },
                  { id: 'planning-quarter', label: 'Planning Ahead (3+ Months)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`p-2.5 border text-center text-xs font-semibold transition-all ${
                      urgency === item.id
                        ? 'bg-neutral-900 border-teal-400 text-teal-300'
                        : 'bg-black/40 border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Scope Breakdown & Consultation Booking (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Calculated Scope Card */}
            <div className="p-6 sm:p-7 rounded border border-white/20 bg-neutral-950 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400 font-sans">
                  CALCULATED SPECIFICATION
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
                  Marine C4/C5 Ready
                </span>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-white/10 font-sans">
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">Effective Surface</div>
                  <div className="font-serif-editorial italic text-3xl font-bold text-white mt-0.5">
                    {calculatedScope.effectiveAreaSqm} <span className="text-xs text-neutral-400 font-normal">m²</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                    ({calculatedScope.squares} Roofing Squares)
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">Craft Timeline</div>
                  <div className="font-serif-editorial italic text-3xl font-bold text-teal-300 mt-0.5">
                    {calculatedScope.estimatedDays} <span className="text-xs text-neutral-400 font-normal">Days</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                    Weatherproof staging
                  </div>
                </div>

                <div className="col-span-2 pt-2">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">Indicative Investment Band</div>
                  <div className="font-serif-editorial italic text-3xl font-bold text-white mt-1">
                    {calculatedScope.indicativeBand}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-1">
                    *Budgeting guidance for client planning. Exact quote provided after on-site diagnostic.
                  </div>
                </div>
              </div>

              {/* Substrate & Underlayment Callout */}
              <div className="py-4 space-y-2 text-xs text-neutral-300 font-sans">
                <div>
                  <span className="text-neutral-400 font-semibold block text-[10px] uppercase tracking-wider">Underlayment:</span>
                  <p className="text-neutral-300 mt-0.5">{calculatedScope.recommendedUnderlayment}</p>
                </div>
                <div>
                  <span className="text-neutral-400 font-semibold block text-[10px] uppercase tracking-wider">Thermal &amp; Acoustic:</span>
                  <p className="text-neutral-300 mt-0.5">{calculatedScope.thermalPerformance}</p>
                </div>
              </div>

            </div>

            {/* Direct Booking Form */}
            <div className="p-6 sm:p-7 rounded border border-white/15 bg-neutral-950 shadow-xl font-sans">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="font-serif-editorial italic text-xl text-white">
                      Book Drone Diagnostic &amp; Proposal
                    </h3>
                    <span className="text-[11px] text-teal-400 font-mono">STEP 5 OF 5</span>
                  </div>

                  {formErrors.general && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{formErrors.general}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="est-fullName" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Full Name or Company Representative <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="est-fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="e.g. David Vance"
                      className={`w-full px-3.5 py-2.5 bg-black border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                        formErrors.fullName ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-400 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="est-contactMethod" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Direct Email or Phone Number <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="est-contactMethod"
                      type="text"
                      value={formData.contactMethod}
                      onChange={(e) => handleInputChange('contactMethod', e.target.value)}
                      placeholder="e.g. david@coastalestate.com or 0412 890 234"
                      className={`w-full px-3.5 py-2.5 bg-black border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                        formErrors.contactMethod ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.contactMethod && (
                      <p className="text-xs text-red-400 mt-1">{formErrors.contactMethod}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="est-propertyAddress" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Coastal Property Address or Suburb <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="est-propertyAddress"
                      type="text"
                      value={formData.propertyAddress}
                      onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                      placeholder="e.g. 18 Oceanfront Parade, Coastline"
                      className={`w-full px-3.5 py-2.5 bg-black border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                        formErrors.propertyAddress ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {formErrors.propertyAddress && (
                      <p className="text-xs text-red-400 mt-1">{formErrors.propertyAddress}</p>
                    )}
                  </div>

                  {/* Wireframe Submit Button matching reference */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Project for On-Site Diagnostic</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center">
                    Demo Mode: Validated client-side flow ready to connect to Onshore Roofing’s direct email or CRM endpoint.
                  </p>
                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 border border-teal-400 text-teal-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif-editorial italic text-2xl text-white">
                      Scope Proposal Received!
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-teal-300">{formData.fullName}</strong>. Your project for <span className="text-white">{calculatedScope.effectiveAreaSqm} m²</span> of <span className="text-white">{MATERIAL_SPECS[materialId].name}</span> has been logged.
                    </p>
                  </div>

                  <div className="p-4 bg-black border border-white/10 text-left text-xs space-y-1.5 font-mono text-neutral-300">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Reference:</span>
                      <span className="text-teal-400">ONSHORE-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Location:</span>
                      <span>{formData.propertyAddress}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Indicative Band:</span>
                      <span className="text-teal-300">{calculatedScope.indicativeBand}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white py-2 uppercase tracking-wider"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Configure Another Scope</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
