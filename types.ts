// Fix: Import React to resolve namespace error for React.ReactNode
import React from 'react';

export type PhraseCategory = 'person' | 'object' | 'abstract' | 'place' | 'food' | 'animal';

export interface PhrasePart {
  id: string;
  text: string;
  tags: string[]; // e.g., 'health', 'history', 'emotions'
  category?: PhraseCategory; // Only for END parts
  allowedCategories?: PhraseCategory[]; // Only for START parts
}

export interface PromptCombination {
  start: PhrasePart;
  end: PhrasePart;
  imgSeed?: number;
}

export interface ReferenceItem {
  id: string;
  title: string;
  category: 'grammar' | 'vocabulary';
  unit: '8' | '9' | '10'; // 8: Health, 9: History/Society, 10: Past Tenses
  tags: string[];
  content: React.ReactNode;
}

export interface ExampleStory {
  title: string;
  headline: string;
  story: string;
  grammarFocus: string;
}