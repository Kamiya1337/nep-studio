import React from 'react';

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
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
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
        <path
          d="M32 94C40 91 48 91 56 93C64 95 72 95 80 93C86 91 90 91 94 93"
          stroke="#2A6B5B"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />

        {/* Central stylized Vietnamese soaring crane (Chim Hạc) */}
        {/* Body & Tail */}
        <path
          d="M58 64C56 60 55 53 58 46C61 39 65 34 68 28C69 26 70 24 71 22C72 23 74 24 73 26C71 30 68 36 67 42C71 44 76 48 78 54C80 60 76 68 70 70C64 72 59 69 58 64Z"
          fill="#0E382F"
        />
        
        {/* Crane Red Crest / Đỉnh đầu đỏ */}
        <circle cx="72" cy="21" r="2.2" fill="#B83A3A" />

        {/* Slender Beak */}
        <path d="M72 22.5L78 21" stroke="#0E382F" strokeWidth="1.2" strokeLinecap="round" />

        {/* Left Wing (Arching wide and elegant) */}
        <path
          d="M60 48C50 44 38 41 24 45C22 46 23 48 26 49C36 52 46 53 54 55C56 55 59 52 60 48Z"
          fill="#0E382F"
          fillOpacity="0.95"
        />
        <path
          d="M56 54C46 54 36 55 27 58C29 60 38 60 47 59C51 59 54 57 56 54Z"
          fill="#2A6B5B"
          fillOpacity="0.75"
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
