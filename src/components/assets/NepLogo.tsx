import React, { useState } from 'react';
import nepLogoImg from './images/NEP-logo-A-vong-tron-kin.png';

interface NepLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const NepLogo: React.FC<NepLogoProps> = ({
  className = '',
  size = 48,
  showText = false,
  textColor = 'text-[#0E382F]',
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {!imgError ? (
        <img
          src={nepLogoImg}
          alt="NẾP Logo"
          width={size}
          height={size}
          className="shrink-0 object-contain transition-transform duration-500 hover:rotate-6"
          style={{ width: size, height: size }}
          onError={() => setImgError(true)}
        />
      ) : (
        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-500 hover:rotate-6"
        >
          {/* Outer concentric rings */}
          <circle cx="60" cy="60" r="56" stroke="#0E382F" strokeWidth="2.5" strokeOpacity="0.85" />
          <circle cx="60" cy="60" r="51.5" stroke="#0E382F" strokeWidth="1" strokeOpacity="0.4" />
          
          {/* Subtle decorative dot ring */}
          <circle cx="60" cy="60" r="47.5" stroke="#2A6B5B" strokeWidth="0.8" strokeDasharray="2 3" strokeOpacity="0.3" />

          {/* Traditional water waves / sóng thủy ba at bottom */}
          <path
            d="M18 78C26 73 34 73 42 77C50 81 58 81 66 77C74 73 82 73 90 77C96 80 100 81 102 78"
            stroke="#0E382F"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M24 86C32 82 40 82 48 85C56 88 64 88 72 85C80 82 88 82 96 85"
            stroke="#2A6B5B"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />

          {/* Golden/Crimson Sun Disc behind crane */}
          <circle cx="60" cy="52" r="26" fill="#D98A72" fillOpacity="0.22" />

          {/* Stylized Vietnamese Crane / Chim Hạc */}
          {/* Beak & Head */}
          <path d="M42 36L34 38L42 39" stroke="#0E382F" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="43" cy="37.5" r="3.2" fill="#0E382F" />
          <circle cx="43" cy="35.5" r="1.3" fill="#B83A2E" />

          {/* Graceful S-Curved Neck */}
          <path
            d="M45 39C47 43 45 49 49 53C52 56 56 57 58 60"
            stroke="#0E382F"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Body */}
          <ellipse cx="60" cy="62" rx="9" ry="6" fill="#0E382F" />

          {/* Left Wing (Sweeping backwards) */}
          <path
            d="M56 59C51 55 42 54 30 57C32 60 38 63 46 64C51 64 54 62 56 59Z"
            fill="#2A6B5B"
            fillOpacity="0.85"
          />

          {/* Right Wing (Soaring upwards) */}
          <path
            d="M66 43C72 37 80 32 94 28C96 28 95 30 93 32C84 37 77 43 72 48C70 47 67 45 66 43Z"
            fill="#0E382F"
            fillOpacity="0.95"
          />
          <path
            d="M71 47C78 45 86 42 93 40C91 42 84 46 77 49C74 50 72 49 71 47Z"
            fill="#2A6B5B"
            fillOpacity="0.75"
          />

          {/* Trailing Legs */}
          <path d="M64 69L67 82" stroke="#0E382F" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M61 68L63 80" stroke="#0E382F" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.8" />
          
          {/* Auspicious cloud swirl inside seal */}
          <path
            d="M38 34C41 32 45 33 46 35C47 37 45 40 42 40C39 40 38 38 40 36"
            stroke="#82B39E"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )}

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif text-2xl font-bold tracking-[0.25em] ${textColor}`}>
            NẾP
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#55756C]">
            Việt Phục Đương Đại
          </span>
        </div>
      )}
    </div>
  );
};
