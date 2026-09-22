import React from 'react';
import { motion } from 'motion/react';
import cranePerchedImg from './images/crane-perched-v2.png';
import craneDetailImg from './images/crane-detail.png';

interface CraneProps {
  className?: string;
  animate?: boolean;
  size?: number;
  flip?: boolean;
}

export const CraneFlying: React.FC<CraneProps> = ({
  className = '',
  animate = true,
  size = 180,
  flip = false,
}) => {
  const content = (
    <svg
      width={size}
      height={size * 0.72}
      viewBox="0 0 240 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-sm ${flip ? '-scale-x-100' : ''}`}
    >
      <defs>
        <linearGradient id="craneBodyGrad" x1="20%" y1="20%" x2="80%" y2="80%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F5EFE6" />
          <stop offset="100%" stopColor="#E4DCD0" />
        </linearGradient>
        <linearGradient id="craneFeatherJade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A6B5B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0E382F" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Trailing Legs */}
      <path
        d="M60 115L15 148M66 117L22 154"
        stroke="#4A3B32"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Main Body */}
      <path
        d="M75 110C95 105 125 90 148 76C158 70 170 60 185 45C195 35 204 26 215 18C217 16 220 18 219 20C215 26 205 40 195 50C182 63 162 78 145 90C125 104 95 115 75 110Z"
        fill="url(#craneBodyGrad)"
        stroke="#D5CBC0"
        strokeWidth="0.8"
      />

      {/* Crane Neck & Head */}
      <path
        d="M185 45C198 32 208 22 222 14C225 12 228 14 227 17C224 21 216 32 208 42C195 56 182 65 170 72"
        fill="#FDFCFA"
      />
      {/* Black throat streak */}
      <path
        d="M214 19C210 24 204 32 198 40C190 50 180 60 170 68"
        stroke="#1F2421"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Vermilion Crown (Mào đỏ son đặc trưng của chim hạc) */}
      <ellipse cx="224" cy="13" rx="3.5" ry="2.2" transform="rotate(-25 224 13)" fill="#C23B22" />

      {/* Slender Beak */}
      <path d="M226 14.5L238 12" stroke="#5C4D3C" strokeWidth="1.6" strokeLinecap="round" />

      {/* Eye */}
      <circle cx="223" cy="14.5" r="0.8" fill="#1F2421" />

      {/* Upper Wing (Broad soaring wings with layered plumage) */}
      <g>
        {/* Ivory base feathers */}
        <path
          d="M110 88C115 70 125 45 138 22C140 18 143 19 143 23C142 36 138 55 130 75C125 88 118 94 110 88Z"
          fill="#FAF7F2"
        />
        {/* Mid plumage with jade watercolor tint */}
        <path
          d="M122 75C130 52 142 30 156 12C158 9 161 11 160 14C156 30 148 52 138 72Z"
          fill="#82B39E"
          fillOpacity="0.5"
        />
        {/* Ink-wash primary flight feathers (Long black tips) */}
        <path
          d="M130 70C142 45 158 24 175 8C177 6 179 8 178 11C172 26 160 50 145 68C148 52 165 30 185 14C187 12 189 15 187 18C178 35 165 58 150 72C156 58 175 38 195 24C197 22 199 25 197 28C186 46 170 70 155 76"
          fill="url(#craneFeatherJade)"
        />
      </g>

      {/* Lower Wing (Trailing below body) */}
      <g>
        <path
          d="M90 98C85 110 75 125 55 142C53 144 51 142 53 140C66 125 76 112 85 96Z"
          fill="#FAF7F2"
        />
        <path
          d="M86 102C80 118 68 135 48 152C46 154 44 151 46 149C60 132 72 118 80 102C75 118 60 138 38 158C36 160 34 157 36 155C50 138 65 120 74 105"
          fill="url(#craneFeatherJade)"
        />
      </g>

      {/* Delicate Tail Feathers */}
      <path
        d="M75 110C68 115 60 120 50 124C48 125 47 123 49 122C58 117 66 112 72 108"
        stroke="#0E382F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (!animate) {
    return <div className={className}>{content}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 0, x: 0 }}
      animate={{
        y: [-4, 6, -4],
        x: [-2, 3, -2],
        rotate: [-0.5, 1, -0.5],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {content}
    </motion.div>
  );
};

export const CraneDetail: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 180,
}) => {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <img
        src={craneDetailImg}
        alt="Chi Tiết Thủy Mặc Hạc Tiên"
        className="w-full h-full object-contain drop-shadow-sm rounded-lg"
      />
    </div>
  );
};

export const CranePerched: React.FC<CraneProps> = ({ className = '', size = 140 }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: 'auto' }}>
      {!imgError ? (
        <img
          src={cranePerchedImg}
          alt="Hạc Đậu"
          className="w-full h-auto object-contain drop-shadow-sm"
          onError={() => setImgError(true)}
        />
      ) : (
        <svg
          width={size}
          height={size * 1.3}
          viewBox="0 0 120 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stone / Roof perch mount */}
          <path
            d="M20 145C35 140 65 138 95 142C105 144 110 150 105 155C80 158 35 158 15 152C12 148 15 145 20 145Z"
            fill="#3A4A43"
            fillOpacity="0.4"
          />

          {/* Slender Legs */}
          <path d="M54 105L52 144M64 105L66 144" stroke="#4A3E34" strokeWidth="2" strokeLinecap="round" />
          <path d="M52 144L47 148M66 144L72 148" stroke="#4A3E34" strokeWidth="1.8" strokeLinecap="round" />

          {/* Perched Body */}
          <path
            d="M48 60C45 75 48 95 60 108C70 105 78 95 78 80C78 68 72 55 60 48C52 52 49 56 48 60Z"
            fill="#FFFFFF"
            stroke="#D5CDC2"
            strokeWidth="0.8"
          />

          {/* Folded Wing with deep ink green and jade tips */}
          <path
            d="M52 64C50 78 54 94 65 106C68 100 70 88 68 76C66 65 60 58 52 64Z"
            fill="#2A6B5B"
            fillOpacity="0.3"
          />
          <path
            d="M56 72C55 86 60 102 70 114C72 108 72 95 68 84C65 74 61 70 56 72Z"
            fill="#0E382F"
          />

          {/* Elegant S-curved Neck */}
          <path
            d="M60 48C62 38 66 28 62 18C60 13 55 10 52 14C50 16 52 22 55 30C57 38 54 44 50 50"
            fill="#FFFFFF"
          />
          <path
            d="M58 46C60 38 63 28 60 20C58 16 54 13 52 15"
            stroke="#1F2421"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Head, Beak & Red Crown */}
          <ellipse cx="50" cy="11" rx="2.5" ry="1.6" fill="#C23B22" />
          <circle cx="51" cy="13" r="0.7" fill="#1F2421" />
          <path d="M49 14L38 17" stroke="#4A3E34" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
};
