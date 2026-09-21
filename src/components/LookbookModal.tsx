import React from 'react';
import { NepLook } from '../types';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { NguThanGarment } from './assets/NguThanGarment';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedLooks: NepLook[];
  onSelectLook: (lookId: number) => void;
  onRemoveLook: (lookId: number) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  savedLooks,
  onSelectLook,
  onRemoveLook,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#DDD0BC] rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E3D8C6]">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-5 h-5 text-[#2A6B5B]" />
            <div>
              <h3 className="font-serif text-xl font-bold text-[#0E382F]">
                NẾP Lookbook của bạn
              </h3>
              <p className="text-xs text-[#55756C] font-light">
                {savedLooks.length} phối thức đã lưu trong phiên này
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EDE5D8] text-[#55756C] hover:text-[#0E382F] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto scroll-smooth space-y-4">
          {savedLooks.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#2A6B5B] flex items-center justify-center mx-auto mb-3">
                <Bookmark className="w-6 h-6 opacity-60" />
              </div>
              <p className="text-sm text-[#0E382F] font-serif font-bold">Chưa có phối thức nào được lưu</p>
              <p className="text-xs text-[#55756C] font-light mt-1 max-w-xs mx-auto">
                Khi xem chi tiết bất kỳ phối thức nào, hãy bấm nút "Lưu vào Lookbook" để lưu giữ lại.
              </p>
            </div>
          ) : (
            savedLooks.map((look) => (
              <div
                key={look.id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl border border-[#E3D9C9] bg-[#F4EFE6]/70 hover:border-[#2A6B5B] transition-all gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Mini Garment */}
                  <div className="w-16 h-20 shrink-0 bg-[#FAF7F2] rounded-lg border border-[#DDD3C2] flex items-center justify-center overflow-hidden">
                    <NguThanGarment size={68} paletteColors={look.hexCodes} showGuardPoints={false} />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2A6B5B]">
                      0{look.id} · {look.paletteName}
                    </span>
                    <h4 className="font-serif font-bold text-base text-[#0E382F]">
                      {look.name}
                    </h4>
                    <p className="text-xs text-[#55756C] font-light truncate max-w-xs">
                      {look.garmentType}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      {look.hexCodes.map((hex, i) => (
                        <span
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-black/10"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => {
                      onSelectLook(look.id);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0E382F] hover:bg-[#18483D] text-[#FAF7F2] rounded-full text-xs font-medium transition-colors cursor-pointer"
                  >
                    <span>Xem lại</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRemoveLook(look.id)}
                    className="p-2 rounded-full border border-[#D5C9B5] hover:bg-[#FAF7F2] text-[#8C4A4A] hover:text-[#B83A3A] transition-colors cursor-pointer"
                    title="Xóa khỏi Lookbook"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#EDE5D8]/50 border-t border-[#E3D8C6] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-[#0E382F] hover:bg-[#DFD4C2] rounded-full border border-[#D5C9B5] transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
