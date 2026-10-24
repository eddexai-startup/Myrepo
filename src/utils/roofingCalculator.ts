import { ScopeInput, ScopeResult, QuoteFormData, ValidationErrors, MaterialId } from '../types';

export const PITCH_MULTIPLIERS: Record<string, number> = {
  low: 1.05,       // 5°-15° pitch
  medium: 1.15,    // 16°-30° pitch
  steep: 1.30,     // 31°-45° pitch
  complex: 1.45,   // Multi-hip, dormers, valleys
};

export const MATERIAL_SPECS: Record<MaterialId, {
  name: string;
  marineGradeRating: string;
  sqmPriceMin: number;
  sqmPriceMax: number;
  laborFactor: number;
  underlayment: string;
  thermal: string;
}> = {
  'standing-seam-zinc': {
    name: '0.70mm Architectural Zinc (Standing Seam)',
    marineGradeRating: 'Ultra-High (C5 Marine Classified)',
    sqmPriceMin: 220,
    sqmPriceMax: 320,
    laborFactor: 1.4,
    underlayment: 'Self-Adhered Vapor-Permeable High-Temp Acoustic Underlay',
    thermal: 'High Thermal Radiation / SRI 78 with ventilated cavity',
  },
  'marine-coated-steel': {
    name: 'Marine-Grade Ultra Coated Steel (0.55mm BMT)',
    marineGradeRating: 'Superior Coastal Protection (ISO 9223 C4/C5)',
    sqmPriceMin: 140,
    sqmPriceMax: 195,
    laborFactor: 1.0,
    underlayment: 'Breathable Heavy-Duty Thermofoil Membrane with 75mm Air Gap',
    thermal: 'Thermally reflective pigments, Solar Absorption < 0.35',
  },
  'natural-slate': {
    name: 'Natural Hand-Split Welsh Slate (500x250mm)',
    marineGradeRating: 'Impervious to Salt Spray & Acid Rain',
    sqmPriceMin: 280,
    sqmPriceMax: 410,
    laborFactor: 1.8,
    underlayment: 'Double-Layered Bituminous Slate Underlayment & Copper Nails',
    thermal: 'Exceptional thermal mass inertia, neutral expansion',
  },
  'architectural-copper': {
    name: 'Architectural Standing-Seam Nordic Copper',
    marineGradeRating: 'Permanent Living Patina Shield (100+ Year Durability)',
    sqmPriceMin: 340,
    sqmPriceMax: 480,
    laborFactor: 1.6,
    underlayment: 'Structural Drainage Mat with High-Temp Synthetic Substrate',
    thermal: 'Low Emissivity with full convective ridge venting',
  },
  'elastomeric-coating': {
    name: 'Nano-Ceramic Hydro-Barrier Protective Membrane',
    marineGradeRating: 'Seamless Salt-Barrier Shield (Restoration Class)',
    sqmPriceMin: 65,
    sqmPriceMax: 95,
    laborFactor: 0.6,
    underlayment: 'Direct Chemical Primer & Micro-Fiber Reinforced Seam Mesh',
    thermal: 'SRI 104 Ultra-Cool Roof, rejects 92% of coastal solar infrared',
  },
};

/**
 * Calculates estimated effective roofing scope, craft duration, and material parameters.
 */
export function calculateEstimatedScope(input: ScopeInput): ScopeResult {
  const baseArea = Math.max(30, Math.min(2500, Number(input.estimatedAreaSqm) || 180));
  const pitchMult = PITCH_MULTIPLIERS[input.roofPitch] || 1.15;
  const effectiveArea = Math.round(baseArea * pitchMult);
  const squares = Math.round((effectiveArea / 9.2903) * 10) / 10; // 1 roofing square ≈ 100 sq ft ≈ 9.29 sqm

  const mat = MATERIAL_SPECS[input.materialId] || MATERIAL_SPECS['marine-coated-steel'];

  // Calculate estimated artisan craft days based on area and complexity
  const baseDays = Math.ceil((effectiveArea / 35) * mat.laborFactor);
  const urgencyBuffer = input.urgency === 'immediate' ? 0.85 : 1.0;
  const estimatedDays = Math.max(2, Math.round(baseDays * urgencyBuffer));

  // Indicative band formatting (for proposal budgeting guidance, not fixed contract)
  const costMin = Math.round((effectiveArea * mat.sqmPriceMin) / 1000) * 1000;
  const costMax = Math.round((effectiveArea * mat.sqmPriceMax) / 1000) * 1000;
  const indicativeBand = `$${costMin.toLocaleString()} – $${costMax.toLocaleString()} (Indicative Range)`;

  return {
    effectiveAreaSqm: effectiveArea,
    pitchMultiplier: pitchMult,
    squares,
    estimatedDays,
    marineGradeRating: mat.marineGradeRating,
    indicativeBand,
    recommendedUnderlayment: mat.underlayment,
    thermalPerformance: mat.thermal,
  };
}

/**
 * Validates a quote or consultation enquiry form.
 */
export function validateQuoteForm(formData: Partial<QuoteFormData>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name or company representative.';
  }

  if (!formData.contactMethod || formData.contactMethod.trim().length < 5) {
    errors.contactMethod = 'Please provide a valid email or direct telephone number.';
  } else {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactMethod.trim());
    const isPhone = /^[\d\s+\-()]{7,20}$/.test(formData.contactMethod.trim());
    if (!isEmail && !isPhone) {
      errors.contactMethod = 'Enter a valid email address or phone number (e.g. name@domain.com or 0412 345 678).';
    }
  }

  if (!formData.propertyAddress || formData.propertyAddress.trim().length < 3) {
    errors.propertyAddress = 'Please specify the property address or coastal location.';
  }

  if (!formData.serviceCategory) {
    errors.serviceCategory = 'Please select a primary roofing service category.';
  }

  return errors;
}
