export type AnalyticsEvent =
  | "game_started"
  | "character_selected"
  | "question_answered"
  | "quiz_completed"
  | "persona_generated"
  | "result_shared"
  | "challenge_created"
  | "challenge_started";

export function track(event: AnalyticsEvent, properties: Record<string, unknown> = {}) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", event, properties);
  }
}
