import React from 'react';
import { motion } from 'motion/react';
import { VIBE_OPTIONS, CONTEXT_OPTIONS } from '../../data/nepData';
import { NguThanGarment } from '../assets/NguThanGarment';
import { InkBloom, MistLayer } from '../assets/Atmosphere';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface Scene03VibeProps {
  selectedContextId: string;
  selectedVibeId: string;
  onSelectVibe: (id: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export const Scene03Vibe: React.FC<Scene03VibeProps> = ({
  selectedContextId,
  selectedVibeId,
  onSelectVibe,
  onBack,
  onNext,
}) => {
  const currentContext = CONTEXT_OPTIONS.find((c) => c.id === selectedContextId) || CONTEXT_OPTIONS[1];

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Vibe Choices (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2A6B5B] font-semibold">
              02 / PHONG VỊ · {currentContext.title}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E382F] leading-tight mb-3">
            Phong vị hôm nay?
          </h2>
          <p className="text-sm sm:text-base text-[#4D655E] mb-8 font-light max-w-lg">
            Chọn tinh thần thẩm mỹ bạn muốn thể hiện trong trang phục. Mỗi phong vị sẽ dẫn lối đến một bảng hòa sắc và phom dáng riêng.
          </p>

          {/* Vibe Cards */}
          <div className="space-y-3.5 mb-8">
            {VIBE_OPTIONS.map((item) => {
              const isSelected = selectedVibeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectVibe(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#E7F0EB] border-[#2A6B5B] shadow-xs'
                      : 'bg-[#FAF7F2] border-[#E3D9C8] hover:border-[#82B39E] hover:bg-[#F4EFE6]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-2.5 h-2.5 rounded-full mt-2 transition-colors ${
                        isSelected ? 'bg-[#0E382F]' : 'bg-[#CCC1AD] group-hover:bg-[#82B39E]'
                      }`}
                    />
                    <div>
                      <div className="flex items-center gap-3">
                        <h3
                          className={`font-serif text-lg font-bold transition-colors ${
                            isSelected ? 'text-[#0E382F]' : 'text-[#243B33] group-hover:text-[#0E382F]'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <span className="text-[11px] uppercase tracking-wider text-[#55756C] font-mono">
                          {item.essence}
                        </span>
                      </div>
                      <p className="text-xs text-[#526B63] font-light mt-1 max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Radio Indicator */}
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
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

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#D5C9B5] text-[#35574D] hover:text-[#0E382F] hover:bg-[#EDE5D8] transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>

            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2] font-medium text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Tiếp tục</span>
              <ArrowRight className="w-4 h-4 text-[#82B39E]" />
            </button>
          </div>
        </div>

        {/* Right Column: Garment Wash & Silhouette Illustration (5 cols) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          {/* Subtle Ink bloom background */}
          <div className="absolute top-10 right-8 pointer-events-none opacity-40">
            <InkBloom size={180} />
          </div>

          {/* Garment Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <NguThanGarment
              size={360}
              paletteColors={['#0A3830', '#1D5347', '#7CAE9B', '#D0E6C5']}
              showGuardPoints={false}
            />
          </motion.div>

          {/* Caption */}
          <div className="relative z-20 text-center mt-2">
            <span className="text-xs text-[#5C746C] tracking-widest uppercase font-mono">
              Hình thái ngũ thân · Phong vị thanh nhã
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
