export type SceneType =
  | 'hero'
  | 'context'
  | 'vibe'
  | 'palette'
  | 'generate'
  | 'looks'
  | 'look_detail'
  | 'cultural_story';

export interface ContextOption {
  id: string;
  number: string;
  title: string;
  description: string;
  subtitle: string;
}

export interface VibeOption {
  id: string;
  title: string;
  description: string;
  essence: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  vietnameseName: string;
  description: string;
  swatches: string[];
  hexCodes: string[];
  meaning: string;
}

export interface CultureGuardPoint {
  id: string;
  name: string;
  title: string;
  description: string;
  significance: string;
  x: number; // percentage on garment
  y: number; // percentage on garment
}

export interface NepLook {
  id: number;
  code: string;
  name: string;
  garmentType: string;
  paletteName: string;
  silhouette: string;
  whyFits: string;
  mainGarmentDesc: string;
  paletteDesc: string;
  swatches: string[];
  hexCodes: string[];
  accessoriesDesc: string;
  badge: string;
  historicalPeriod: string;
  cultureGuardNote: string;
}

export interface UserSelections {
  contextId: string;
  vibeId: string;
  paletteId: string;
  selectedLookId: number;
}
