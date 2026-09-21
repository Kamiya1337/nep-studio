import React from 'react';
import { NepLogo } from './assets/NepLogo';
import { SceneType } from '../types';
import { Bookmark, RotateCcw, Home, Compass } from 'lucide-react';

interface NavigationProps {
  currentScene: SceneType;
  onNavigate: (scene: SceneType) => void;
  savedCount: number;
  onOpenLookbook: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentScene,
  onNavigate,
  savedCount,
  onOpenLookbook,
}) => {
  const getSceneBadge = () => {
    switch (currentScene) {
      case 'context':
        return '01 / NGỮ CẢNH';
      case 'vibe':
        return '02 / PHONG VỊ';
      case 'palette':
        return '03 / BẢNG SẮC';
      case 'generate':
        return 'ĐANG KHẢO CỨU & DỆT NẾP';
      case 'looks':
        return 'GỢI Ý DÀNH RIÊNG CHO BẠN';
      case 'look_detail':
        return 'HỒ SƠ PHỤC DỰNG ĐƯƠNG ĐẠI';
      case 'cultural_story':
        return 'CÂU CHUYỆN VĂN HÓA & NGUỒN CỘI';
      default:
        return 'VIỆT PHỤC ĐƯƠNG ĐẠI';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF7F2]/90 border-b border-[#E8DFD1]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          title="Trở về Trang chủ"
        >
          <NepLogo size={38} />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-[0.25em] text-[#0E382F] group-hover:text-[#1D5347] transition-colors">
              NẾP
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#55756C]">
              Định hình phong vị
            </span>
          </div>
        </button>

        {/* Center: Stage Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE5D8]/60 border border-[#DDD3C2] text-[#22443A] text-xs tracking-[0.15em] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2A6B5B] animate-pulse" />
          <span>{getSceneBadge()}</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Quick Step Links if in wizard */}
          {['context', 'vibe', 'palette'].includes(currentScene) && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#55756C] mr-2">
              <button
                onClick={() => onNavigate('context')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentScene === 'context'
                    ? 'font-bold text-[#0E382F] underline underline-offset-4 decoration-[#2A6B5B]'
                    : 'hover:text-[#0E382F]'
                }`}
              >
                01 Ngữ cảnh
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('vibe')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentScene === 'vibe'
                    ? 'font-bold text-[#0E382F] underline underline-offset-4 decoration-[#2A6B5B]'
                    : 'hover:text-[#0E382F]'
                }`}
              >
                02 Phong vị
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('palette')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentScene === 'palette'
                    ? 'font-bold text-[#0E382F] underline underline-offset-4 decoration-[#2A6B5B]'
                    : 'hover:text-[#0E382F]'
                }`}
              >
                03 Bảng sắc
              </button>
            </div>
          )}

          {/* Home / Reset button */}
          {currentScene !== 'hero' && (
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-1.5 text-xs text-[#55756C] hover:text-[#0E382F] px-2.5 py-1.5 rounded border border-[#DDD3C2]/80 hover:bg-[#F2ECE1] transition-colors"
              title="Về đầu trang"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Trang chủ</span>
            </button>
          )}

          {/* Lookbook Button */}
          <button
            onClick={onOpenLookbook}
            className="flex items-center gap-1.5 text-xs text-[#0E382F] bg-[#EDE4D5] hover:bg-[#E3D8C6] px-3 py-1.5 rounded-full border border-[#D5C9B5] transition-colors font-medium shadow-xs"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#2A6B5B]" />
            <span>Lookbook</span>
            <span className="w-4 h-4 rounded-full bg-[#0E382F] text-white text-[10px] flex items-center justify-center ml-0.5">
              {savedCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
