export type PropertyType = 'residential-coastal' | 'architectural-modern' | 'commercial-industrial' | 'strata-multi';

export type RoofPitch = 'low' | 'medium' | 'steep' | 'complex';

export type MaterialId = 'standing-seam-zinc' | 'marine-coated-steel' | 'natural-slate' | 'architectural-copper' | 'elastomeric-coating';

export interface ScopeInput {
  propertyType: PropertyType;
  roofPitch: RoofPitch;
  materialId: MaterialId;
  estimatedAreaSqm: number;
  urgency: 'immediate' | 'planning-30d' | 'planning-quarter';
}

export interface ScopeResult {
  effectiveAreaSqm: number;
  pitchMultiplier: number;
  squares: number;
  estimatedDays: number;
  marineGradeRating: string;
  indicativeBand: string;
  recommendedUnderlayment: string;
  thermalPerformance: string;
}

export interface QuoteFormData {
  fullName: string;
  contactMethod: string;
  propertyAddress: string;
  serviceCategory: string;
  timeline: string;
  notes: string;
}

export interface ValidationErrors {
  fullName?: string;
  contactMethod?: string;
  propertyAddress?: string;
  serviceCategory?: string;
  general?: string;
}

export interface RoofingService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  vulnerabilitySolved: string;
  specifications: string[];
  recommendedMaterials: string[];
  imageUrl: string;
  badge: string;
}

export interface RoofingMaterial {
  id: MaterialId;
  name: string;
  category: string;
  description: string;
  saltResistanceScore: number; // out of 100
  solarReflectanceIndex: number;
  windRating: string;
  typicalLifespan: string;
  aestheticNotes: string;
  swatchColors: { name: string; hex: string; code: string }[];
  imageUrl: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'Architectural Metal' | 'Coastal Residential' | 'Protective Restoration' | 'Commercial & Engineering';
  scope: string;
  material: string;
  imageUrl: string;
  highlights: string[];
  aspectRatio?: string;
}
