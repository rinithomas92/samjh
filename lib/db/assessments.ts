import { neon } from "@neondatabase/serverless";
import type { Scores } from "@/types/game";

export interface AssessmentResponse {
  scenarioId: string;
  category: string;
  responseId: string;
  responseText: string;
  scores: Scores;
}

export interface AssessmentRecord {
  characterId: string;
  socialIq: number;
  personaId: string;
  scores: Scores;
  responses: AssessmentResponse[];
  answeredAt?: string;
  challenge?: {
    score: number;
    personaId: string;
  } | null;
}

type NeonSql = ReturnType<typeof neon>;

let sqlClient: NeonSql | null = null;
let schemaReady: Promise<void> | null = null;

function getDatabaseUrl() {
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
}

function getSql() {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }
  sqlClient ??= neon(databaseUrl);
  return sqlClient;
}

async function ensureSchema(sql: NeonSql) {
  schemaReady ??= sql`
    CREATE TABLE IF NOT EXISTS samjh_assessments (
      id text PRIMARY KEY,
      character_id text NOT NULL,
      social_iq integer NOT NULL,
      persona_id text NOT NULL,
      scores jsonb NOT NULL,
      responses jsonb NOT NULL,
      challenge jsonb,
      answered_at timestamptz,
      user_agent text,
      referrer text,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  `.then(() => undefined);
  await schemaReady;
}

export function isAssessmentDatabaseConfigured() {
  return Boolean(getDatabaseUrl());
}

export async function saveAssessment(record: AssessmentRecord, metadata: { userAgent?: string | null; referrer?: string | null }) {
  const sql = getSql();
  await ensureSchema(sql);

  const id = crypto.randomUUID();
  await sql`
    INSERT INTO samjh_assessments (
      id,
      character_id,
      social_iq,
      persona_id,
      scores,
      responses,
      challenge,
      answered_at,
      user_agent,
      referrer
    )
    VALUES (
      ${id},
      ${record.characterId},
      ${record.socialIq},
      ${record.personaId},
      ${JSON.stringify(record.scores)}::jsonb,
      ${JSON.stringify(record.responses)}::jsonb,
      ${record.challenge ? JSON.stringify(record.challenge) : null}::jsonb,
      ${record.answeredAt ?? null},
      ${metadata.userAgent ?? null},
      ${metadata.referrer ?? null}
    )
  `;

  return { id };
}
