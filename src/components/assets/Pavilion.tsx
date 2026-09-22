import React, { useState } from 'react';
import { CranePerched } from './Cranes';
import pavilionImg from './images/vietnamese-pavilion.png';

interface PavilionProps {
  className?: string;
  size?: number;
  showCrane?: boolean;
}

export const VietnamesePavilion: React.FC<PavilionProps> = ({
  className = '',
  size = 320,
  showCrane = true,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: 'auto' }}>
      {/* Perched Crane on the top ridge if SVG mode or supplementary */}
      {showCrane && imgError && (
        <div className="absolute left-[36%] -top-14 z-20 pointer-events-none">
          <CranePerched size={size * 0.32} />
        </div>
      )}

      {!imgError ? (
        <img
          src={pavilionImg}
          alt="Đình Làng Việt Nam"
          className="w-full h-auto object-contain drop-shadow-md transition-opacity duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <svg
          width={size}
          height={size * 0.95}
          viewBox="0 0 300 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E4438" />
              <stop offset="100%" stopColor="#0B261E" />
            </linearGradient>
            <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6E2C24" />
              <stop offset="50%" stopColor="#8F3E33" />
              <stop offset="100%" stopColor="#57211B" />
            </linearGradient>
          </defs>

          {/* Top Pinnacle / Bình hồ lô đỉnh nóc */}
          <path
            d="M150 20C148 24 146 28 147 32C148 36 152 36 153 32C154 28 152 24 150 20Z"
            fill="#C8963E"
          />
          <circle cx="150" cy="18" r="3" fill="#C8963E" />

          {/* Upper Curved Roof Ridge (Đầu đao cong vút đặc trưng Việt Nam) */}
          <path
            d="M150 32C120 34 85 45 40 68C36 70 38 74 44 72C90 52 125 42 150 42C175 42 210 52 256 72C262 74 264 70 260 68C215 45 180 34 150 32Z"
            fill="#C8963E"
            stroke="#5C421A"
            strokeWidth="1"
          />

          {/* Main Upper Roof (Mái thượng lợp ngói âm dương) */}
          <path
            d="M42 70C75 58 115 50 150 50C185 50 225 58 258 70L240 102C200 92 170 88 150 88C130 88 100 92 60 102L42 70Z"
            fill="url(#roofGrad)"
          />

          {/* Eaves curve upward at tips / Đầu đao mái thượng */}
          <path
            d="M42 70C35 68 28 62 25 54C28 64 34 70 42 74"
            stroke="#C8963E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M258 70C265 68 272 62 275 54C272 64 266 70 258 74"
            stroke="#C8963E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Mid wooden tier / Cổ diêm */}
          <rect x="75" y="102" width="150" height="22" fill="#78342B" />
          <rect x="75" y="102" width="150" height="22" stroke="#52221B" strokeWidth="1" />
          {/* Lattice windows / Chấn song con tiện gỗ */}
          <g stroke="#3A1713" strokeWidth="1.2">
            <line x1="95" y1="105" x2="95" y2="121" />
            <line x1="110" y1="105" x2="110" y2="121" />
            <line x1="125" y1="105" x2="125" y2="121" />
            <line x1="140" y1="105" x2="140" y2="121" />
            <line x1="150" y1="105" x2="150" y2="121" />
            <line x1="160" y1="105" x2="160" y2="121" />
            <line x1="175" y1="105" x2="175" y2="121" />
            <line x1="190" y1="105" x2="190" y2="121" />
            <line x1="205" y1="105" x2="205" y2="121" />
          </g>

          {/* Lower Sweeping Roof (Mái hạ) */}
          <path
            d="M20 148C70 128 115 120 150 120C185 120 230 128 280 148L262 174C215 158 175 152 150 152C125 152 85 158 38 174L20 148Z"
            fill="url(#roofGrad)"
          />
          {/* Lower Eaves Curve / Đầu đao mái hạ cong vút */}
          <path
            d="M20 148C12 144 4 135 2 124C5 138 12 147 22 152"
            stroke="#C8963E"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M280 148C288 144 296 135 298 124C295 138 288 147 278 152"
            stroke="#C8963E"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Wooden Pillars / Hệ cột gỗ lim sơn son */}
          <rect x="52" y="172" width="10" height="90" rx="1.5" fill="url(#pillarGrad)" />
          <rect x="105" y="172" width="9" height="90" rx="1.5" fill="url(#pillarGrad)" />
          <rect x="186" y="172" width="9" height="90" rx="1.5" fill="url(#pillarGrad)" />
          <rect x="238" y="172" width="10" height="90" rx="1.5" fill="url(#pillarGrad)" />

          {/* Balustrade / Lan can con tiện */}
          <rect x="48" y="228" width="204" height="6" fill="#78342B" />
          <rect x="48" y="250" width="204" height="5" fill="#78342B" />
          <g stroke="#52221B" strokeWidth="1.5">
            <line x1="68" y1="234" x2="68" y2="250" />
            <line x1="82" y1="234" x2="82" y2="250" />
            <line x1="122" y1="234" x2="122" y2="250" />
            <line x1="138" y1="234" x2="138" y2="250" />
            <line x1="150" y1="234" x2="150" y2="250" />
            <line x1="162" y1="234" x2="162" y2="250" />
            <line x1="174" y1="234" x2="174" y2="250" />
            <line x1="202" y1="234" x2="202" y2="250" />
            <line x1="218" y1="234" x2="218" y2="250" />
            <line x1="230" y1="234" x2="230" y2="250" />
          </g>

          {/* Stone Podium / Thềm đá chân cột */}
          <path
            d="M36 262C40 260 260 260 264 262L270 278H30L36 262Z"
            fill="#44554E"
          />
          <rect x="30" y="274" width="240" height="5" fill="#2E3B36" />
        </svg>
      )}
    </div>
  );
};
