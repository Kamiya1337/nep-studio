import React, { useState } from 'react';
import { CultureGuardPoint } from '../../types';
import garmentWashImg from './images/garment-wash.png';

interface NguThanGarmentProps {
  className?: string;
  paletteColors?: string[];
  activeGuardPoint?: string | null;
  onSelectGuardPoint?: (pointId: string) => void;
  showGuardPoints?: boolean;
  size?: number;
  garmentStyle?: 'ngu-than' | 'giao-linh' | 'ao-tac';
  useWashImage?: boolean;
}

export const NguThanGarment: React.FC<NguThanGarmentProps> = ({
  className = '',
  paletteColors = ['#0A3830', '#1D5347', '#7CAE9B', '#D0E6C5'],
  activeGuardPoint = null,
  onSelectGuardPoint,
  showGuardPoints = false,
  size = 460,
  garmentStyle = 'ngu-than',
  useWashImage = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const primaryColor = paletteColors[1] || '#1D5347';
  const deepColor = paletteColors[0] || '#0A3830';
  const lightColor = paletteColors[2] || '#7CAE9B';
  const softColor = paletteColors[3] || '#D0E6C5';

  if (useWashImage && !imgError) {
    return (
      <div
        className={`relative select-none flex items-center justify-center ${className}`}
        style={{ width: size, height: 'auto' }}
      >
        <img
          src={garmentWashImg}
          alt="Áo Ngũ Thân Màu Nước"
          className="w-full h-auto object-contain drop-shadow-lg max-h-[580px]"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size * 1.35 }}
    >
      <svg
        width={size}
        height={size * 1.35}
        viewBox="0 0 400 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Main Robe Gradient */}
          <linearGradient id="robeBodyGrad" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor={lightColor} stopOpacity="0.95" />
            <stop offset="45%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={deepColor} />
          </linearGradient>

          {/* Right Flap / Vạt đắp Gradient */}
          <linearGradient id="flapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={lightColor} stopOpacity="0.9" />
            <stop offset="70%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={deepColor} />
          </linearGradient>

          {/* Sleeve Gradient */}
          <linearGradient id="sleeveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={lightColor} />
            <stop offset="60%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={deepColor} />
          </linearGradient>

          {/* Silk Sheen / Ánh lụa */}
          <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
          </linearGradient>

          {/* White Trousers Gradient */}
          <linearGradient id="trouserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F7F5F0" />
            <stop offset="100%" stopColor="#E5DFD5" />
          </linearGradient>
        </defs>

        {/* 1. White Silk Trousers (Quần lụa tuyết trắng rủ suông) */}
        <g id="trousers">
          {/* Left leg */}
          <path
            d="M168 360L150 495C150 500 178 502 188 497L194 360Z"
            fill="url(#trouserGrad)"
            stroke="#D6CEBF"
            strokeWidth="0.8"
          />
          {/* Right leg */}
          <path
            d="M206 360L212 497C222 502 250 500 250 495L232 360Z"
            fill="url(#trouserGrad)"
            stroke="#D6CEBF"
            strokeWidth="0.8"
          />
          {/* Traditional Cloth Shoes / Hài nhung đen */}
          <ellipse cx="168" cy="498" rx="16" ry="6" fill="#1C1F1D" />
          <ellipse cx="232" cy="498" rx="16" ry="6" fill="#1C1F1D" />
        </g>

        {/* 2. Main Garment Flowing Skirt / Vạt dưới suông */}
        <path
          d="M136 210C130 270 120 340 108 420C140 435 200 440 260 435C282 340 272 270 264 210Z"
          fill="url(#robeBodyGrad)"
          stroke={deepColor}
          strokeWidth="1.2"
        />
        {/* Silk Drape Shadows / Nếp rủ lụa */}
        <path
          d="M175 220C170 290 166 360 162 432"
          stroke={deepColor}
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <path
          d="M225 220C230 290 234 360 238 432"
          stroke={deepColor}
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* 3. Sleeves */}
        {garmentStyle === 'ao-tac' ? (
          /* Wide Ceremonial Sleeves / Áo tấc thụng tay */
          <g id="wide-sleeves">
            {/* Left Wide Sleeve */}
            <path
              d="M142 120C110 126 60 138 25 152C15 210 20 275 60 295C85 270 120 220 138 210Z"
              fill="url(#sleeveGrad)"
              stroke={deepColor}
              strokeWidth="1"
            />
            {/* Right Wide Sleeve */}
            <path
              d="M258 120C290 126 340 138 375 152C385 210 380 275 340 295C315 270 280 220 262 210Z"
              fill="url(#sleeveGrad)"
              stroke={deepColor}
              strokeWidth="1"
            />
          </g>
        ) : (
          /* Fitted Sleeves / Tay chẽn kinh điển */
          <g id="fitted-sleeves">
            {/* Left Sleeve */}
            <path
              d="M142 120C115 130 80 155 58 190C66 195 78 198 84 192C104 165 125 145 140 140Z"
              fill="url(#sleeveGrad)"
              stroke={deepColor}
              strokeWidth="1"
            />
            <ellipse cx="68" cy="192" rx="12" ry="5" transform="rotate(-30 68 192)" fill={softColor} fillOpacity="0.35" stroke={deepColor} strokeWidth="0.8" />
            
            {/* Right Sleeve */}
            <path
              d="M258 120C285 130 320 155 342 190C334 195 322 198 316 192C296 165 275 145 260 140Z"
              fill="url(#sleeveGrad)"
              stroke={deepColor}
              strokeWidth="1"
            />
            <ellipse cx="332" cy="192" rx="12" ry="5" transform="rotate(30 332 192)" fill={softColor} fillOpacity="0.35" stroke={deepColor} strokeWidth="0.8" />
          </g>
        )}

        {/* 4. Upper Bodice & Overlapping Panels (Vạt đắp & 5 thân) */}
        {garmentStyle === 'giao-linh' ? (
          /* Giao lĩnh - Crossed Collar */
          <g id="giao-linh-collar">
            <path
              d="M144 118L190 85C196 90 204 90 210 85L256 118L240 220L160 220Z"
              fill="url(#robeBodyGrad)"
            />
            {/* Left cross lapel */}
            <path
              d="M188 88L245 190L230 220L160 115Z"
              fill="url(#flapGrad)"
              stroke={deepColor}
              strokeWidth="1.2"
            />
          </g>
        ) : (
          /* Ngũ thân lập lĩnh - Standard 5-panel standing collar */
          <g id="ngu-than-panels">
            {/* Main torso */}
            <path
              d="M142 120L190 94C196 98 204 98 210 94L258 120C255 150 252 180 248 215L152 215C148 180 145 150 142 120Z"
              fill="url(#robeBodyGrad)"
            />

            {/* Overlapping Curved Flap (Vạt cả uốn lượn sang sườn hữu) */}
            <path
              d="M200 96C200 115 204 130 218 145C232 160 242 175 244 215L254 215C252 175 242 155 228 140C215 125 210 110 208 96Z"
              fill="url(#flapGrad)"
              stroke={deepColor}
              strokeWidth="1.2"
            />

            {/* Subtle diagonal seam lines of the 5 panels */}
            <path
              d="M218 145L160 215"
              stroke={deepColor}
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity="0.45"
            />
          </g>
        )}

        {/* 5. Cổ lập lĩnh (Stand Collar) & Cổ trong lót trắng (Trung đơn) */}
        <g id="collar">
          {/* Inner white collar line (Cổ áo lót trắng/trung đơn bên trong) */}
          <path
            d="M186 86C186 78 214 78 214 86L210 94C204 92 196 92 190 94Z"
            fill="#FFFFFF"
            stroke="#DDD5C7"
            strokeWidth="0.8"
          />

          {/* Outer high standing collar (Cổ đứng lập lĩnh cao 2–3cm) */}
          <path
            d="M188 88C188 77 212 77 212 88L208 98C202 96 198 96 192 98Z"
            fill={deepColor}
            stroke="#B58F54"
            strokeWidth="1"
          />
          {/* Gold or jade trim button at collar */}
          <circle cx="200" cy="85" r="2.2" fill="#D4AF6E" stroke="#523912" strokeWidth="0.6" />
        </g>

        {/* 6. Ngũ khuy (5 traditional buttons along right collar & chest) */}
        <g id="five-buttons">
          {/* Button 1: At Collar (Cổ áo) */}
          <circle cx="207" cy="94" r="2.8" fill="#C8963E" stroke="#4A3412" strokeWidth="0.8" />
          {/* Button 2: Upper breast flap (Góc nách hữu) */}
          <circle cx="216" cy="116" r="2.8" fill="#C8963E" stroke="#4A3412" strokeWidth="0.8" />
          {/* Button 3: Mid-chest (Chính ngực) */}
          <circle cx="225" cy="138" r="2.8" fill="#C8963E" stroke="#4A3412" strokeWidth="0.8" />
          {/* Button 4: Lower ribs (Mạn sườn) */}
          <circle cx="236" cy="165" r="2.8" fill="#C8963E" stroke="#4A3412" strokeWidth="0.8" />
          {/* Button 5: Waist band (Cạnh eo) */}
          <circle cx="244" cy="198" r="2.8" fill="#C8963E" stroke="#4A3412" strokeWidth="0.8" />
        </g>

        {/* 7. Bội ngọc (Carved Jade Tassel hanging from waist) */}
        <g id="boi-ngoc" transform="translate(242, 210)">
          {/* Silk cord */}
          <line x1="0" y1="0" x2="3" y2="25" stroke="#B83A3A" strokeWidth="1.5" strokeLinecap="round" />
          {/* Jade pendant */}
          <circle cx="4" cy="30" r="8" fill="#82B39E" stroke="#1D5347" strokeWidth="1.2" />
          {/* Lotus carving on jade */}
          <circle cx="4" cy="30" r="4.5" stroke="#FAF7F2" strokeWidth="0.8" strokeOpacity="0.8" />
          {/* Red/Gold Silk Tassel fringes */}
          <path d="M4 38L1 65M4 38L4 68M4 38L7 65" stroke="#C23B22" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* 8. Culture Guard Interactive Hotspots (Scene 07) */}
        {showGuardPoints && (
          <g id="culture-guard-hotspots">
            {/* Point 1: Cổ lập lĩnh (x: 200, y: 92) */}
            <g
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => onSelectGuardPoint?.('co-lap-linh')}
            >
              <circle
                cx="200"
                cy="92"
                r={activeGuardPoint === 'co-lap-linh' ? 14 : 10}
                fill={activeGuardPoint === 'co-lap-linh' ? '#C23B22' : '#0E382F'}
                fillOpacity="0.9"
                className="animate-pulse"
              />
              <circle cx="200" cy="92" r="4" fill="#FFFFFF" />
            </g>

            {/* Point 2: Vạt ngũ thân (x: 185, y: 260) */}
            <g
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => onSelectGuardPoint?.('vat-ngu-than')}
            >
              <circle
                cx="185"
                cy="260"
                r={activeGuardPoint === 'vat-ngu-than' ? 14 : 10}
                fill={activeGuardPoint === 'vat-ngu-than' ? '#C23B22' : '#0E382F'}
                fillOpacity="0.9"
                className="animate-pulse"
              />
              <circle cx="185" cy="260" r="4" fill="#FFFFFF" />
            </g>

            {/* Point 3: Ngũ khuy (x: 228, y: 140) */}
            <g
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => onSelectGuardPoint?.('ngu-khuy')}
            >
              <circle
                cx="228"
                cy="140"
                r={activeGuardPoint === 'ngu-khuy' ? 14 : 10}
                fill={activeGuardPoint === 'ngu-khuy' ? '#C23B22' : '#0E382F'}
                fillOpacity="0.9"
                className="animate-pulse"
              />
              <circle cx="228" cy="140" r="4" fill="#FFFFFF" />
            </g>

            {/* Point 4: Tay chẽn (x: 325, y: 190) */}
            <g
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => onSelectGuardPoint?.('tay-chen')}
            >
              <circle
                cx="325"
                cy="190"
                r={activeGuardPoint === 'tay-chen' ? 14 : 10}
                fill={activeGuardPoint === 'tay-chen' ? '#C23B22' : '#0E382F'}
                fillOpacity="0.9"
                className="animate-pulse"
              />
              <circle cx="325" cy="190" r="4" fill="#FFFFFF" />
            </g>

            {/* Point 5: Lụa tơ tằm (x: 200, y: 390) */}
            <g
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => onSelectGuardPoint?.('chat-lieu-lua')}
            >
              <circle
                cx="200"
                cy="390"
                r={activeGuardPoint === 'chat-lieu-lua' ? 14 : 10}
                fill={activeGuardPoint === 'chat-lieu-lua' ? '#C23B22' : '#0E382F'}
                fillOpacity="0.9"
                className="animate-pulse"
              />
              <circle cx="200" cy="390" r="4" fill="#FFFFFF" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
