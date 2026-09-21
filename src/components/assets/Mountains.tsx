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

export const MountainHeroWatercolor: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 1,
}) => (
  <svg
    viewBox="0 0 1000 680"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
    className={`w-full h-auto ${className}`}
    style={{ opacity }}
  >
    <defs>
      {/* Distant soft jade ridge gradient */}
      <linearGradient id="heroFarMountain" x1="40%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#A4C4B5" stopOpacity="0.45" />
        <stop offset="50%" stopColor="#C2D8CD" stopOpacity="0.3" />
        <stop offset="90%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>

      {/* Mid mountain ink-wash gradient */}
      <linearGradient id="heroMidMountain" x1="30%" y1="0%" x2="60%" y2="100%">
        <stop offset="0%" stopColor="#315B4C" stopOpacity="0.75" />
        <stop offset="35%" stopColor="#4A7B69" stopOpacity="0.6" />
        <stop offset="70%" stopColor="#7DA695" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>

      {/* Foreground deep ink slope */}
      <linearGradient id="heroForeMountain" x1="60%" y1="20%" x2="40%" y2="100%">
        <stop offset="0%" stopColor="#14382B" stopOpacity="0.88" />
        <stop offset="40%" stopColor="#1D4B3B" stopOpacity="0.75" />
        <stop offset="75%" stopColor="#326351" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>

      {/* Soft mist ribbon gradient */}
      <linearGradient id="heroMistGrad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#FAF7F0" stopOpacity="0" />
        <stop offset="25%" stopColor="#FAF7F0" stopOpacity="0.85" />
        <stop offset="70%" stopColor="#FAF7F0" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* 1. Distant High Peaks (Gentle undulating peaks fading into sky) */}
    <path
      d="M120 480 C 220 340, 310 260, 440 220 C 560 180, 640 240, 750 180 C 840 130, 910 170, 1000 200 V 680 H 120 Z"
      fill="url(#heroFarMountain)"
    />

    {/* Distant secondary crest */}
    <path
      d="M280 430 C 370 310, 480 280, 560 310 C 640 340, 720 280, 820 240 C 900 210, 960 250, 1000 280 V 680 H 280 Z"
      fill="url(#heroFarMountain)"
      opacity="0.7"
    />

    {/* 2. Soft horizontal mist ribbon between distant and mid */}
    <path
      d="M50 440 C 250 410, 500 460, 750 420 C 880 400, 960 430, 1000 420 V 490 C 850 510, 600 470, 400 500 C 200 530, 100 470, 50 440 Z"
      fill="url(#heroMistGrad)"
    />

    {/* 3. Midground Majestic Mountain Peak (Painterly organic ink silhouette) */}
    <path
      d="M220 680 C 260 560, 340 480, 430 430 C 510 390, 560 410, 620 350 C 680 290, 740 270, 810 290 C 890 320, 940 420, 1000 460 V 680 H 220 Z"
      fill="url(#heroMidMountain)"
    />

    {/* Midground organic ink wash contour accents */}
    <path
      d="M480 440 C 540 410, 620 380, 670 420 C 720 450, 770 420, 820 400 C 870 380, 930 440, 970 480"
      stroke="#285041"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeOpacity="0.45"
      fill="none"
    />

    {/* 4. Translucent sweeping mist ribbon */}
    <path
      d="M180 560 C 350 500, 550 550, 780 490 C 890 460, 960 490, 1000 480 V 550 C 850 570, 650 540, 450 580 C 300 610, 220 580, 180 560 Z"
      fill="url(#heroMistGrad)"
    />

    {/* 5. Foreground Deep Ink Wash Mountain Slope */}
    <path
      d="M380 680 C 450 590, 540 540, 650 520 C 740 500, 830 520, 910 480 C 960 460, 990 470, 1000 480 V 680 H 380 Z"
      fill="url(#heroForeMountain)"
    />

    {/* Base mist grounding the bottom */}
    <rect x="0" y="600" width="1000" height="80" fill="url(#heroMistGrad)" opacity="0.9" />
  </svg>
);

