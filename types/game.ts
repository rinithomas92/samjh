export interface Scores {
  socialAwareness: number;
  boundaries: number;
  empathy: number;
  sarcasm: number;
  assertiveness: number;
  escalationRisk: number;
}

export type ScoreKey = keyof Scores;

export interface ResponseOption {
  id: string;
  text: string;
  emoji?: string;
  scores: Scores;
  feedback: string;
  psychology: string;
}

export interface Scenario {
  id: string;
  characterId: string;
  category: string;
  context?: string;
  speaker?: string;
  situation: string;
  question: string;
  responses: ResponseOption[];
}

export interface Character {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  topics: string[];
  accent: string;
}

export interface Persona {
  id: string;
  name: string;
  emoji: string;
  description: string;
  quote: string;
}
