import { notFound } from "next/navigation";
import { QuizClient } from "@/components/game/QuizClient";
import { getCharacter } from "@/data/characters";
import { getScenariosByCharacter } from "@/data/scenarios";

export default async function CharacterQuizPage({ params }: { params: Promise<{ character: string }> }) {
  const { character: characterId } = await params;
  const character = getCharacter(characterId);
  if (!character) notFound();
  const scenarios = getScenariosByCharacter(character.id);
  return <QuizClient character={character} scenarios={scenarios} />;
}
