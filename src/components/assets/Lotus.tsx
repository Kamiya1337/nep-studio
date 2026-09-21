import React from 'react';
import { motion } from 'motion/react';

interface LotusProps {
  className?: string;
  size?: number;
}

export const LotusSingle: React.FC<LotusProps> = ({ className = '', size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="lotusPetalPink" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C84F66" />
        <stop offset="45%" stopColor="#E58D9C" />
        <stop offset="100%" stopColor="#F9ECEF" />
      </linearGradient>
      <linearGradient id="lotusOuterPetal" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B63E56" />
        <stop offset="60%" stopColor="#D97A8C" />
        <stop offset="100%" stopColor="#FAF2F4" />
      </linearGradient>
    </defs>

    {/* Outer background petals */}
    <path
      d="M60 25C48 38 42 55 45 72C52 75 68 75 75 72C78 55 72 38 60 25Z"
      fill="url(#lotusOuterPetal)"
      fillOpacity="0.85"
    />
    <path
      d="M38 38C28 50 26 65 35 78C42 80 50 78 54 74C46 62 45 48 38 38Z"
      fill="url(#lotusOuterPetal)"
      fillOpacity="0.75"
    />
    <path
      d="M82 38C92 50 94 65 85 78C78 80 70 78 66 74C74 62 75 48 82 38Z"
      fill="url(#lotusOuterPetal)"
      fillOpacity="0.75"
    />

    {/* Mid petals */}
    <path
      d="M48 44C38 56 38 72 48 85C56 87 64 86 68 82C58 70 56 56 48 44Z"
      fill="url(#lotusPetalPink)"
    />
    <path
      d="M72 44C82 56 82 72 72 85C64 87 56 86 52 82C62 70 64 56 72 44Z"
      fill="url(#lotusPetalPink)"
    />

    {/* Foreground center petal */}
    <path
      d="M60 40C52 52 50 70 55 86C58 88 62 88 65 86C70 70 68 52 60 40Z"
      fill="#FCEEF1"
      stroke="#D97A8C"
      strokeWidth="0.8"
    />

    {/* Center golden yellow stamen / nhụy sen vàng */}
    <ellipse cx="60" cy="80" rx="6" ry="3.5" fill="#E8B042" />
    <circle cx="58" cy="79" r="0.8" fill="#B38025" />
    <circle cx="62" cy="79" r="0.8" fill="#B38025" />
    <circle cx="60" cy="81" r="0.8" fill="#B38025" />
  </svg>
);

export const LotusLeaf: React.FC<LotusProps> = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="lotusLeafGrad" x1="20%" y1="20%" x2="80%" y2="80%">
        <stop offset="0%" stopColor="#4A806E" />
        <stop offset="60%" stopColor="#2D6353" />
        <stop offset="100%" stopColor="#183E34" />
      </linearGradient>
    </defs>
    {/* Curled wide jade lotus leaf */}
    <path
      d="M80 60C50 30 18 45 8 72C-2 98 25 118 75 116C125 114 158 92 152 64C146 36 110 30 80 60Z"
      fill="url(#lotusLeafGrad)"
      fillOpacity="0.85"
    />
    {/* Veins / Gân lá sen */}
    <path
      d="M80 60C60 45 35 48 20 62M80 60C55 65 30 75 22 92M80 60C65 80 55 98 62 108M80 60C95 82 115 95 132 98M80 60C110 70 135 65 144 54M80 60C100 45 118 42 130 45"
      stroke="#79AE9D"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeOpacity="0.65"
    />
    {/* Curled rim accent */}
    <path
      d="M8 72C2 85 8 98 22 108"
      stroke="#103128"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
  </svg>
);

export const LotusCluster: React.FC<LotusProps> = ({ className = '', size = 220 }) => (
  <div className={`relative inline-block ${className}`} style={{ width: size, height: size * 0.75 }}>
    {/* Base Leaf 1 */}
    <div className="absolute -left-4 bottom-0 z-0">
      <LotusLeaf size={size * 0.7} />
    </div>
    {/* Secondary smaller leaf */}
    <div className="absolute right-0 bottom-2 z-0 opacity-75">
      <LotusLeaf size={size * 0.55} />
    </div>
    {/* Unopened lotus bud */}
    <div className="absolute left-6 top-2 z-10">
      <svg width={size * 0.22} height={size * 0.35} viewBox="0 0 40 60" fill="none">
        <path d="M20 58V32" stroke="#2D6353" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M20 10C12 18 10 26 15 34C18 36 22 36 25 34C30 26 28 18 20 10Z"
          fill="#D97A8C"
        />
        <path d="M20 10C16 16 16 24 20 32C24 24 24 16 20 10Z" fill="#F8E5E9" />
      </svg>
    </div>
    {/* Main Blossom */}
    <div className="absolute left-14 bottom-4 z-20">
      <LotusSingle size={size * 0.55} />
    </div>
  </div>
);

export const LotusHeroForeground: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 420,
}) => {
  const width = size;
  const height = size * 0.78;

  return (
    <div className={`relative pointer-events-none select-none ${className}`} style={{ width, height }}>
      {/* Background large curled jade lotus leaf spreading left with slow floating drift */}
      <motion.div
        className="absolute -left-12 bottom-0 z-10 opacity-90"
        animate={{
          y: [0, -5, 1, 0],
          x: [0, -2, 1, 0],
          rotate: [-12, -10.5, -13, -12],
        }}
        transition={{
          duration: 9.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <LotusLeaf size={size * 0.68} />
      </motion.div>

      {/* Main anchoring wide jade leaf on right edge with gentle organic water drift */}
      <motion.div
        className="absolute right-2 bottom-0 z-20"
        animate={{
          y: [0, 4, -2.5, 0],
          x: [0, 2, -1.5, 0],
          rotate: [6, 7.5, 5, 6],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
      >
        <LotusLeaf size={size * 0.75} />
      </motion.div>

      {/* Tender tall lotus bud rising on stem */}
      <motion.div
        className="absolute left-[36%] bottom-16 z-25"
        animate={{
          rotate: [-6, -4.5, -7, -6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <svg width={size * 0.16} height={size * 0.38} viewBox="0 0 50 110" fill="none">
          <path d="M24 110 C 22 75, 26 45, 25 28" stroke="#235242" strokeWidth="2.5" strokeLinecap="round" />
          {/* Lotus bud petals */}
          <path
            d="M25 6 C 14 18, 12 28, 18 38 C 22 41, 28 41, 32 38 C 38 28, 36 18, 25 6 Z"
            fill="#D97A8C"
          />
          <path
            d="M25 6 C 20 14, 20 26, 25 36 C 30 26, 30 14, 25 6 Z"
            fill="#FBE7EB"
          />
        </svg>
      </motion.div>

      {/* Secondary smaller lotus flower blooming behind */}
      <motion.div
        className="absolute left-[14%] bottom-6 z-20 scale-85 opacity-90"
        animate={{
          y: [0, -3, 1.5, 0],
          rotate: [-12, -10.5, -13, -12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <LotusSingle size={size * 0.42} />
      </motion.div>

      {/* Primary exquisite open lotus blossom in foreground */}
      <motion.div
        className="absolute right-[22%] bottom-3 z-30 drop-shadow-sm"
        animate={{
          y: [0, -2, 1, 0],
          rotate: [-3, -1.8, -3.8, -3],
        }}
        transition={{
          duration: 10.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      >
        <LotusSingle size={size * 0.54} />
      </motion.div>
    </div>
  );
};

