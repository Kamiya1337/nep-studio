import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { NepLogo } from '../assets/NepLogo';
import { CraneFlying } from '../assets/Cranes';
import { InkBloom, InkWashHorizontal } from '../assets/Atmosphere';
import { Sparkles } from 'lucide-react';

interface SceneTransitionGenerateProps {
  onComplete: () => void;
}

export const SceneTransitionGenerate: React.FC<SceneTransitionGenerateProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  const messages = [
    'Khảo cứu điển chế triều đình theo dịp...',
    'Hòa sắc lụa truyền thống theo phong vị thanh nhã...',
    'Đang dệt nếp lụa và hoàn thiện 3 phối thức...',
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 900);
    const t2 = setTimeout(() => setStage(2), 1900);
    const t3 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center bg-[#FAF7F2] overflow-hidden px-6">
      {/* Background Ink Bloom */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <InkBloom size={360} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Animated Crane & Seal Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <NepLogo size={80} />
          <div className="absolute -top-12 -right-16 opacity-75">
            <CraneFlying size={110} animate={true} />
          </div>
        </motion.div>

        {/* Title */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E382F] mb-4 tracking-tight">
          Đang tạo NẾP cho bạn
        </h2>

        {/* Dynamic Cultural Step Message */}
        <motion.p
          key={stage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base text-[#4D655E] font-light min-h-12 max-w-md italic font-serif"
        >
          “{messages[stage]}”
        </motion.p>

        {/* Ink Wash progress line */}
        <div className="w-64 my-6 opacity-70">
          <InkWashHorizontal width="100%" />
        </div>

        {/* Skip button if user wants immediate transition */}
        <button
          onClick={onComplete}
          className="mt-4 text-xs uppercase tracking-[0.2em] text-[#2A6B5B] hover:text-[#0E382F] transition-colors py-2 px-4 rounded-full hover:bg-[#EDE5D8]/60 cursor-pointer font-mono"
        >
          Xem kết quả ngay →
        </button>
      </div>
    </section>
  );
};
