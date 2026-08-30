import type { ResponseOption, ScoreKey, Scores } from "@/types/game";

export const scoreKeys: ScoreKey[] = [
  "socialAwareness",
  "boundaries",
  "empathy",
  "sarcasm",
  "assertiveness",
  "escalationRisk"
];

export const emptyScores = (): Scores => ({
  socialAwareness: 0,
  boundaries: 0,
  empathy: 0,
  sarcasm: 0,
  assertiveness: 0,
  escalationRisk: 0
});

export function aggregateScores(responses: ResponseOption[]): Scores {
  return responses.reduce((total, response) => {
    scoreKeys.forEach((key) => {
      total[key] += response.scores[key];
    });
    return total;
  }, emptyScores());
}

export function normalizeScores(scores: Scores, rounds: number): Scores {
  const divisor = Math.max(rounds, 1) * 10;
  return scoreKeys.reduce((normal, key) => {
    normal[key] = Math.max(0, Math.min(100, Math.round((scores[key] / divisor) * 100)));
    return normal;
  }, emptyScores());
}

export function calculateSocialIq(scores: Scores): number {
  const constructive = scores.socialAwareness * 0.28 + scores.boundaries * 0.2 + scores.empathy * 0.2 + scores.assertiveness * 0.18 + scores.sarcasm * 0.08;
  const riskPenalty = scores.escalationRisk * 0.12;
  return Math.max(0, Math.min(100, Math.round(constructive - riskPenalty + 8)));
}

export function responseDelta(option: ResponseOption) {
  return scoreKeys.map((key) => ({ key, value: option.scores[key] }));
}

export function compareChallenge(playerScore: number, challengeScore: number) {
  if (playerScore > challengeScore) return "won";
  if (playerScore < challengeScore) return "lost";
  return "tied";
}
