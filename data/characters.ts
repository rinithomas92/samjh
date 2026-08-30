import type { Character } from "@/types/game";

export const characters: Character[] = [
  {
    id: "corporate-majdoor",
    name: "Corporate Majdoor",
    emoji: "💻",
    tagline: "Teams green. Soul offline.",
    topics: ["Friday calls", "deadlines", "managers", "office politics", "appraisal season"],
    accent: "yellow"
  },
  {
    id: "bossy-boss",
    name: "Bossy Boss",
    emoji: "👔",
    tagline: "It's just one small change.",
    topics: ["scope creep", "button logic", "urgent pings", "jargon", "roadmaps"],
    accent: "violet"
  },
  {
    id: "confused-gen-z",
    name: "Confused Gen Z",
    emoji: "📱",
    tagline: "Career unclear. Situationship complicated. Battery 4%.",
    topics: ["situationships", "ghosting", "dating apps", "AI", "comparison"],
    accent: "pink"
  },
  {
    id: "cheater-uncle",
    name: "Cheater Uncle",
    emoji: "🕶️",
    tagline: "Lectures everyone about values.",
    topics: ["hypocrisy", "loyalty", "double standards", "values", "cognitive dissonance"],
    accent: "lime"
  },
  {
    id: "retired-government-employee",
    name: "Retired Government Employee",
    emoji: "🏛️",
    tagline: "In our time...",
    topics: ["government jobs", "pension", "private jobs", "entrepreneurship", "job security"],
    accent: "yellow"
  },
  {
    id: "gym-aunty",
    name: "Gym Aunty",
    emoji: "🏋️‍♀️",
    tagline: "Beta, I'm only saying this for your own good.",
    topics: ["body comments", "protein", "trainers", "clothes", "unsolicited advice"],
    accent: "pink"
  },
  {
    id: "competitive-aunty",
    name: "Competitive Aunty",
    emoji: "👀",
    tagline: "I'm happy for you... but why do you need to do so much?",
    topics: ["comparison", "insecurity", "ambition", "career judgment", "education"],
    accent: "violet"
  },
  {
    id: "indian-relative",
    name: "Indian Relative",
    emoji: "💍",
    tagline: "Beta, salary kitni hai?",
    topics: ["salary", "marriage", "children", "property", "weddings"],
    accent: "lime"
  }
];

export function getCharacter(id: string) {
  return characters.find((character) => character.id === id);
}
