import React from 'react';

/**
 * Premium Brand Wordmark & Emblem for Parvat Valley Resort, Pushkar.
 * Designed with heritage hospitality aesthetics (inspired by Aman, Oberoi, Six Senses).
 * Replaces the old circular PV monogram with an elegant, timeless typography and minimal mountain horizon line.
 */
export default function BrandLogo({ variant = 'light', size = 'md', className = '' }) {
  // Color configuration depending on background context
  const isDark = variant === 'dark'; // on light bg (e.g., ivory)
  const isGold = variant === 'gold';

  const primaryColor = isDark ? '#10291E' : isGold ? '#B99A62' : '#F8F6F0';
  const accentColor = '#B99A62';
  const subtitleColor = isDark ? '#183D2B' : '#E8DFCF';

  // Size configurations
  const scaleConfig = {
    sm: {
      height: 38,
      titleSize: 'text-sm sm:text-base',
      subSize: 'text-[8px] sm:text-[9px]',
      tracking: 'tracking-[0.24em]',
      subTracking: 'tracking-[0.32em]',
      gap: 'gap-0.5',
    },
    md: {
      height: 48,
      titleSize: 'text-lg sm:text-xl',
      subSize: 'text-[9px] sm:text-[10px]',
      tracking: 'tracking-[0.28em]',
      subTracking: 'tracking-[0.36em]',
      gap: 'gap-1',
    },
    lg: {
      height: 60,
      titleSize: 'text-2xl sm:text-3xl',
      subSize: 'text-[11px] sm:text-xs',
      tracking: 'tracking-[0.32em]',
      subTracking: 'tracking-[0.4em]',
      gap: 'gap-1.5',
    },
  }[size] || scaleConfig.md;

  return (
    <div className={`inline-flex flex-col items-center select-none text-center ${scaleConfig.gap} ${className}`}>
      {/* Minimalist Mountain Ridge & Sun Horizon Emblem */}
      <svg
        width={size === 'sm' ? '28' : size === 'lg' ? '44' : '36'}
        height={size === 'sm' ? '12' : size === 'lg' ? '18' : '15'}
        viewBox="0 0 48 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-95 transition-opacity"
        aria-hidden="true"
      >
        {/* Central rising sun / horizon focal point */}
        <circle cx="24" cy="7" r="2.2" fill={accentColor} />
        {/* Subtle geometric Aravalli mountain apex with clean horizontal horizon wings */}
        <path
          d="M2 17H16L24 7L32 17H46"
          stroke={accentColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Second soft inner ridge line */}
        <path
          d="M19 17L24 11L29 17"
          stroke={accentColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.65"
        />
      </svg>

      {/* Main Brand Wordmark */}
      <span
        className={`font-serif font-semibold uppercase leading-none ${scaleConfig.titleSize} ${scaleConfig.tracking}`}
        style={{ color: primaryColor }}
      >
        PARVAT VALLEY
      </span>

      {/* Supporting Subtitle with Balanced Hairline Rules */}
      <div className="flex items-center justify-center w-full gap-2 mt-0.5">
        <span className="h-[1px] w-3 sm:w-5 bg-gradient-to-r from-transparent to-[#B99A62]/60" />
        <span
          className={`font-sans font-medium uppercase leading-none ${scaleConfig.subSize} ${scaleConfig.subTracking}`}
          style={{ color: subtitleColor }}
        >
          RESORT &middot; PUSHKAR
        </span>
        <span className="h-[1px] w-3 sm:w-5 bg-gradient-to-l from-transparent to-[#B99A62]/60" />
      </div>
    </div>
  );
}
