import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CULTURAL_STORY, NEP_LOOKS } from '../../data/nepData';
import { CranePerched } from '../assets/Cranes';
import { InkWashHorizontal } from '../assets/Atmosphere';
import { BookOpen, Bookmark, ArrowLeft, Check, Library, ArrowUp, Compass } from 'lucide-react';

interface Scene08CulturalStoryProps {
  lookId: number;
  onBackToLooks: () => void;
  onSaveLook: (look: typeof NEP_LOOKS[0]) => void;
  isSaved: boolean;
}

export const Scene08CulturalStory: React.FC<Scene08CulturalStoryProps> = ({
  lookId,
  onBackToLooks,
  onSaveLook,
  isSaved,
}) => {
  const currentLook = NEP_LOOKS.find((l) => l.id === lookId) || NEP_LOOKS[0];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        setShowScrollTop(window.scrollY > 280);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Reading Progress Line (Fixed directly below top nav) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#2A6B5B] to-[#558C7A] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EDE5D8]/80 border border-[#DDD0BC] rounded-full text-xs font-mono tracking-widest text-[#0E382F] uppercase mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#2A6B5B]" />
          <span>■ CÂU CHUYỆN VĂN HÓA</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0E382F] mb-3">
          {CULTURAL_STORY.title}
        </h2>
        <p className="text-sm sm:text-base text-[#4E685E] font-light max-w-2xl leading-relaxed">
          {CULTURAL_STORY.subtitle}
        </p>

        {/* Editorial Quick-Jump Subnav with Smooth Scrolling */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#E3D8C6]/80 text-xs font-mono">
          <span className="text-[#69887C] flex items-center gap-1 mr-1">
            <Compass className="w-3.5 h-3.5 text-[#2A6B5B]" />
            MỤC LỤC KHẢO CỨU:
          </span>
          <button
            onClick={() => scrollToSection('section-nguon-coi')}
            className="px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DDD0BC] hover:border-[#2A6B5B] hover:text-[#0E382F] text-[#416055] transition-colors cursor-pointer shadow-2xs"
          >
            01. Nguồn cội
          </button>
          <button
            onClick={() => scrollToSection('section-bieu-tuong')}
            className="px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DDD0BC] hover:border-[#2A6B5B] hover:text-[#0E382F] text-[#416055] transition-colors cursor-pointer shadow-2xs"
          >
            02. Biểu tượng
          </button>
          <button
            onClick={() => scrollToSection('section-thoi-nay')}
            className="px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DDD0BC] hover:border-[#2A6B5B] hover:text-[#0E382F] text-[#416055] transition-colors cursor-pointer shadow-2xs"
          >
            03. Thời nay
          </button>
          <button
            onClick={() => scrollToSection('section-tai-lieu')}
            className="px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DDD0BC] hover:border-[#2A6B5B] hover:text-[#0E382F] text-[#416055] transition-colors cursor-pointer shadow-2xs"
          >
            Tài liệu khảo cứu
          </button>
        </div>
      </div>

      {/* 3 Editorial Columns (Scene 08) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Column 1: Nguồn cội (Lịch sử khảo cứu) */}
        <div
          id="section-nguon-coi"
          className="bg-[#FAF7F2] border border-[#E3D8C6] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs scroll-mt-24"
        >
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#55756C] tracking-widest uppercase mb-3">
              <span className="font-bold text-[#0E382F]">01 / NGUỒN CỘI</span>
              <span className="text-[#2A6B5B]">[LỊCH SỬ KHẢO CỨU]</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#0E382F] mb-3">
              {CULTURAL_STORY.sections[0].heading}
            </h3>

            <p className="text-xs sm:text-sm text-[#2D493F] leading-relaxed font-light mb-6">
              {CULTURAL_STORY.sections[0].content}
            </p>
          </div>

          {/* Visual box: Horizontal ink wash with label */}
          <div className="bg-[#EDE5D8]/60 border border-[#DFD5C2] rounded-xl p-4 flex flex-col items-center justify-center">
            <InkWashHorizontal width="90%" />
            <span className="text-[10px] font-mono tracking-widest text-[#55756C] uppercase mt-2">
              {CULTURAL_STORY.sections[0].visualLabel}
            </span>
          </div>
        </div>

        {/* Column 2: Biểu tượng (Tập tục & phong vị) */}
        <div
          id="section-bieu-tuong"
          className="bg-[#FAF7F2] border border-[#E3D8C6] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs scroll-mt-24"
        >
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#55756C] tracking-widest uppercase mb-3">
              <span className="font-bold text-[#0E382F]">02 / BIỂU TƯỢNG</span>
              <span className="text-[#2A6B5B]">[TẬP TỤC & PHONG VỊ]</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#0E382F] mb-3">
              {CULTURAL_STORY.sections[1].heading}
            </h3>

            <p className="text-xs sm:text-sm text-[#2D493F] leading-relaxed font-light mb-6">
              {CULTURAL_STORY.sections[1].content}
            </p>
          </div>

          {/* Visual box: Perched crane illustration with label */}
          <div className="bg-[#EDE5D8]/60 border border-[#DFD5C2] rounded-xl p-4 flex flex-col items-center justify-center min-h-[120px]">
            <CranePerched size={110} />
            <span className="text-[10px] font-mono tracking-widest text-[#55756C] uppercase mt-2">
              {CULTURAL_STORY.sections[1].visualLabel}
            </span>
          </div>
        </div>

        {/* Column 3: Thời nay (Gợi ý phối gu) */}
        <div
          id="section-thoi-nay"
          className="bg-[#FAF7F2] border border-[#E3D8C6] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs scroll-mt-24"
        >
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#55756C] tracking-widest uppercase mb-3">
              <span className="font-bold text-[#0E382F]">03 / THỜI NAY</span>
              <span className="text-[#2A6B5B]">[GỢI Ý PHỐI GU]</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#0E382F] mb-3">
              {CULTURAL_STORY.sections[2].heading}
            </h3>

            <p className="text-xs sm:text-sm text-[#2D493F] leading-relaxed font-light mb-6">
              {CULTURAL_STORY.sections[2].content}
            </p>
          </div>

          {/* Callout box: Nếp Aesthetic Principle */}
          <div className="bg-[#E7F0EB] border-l-2 border-[#2A6B5B] p-4 rounded-r-xl">
            <span className="block text-[10px] font-mono tracking-wider text-[#1D5347] font-bold uppercase mb-1">
              ■ NGUYÊN TẮC THẨM MỸ NẾP
            </span>
            <p className="text-xs text-[#2A4B3F] font-serif italic leading-relaxed">
              “{CULTURAL_STORY.nepAestheticPrinciple}”
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Sources & References (Scene 09) */}
      <div
        id="section-tai-lieu"
        className="bg-[#EDE5D8]/70 border border-[#DDD0BC] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 scroll-mt-24"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Library className="w-4 h-4 text-[#2A6B5B]" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0E382F] font-bold">
              TÀI LIỆU THAM KHẢO & NGUỒN KHẢO CỨU
            </h4>
          </div>
          <ul className="space-y-1.5 text-xs text-[#415C52] font-light">
            {CULTURAL_STORY.sources.map((source, index) => (
              <li key={index} className="flex items-baseline gap-2">
                <span className="text-[#2A6B5B]">•</span>
                <span>
                  <strong>{source.title}</strong>
                  {source.author ? ` – ${source.author}` : ''}
                  {source.publisher ? ` (${source.publisher})` : ''}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
          <button
            onClick={onBackToLooks}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#D5C9B5] text-[#35574D] hover:text-[#0E382F] hover:bg-[#FAF7F2] transition-colors text-xs font-medium cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Xem các phối thức khác</span>
          </button>

          <button
            onClick={() => onSaveLook(currentLook)}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium transition-all shadow-xs cursor-pointer ${
              isSaved
                ? 'bg-[#1D5347] text-white'
                : 'bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2]'
            }`}
          >
            {isSaved ? <Check className="w-3.5 h-3.5 text-[#82B39E]" /> : <Bookmark className="w-3.5 h-3.5" />}
            <span>{isSaved ? 'Đã lưu bộ đồ này' : 'Lưu bộ đồ này'}</span>
          </button>
        </div>
      </div>

      {/* Floating Smooth Scroll-to-Top Button for Long-Form Reading */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            title="Cuộn lên đầu trang"
            className="fixed bottom-8 right-8 z-40 p-3 bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2] rounded-full shadow-md border border-[#2A6B5B]/40 hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4 text-[#96C0AE]" />
            <span className="text-xs font-mono hidden sm:inline pr-1">Lên đầu bài</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

