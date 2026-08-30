import { describe, expect, it } from "vitest";
import { aggregateScores, compareChallenge, normalizeScores, calculateSocialIq } from "@/lib/scoring/scoring";
import { selectPersona } from "@/lib/personas/personas";
import type { ResponseOption, Scores } from "@/types/game";

const scores = (value: Partial<Scores>): Scores => ({
  socialAwareness: 0,
  boundaries: 0,
  empathy: 0,
  sarcasm: 0,
  assertiveness: 0,
  escalationRisk: 0,
  ...value
});

const option = (value: Partial<Scores>): ResponseOption => ({
  id: "x",
  text: "x",
  scores: scores(value),
  feedback: "x",
  psychology: "x"
});

describe("scoring", () => {
  it("aggregates response scores", () => {
    expect(aggregateScores([option({ boundaries: 4 }), option({ boundaries: 6, sarcasm: 5 })])).toMatchObject({ boundaries: 10, sarcasm: 5 });
  });

  it("normalizes scores to 0-100", () => {
    expect(normalizeScores(scores({ empathy: 25, escalationRisk: 60 }), 5)).toMatchObject({ empathy: 50, escalationRisk: 100 });
  });

  it("calculates a bounded social IQ", () => {
    expect(calculateSocialIq(scores({ socialAwareness: 90, boundaries: 90, empathy: 70, sarcasm: 80, assertiveness: 80, escalationRisk: 20 }))).toBeGreaterThan(75);
  });

  it("selects deterministic personas from score combinations", () => {
    expect(selectPersona(scores({ boundaries: 90, assertiveness: 80, escalationRisk: 20 })).id).toBe("boundary-boss");
    expect(selectPersona(scores({ boundaries: 10, assertiveness: 10 })).id).toBe("people-pleaser");
    expect(selectPersona(scores({ boundaries: 70, assertiveness: 70, sarcasm: 90, escalationRisk: 80 })).id).toBe("chaos-consultant");
  });

  it("compares challenge scores", () => {
    expect(compareChallenge(88, 87)).toBe("won");
    expect(compareChallenge(50, 87)).toBe("lost");
    expect(compareChallenge(87, 87)).toBe("tied");
  });
});
