import type { ResponseOption, Scores } from "@/types/game";
import { aggregateScores, calculateSocialIq, normalizeScores } from "@/lib/scoring/scoring";
import { selectPersona } from "@/lib/personas/personas";

const resultKey = "samjh:last-result";
const challengeKey = "samjh:challenge";

export interface StoredResult {
  characterId: string;
  scores: Scores;
  socialIq: number;
  personaId: string;
  answeredAt: string;
}

export interface Challenge {
  score: number;
  personaId: string;
}

export function saveResult(characterId: string, responses: ResponseOption[]) {
  const scores = normalizeScores(aggregateScores(responses), responses.length);
  const socialIq = calculateSocialIq(scores);
  const persona = selectPersona(scores);
  const result: StoredResult = {
    characterId,
    scores,
    socialIq,
    personaId: persona.id,
    answeredAt: new Date().toISOString()
  };
  window.localStorage.setItem(resultKey, JSON.stringify(result));
  return result;
}

export function readResult(): StoredResult | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(resultKey);
  return raw ? (JSON.parse(raw) as StoredResult) : null;
}

export function saveChallenge(challenge: Challenge) {
  window.sessionStorage.setItem(challengeKey, JSON.stringify(challenge));
}

export function readChallenge(): Challenge | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(challengeKey);
  return raw ? (JSON.parse(raw) as Challenge) : null;
}
