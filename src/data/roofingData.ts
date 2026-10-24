import { RoofingService, RoofingMaterial, GalleryProject } from '../types';

export const ROOFING_SERVICES: RoofingService[] = [
  {
    id: 'standing-seam',
    number: '01',
    title: 'Architectural Standing Seam & Metal Systems',
    tagline: 'Precision engineered continuous sheetmetal with zero external penetrations',
    description: 'Bespoke mechanical-lock standing seam roofing in architectural zinc, marine-grade steel, and copper. Fabricated to millimeter tolerances to ensure complete watertight integrity across expansive coastal rooflines.',
    vulnerabilitySolved: 'Eliminates exposed screw penetrations and fastener corrosion, which represent 85% of coastal roof leaks under high cyclonic wind pressure.',
    specifications: [
      'Double-lock 25mm & 38mm standing seam profiles',
      'Non-penetrative concealed stainless sliding clips',
      'Continuous thermal expansion accommodation',
      'AS/NZS 1562 & ASTM E1592 certified wind uplift engineering'
    ],
    recommendedMaterials: ['0.70mm Architectural Zinc', 'Colorbond Ultra / Marine 5052 Alloy', 'Nordic Copper'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    badge: 'Flagship System'
  },
  {
    id: 'coastal-replacement',
    number: '02',
    title: 'Coastal Structural Re-Roofing & Replacement',
    tagline: 'Complete stripping, timber inspection, tie-down reinforcement and new roof envelope',
    description: 'Transforming deteriorating, tired, or salt-compromised roofs into fortified architectural crowns. From asbestos/tile conversions to modern high-tensile metal profiles with engineered acoustic insulation.',
    vulnerabilitySolved: 'Replaces rusted batten screws, cracked tiles, and sagging rafters before water ingress causes hidden structural framing rot.',
    specifications: [
      'Complete strip-out & environmentally certified recycling',
      'Timber purlin & tie-down structural reinforcement to C4/C5',
      'Heavy-duty 75mm anti-condensation foil blanket',
      'Precision acoustic dampening underlayment'
    ],
    recommendedMaterials: ['Colorbond Ultra High-Tensile', '0.70mm Zinc Profile', 'Welsh Architectural Slate'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Structural Replacement'
  },
  {
    id: 'protective-coatings',
    number: '03',
    title: 'Marine Shield Hydro-Barrier Protective Coatings',
    tagline: 'Nano-ceramic elastomeric membranes for high-exposure oceanfront properties',
    description: 'A multi-tier restoration system engineered specifically for salt-corroded metal and porous tile roofs. High-pressure washing, rust conversion, seam reinforcement, and high-build solar-reflective coatings.',
    vulnerabilitySolved: 'Arrests coastal salt-pitting and oxidation, sealing microscopic tile fissures and cooling internal roof cavities by up to 18°C.',
    specifications: [
      '5000 PSI rotating turbo-nozzle descaling & fungal eradication',
      'Chemical rust converter & zinc-rich corrosion inhibitor primer',
      'Reinforced geotextile membrane across all lap joints & ridges',
      'Dual-coat 100% acrylic nano-ceramic elastomeric topcoat'
    ],
    recommendedMaterials: ['Nano-Ceramic Elastomeric Shield', 'Fluoropolymer Marine Topcoat'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    badge: 'Restoration & Life Extension'
  },
  {
    id: 'custom-flashing',
    number: '04',
    title: 'Precision Flashing, Valley & Parapet Engineering',
    tagline: 'Custom hand-formed transitions where water velocity is highest',
    description: 'Roof failures rarely occur on the open plane—they occur at transitions, dormers, chimneys, and parapets. We custom-brake every flashing on site or in-shop to match the architectural profile precisely.',
    vulnerabilitySolved: 'Prevents capillary water draw and wind-driven rain backing up beneath parapet caps and complex roof junctions.',
    specifications: [
      'Bespoke box guttering engineered for 1-in-100 year storm intensity',
      'Continuous soft-zinc and lead-free coastal aprons',
      'Folded kick-out diverters to keep water clear of facade claddings',
      'Concealed counter-flashing with expansion relief joints'
    ],
    recommendedMaterials: ['0.8mm Marine Aluminum', '0.7mm Titanium Zinc', '0.6mm Grade 316 Stainless Steel'],
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
    badge: 'Architectural Detailing'
  },
  {
    id: 'slate-heritage',
    number: '05',
    title: 'Natural Slate & Architectural Tile Craft',
    tagline: 'Authentic stone craftsmanship designed to span generations',
    description: 'Specialist restoration and new installation of imported natural Welsh, Spanish, and Canadian slates. Secured with pure copper or marine-grade stainless fixings designed to survive 100+ years of coastal exposure.',
    vulnerabilitySolved: 'Replaces brittle failing tiles and decayed wire ties with structural copper clips and ventilated slate battening.',
    specifications: [
      'Uniform hand-split grading & sorting for pitch-perfect alignment',
      'Solid copper annular ring-shank nails',
      'Lead or copper hip ridges with hand-welded soakers',
      'Independent structural load verification'
    ],
    recommendedMaterials: ['Welsh Penrhyn Slate', 'Spanish Heavyweight Natural Slate', 'Terracotta Shingle'],
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Heritage & Legacy'
  },
  {
    id: 'drainage-gutters',
    number: '06',
    title: 'High-Capacity Drainage & Rainwater Craft',
    tagline: 'Engineered hydraulic management for torrential coastal downpours',
    description: 'Seamless half-round, quad, and custom internal box gutters sized to handle maximum rainfall intensity without overflow into eaves. Complete with leaf-shedding guards and marine-grade downpipes.',
    vulnerabilitySolved: 'Prevents overflowing gutters from flooding ceiling cavities and undermining exterior coastal foundation footings.',
    specifications: [
      'Hydraulically sized flow calculations per square metre of catchment',
      '150mm & 200mm high-flow half-round gutter profiles',
      'External overflow weirs preventing ceiling cavity back-flooding',
      'Grade 316 stainless steel fascia brackets'
    ],
    recommendedMaterials: ['Seamless Extruded Aluminum', 'Colorbond Ultra Steel', 'Solid Copper Half-Round'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    badge: 'Hydraulic Systems'
  }
];

export const ROOFING_MATERIALS: RoofingMaterial[] = [
  {
    id: 'standing-seam-zinc',
    name: '0.70mm Architectural Zinc',
    category: 'Premium Architectural Metal',
    description: 'A self-healing, noble natural metal that develops an elegant protective carbonate patina. Unmatched aesthetic distinction and extraordinary longevity in harsh coastal salt-air environments.',
    saltResistanceScore: 98,
    solarReflectanceIndex: 78,
    windRating: 'Certified for Extreme Cyclonic Up-lift (Wind Region C/D)',
    typicalLifespan: '80 – 100+ Years',
    aestheticNotes: 'Crisp, contemporary shadow lines with natural mineral depth and zero paint peeling.',
    swatchColors: [
      { name: 'Quartz Grey', hex: '#68727A', code: 'ZINC-QZ' },
      { name: 'Anthra Charcoal', hex: '#2A2E33', code: 'ZINC-ANT' },
      { name: 'Natural Pre-weathered', hex: '#889196', code: 'ZINC-NAT' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'marine-coated-steel',
    name: 'Marine-Grade Ultra Coated Steel',
    category: 'High-Tensile Coastal Steel',
    description: 'Engineered specifically for properties within 100 to 400 metres of crashing surf. Formulated with magnesium-aluminum-zinc alloy and thick sacrificial primer to resist aggressive salt spray.',
    saltResistanceScore: 94,
    solarReflectanceIndex: 72,
    windRating: 'High-Tensile G550 Yield Strength (> 4.8 kPa)',
    typicalLifespan: '40 – 60 Years',
    aestheticNotes: 'Sleek, satin finish available in iconic coastal hues with superior colour retention.',
    swatchColors: [
      { name: 'Coastal Monument', hex: '#323438', code: 'STEEL-MON' },
      { name: 'Deep Ocean Blue', hex: '#1C2E3D', code: 'STEEL-OCN' },
      { name: 'Surfmist Crisp', hex: '#E2E4DE', code: 'STEEL-SRF' },
      { name: 'Dune Sand', hex: '#BAAF9E', code: 'STEEL-DUN' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'natural-slate',
    name: 'Natural Hand-Split Welsh Slate',
    category: 'Organic Metamorphic Stone',
    description: 'Extracted from ancient geological beds, naturally impervious to atmospheric acids, salt spray, and extreme temperature fluctuations. A timeless luxury hallmark for coastal mansions and heritage estates.',
    saltResistanceScore: 100,
    solarReflectanceIndex: 65,
    windRating: 'Double-fixed copper clips tested to > 200 km/h wind shear',
    typicalLifespan: '100 – 150+ Years',
    aestheticNotes: 'Rich natural cleft texture with subtle blue-grey and heather-purple tonal variations.',
    swatchColors: [
      { name: 'Penrhyn Blue-Grey', hex: '#4B5563', code: 'SLATE-PEN' },
      { name: 'Cwt-y-Bugail Dark', hex: '#1E242B', code: 'SLATE-DRK' },
      { name: 'Heather Purple', hex: '#4A3B4E', code: 'SLATE-HTH' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'architectural-copper',
    name: 'Architectural Standing-Seam Nordic Copper',
    category: 'Prestige Living Metal',
    description: 'The definitive pinnacle of roofing craftsmanship. Evolves over decades from polished bronze to deep chocolate brown, and finally to a historic verdigris green patina impervious to corrosive sea breezes.',
    saltResistanceScore: 99,
    solarReflectanceIndex: 82,
    windRating: 'Fully interlocked continuous seams for maximum wind resistance',
    typicalLifespan: '120+ Years',
    aestheticNotes: 'Dynamic living surface that breathes with the coastal atmosphere.',
    swatchColors: [
      { name: 'Burnished Bronze', hex: '#8B5A2B', code: 'COP-BRZ' },
      { name: 'Pre-Patinated Brown', hex: '#4A3222', code: 'COP-BRN' },
      { name: 'Verdigris Green', hex: '#52796F', code: 'COP-VER' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'elastomeric-coating',
    name: 'Nano-Ceramic Hydro-Barrier Membrane',
    category: 'Protective Liquid Polymer',
    description: 'An advanced liquid-applied 4-coat membrane engineered with microscopic ceramic spheres. Reflects 92% of coastal solar infrared radiation while establishing a flexible seamless watertight envelope.',
    saltResistanceScore: 92,
    solarReflectanceIndex: 104,
    windRating: 'Fully adhered monolithic membrane with zero blow-off potential',
    typicalLifespan: '15 – 25 Years (Re-coatable)',
    aestheticNotes: 'Ultra-clean satin architectural finish that refreshes tired tile or metal roofs.',
    swatchColors: [
      { name: 'Brilliant Solar White', hex: '#F8FAFC', code: 'MEM-WHT' },
      { name: 'Harbor Slate', hex: '#475569', code: 'MEM-SLT' },
      { name: 'Coastal Pewter', hex: '#94A3B8', code: 'MEM-PWT' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Pacific Horizon Residence',
    category: 'Architectural Metal',
    scope: '420 m² Standing-Seam Zinc & Concealed Box Gutters',
    material: '0.70mm Titanium Zinc (Quartz Grey)',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlights: ['5° Low-pitch coastal pavilion design', 'Zero exposed fasteners against ocean gale winds', 'Integrated custom zinc fascia transitions']
  },
  {
    id: 'proj-2',
    title: 'Headland Point Coastal Estate',
    category: 'Coastal Residential',
    scope: '360 m² Complete Tile-to-Metal Conversion',
    material: 'Marine-Grade Ultra Steel (Coastal Monument)',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Structural timber batten tie-down reinforcement', '75mm acoustic thermal blanket installation', 'Overland storm-water diverters']
  },
  {
    id: 'proj-3',
    title: 'Bayside Ocean Pavilion',
    category: 'Architectural Metal',
    scope: '580 m² Custom Nordic Copper Gables & Flat Seam Entry',
    material: 'Standing-Seam Nordic Copper (Pre-Patinated)',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Bespoke artisan radius curved eaves', 'Direct marine exposure within 50m of coastline', 'Lifetime maintenance-free patina cycle']
  },
  {
    id: 'proj-4',
    title: 'Salt Spray Hydro-Barrier Restoration',
    category: 'Protective Restoration',
    scope: '310 m² Tile Restoration & Nano-Ceramic Shield',
    material: 'Elastomeric Ceramic Membrane (Harbor Slate)',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    highlights: ['5,000 PSI surface decontamination', '100% seam & valley waterproofing', 'Internal attic temperature reduced by 14°C']
  },
  {
    id: 'proj-5',
    title: 'Cliffside Heritage Villa',
    category: 'Coastal Residential',
    scope: '290 m² Natural Welsh Slate & Solid Copper Valleys',
    material: 'Natural Welsh Penrhyn Slate (500x250mm)',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Copper ring-shank fixings designed for 100+ years', 'Hand-welded lead back-gutters', 'Conservation-grade authentic detail']
  },
  {
    id: 'proj-6',
    title: 'Marina Logistics Commercial Compound',
    category: 'Commercial & Engineering',
    scope: '1,450 m² Industrial Coastal Longspan Re-Roof',
    material: 'Colorbond Ultra Steel with Heavy-Duty G550 Purlins',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Commercial high-capacity box gutter hydraulics', 'Zero business disruption phased staging', 'Full height industrial fall-arrest lifeline system']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: '4K Drone Diagnostics & Thermal Inspection',
    summary: 'High-definition aerial photogrammetry and moisture detection uncover hidden salt corrosion, flashing fatigue, and pitch deficiencies without foot-traffic damage.',
    duration: 'Within 48 Hours',
    deliverable: 'Comprehensive High-Res Inspection Diagnostic Deck'
  },
  {
    step: '02',
    title: 'Coastal Wind & Material Engineering Specification',
    summary: 'We calculate wind uplift loads, thermal movement tolerances, and atmospheric salinity exposure (C3 to C5) to specify the exact metal gauge and underlayment membrane.',
    duration: '2 – 3 Days',
    deliverable: 'Architectural Scope of Works & Transparent Pricing Schedule'
  },
  {
    step: '03',
    title: 'Sub-Structure Reinforcement & Moisture Barrier',
    summary: 'Before new sheeting touches the roof, rafters are leveled, tie-down brackets are inspected, and continuous acoustic and vapor membranes are laid.',
    duration: 'Day 1 – 2 of Works',
    deliverable: 'Certified Structural Sub-Deck & Weatherproof Tie-Down'
  },
  {
    step: '04',
    title: 'Master Sheetmetal Craft & Seam Forming',
    summary: 'Panels are machine-profiled and hand-seamed on site. Every penetration, valley, and ridge junction is mechanically interlocked with zero exposed silicone dependence.',
    duration: 'Main Craft Phase',
    deliverable: 'Continuous Mechanically Interlocked Roof Envelope'
  },
  {
    step: '05',
    title: 'Water Testing, Aerial Handover & Digital Registry',
    summary: 'We conduct simulated torrential water-barrier tests, document the completed roof with final drone passes, and issue the maintenance guide.',
    duration: 'Handover Day',
    deliverable: 'Handover Certificate & Comprehensive Photo Dossier'
  }
];

export const FAQS = [
  {
    question: 'Why does a coastal roof require different materials than an inland property?',
    answer: 'Properties within coastal zones experience airborne salt aerosol, driving onshore winds, and high UV radiation. Standard zinc-galvanized sheeting or thin paint coatings can pit and rust in under 5 to 7 years. Onshore Roofing recommends marine-grade alloys (such as Colorbond Ultra, 5052 Marine Aluminum, Architectural Titanium Zinc, or Natural Slate) paired with stainless steel or nylon-capped fixings to stop galvanic reaction and salt-mist corrosion.'
  },
  {
    question: 'What is the practical difference between screw-fixed corrugated metal and Standing Seam?',
    answer: 'Traditional corrugated metal relies on thousands of exposed hex-head screws driven through rubber washers. Over time in coastal sun and wind, these washers perish, and screw penetrations become vulnerable leak points. Standing Seam uses continuous metal trays with concealed sliding clips underneath. There are no exposed screws on the roof surface, allowing the metal to expand and contract smoothly across changing seasons.'
  },
  {
    question: 'How long does a complete coastal residential re-roof typically take?',
    answer: 'A standard 200m² to 350m² residential re-roof generally takes between 5 to 9 working days, depending on roof pitch, access complexity, and weather conditions. We work in controlled weatherproof sections so your home remains protected at the conclusion of every single workday.'
  },
  {
    question: 'Can you restore and coat an existing weathered roof instead of full replacement?',
    answer: 'Yes, provided the structural steel or roof tiles have not suffered structural perforations or deep structural rot. Our Marine Shield restorative system cleans, applies rust-inhibiting chemical primers, reinforces all laps with elastomeric mesh, and finishes with high-SRI ceramic topcoats that extend life by 15+ years at a fraction of full replacement cost.'
  },
  {
    question: 'What should we consider when choosing roof colors for coastal homes?',
    answer: 'Lighter tones (like Surfmist, Dune, or Quartz Grey) achieve high Solar Reflectance Index (SRI) ratings, bouncing solar heat away and keeping indoor living spaces cooler during summer. Darker tones (like Monument or Anthracite) offer dramatic architectural contrast. Modern marine-grade coatings incorporate cool-pigment chemistry even in deep charcoal tones to balance aesthetics with thermal efficiency.'
  },
  {
    question: 'Is building consent or council approval required for roof replacement?',
    answer: 'In most coastal jurisdictions, replacing like-for-like roofing does not require extensive council permits. However, changing from heavy concrete tiles to lightweight metal (or vice-versa), or altering the roof pitch or structural trusses, often requires engineered tie-down verification. We prepare and verify all engineering tie-down documentation as part of the project specification.'
  }
];

export const DEMO_PROPOSAL_CHECKLIST = [
  {
    category: 'Branding & Identity',
    status: 'Proposed & Ready',
    details: 'Custom Onshore Roofing geometric wordmark, coastal color tokens, typography pairing (Space Grotesk + Plus Jakarta Sans).'
  },
  {
    category: 'Interactive Scope Estimator',
    status: 'Working Prototype',
    details: 'Multi-step estimator calculating effective pitch multipliers, material suitability, craft duration, and direct quote submission.'
  },
  {
    category: 'Material Showcase Studio',
    status: 'Interactive & Functional',
    details: 'Live switcher between Zinc, Marine Steel, Natural Slate, Copper, and Ceramic Coatings with performance metrics.'
  },
  {
    category: 'Business Specifics (To Confirm)',
    status: 'Pending Real Owner Details',
    details: 'Actual official business registration/licence number, primary phone number, email address, physical workshop/depot address, and service territory bounds.'
  },
  {
    category: 'Authentic Project Assets',
    status: 'Ready for Drag-and-Drop',
    details: 'Currently populated with illustrative high-res architectural photography. The gallery is built to directly slot in the company’s genuine job-site photos.'
  },
  {
    category: 'Backend & CRM Integration',
    status: 'Ready for Connection',
    details: 'Forms have full frontend validation and simulated instant feedback, ready to hook into Formspree, HubSpot, ServiceTitan, or an Express email endpoint.'
  }
];
