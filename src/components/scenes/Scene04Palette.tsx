import React from 'react';
import { motion } from 'motion/react';
import { COLOR_PALETTES, CONTEXT_OPTIONS, VIBE_OPTIONS } from '../../data/nepData';
import { NguThanGarment } from '../assets/NguThanGarment';
import { ArrowLeft, Sparkles, Check } from 'lucide-react';

interface Scene04PaletteProps {
  selectedContextId: string;
  selectedVibeId: string;
  selectedPaletteId: string;
  onSelectPalette: (id: string) => void;
  onBack: () => void;
  onGenerate: () => void;
}

export const Scene04Palette: React.FC<Scene04PaletteProps> = ({
  selectedContextId,
  selectedVibeId,
  selectedPaletteId,
  onSelectPalette,
  onBack,
  onGenerate,
}) => {
  const currentContext = CONTEXT_OPTIONS.find((c) => c.id === selectedContextId) || CONTEXT_OPTIONS[1];
  const currentVibe = VIBE_OPTIONS.find((v) => v.id === selectedVibeId) || VIBE_OPTIONS[1];
  const activePalette = COLOR_PALETTES.find((p) => p.id === selectedPaletteId) || COLOR_PALETTES[0];

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Real-time Live Garment Color Preview (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="relative bg-[#EDE5D8]/40 border border-[#DFD5C4] rounded-2xl p-6 flex flex-col items-center w-full max-w-md shadow-xs">
            <motion.div
              key={activePalette.id}
              initial={{ opacity: 0.85, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <NguThanGarment
                size={340}
                paletteColors={activePalette.hexCodes}
                showGuardPoints={false}
              />
            </motion.div>

            {/* Garment Caption */}
            <div className="text-center mt-3">
              <span className="text-xs text-[#526B63] font-light italic">
                Minh họa phối sắc · Chưa phải trang phục đề xuất
              </span>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                {activePalette.hexCodes.map((hex, idx) => (
                  <span
                    key={idx}
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Palette Options (7 cols) order-1 lg:order-2 */}
        <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2A6B5B] font-semibold">
              03 / BẢNG SẮC · {currentContext.title} · {currentVibe.title}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E382F] leading-tight mb-2">
            Chọn bảng sắc
          </h2>
          <p className="text-sm sm:text-base text-[#4D655E] mb-6 font-light max-w-lg">
            Một sắc độ hòa hợp với phong vị của bạn. Bảng màu NẾP được chắt lọc từ các gam màu thủy mặc, lụa cổ và cảnh sắc thiên nhiên xứ Việt.
          </p>

          {/* Palette Cards */}
          <div className="space-y-3 mb-8">
            {COLOR_PALETTES.map((palette) => {
              const isSelected = selectedPaletteId === palette.id;
              return (
                <button
                  key={palette.id}
                  onClick={() => onSelectPalette(palette.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#E7F0EB] border-[#2A6B5B] shadow-xs ring-1 ring-[#2A6B5B]'
                      : 'bg-[#FAF7F2] border-[#E3D9C8] hover:border-[#82B39E] hover:bg-[#F4EFE6]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-serif text-lg font-bold transition-colors ${
                            isSelected ? 'text-[#0E382F]' : 'text-[#243B33] group-hover:text-[#0E382F]'
                          }`}
                        >
                          {palette.name}
                        </h3>
                        <span className="text-xs text-[#526B63] font-light">
                          ({palette.vietnameseName})
                        </span>
                      </div>
                      <p className="text-xs text-[#526B63] font-light mt-0.5 max-w-sm">
                        {palette.description}
                      </p>
                    </div>

                    {/* 4 Ink Swatches */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {palette.hexCodes.map((hex, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full border border-black/10 shadow-2xs transition-transform group-hover:scale-105"
                          style={{ backgroundColor: hex }}
                          title={hex}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Radio Indicator */}
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ml-3 transition-all ${
                      isSelected
                        ? 'border-[#0E382F] bg-[#0E382F] text-[#FAF7F2]'
                        : 'border-[#CCC1AD] bg-white/60 group-hover:border-[#82B39E]'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#D5C9B5] text-[#35574D] hover:text-[#0E382F] hover:bg-[#EDE5D8] transition-colors text-sm font-medium cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>

            <button
              onClick={onGenerate}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2] font-medium text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#82B39E]" />
              <span>Tạo NẾP</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
