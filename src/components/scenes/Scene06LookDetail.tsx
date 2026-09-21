import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NEP_LOOKS, CULTURE_GUARD_POINTS } from '../../data/nepData';
import { NguThanGarment } from '../assets/NguThanGarment';
import { MountainBack } from '../assets/Mountains';
import { Bookmark, RotateCcw, ShieldCheck, ArrowDown, ArrowRight, ArrowUp, Check, Info } from 'lucide-react';

interface Scene06LookDetailProps {
  lookId: number;
  onBackToLooks: () => void;
  onResetSelections: () => void;
  onGoToStory: () => void;
  onSaveToLookbook: (look: typeof NEP_LOOKS[0]) => void;
  isSaved: boolean;
}

export const Scene06LookDetail: React.FC<Scene06LookDetailProps> = ({
  lookId,
  onBackToLooks,
  onResetSelections,
  onGoToStory,
  onSaveToLookbook,
  isSaved,
}) => {
  const currentLook = NEP_LOOKS.find((l) => l.id === lookId) || NEP_LOOKS[0];
  const [activeGuardPointId, setActiveGuardPointId] = useState<string>('co-lap-linh');
  const [showGuardMode, setShowGuardMode] = useState<boolean>(true);

  const activePoint = CULTURE_GUARD_POINTS.find((p) => p.id === activeGuardPointId) || CULTURE_GUARD_POINTS[0];

  const getGarmentStyle = (id: number) => {
    if (id === 2) return 'giao-linh';
    if (id === 3) return 'ao-tac';
    return 'ngu-than';
  };

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Editorial Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DFD4C2] pb-4 mb-8 text-xs font-mono tracking-widest text-[#55756C] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#0E382F] font-bold">■ NẾP · HỒ SƠ PHỤC DỰNG ĐƯƠNG ĐẠI</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">HỒ THỨC: NHÃ NHẶN & TỰ TẠI</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#2A6B5B] font-semibold">Khảo tập VII</span>
          <button
            onClick={onBackToLooks}
            className="text-[#0E382F] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← Trở lại 3 NẾP
          </button>
        </div>
      </div>

      {/* Main 2-Column Detail View (Scene 06) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Garment Visual Showcase & Vertical Seal (6 cols) */}
        <div className="lg:col-span-6 relative bg-[#F4EFE6]/70 border border-[#E5DBCA] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-xs overflow-hidden min-h-[520px]">
          {/* Header of frame */}
          <div className="w-full flex items-center justify-between z-20 text-xs font-mono text-[#55756C] mb-2">
            <span className="font-bold text-[#0E382F]">DIỆN MẠO NGUYÊN BẢN</span>
            <span>Mẫu số 0{currentLook.id}</span>
          </div>

          {/* Background mountain wash */}
          <div className="absolute bottom-10 inset-x-0 pointer-events-none opacity-30">
            <MountainBack opacity={0.4} />
          </div>

          {/* Vertical traditional stamp text on the left */}
          <div className="absolute left-3 top-20 bottom-20 hidden sm:flex items-center justify-center pointer-events-none">
            <div className="writing-vertical-lr rotate-180 text-[10px] font-serif tracking-[0.35em] text-[#2A6B5B]/60 uppercase border-r border-[#2A6B5B]/20 pr-1.5 h-64 flex items-center">
              KỶ VẬT · PHỤC THỨC HOÀNG TRIỀU CẢI BIẾN
            </div>
          </div>

          {/* Centered Garment with Culture Guard Hotspots */}
          <div className="relative z-10 my-2">
            <NguThanGarment
              size={370}
              paletteColors={currentLook.hexCodes}
              garmentStyle={getGarmentStyle(currentLook.id)}
              showGuardPoints={showGuardMode}
              activeGuardPoint={activeGuardPointId}
              onSelectGuardPoint={(id) => setActiveGuardPointId(id)}
            />
          </div>

          {/* Bottom Breakdown Tags */}
          <div className="relative z-20 w-full text-center pt-3 border-t border-[#DFD5C2]">
            <p className="text-xs text-[#3A564C] tracking-wide font-mono mb-2">
              {currentLook.garmentType.split('·')[0]}  ✦  Quần lụa tuyết trắng  ✦  {currentLook.badge}
            </p>
            <p className="text-[10px] text-[#718B80] tracking-widest uppercase font-mono">
              THỦY MẶC KHẢO KHẮC — 1884 / 2025 · BẢN QUYỀN HÌNH THÁI NẾP ARCHIVE
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Specifications (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="bg-[#FAF7F2] border border-[#E3D8C6] rounded-2xl p-6 sm:p-8 shadow-xs">
            {/* Header Tag */}
            <div className="flex items-center justify-between text-xs font-mono text-[#55756C] tracking-widest uppercase mb-2">
              <span className="font-bold text-[#0E382F]">■ PHỐI THỨC 0{currentLook.id} / 03</span>
              <span className="text-[#2A6B5B]">DÀNH RIÊNG CHO BẠN</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl font-bold text-[#0E382F] mb-1">
              {currentLook.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#4E6C60] font-light mb-6">
              {currentLook.garmentType} · {currentLook.silhouette}
            </p>

            {/* Why fits callout */}
            <div className="bg-[#E7F0EB] border border-[#82B39E]/40 rounded-xl p-4 mb-6">
              <span className="block text-[11px] uppercase font-mono tracking-wider text-[#1D5347] font-bold mb-1">
                VÌ SAO HỢP VỚI BẠN?
              </span>
              <p className="text-xs sm:text-sm text-[#27463C] leading-relaxed font-light">
                {currentLook.whyFits}
              </p>
            </div>

            {/* Specification Rows */}
            <div className="space-y-4 mb-6">
              {/* Row 1: Phục sức chủ đạo */}
              <div className="border-b border-[#EDE5D5] pb-3">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#55756C] mb-1">
                  PHỤC SỨC CHỦ ĐẠO
                </span>
                <p className="text-xs sm:text-sm text-[#1F3830] font-light leading-relaxed">
                  {currentLook.mainGarmentDesc}
                </p>
              </div>

              {/* Row 2: Bảng sắc độ */}
              <div className="border-b border-[#EDE5D5] pb-3">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#55756C] mb-1">
                  BẢNG SẮC ĐỘ
                </span>
                <p className="text-xs sm:text-sm text-[#1F3830] font-light leading-relaxed mb-2">
                  {currentLook.paletteDesc}
                </p>
                <div className="flex items-center gap-2">
                  {currentLook.hexCodes.map((hex, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-[10px] font-mono text-[#55756C]">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3: Phụ cận kèm theo */}
              <div className="pb-2">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#55756C] mb-1">
                  PHỤ CẬN KÈM THEO
                </span>
                <p className="text-xs sm:text-sm text-[#1F3830] font-light leading-relaxed">
                  {currentLook.accessoriesDesc}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-[#E8DFC9]">
              <button
                onClick={() => onSaveToLookbook(currentLook)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                  isSaved
                    ? 'bg-[#1D5347] text-white'
                    : 'bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2]'
                }`}
              >
                {isSaved ? <Check className="w-4 h-4 text-[#82B39E]" /> : <Bookmark className="w-4 h-4" />}
                <span>{isSaved ? 'Đã lưu vào Lookbook' : 'Lưu vào Lookbook'}</span>
              </button>

              <button
                onClick={onResetSelections}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#D5C9B5] text-[#35574D] hover:text-[#0E382F] hover:bg-[#EDE5D8] transition-colors text-sm font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Phối lại diện mạo</span>
              </button>
            </div>

            {/* Jump Link to Culture Guard */}
            <div className="mt-5 text-center sm:text-left">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('culture-guard');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-1.5 text-xs text-[#2A6B5B] hover:text-[#0E382F] font-mono tracking-wider transition-colors cursor-pointer"
              >
                <ArrowDown className="w-3.5 h-3.5" />
                <span>Khám phá Điểm tựa văn hóa (Culture Guard) bên dưới</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SCENE 07: CULTURE GUARD (Hệ quy chiếu chuẩn xác cho phom ngũ thân truyền thống) */}
      <div id="culture-guard" className="pt-8 border-t border-[#E0D5C2] scroll-mt-24">
        <div className="bg-[#E7F0EB]/60 border border-[#2A6B5B]/30 rounded-2xl p-6 sm:p-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-[#2A6B5B]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2A6B5B] font-bold">
                  SCENE 07 / TRẢI NGHIỆM GIÁC QUAN DÂN TỘC
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0E382F]">
                Điểm tựa văn hóa (Culture Guard)
              </h3>
              <p className="text-xs sm:text-sm text-[#466459] font-light">
                Hệ quy chiếu chuẩn xác bảo tồn nguyên bản phom ngũ thân triều Nguyễn.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF7F2] border border-[#2A6B5B]/40 rounded-full text-xs font-mono text-[#0E382F]">
              <span className="w-2 h-2 rounded-full bg-[#2A6B5B] animate-pulse" />
              <span>100% ĐÚNG ĐIỂN CHẾ VIỆT PHỤC</span>
            </div>
          </div>

          {/* Interactive Inspection Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Buttons for the 5 Guard Points (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#55756C] mb-2">
                NHẤP CHỌN ĐIỂM KHẢO CỨU TRÊN TRANG PHỤC:
              </span>
              {CULTURE_GUARD_POINTS.map((point) => {
                const isActive = activeGuardPointId === point.id;
                return (
                  <button
                    key={point.id}
                    onClick={() => setActiveGuardPointId(point.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#0E382F] text-[#FAF7F2] border-[#0E382F] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#27463C] border-[#D5C9B5] hover:border-[#2A6B5B] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    <div>
                      <div className="font-serif font-bold text-sm">{point.name}</div>
                      <div className="text-xs opacity-80 font-light mt-0.5">{point.title}</div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-mono ${
                        isActive ? 'bg-[#2A6B5B] text-white border-transparent' : 'border-[#CCC1AD]'
                      }`}
                    >
                      {isActive ? '✓' : '•'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Detailed Inspection Card for the Active Point (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#2A6B5B]/30 rounded-xl p-6 shadow-xs min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePoint.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#2A6B5B] font-semibold">
                      QUY CHUẨN ĐIỂN CHẾ
                    </span>
                    <span>·</span>
                    <span className="text-xs text-[#55756C] font-mono">{activePoint.name}</span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[#0E382F] mb-3">
                    {activePoint.title}
                  </h4>

                  <p className="text-sm text-[#2C483E] leading-relaxed mb-4 font-light">
                    {activePoint.description}
                  </p>

                  <div className="bg-[#EDE5D8]/50 border-l-2 border-[#2A6B5B] p-3 rounded-r-lg">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#1D5347] font-bold mb-0.5">
                      Ý NGHĨA BIỂU TRƯNG:
                    </span>
                    <p className="text-xs text-[#415C52] font-light italic">
                      “{activePoint.significance}”
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom CTA to Scene 08/09 with Smooth Scroll Back to Top */}
              <div className="pt-6 mt-4 border-t border-[#E5DAC6] flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-1.5 text-xs text-[#55756C] hover:text-[#0E382F] transition-colors cursor-pointer font-mono"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-[#2A6B5B]" />
                  <span>Trở lên đầu hồ sơ</span>
                </button>
                <button
                  onClick={onGoToStory}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2] rounded-full text-xs font-medium tracking-wide shadow-xs transition-colors cursor-pointer"
                >
                  <span>Khám phá Câu chuyện văn hóa & Nguồn khảo cứu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#82B39E]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
