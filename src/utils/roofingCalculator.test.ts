import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEstimatedScope, validateQuoteForm, PITCH_MULTIPLIERS, MATERIAL_SPECS } from './roofingCalculator';

test('PITCH_MULTIPLIERS correctly handles low, medium, steep, and complex roof slopes', () => {
  assert.equal(PITCH_MULTIPLIERS.low, 1.05);
  assert.equal(PITCH_MULTIPLIERS.medium, 1.15);
  assert.equal(PITCH_MULTIPLIERS.steep, 1.30);
  assert.equal(PITCH_MULTIPLIERS.complex, 1.45);
});

test('calculateEstimatedScope computes accurate effective area, squares, and craft timeline', () => {
  const result = calculateEstimatedScope({
    propertyType: 'architectural-modern',
    roofPitch: 'medium',
    materialId: 'standing-seam-zinc',
    estimatedAreaSqm: 200,
    urgency: 'planning-30d',
  });

  // 200 * 1.15 = 230 effective sqm
  assert.equal(result.effectiveAreaSqm, 230);
  assert.equal(result.pitchMultiplier, 1.15);
  // Squares approx 230 / 9.2903 = 24.8
  assert.ok(result.squares >= 24 && result.squares <= 25);
  assert.ok(result.estimatedDays > 5);
  assert.match(result.marineGradeRating, /C5/);
  assert.match(result.indicativeBand, /\$/);
});

test('calculateEstimatedScope clamps bounds on anomalous roof square meter inputs', () => {
  const smallResult = calculateEstimatedScope({
    propertyType: 'residential-coastal',
    roofPitch: 'low',
    materialId: 'marine-coated-steel',
    estimatedAreaSqm: 5, // below minimum 30
    urgency: 'planning-quarter',
  });
  assert.equal(smallResult.effectiveAreaSqm, Math.round(30 * 1.05));

  const hugeResult = calculateEstimatedScope({
    propertyType: 'commercial-industrial',
    roofPitch: 'low',
    materialId: 'elastomeric-coating',
    estimatedAreaSqm: 99999, // above 2500 max
    urgency: 'immediate',
  });
  assert.equal(hugeResult.effectiveAreaSqm, Math.round(2500 * 1.05));
});

test('validateQuoteForm catches missing and invalid contact inputs', () => {
  const emptyValidation = validateQuoteForm({});
  assert.ok(emptyValidation.fullName, 'Should require full name');
  assert.ok(emptyValidation.contactMethod, 'Should require contact method');
  assert.ok(emptyValidation.propertyAddress, 'Should require property address');
  assert.ok(emptyValidation.serviceCategory, 'Should require service category');

  const invalidContact = validateQuoteForm({
    fullName: 'David Sterling',
    contactMethod: 'not-valid',
    propertyAddress: '14 Shoreline Esplanade',
    serviceCategory: 'standing-seam',
  });
  assert.ok(invalidContact.contactMethod, 'Should reject invalid email/phone');

  const validEmail = validateQuoteForm({
    fullName: 'David Sterling',
    contactMethod: 'david@coastalarch.com',
    propertyAddress: '14 Shoreline Esplanade',
    serviceCategory: 'standing-seam',
  });
  assert.equal(Object.keys(validEmail).length, 0, 'Valid email submission should have no errors');

  const validPhone = validateQuoteForm({
    fullName: 'Sarah Vance',
    contactMethod: '+61 412 890 234',
    propertyAddress: '88 Headland Rise',
    serviceCategory: 'coastal-replacement',
  });
  assert.equal(Object.keys(validPhone).length, 0, 'Valid phone submission should have no errors');
});
