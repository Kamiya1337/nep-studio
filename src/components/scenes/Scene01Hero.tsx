import React from 'react';
import { motion } from 'motion/react';
import { MountainHeroWatercolor } from '../assets/Mountains';
import { CraneFlying } from '../assets/Cranes';
import { LotusHeroForeground } from '../assets/Lotus';
import { MistLayer, CloudLine, FloatingLeavesHero } from '../assets/Atmosphere';
import { NepLogo } from '../assets/NepLogo';
import { ArrowRight } from 'lucide-react';

interface Scene01HeroProps {
  onStart: () => void;
  onExploreHeritage?: () => void;
}

export const Scene01Hero: React.FC<Scene01HeroProps> = ({ onStart }) => {
  return (
    <section className="relative w-full h-screen min-h-[720px] max-h-[1080px] overflow-hidden bg-[#FAF7F0] select-none">
      {/* Subtle paper / watercolor atmospheric ambient texture */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_75%_35%,rgba(215,232,223,0.35)_0%,rgba(250,247,240,0)_65%)]" />

      {/* 1. TOP-LEFT BRAND IDENTIFIER */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-14 lg:top-14 lg:left-20 z-30">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center gap-3.5"
        >
          <NepLogo size={46} showText={false} />
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#0E2C22]">
            NẾP
          </span>
        </motion.div>
      </div>

      {/* 2. BACKGROUND MOUNTAINS & WATERCOLOR MIST RIBBONS (Right & Center) */}
      <div className="absolute right-0 bottom-0 w-[72%] sm:w-[64%] lg:w-[58%] max-w-[1100px] pointer-events-none z-10 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <MountainHeroWatercolor opacity={0.95} />
        </motion.div>

        {/* Soft flowing mist ribbon across mountain base */}
        <MistLayer className="-bottom-6 z-15" speed={38} opacity={0.5} />
      </div>

      {/* 3. SOARING CRANE (Upper-right sky, flying inward toward top-left) */}
      <div className="absolute top-[15%] sm:top-[17%] lg:top-[19%] right-[8%] sm:right-[14%] lg:right-[17%] z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
        >
          <CraneFlying size={240} flip={true} animate={true} />
        </motion.div>
      </div>

      {/* Subtle auspicious cloud detail */}
      <div className="absolute top-[28%] right-[6%] hidden xl:block opacity-35 pointer-events-none z-15">
        <CloudLine size={130} type="curl" />
      </div>

      {/* Floating organic leaf elements in background with slow-drifting animation */}
      <FloatingLeavesHero className="z-15" />

      {/* 4. MAIN EDITORIAL CONTENT (Left Column with canonical copy) */}
      <div className="absolute top-[26%] sm:top-[28%] lg:top-[30%] left-8 sm:left-14 lg:left-20 z-30 max-w-lg lg:max-w-xl flex flex-col items-start">
        {/* Exact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-6xl lg:text-[74px] font-bold text-[#0E2C22] leading-[1.12] tracking-tight"
        >
          phối
          <br />
          theo gu,
          <br />
          giữ đúng
          <br />
          nếp.
        </motion.h1>

        {/* Exact Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: 'easeOut' }}
          className="mt-6 sm:mt-7 text-base sm:text-lg lg:text-[19px] text-[#3F584D] font-sans font-light tracking-wide leading-relaxed"
        >
          Việt phục, theo một phong vị của riêng bạn.
        </motion.p>

        {/* Exact CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 sm:mt-10"
        >
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 bg-[#0E2C22] hover:bg-[#184234] text-[#FAF7F0] font-medium text-base rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Bắt đầu phối</span>
            <ArrowRight className="w-4 h-4 text-[#96C0AE] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* 5. FOREGROUND LOTUS (Bottom-right framing) */}
      <div className="absolute -bottom-2 sm:-bottom-4 right-0 sm:right-4 lg:right-10 z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: 'easeOut' }}
        >
          <LotusHeroForeground size={460} className="w-[320px] sm:w-[420px] lg:w-[480px]" />
        </motion.div>
      </div>
    </section>
  );
};
