import { NextRequest, NextResponse } from "next/server";
import { isAssessmentDatabaseConfigured, saveAssessment, type AssessmentRecord } from "@/lib/db/assessments";
import type { Scores } from "@/types/game";

export const runtime = "nodejs";

const scoreKeys: Array<keyof Scores> = ["socialAwareness", "boundaries", "empathy", "sarcasm", "assertiveness", "escalationRisk"];

function isScores(value: unknown): value is Scores {
  if (!value || typeof value !== "object") return false;
  return scoreKeys.every((key) => typeof (value as Record<string, unknown>)[key] === "number");
}

function isAssessmentRecord(value: unknown): value is AssessmentRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<AssessmentRecord>;
  return (
    typeof record.characterId === "string" &&
    typeof record.socialIq === "number" &&
    Number.isFinite(record.socialIq) &&
    typeof record.personaId === "string" &&
    isScores(record.scores) &&
    Array.isArray(record.responses) &&
    record.responses.every((response) => {
      if (!response || typeof response !== "object") return false;
      const item = response as unknown as Record<string, unknown>;
      return (
        typeof item.scenarioId === "string" &&
        typeof item.category === "string" &&
        typeof item.responseId === "string" &&
        typeof item.responseText === "string" &&
        isScores(item.scores)
      );
    })
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  if (!isAssessmentRecord(body)) {
    return NextResponse.json({ error: "Invalid assessment payload" }, { status: 400 });
  }

  if (!isAssessmentDatabaseConfigured()) {
    return NextResponse.json({ error: "Assessment database is not configured" }, { status: 503 });
  }

  try {
    const saved = await saveAssessment(body, {
      userAgent: request.headers.get("user-agent"),
      referrer: request.headers.get("referer")
    });
    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    console.error("[api/assessments] failed to save assessment", error);
    return NextResponse.json({ error: "Unable to save assessment" }, { status: 500 });
  }
}
