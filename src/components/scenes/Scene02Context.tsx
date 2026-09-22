import React from 'react';
import { motion } from 'motion/react';
import { CONTEXT_OPTIONS } from '../../data/nepData';
import { VietnamesePavilion } from '../assets/Pavilion';
import { ArrowRight, Check } from 'lucide-react';

interface Scene02ContextProps {
  selectedContextId: string;
  onSelectContext: (id: string) => void;
  onNext: () => void;
}

export const Scene02Context: React.FC<Scene02ContextProps> = ({
  selectedContextId,
  onSelectContext,
  onNext,
}) => {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Form & Selections (6 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2A6B5B] font-semibold">
              01 / NGỮ CẢNH
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E382F] leading-tight mb-3">
            Bạn sẽ diện NẾP
            <br />
            trong dịp nào?
          </h2>
          <p className="text-sm sm:text-base text-[#4D655E] mb-8 font-light max-w-lg">
            Mỗi không gian mang một quy chuẩn điển chế và sắc thái phục sức riêng. Hãy chọn dịp bạn muốn diện kiến.
          </p>

          {/* List of Context Options */}
          <div className="space-y-3.5 mb-8">
            {CONTEXT_OPTIONS.map((item) => {
              const isSelected = selectedContextId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectContext(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#E7F0EB] border-[#2A6B5B] shadow-xs'
                      : 'bg-[#FAF7F2] border-[#E3D9C8] hover:border-[#82B39E] hover:bg-[#F4EFE6]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs font-semibold px-2 py-1 rounded transition-colors ${
                        isSelected
                          ? 'bg-[#2A6B5B] text-[#FAF7F2]'
                          : 'bg-[#EDE5D8] text-[#55756C] group-hover:bg-[#DFD4C3]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-lg font-bold transition-colors ${
                          isSelected ? 'text-[#0E382F]' : 'text-[#243B33] group-hover:text-[#0E382F]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#526B63] font-light mt-0.5 max-w-md">
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

          {/* Continue Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2] font-medium text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Tiếp tục</span>
              <ArrowRight className="w-4 h-4 text-[#82B39E]" />
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Pavilion (5 cols) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-8 lg:pt-0">
          {/* Pavilion with high-res watercolor artwork */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full flex flex-col items-center"
          >
            <VietnamesePavilion size={420} showCrane={false} />
            <div className="mt-4 text-center">
              <span className="text-xs font-mono tracking-widest text-[#5C756B] uppercase">
                Đình làng cổ truyền · Không gian lễ nghi trang trọng
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
