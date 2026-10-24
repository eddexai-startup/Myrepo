import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = true,
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-slate-900';
  const subColor = isLight ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Stepped Geometric Shingle Emblem inspired by the reference design */}
      <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 36 36"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stepped overlapping shingles / cross elements in bright teal/cyan */}
          {/* Top-left step */}
          <rect x="4" y="6" width="10" height="6" rx="1.5" fill="#14b8a6" />
          {/* Center-left step */}
          <rect x="9" y="11" width="10" height="6" rx="1.5" fill="#2dd4bf" />
          {/* Center step */}
          <rect x="14" y="16" width="10" height="6" rx="1.5" fill="#0d9488" />
          {/* Center-right step */}
          <rect x="19" y="21" width="10" height="6" rx="1.5" fill="#14b8a6" />
          {/* Bottom-right step */}
          <rect x="24" y="26" width="8" height="5" rx="1.5" fill="#2dd4bf" />
          {/* Interlocking vertical anchor bars */}
          <rect x="15" y="5" width="6" height="10" rx="1.5" fill="#2dd4bf" opacity="0.9" />
          <rect x="15" y="22" width="6" height="10" rx="1.5" fill="#0f766e" />
        </svg>
      </div>

      {/* Brand Wordmark matching reference aesthetic */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`font-serif-editorial italic font-extrabold text-2xl tracking-tight uppercase leading-none ${textColor}`}>
            Onshore
          </span>
        </div>
        {showTagline && (
          <span className={`text-[9px] tracking-[0.28em] uppercase font-bold text-slate-300 mt-1 font-sans`}>
            Roofing Co
          </span>
        )}
      </div>
    </div>
  );
};
