import { describe, expect, it } from "vitest";
import { scenarios } from "@/data/scenarios";

describe("scenario response data", () => {
  it("gives each scenario's same-lettered option its own scores object", () => {
    const [first, second] = scenarios;
    first.responses.forEach((response, index) => {
      const sibling = second.responses[index];
      expect(response.id).toBe(sibling.id);
      expect(response.scores).not.toBe(sibling.scores);
      expect(response.scores).toEqual(sibling.scores);
    });
  });

  it("does not let mutating one scenario's response scores leak into another scenario", () => {
    const [first, second] = scenarios;
    const originalValue = second.responses[0].scores.empathy;

    first.responses[0].scores.empathy += 1000;

    expect(second.responses[0].scores.empathy).toBe(originalValue);
  });
});
