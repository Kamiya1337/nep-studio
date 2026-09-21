import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SceneType, NepLook } from './types';
import { NEP_LOOKS } from './data/nepData';
import { Navigation } from './components/Navigation';
import { Scene01Hero } from './components/scenes/Scene01Hero';
import { Scene02Context } from './components/scenes/Scene02Context';
import { Scene03Vibe } from './components/scenes/Scene03Vibe';
import { Scene04Palette } from './components/scenes/Scene04Palette';
import { SceneTransitionGenerate } from './components/scenes/SceneTransitionGenerate';
import { Scene05Looks } from './components/scenes/Scene05Looks';
import { Scene06LookDetail } from './components/scenes/Scene06LookDetail';
import { Scene08CulturalStory } from './components/scenes/Scene08CulturalStory';
import { LookbookModal } from './components/LookbookModal';

export default function App() {
  const [currentScene, setCurrentScene] = useState<SceneType>('hero');
  const [selectedContextId, setSelectedContextId] = useState<string>('le-hoi');
  const [selectedVibeId, setSelectedVibeId] = useState<string>('thanh-nha');
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>('ngoc-thanh');
  const [selectedLookId, setSelectedLookId] = useState<number>(1);
  const [savedLooks, setSavedLooks] = useState<NepLook[]>([]);
  const [isLookbookOpen, setIsLookbookOpen] = useState<boolean>(false);

  // Lookbook handlers
  const handleSaveToLookbook = (look: NepLook) => {
    if (!savedLooks.some((l) => l.id === look.id)) {
      setSavedLooks([...savedLooks, look]);
    } else {
      setSavedLooks(savedLooks.filter((l) => l.id !== look.id));
    }
  };

  const handleRemoveFromLookbook = (lookId: number) => {
    setSavedLooks(savedLooks.filter((l) => l.id !== lookId));
  };

  const isCurrentLookSaved = savedLooks.some((l) => l.id === selectedLookId);

  // Reset flow
  const handleReset = () => {
    setCurrentScene('context');
  };

  // Smooth scroll to top whenever changing scene or active look for an uninterrupted reading flow
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentScene, selectedLookId]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2421] font-sans antialiased flex flex-col selection:bg-[#2A6B5B]/20 selection:text-[#0E382F]">
      {/* Top Header - Hidden on Hero scene per canonical reference */}
      {currentScene !== 'hero' && (
        <Navigation
          currentScene={currentScene}
          onNavigate={(scene) => setCurrentScene(scene)}
          savedCount={savedLooks.length}
          onOpenLookbook={() => setIsLookbookOpen(true)}
        />
      )}

      {/* Main Flow Container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentScene === 'hero' && (
            <motion.div
              key="scene-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Scene01Hero
                onStart={() => setCurrentScene('context')}
                onExploreHeritage={() => {
                  setSelectedLookId(1);
                  setCurrentScene('cultural_story');
                }}
              />
            </motion.div>
          )}

          {currentScene === 'context' && (
            <motion.div
              key="scene-context"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Scene02Context
                selectedContextId={selectedContextId}
                onSelectContext={(id) => setSelectedContextId(id)}
                onNext={() => setCurrentScene('vibe')}
              />
            </motion.div>
          )}

          {currentScene === 'vibe' && (
            <motion.div
              key="scene-vibe"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Scene03Vibe
                selectedContextId={selectedContextId}
                selectedVibeId={selectedVibeId}
                onSelectVibe={(id) => setSelectedVibeId(id)}
                onBack={() => setCurrentScene('context')}
                onNext={() => setCurrentScene('palette')}
              />
            </motion.div>
          )}

          {currentScene === 'palette' && (
            <motion.div
              key="scene-palette"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Scene04Palette
                selectedContextId={selectedContextId}
                selectedVibeId={selectedVibeId}
                selectedPaletteId={selectedPaletteId}
                onSelectPalette={(id) => setSelectedPaletteId(id)}
                onBack={() => setCurrentScene('vibe')}
                onGenerate={() => setCurrentScene('generate')}
              />
            </motion.div>
          )}

          {currentScene === 'generate' && (
            <motion.div
              key="scene-generate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SceneTransitionGenerate onComplete={() => setCurrentScene('looks')} />
            </motion.div>
          )}

          {currentScene === 'looks' && (
            <motion.div
              key="scene-looks"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Scene05Looks
                selectedLookId={selectedLookId}
                onSelectLook={(id) => setSelectedLookId(id)}
                onViewDetail={(id) => {
                  setSelectedLookId(id);
                  setCurrentScene('look_detail');
                }}
                onResetSelections={handleReset}
              />
            </motion.div>
          )}

          {currentScene === 'look_detail' && (
            <motion.div
              key="scene-look-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <Scene06LookDetail
                lookId={selectedLookId}
                onBackToLooks={() => setCurrentScene('looks')}
                onResetSelections={handleReset}
                onGoToStory={() => setCurrentScene('cultural_story')}
                onSaveToLookbook={handleSaveToLookbook}
                isSaved={isCurrentLookSaved}
              />
            </motion.div>
          )}

          {currentScene === 'cultural_story' && (
            <motion.div
              key="scene-cultural-story"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <Scene08CulturalStory
                lookId={selectedLookId}
                onBackToLooks={() => setCurrentScene('looks')}
                onSaveLook={handleSaveToLookbook}
                isSaved={isCurrentLookSaved}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Lookbook Modal */}
      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        savedLooks={savedLooks}
        onSelectLook={(id) => {
          setSelectedLookId(id);
          setCurrentScene('look_detail');
        }}
        onRemoveLook={handleRemoveFromLookbook}
      />

      {/* Editorial Footer - Hidden on Hero scene per canonical reference */}
      {currentScene !== 'hero' && (
        <footer className="w-full border-t border-[#E3D8C6] py-6 px-4 sm:px-8 bg-[#F4EFE6]/70 text-[#6B847A] text-xs font-light">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase">
              <span className="text-[#0E382F] font-bold">NẾP ARCHIVE</span>
              <span>·</span>
              <span>Khảo cứu điển chế phục thức Việt Nam</span>
            </div>

            <div className="flex items-center gap-6 font-mono text-[11px]">
              <button
                onClick={() => {
                  setSelectedLookId(1);
                  setCurrentScene('cultural_story');
                }}
                className="hover:text-[#0E382F] transition-colors cursor-pointer"
              >
                Khảo tập & Nguồn tư liệu
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  setSelectedLookId(1);
                  setCurrentScene('look_detail');
                }}
                className="hover:text-[#0E382F] transition-colors cursor-pointer"
              >
                Culture Guard 100%
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
