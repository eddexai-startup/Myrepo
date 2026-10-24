import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, FileUp, Shield, Clock } from 'lucide-react';
import { ROOFING_SERVICES } from '../data/roofingData';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [service, setService] = useState('standing-seam');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [message, setMessage] = useState('');
  const [fileSimulated, setFileSimulated] = useState<string | null>(null);

  const [errors, setErrors] = useState<{ fullName?: string; contactInfo?: string; propertyAddress?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!fullName.trim()) newErrors.fullName = 'Please enter your name.';
    if (!contactInfo.trim()) newErrors.contactInfo = 'Please enter an email or phone number.';
    if (!propertyAddress.trim()) newErrors.propertyAddress = 'Please specify the project location.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleSimulateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileSimulated(e.target.files[0].name);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-t border-white/10 relative text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 font-sans">
              Get In Touch
            </div>

            <h2 className="font-serif-editorial italic font-normal text-3xl sm:text-5xl text-white tracking-normal leading-[1.15]">
              begin your architectural roof consultation
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
              Whether undertaking a private coastal new build, replacing compromised corrugated iron, or seeking a 4K drone roof inspection, our technical team prepares a complete scope dossier.
            </p>

            {/* Quality & Response Protocol Card */}
            <div className="p-5 border border-white/15 bg-neutral-900 space-y-3 font-sans">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
                <Clock className="w-4 h-4 text-teal-400" /> Rapid Technical Response
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                All consultations are reviewed by senior sheetmetal technicians. We schedule on-site photogrammetry diagnostics within 48 hours for urgent coastal inquiries.
              </p>
              <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5" /> Licensed &amp; Insured Craftsmanship
              </div>
            </div>

            {/* Service Coverage Points */}
            <div className="space-y-3 pt-2 text-xs text-neutral-300 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Complimentary 4K Drone Photogrammetry Assessment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Site-Specific Marine Atmospheric Wind &amp; Salinity Evaluation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Fixed-Price Structural Sheetmetal Specification Deck</span>
              </div>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-neutral-900 p-6 sm:p-8 border border-white/15 shadow-2xl font-sans">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="font-serif-editorial italic text-2xl text-white">
                    Request an On-Site Diagnostic
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono">* Required fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Full Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                      }}
                      placeholder="e.g. Marcus Thorne"
                      className={`w-full px-3.5 py-2.5 bg-black border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                        errors.fullName ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email / Phone */}
                  <div>
                    <label htmlFor="contact-contactInfo" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email or Phone Number <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="contact-contactInfo"
                      type="text"
                      value={contactInfo}
                      onChange={(e) => {
                        setContactInfo(e.target.value);
                        if (errors.contactInfo) setErrors((prev) => ({ ...prev, contactInfo: undefined }));
                      }}
                      placeholder="e.g. marcus@residence.com"
                      className={`w-full px-3.5 py-2.5 bg-black border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                        errors.contactInfo ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {errors.contactInfo && <p className="text-xs text-red-400 mt-1">{errors.contactInfo}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Primary Service Requirement
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-sm text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                    >
                      {ROOFING_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Property Location */}
                  <div>
                    <label htmlFor="contact-propertyAddress" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Property Location / Suburb <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="contact-propertyAddress"
                      type="text"
                      value={propertyAddress}
                      onChange={(e) => {
                        setPropertyAddress(e.target.value);
                        if (errors.propertyAddress) setErrors((prev) => ({ ...prev, propertyAddress: undefined }));
                      }}
                      placeholder="e.g. Ocean Ridge Estate"
                      className={`w-full px-3.5 py-2.5 bg-black border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                        errors.propertyAddress ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {errors.propertyAddress && <p className="text-xs text-red-400 mt-1">{errors.propertyAddress}</p>}
                  </div>
                </div>

                {/* Architectural Plans Attachment Simulator */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Attach Architectural Plans or Roof Photos (Optional)
                  </label>
                  <label className="flex items-center justify-between px-3.5 py-2.5 bg-black border border-white/15 border-dashed hover:border-white/40 cursor-pointer text-xs text-neutral-400">
                    <span className="flex items-center gap-2">
                      <FileUp className="w-4 h-4 text-teal-400" />
                      {fileSimulated ? fileSimulated : 'Choose PDF plans, DWG or image files...'}
                    </span>
                    <input type="file" className="hidden" onChange={handleSimulateFile} />
                    <span className="text-[10px] text-teal-300 font-bold uppercase tracking-wider">Browse</span>
                  </label>
                </div>

                {/* Brief Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300 mb-1">
                    Project Notes or Specific Ingress Issues
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details (e.g. current leak locations, salt corrosion, desire for standing seam zinc)..."
                    className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  />
                </div>

                {/* Wireframe Submit button matching reference */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Consultation Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 border border-teal-400 text-teal-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-editorial italic text-2xl text-white">
                  Consultation Request Dispatched!
                </h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-teal-300">{fullName}</strong>. Your enquiry for <span className="text-white">{propertyAddress}</span> has been logged. Our diagnostic engineering team will contact you within 24–48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-teal-400 hover:underline uppercase tracking-wider"
                >
                  Send Another Enquiry
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
