import React from 'react';
import { motion } from 'motion/react';
import inkWashImg from './images/ink-wash-horizontal.png';
import inkBloomImg from './images/ink-bloom.png';

export const MistLayer: React.FC<{ className?: string; speed?: number; opacity?: number }> = ({
  className = '',
  speed = 30,
  opacity = 0.45,
}) => {
  return (
    <div
      className={`absolute inset-x-0 pointer-events-none overflow-hidden h-40 ${className}`}
      style={{ opacity }}
    >
      <motion.div
        className="flex w-[200%] h-full"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-1/2 h-full shrink-0"
        >
          <path
            d="M0 80C180 40 360 120 540 80C720 40 900 120 1080 80C1260 40 1380 90 1440 80V160H0V80Z"
            fill="url(#mistGradient)"
          />
          <defs>
            <linearGradient id="mistGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0" />
              <stop offset="50%" stopColor="#FAF7F2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-1/2 h-full shrink-0"
        >
          <path
            d="M0 80C180 40 360 120 540 80C720 40 900 120 1080 80C1260 40 1380 90 1440 80V160H0V80Z"
            fill="url(#mistGradient2)"
          />
          <defs>
            <linearGradient id="mistGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0" />
              <stop offset="50%" stopColor="#FAF7F2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export const CloudLine: React.FC<{ className?: string; size?: number; type?: 'horizontal' | 'curl' }> = ({
  className = '',
  size = 140,
  type = 'horizontal',
}) => {
  if (type === 'curl') {
    return (
      <svg
        width={size}
        height={size * 0.45}
        viewBox="0 0 120 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M10 42C25 42 35 34 38 24C40 14 52 8 62 12C72 16 75 28 85 30C95 32 105 28 112 34M38 24C34 20 28 22 26 26C24 30 28 34 32 34"
          stroke="#82B39E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.65"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size * 0.3}
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 28C24 18 42 16 58 24C74 32 94 30 110 22C126 14 142 18 152 26M58 24C62 18 70 14 78 16C84 18 86 24 82 28"
        stroke="#82B39E"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
    </svg>
  );
};

export const InkWashHorizontal: React.FC<{ className?: string; width?: string }> = ({
  className = '',
  width = '100%',
}) => {
  const [imgError, setImgError] = React.useState(false);

  return !imgError ? (
    <div className={`overflow-hidden ${className}`} style={{ width, height: 'auto' }}>
      <img
        src={inkWashImg}
        alt="Vệt Mực Thủy Mặc"
        className="w-full h-auto object-contain max-h-12 opacity-85"
        onError={() => setImgError(true)}
      />
    </div>
  ) : (
    <svg
      width={width}
      height="36"
      viewBox="0 0 400 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <linearGradient id="inkWashGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0E382F" stopOpacity="0" />
          <stop offset="20%" stopColor="#1D5347" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#2A6B5B" stopOpacity="0.6" />
          <stop offset="85%" stopColor="#82B39E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0E382F" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 18C40 8 90 26 150 14C210 2 270 24 330 12C360 6 385 15 400 18C370 24 310 16 250 24C190 32 130 14 80 22C40 28 15 22 0 18Z"
        fill="url(#inkWashGrad)"
      />
    </svg>
  );
};

export const InkBloom: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 80,
}) => {
  const [imgError, setImgError] = React.useState(false);

  return !imgError ? (
    <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
      <img
        src={inkBloomImg}
        alt="Điểm Mực Thủy Mặc"
        className="w-full h-full object-contain opacity-75"
        onError={() => setImgError(true)}
      />
    </div>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="40" fill="#2A6B5B" fillOpacity="0.08" />
      <circle cx="52" cy="48" r="28" fill="#1D5347" fillOpacity="0.12" />
      <circle cx="48" cy="52" r="16" fill="#0E382F" fillOpacity="0.18" />
    </svg>
  );
};

export const FloatingLeavesHero: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* 1. Slender Willow / Tea Leaf drifting across mid-mist */}
      <div className="absolute bottom-[28%] right-[38%]">
        <motion.div
          animate={{
            x: [0, 26, 12, -14, 0],
            y: [0, -18, -6, 12, 0],
            rotate: [-22, -8, -32, -15, -22],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width={36} height={18} viewBox="0 0 60 28" fill="none">
            <defs>
              <linearGradient id="heroFloatLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A806E" />
                <stop offset="60%" stopColor="#2A5C4D" />
                <stop offset="100%" stopColor="#153B2F" />
              </linearGradient>
            </defs>
            <path
              d="M2 14 C 18 2, 42 4, 58 14 C 42 24, 18 26, 2 14 Z"
              fill="url(#heroFloatLeaf1)"
              fillOpacity="0.55"
            />
            <path
              d="M3 14 C 20 13, 40 13, 56 14"
              stroke="#8AC1AF"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* 2. Delicate Petite Lotus Pad bobbing on the water/mist */}
      <div className="absolute bottom-[38%] right-[50%]">
        <motion.div
          animate={{
            x: [0, -20, -34, -10, 0],
            y: [0, 15, -14, 9, 0],
            rotate: [12, 26, 8, 20, 12],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2.2,
          }}
        >
          <svg width={42} height={30} viewBox="0 0 50 36" fill="none">
            <defs>
              <linearGradient id="heroFloatPad2" x1="10%" y1="10%" x2="90%" y2="90%">
                <stop offset="0%" stopColor="#558C7A" />
                <stop offset="65%" stopColor="#285647" />
                <stop offset="100%" stopColor="#143A2E" />
              </linearGradient>
            </defs>
            <path
              d="M25 18 C 16 9, 6 13, 3 21 C 0 29, 8 35, 23 34 C 38 33, 48 27, 46 19 C 44 11, 34 9, 25 18 Z"
              fill="url(#heroFloatPad2)"
              fillOpacity="0.45"
            />
            <path
              d="M25 18 C 19 13, 11 14, 6 18 M25 18 C 17 19, 10 23, 7 28 M25 18 C 29 25, 35 29, 40 30 M25 18 C 34 21, 41 20, 44 16"
              stroke="#8AC1AF"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />
          </svg>
        </motion.div>
      </div>

      {/* 3. Soft Floating Petal/Leaf fragment near the mist boundary */}
      <div className="absolute bottom-[20%] right-[58%]">
        <motion.div
          animate={{
            x: [0, 28, 14, -8, 0],
            y: [0, -12, 16, -6, 0],
            rotate: [-6, 16, -4, -18, -6],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4.1,
          }}
        >
          <svg width={28} height={18} viewBox="0 0 40 26" fill="none">
            <defs>
              <linearGradient id="heroFloatPetal3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A806E" />
                <stop offset="50%" stopColor="#326655" />
                <stop offset="100%" stopColor="#1A4237" />
              </linearGradient>
            </defs>
            <path
              d="M3 13 C 12 4, 28 3, 37 13 C 28 23, 12 22, 3 13 Z"
              fill="url(#heroFloatPetal3)"
              fillOpacity="0.48"
            />
            <path
              d="M4 13 C 16 12, 26 12, 35 13"
              stroke="#8AC1AF"
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />
          </svg>
        </motion.div>
      </div>

      {/* 4. Slender Tea Leaf drifting near mid-mountain ridge */}
      <div className="absolute bottom-[34%] right-[24%]">
        <motion.div
          animate={{
            x: [0, -24, -10, 18, 0],
            y: [0, -18, 12, -9, 0],
            rotate: [32, 16, 44, 24, 32],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.2,
          }}
        >
          <svg width={32} height={16} viewBox="0 0 60 28" fill="none">
            <defs>
              <linearGradient id="heroFloatLeaf4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#508674" />
                <stop offset="60%" stopColor="#2E6151" />
                <stop offset="100%" stopColor="#153B2F" />
              </linearGradient>
            </defs>
            <path
              d="M2 14 C 18 2, 42 4, 58 14 C 42 24, 18 26, 2 14 Z"
              fill="url(#heroFloatLeaf4)"
              fillOpacity="0.42"
            />
            <path
              d="M3 14 C 20 13, 40 13, 56 14"
              stroke="#8AC1AF"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />
          </svg>
        </motion.div>
      </div>

      {/* 5. High ambient breeze drifting leaf */}
      <div className="absolute bottom-[48%] right-[32%]">
        <motion.div
          animate={{
            x: [0, 32, -12, 20, 0],
            y: [0, 14, -20, 8, 0],
            rotate: [-16, 9, -28, -4, -16],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3.5,
          }}
        >
          <svg width={24} height={12} viewBox="0 0 60 28" fill="none">
            <defs>
              <linearGradient id="heroFloatLeaf5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#558C7A" />
                <stop offset="60%" stopColor="#306454" />
                <stop offset="100%" stopColor="#184236" />
              </linearGradient>
            </defs>
            <path
              d="M2 14 C 18 2, 42 4, 58 14 C 42 24, 18 26, 2 14 Z"
              fill="url(#heroFloatLeaf5)"
              fillOpacity="0.32"
            />
          </svg>
        </motion.div>
      </div>

      {/* 6. Floating Lily/Lotus Pad gently resting near foreground water line */}
      <div className="absolute bottom-[14%] right-[44%]">
        <motion.div
          animate={{
            x: [0, 18, 32, 10, 0],
            y: [0, -9, 7, -15, 0],
            rotate: [6, -8, 18, 0, 6],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5.4,
          }}
        >
          <svg width={36} height={26} viewBox="0 0 50 36" fill="none">
            <defs>
              <linearGradient id="heroFloatPad6" x1="10%" y1="10%" x2="90%" y2="90%">
                <stop offset="0%" stopColor="#4D8270" />
                <stop offset="65%" stopColor="#265243" />
                <stop offset="100%" stopColor="#123529" />
              </linearGradient>
            </defs>
            <path
              d="M25 18 C 16 9, 6 13, 3 21 C 0 29, 8 35, 23 34 C 38 33, 48 27, 46 19 C 44 11, 34 9, 25 18 Z"
              fill="url(#heroFloatPad6)"
              fillOpacity="0.5"
            />
            <path
              d="M25 18 C 19 13, 11 14, 6 18 M25 18 C 17 19, 10 23, 7 28 M25 18 C 29 25, 35 29, 40 30 M25 18 C 34 21, 41 20, 44 16"
              stroke="#8AC1AF"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeOpacity="0.45"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

