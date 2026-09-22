import React from 'react';

interface MountainLayerProps {
  className?: string;
  opacity?: number;
}

export const MountainBack: React.FC<MountainLayerProps> = ({ className = '', opacity = 1 }) => (
  <svg
    viewBox="0 0 1440 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={`w-full h-auto ${className}`}
    style={{ opacity }}
  >
    <defs>
      <linearGradient id="backMountainGrad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#C4DDD2" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#D9EBE2" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="backPeakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3D3C5" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#CBE3D9" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    {/* Far background peaks */}
    <path
      d="M0 320C90 280 180 230 280 210C360 195 440 235 520 205C610 170 700 240 810 190C920 140 1020 220 1140 175C1250 135 1350 200 1440 210V400H0V320Z"
      fill="url(#backMountainGrad)"
    />
    {/* Additional high soft peak */}
    <path
      d="M200 240C260 190 320 170 380 190C450 210 520 250 560 260C480 260 300 270 200 240Z"
      fill="url(#backPeakGrad)"
    />
    <path
      d="M960 210C1040 150 1120 130 1180 160C1230 185 1280 220 1320 240C1200 245 1060 235 960 210Z"
      fill="url(#backPeakGrad)"
    />
  </svg>
);

export const MountainMid: React.FC<MountainLayerProps> = ({ className = '', opacity = 1 }) => (
  <svg
    viewBox="0 0 1440 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={`w-full h-auto ${className}`}
    style={{ opacity }}
  >
    <defs>
      <linearGradient id="midMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5E8F7E" stopOpacity="0.65" />
        <stop offset="50%" stopColor="#7DAE9D" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#EBF4EE" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="midMistGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Mid-range watercolor mountains with painterly contours */}
    <path
      d="M0 380C110 330 210 260 320 250C430 240 510 310 630 280C750 250 860 190 970 220C1080 250 1170 320 1280 290C1360 270 1410 285 1440 300V450H0V380Z"
      fill="url(#midMountainGrad)"
    />
    <path
      d="M260 260C330 220 400 215 470 240C540 265 600 320 630 330C520 330 380 300 260 260Z"
      fill="#4E7E6E"
      fillOpacity="0.3"
    />
    <path
      d="M850 220C920 170 990 185 1060 215C1120 240 1190 280 1220 300C1110 310 970 280 850 220Z"
      fill="#4E7E6E"
      fillOpacity="0.35"
    />
    {/* Soft mist pocket at base */}
    <rect x="0" y="340" width="1440" height="110" fill="url(#midMistGrad)" />
  </svg>
);

export const MountainBackLayer: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.85,
}) => (
  <svg
    viewBox="0 0 1000 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
    className={`w-full h-auto ${className}`}
    style={{ opacity }}
  >
    <defs>
      <filter id="inkBleedBack" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <linearGradient id="backRidgeWash" x1="45%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#87B0A0" stopOpacity="0.55" />
        <stop offset="35%" stopColor="#A4C7B8" stopOpacity="0.4" />
        <stop offset="70%" stopColor="#C9E0D6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="backFarPeak" x1="30%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#6C9B8A" stopOpacity="0.5" />
        <stop offset="50%" stopColor="#9ECAA" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Far soft undulating crests with watercolor bleed */}
    <g filter="url(#inkBleedBack)">
      <path
        d="M60 360 C 180 240, 290 170, 420 140 C 530 115, 620 170, 720 125 C 820 85, 910 120, 1000 150 V 500 H 60 Z"
        fill="url(#backFarPeak)"
      />
      <path
        d="M220 340 C 330 220, 460 200, 560 230 C 650 255, 740 200, 840 170 C 920 145, 970 180, 1000 200 V 500 H 220 Z"
        fill="url(#backRidgeWash)"
        opacity="0.8"
      />
    </g>
  </svg>
);

export const MountainMidLayer: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.92,
}) => (
  <svg
    viewBox="0 0 1000 550"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
    className={`w-full h-auto ${className}`}
    style={{ opacity }}
  >
    <defs>
      <filter id="inkBleedMid" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <linearGradient id="midMountainWash" x1="35%" y1="0%" x2="60%" y2="100%">
        <stop offset="0%" stopColor="#255142" stopOpacity="0.85" />
        <stop offset="25%" stopColor="#366655" stopOpacity="0.75" />
        <stop offset="55%" stopColor="#558C7A" stopOpacity="0.45" />
        <stop offset="85%" stopColor="#82B3A1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="midCrestAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1B4235" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#386A58" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    {/* Painterly midground peaks */}
    <g filter="url(#inkBleedMid)">
      <path
        d="M140 550 C 200 420, 280 340, 380 290 C 470 245, 540 275, 610 215 C 680 155, 750 140, 830 160 C 900 180, 960 260, 1000 310 V 550 H 140 Z"
        fill="url(#midMountainWash)"
      />
      {/* Organic ink ridge texture */}
      <path
        d="M380 295 C 440 260, 520 280, 580 230 C 640 180, 710 160, 770 175 C 830 190, 890 250, 950 290"
        stroke="url(#midCrestAccent)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M480 330 C 530 290, 600 310, 660 270 C 720 230, 780 240, 830 260"
        stroke="#1A3E31"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </g>
  </svg>
);

export const MountainFgLayer: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.95,
}) => (
  <svg
    viewBox="0 0 1000 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
    className={`w-full h-auto ${className}`}
    style={{ opacity }}
  >
    <defs>
      <filter id="inkBleedFg" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <linearGradient id="fgMountainWash" x1="55%" y1="10%" x2="35%" y2="100%">
        <stop offset="0%" stopColor="#0B261D" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#153C2E" stopOpacity="0.85" />
        <stop offset="70%" stopColor="#2A5948" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Deep foreground ink slope rising on right */}
    <g filter="url(#inkBleedFg)">
      <path
        d="M260 500 C 350 400, 460 330, 590 300 C 690 275, 790 290, 880 240 C 940 210, 980 230, 1000 240 V 500 H 260 Z"
        fill="url(#fgMountainWash)"
      />
      {/* Painterly dry-brush contour */}
      <path
        d="M590 305 C 680 280, 770 295, 850 250 C 910 220, 960 235, 990 245"
        stroke="#061A13"
        strokeWidth="3.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
    </g>
  </svg>
);

export const MistRibbonLayer: React.FC<{ className?: string; variant?: 1 | 2; opacity?: number }> = ({
  className = '',
  variant = 1,
  opacity = 0.75,
}) => (
  <svg
    viewBox="0 0 1000 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={`w-full h-auto pointer-events-none ${className}`}
    style={{ opacity }}
  >
    <defs>
      <filter id={`mistFilter${variant}`} x="-10%" y="-30%" width="120%" height="160%">
        <feGaussianBlur stdDeviation="7" />
      </filter>
      <linearGradient id={`mistGrad${variant}`} x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#FAF7F0" stopOpacity="0" />
        <stop offset="25%" stopColor="#FAF7F0" stopOpacity="0.9" />
        <stop offset="65%" stopColor="#FAF7F0" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>
    </defs>
    {variant === 1 ? (
      <path
        d="M30 90 C 220 50, 480 120, 720 70 C 860 40, 950 80, 1000 75 V 150 C 850 170, 600 130, 400 160 C 220 180, 100 130, 30 90 Z"
        fill={`url(#mistGrad${variant})`}
        filter={`url(#mistFilter${variant})`}
      />
    ) : (
      <path
        d="M0 80 C 180 120, 420 50, 680 90 C 820 110, 920 60, 1000 80 V 160 C 800 140, 550 170, 350 130 C 180 100, 80 140, 0 80 Z"
        fill={`url(#mistGrad${variant})`}
        filter={`url(#mistFilter${variant})`}
      />
    )}
  </svg>
);

export const MountainHeroWatercolor: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 1,
}) => (
  <div className={`relative w-full h-full ${className}`} style={{ opacity }}>
    <MountainBackLayer className="absolute bottom-0 right-0 w-full" opacity={0.8} />
    <MistRibbonLayer variant={1} className="absolute bottom-[28%] right-0 w-full" opacity={0.85} />
    <MountainMidLayer className="absolute bottom-0 right-0 w-full" opacity={0.92} />
    <MistRibbonLayer variant={2} className="absolute bottom-[14%] right-0 w-full" opacity={0.8} />
    <MountainFgLayer className="absolute bottom-0 right-0 w-full" opacity={0.95} />
    {/* Base grounding mist wash */}
    <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#FAF7F0] via-[#FAF7F0]/80 to-transparent pointer-events-none" />
  </div>
);

