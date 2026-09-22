import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroSceneBg from '../assets/images/NẾP — Hero Scene v2.png';

interface Scene01HeroProps {
  onStart: () => void;
  onExploreHeritage?: () => void;
}

export const Scene01Hero: React.FC<Scene01HeroProps> = ({ onStart }) => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#F6F1E7] select-none flex items-center justify-center">
      {/* Semantic screen-reader heading for accessibility and SEO */}
      <div className="sr-only">
        <h1>NẾP - phối theo gu, giữ đúng nếp.</h1>
        <p>Việt phục, theo một phong vị của riêng bạn.</p>
        <span>Khảo cứu cổ phục ngũ thân · Thẩm mỹ thủy mặc</span>
      </div>

      {/* =========================================================================
          HERO SCENE CANVAS - 16:9 PRECISE COMPOSITION
          Uses the user's authentic high-resolution master artwork as the visual foundation,
          with functional interactive overlays.
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative w-full h-full max-w-[1920px] max-h-screen flex items-center justify-center p-0 md:p-2"
      >
        <div className="relative aspect-[16/9] w-full max-h-full max-w-[177.78vh] overflow-hidden bg-[#F6F1E7] shadow-sm">
          {/* Master artwork background uploaded by user */}
          <img
            src={heroSceneBg}
            alt="NẾP - Phối theo gu, giữ đúng nếp"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-10"
          />

          {/* Interactive clickable CTA button mapped precisely over the artwork's button */}
          <button
            onClick={onStart}
            type="button"
            aria-label="Bắt đầu phối Việt phục"
            style={{
              left: '45.3%',
              top: '80.6%',
              width: '9.4%',
              height: '5.6%',
              fontSize: 'clamp(11px, 0.92cqw, 15px)',
            }}
            className="absolute z-30 cursor-pointer border border-[#1D433A]/80 hover:border-[#1D433A] bg-transparent hover:bg-[#1D433A]/10 active:scale-[0.98] transition-all duration-200 flex items-center justify-center text-[#1D433A] font-sans font-medium tracking-[0.08em] focus:outline-hidden focus:ring-2 focus:ring-[#1D433A]/40 rounded-xs group"
          >
            <span>Bắt đầu phối</span>
          </button>
        </div>
      </motion.div>

      {/* Mobile viewport adaptation (< 768px) */}
      <div className="md:hidden absolute bottom-6 inset-x-0 flex justify-center z-40 px-6 pointer-events-auto">
        <button
          onClick={onStart}
          type="button"
          className="w-full max-w-xs py-3 px-6 border border-[#1D433A] bg-[#1D433A] hover:bg-[#0E2C22] text-[#FAF7F0] font-medium text-sm rounded-xs shadow-md flex items-center justify-center gap-2.5 transition-transform active:scale-98 cursor-pointer"
        >
          <span>Bắt đầu phối</span>
          <ArrowRight className="w-4 h-4 text-[#96C0AE]" />
        </button>
      </div>
    </section>
  );
};

