import React from 'react';
import { motion } from 'motion/react';
import { NEP_LOOKS } from '../../data/nepData';
import { NguThanGarment } from '../assets/NguThanGarment';
import { MountainBack } from '../assets/Mountains';
import { NepLogo } from '../assets/NepLogo';
import { ArrowRight, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

interface Scene05LooksProps {
  selectedLookId: number;
  onSelectLook: (id: number) => void;
  onViewDetail: (lookId: number) => void;
  onResetSelections: () => void;
}

export const Scene05Looks: React.FC<Scene05LooksProps> = ({
  selectedLookId,
  onSelectLook,
  onViewDetail,
  onResetSelections,
}) => {
  const currentLook = NEP_LOOKS.find((l) => l.id === selectedLookId) || NEP_LOOKS[0];

  const getGarmentStyle = (id: number) => {
    if (id === 2) return 'giao-linh';
    if (id === 3) return 'ao-tac';
    return 'ngu-than';
  };

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E3D8C6] pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <NepLogo size={28} />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2A6B5B] font-semibold">
              GỢI Ý DÀNH RIÊNG CHO BẠN
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0E382F]">
            3 NẾP dành cho bạn
          </h2>
          <p className="text-xs sm:text-sm text-[#55756C] font-light mt-1 italic">
            “Ba phối thức được gợi ý từ dịp, phong vị và bảng sắc bạn đã chọn.”
          </p>
        </div>

        <button
          onClick={onResetSelections}
          className="inline-flex items-center gap-1.5 text-xs text-[#55756C] hover:text-[#0E382F] py-1.5 px-3 rounded-full border border-[#D5C9B5] hover:bg-[#EDE5D8] transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Phối lại từ đầu</span>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left / Center: Visual Showcase (6 cols) */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center bg-[#F4EFE6]/60 border border-[#E5DBCA] rounded-2xl p-6 sm:p-10 overflow-hidden shadow-xs min-h-[440px]">
          {/* Faint mountain background inside frame */}
          <div className="absolute bottom-0 inset-x-0 pointer-events-none opacity-40">
            <MountainBack opacity={0.5} />
          </div>

          {/* Traditional Badge Tag (Top Left of frame) */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2] border border-[#DDD0BC] rounded-full text-[11px] font-mono tracking-widest text-[#0E382F] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B84A62]" />
            <span>{currentLook.badge}</span>
          </div>

          {/* Look Counter (Top Right of frame) */}
          <div className="absolute top-4 right-4 z-20 text-[11px] font-mono tracking-widest text-[#55756C]">
            PHỐI THỨC 0{currentLook.id} / 03
          </div>

          {/* Garment Illustration */}
          <motion.div
            key={currentLook.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 my-4"
          >
            <NguThanGarment
              size={360}
              paletteColors={currentLook.hexCodes}
              garmentStyle={getGarmentStyle(currentLook.id)}
              showGuardPoints={false}
            />
          </motion.div>

          {/* Silhouette Spec pill below */}
          <div className="relative z-20 mt-2 px-3 py-1 rounded-full bg-[#FAF7F2]/80 border border-[#E3D9C9] text-xs text-[#456358] tracking-wider font-light">
            {currentLook.silhouette}
          </div>
        </div>

        {/* Right Column: Look Editorial Info (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="bg-[#FAF7F2] border border-[#E3D8C6] rounded-2xl p-6 sm:p-8 shadow-xs">
            {/* Tag / Code */}
            <div className="flex items-center justify-between text-xs font-mono text-[#55756C] tracking-widest uppercase mb-2">
              <span>PHỐI THỨC 0{currentLook.id} / 03</span>
              <span className="text-[#2A6B5B] font-semibold">{currentLook.historicalPeriod}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E382F] mb-1">
              {currentLook.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#456358] font-light mb-5">
              {currentLook.garmentType}
            </p>

            {/* Why Fits Callout Box */}
            <div className="bg-[#E7F0EB] border border-[#82B39E]/40 rounded-xl p-4 mb-6">
              <span className="block text-[11px] uppercase font-mono tracking-wider text-[#1D5347] font-bold mb-1">
                VÌ SAO HỢP VỚI BẠN?
              </span>
              <p className="text-xs sm:text-sm text-[#27463C] leading-relaxed font-light">
                {currentLook.whyFits}
              </p>
            </div>

            {/* Color Swatches */}
            <div className="mb-6">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#55756C] mb-2">
                BẢNG SẮC {currentLook.paletteName.toUpperCase()}
              </span>
              <div className="flex items-center gap-2">
                {currentLook.hexCodes.map((hex, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="w-7 h-7 rounded-full border border-black/10 shadow-2xs"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                    <span className="text-[10px] font-mono text-[#678278]">{hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-[#E8DFC9]">
              <button
                onClick={() => onViewDetail(currentLook.id)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2] font-medium text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Xem chi tiết phối thức</span>
                <ArrowRight className="w-4 h-4 text-[#82B39E]" />
              </button>

              <button
                onClick={onResetSelections}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#D5C9B5] text-[#35574D] hover:text-[#0E382F] hover:bg-[#EDE5D8] transition-colors text-sm font-medium cursor-pointer"
              >
                <span>Phối lại</span>
              </button>
            </div>
          </div>

          {/* Bottom Tabs / Switcher to other looks */}
          <div className="mt-6">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#55756C] mb-2.5">
              CÁC PHỐI THỨC GỢI Ý KHÁC
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {NEP_LOOKS.map((look) => {
                const isActive = look.id === currentLook.id;
                return (
                  <button
                    key={look.id}
                    onClick={() => onSelectLook(look.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0E382F] text-[#FAF7F2] border-[#0E382F] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#27463C] border-[#E0D5C3] hover:border-[#82B39E] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[11px] opacity-75">0{look.id}</span>
                      {isActive && (
                        <span className="text-[9px] uppercase tracking-wider bg-[#2A6B5B] px-1.5 py-0.5 rounded text-white">
                          Đang xem
                        </span>
                      )}
                    </div>
                    <div className="font-serif font-bold text-sm truncate">{look.name}</div>
                    <div className="text-[10px] opacity-75 truncate mt-0.5">{look.garmentType}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
