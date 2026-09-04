import type { Persona, Scores } from "@/types/game";

export const personas: Persona[] = [
  {
    id: "diplomatic-menace",
    name: "THE DIPLOMATIC MENACE",
    emoji: "😎",
    description: "You don't start drama. But somehow you always finish it.",
    quote: "You read the room. You simply don't always obey it."
  },
  {
    id: "boundary-boss",
    name: "THE BOUNDARY BOSS",
    emoji: "🛡️",
    description: "‘No’ is a complete sentence. You apparently received the memo.",
    quote: "Your calendar has walls and people are learning to respect architecture."
  },
  {
    id: "peacekeeper",
    name: "THE PEACEKEEPER",
    emoji: "🕊️",
    description: "You can defuse an Indian family function before dessert.",
    quote: "You lower the volume without losing the plot."
  },
  {
    id: "chaos-consultant",
    name: "THE CHAOS CONSULTANT",
    emoji: "🌶️",
    description: "You understand social intelligence. You occasionally choose entertainment instead.",
    quote: "You know the mature option. You also know the funnier one."
  },
  {
    id: "people-pleaser",
    name: "THE PEOPLE PLEASER",
    emoji: "😭",
    description: "Everyone is comfortable. Except you.",
    quote: "Your niceness is real. Your boundaries need a gym membership."
  },
  {
    id: "human-hr-department",
    name: "THE HUMAN HR DEPARTMENT",
    emoji: "🧠",
    description: "You somehow turn arguments into action items.",
    quote: "You entered the fight and left with the meeting minutes."
  },
  {
    id: "silent-escapist",
    name: "THE SILENT ESCAPIST",
    emoji: "🏃",
    description: "You don't resolve conflict. You become mysteriously unavailable.",
    quote: "Your strongest boundary is airplane mode."
  }
];

export function getPersona(id: string) {
  return personas.find((persona) => persona.id === id) ?? personas[0];
}

export function selectPersona(scores: Scores): Persona {
  const { socialAwareness, boundaries, empathy, sarcasm, assertiveness, escalationRisk } = scores;

  if (boundaries < 35 && assertiveness < 35) return getPersona("people-pleaser");
  if (assertiveness < 35 && socialAwareness < 55) return getPersona("silent-escapist");
  if (sarcasm >= 78 && escalationRisk >= 55) return getPersona("chaos-consultant");
  if (boundaries >= 78 && assertiveness >= 65 && escalationRisk < 60) return getPersona("boundary-boss");
  if (empathy >= 78 && escalationRisk < 40) return getPersona("peacekeeper");
  if (socialAwareness >= 72 && empathy >= 60 && assertiveness >= 58 && escalationRisk < 55) return getPersona("human-hr-department");
  return getPersona("diplomatic-menace");
}
