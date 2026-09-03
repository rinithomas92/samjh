"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { saveResult } from "@/lib/storage";
import { responseDelta } from "@/lib/scoring/scoring";
import { track } from "@/lib/analytics";
import type { Character, ResponseOption, Scenario } from "@/types/game";

const labels = ["A", "B", "C", "D"];
const metricLabels: Record<string, string> = {
  socialAwareness: "Social Awareness",
  boundaries: "Boundaries",
  empathy: "Empathy",
  sarcasm: "Sarcasm",
  assertiveness: "Assertiveness",
  escalationRisk: "Drama Potential"
};

function satireVerdict(option: ResponseOption) {
  if (option.scores.escalationRisk >= 7) return "Clip-worthy, legally survivable, emotionally expensive.";
  if (option.scores.boundaries >= 8) return "Boundary deployed. Aunties may require two business days to process.";
  if (option.scores.empathy >= 8) return "Mature answer. Slightly suspicious, but effective.";
  if (option.scores.assertiveness <= 2) return "You survived the moment and betrayed your calendar.";
  return "Respectable move. Society remains annoying but manageable.";
}

export function QuizClient({ character, scenarios }: { character: Character; scenarios: Scenario[] }) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<ResponseOption[]>([]);
  const [selected, setSelected] = useState<ResponseOption | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const scenario = scenarios[index];
  const progress = useMemo(() => Math.round(((index + 1) / scenarios.length) * 100), [index, scenarios.length]);

  function choose(option: ResponseOption) {
    if (selected) return;
    setSelected(option);
    track("question_answered", { characterId: character.id, scenarioId: scenario.id, optionId: option.id });
  }

  function next() {
    if (!selected || submitting) return;
    setSubmitting(true);
    const updated = [...answers, selected];
    if (index === scenarios.length - 1) {
      const result = saveResult(character.id, updated);
      track("quiz_completed", { characterId: character.id, socialIq: result.socialIq });
      track("persona_generated", { personaId: result.personaId });
      router.push("/results");
      return;
    }
    setAnswers(updated);
    setSelected(null);
    setIndex((current) => current + 1);
    setSubmitting(false);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-5 sm:max-w-2xl md:max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-lime">{scenario.category}</p>
          <h1 className="text-xl font-black text-edge">{character.emoji} {character.name}</h1>
        </div>
        <div className="rounded-lg bg-yellow px-3 py-1 text-sm font-black text-ink sticker">{index + 1}/{scenarios.length}</div>
      </div>
      <div className="mb-3 h-3 rounded-full bg-cream/10">
        <div className="h-3 rounded-full bg-yellow transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="mb-5 flex items-center justify-between text-xs font-black uppercase tracking-[0.16em] text-cream/55">
        <span>Reputation Shield</span>
        <span>{100 - progress + 7}% unstable</span>
      </div>
      <section className="scene-3d slide-up overflow-hidden rounded-[28px] border-2 border-cream bg-coal p-5 shadow-pop">
        {scenario.context && <p className="mb-4 text-sm font-bold text-cream/65">{scenario.context}</p>}
        <div className="-rotate-1 max-w-full rounded-2xl rounded-tl-sm border-2 border-yellow bg-ink p-4 shadow-pop">
          {scenario.speaker && <p className="text-sm font-black text-pink">{scenario.speaker}:</p>}
          <p className="mt-1 text-2xl font-black leading-tight">"{scenario.situation}"</p>
          <p className="mt-3 inline-block rounded-md bg-lime px-2 py-1 text-xs font-black text-ink">NPC confidence: dangerously high</p>
        </div>
        <h2 className="mt-5 text-xl font-black">{scenario.question}</h2>
        <div className="mt-4 grid gap-3">
          {scenario.responses.map((option, optionIndex) => (
            <button
              key={option.id}
              onClick={() => choose(option)}
              disabled={!!selected}
              aria-disabled={!!selected}
              className={`min-h-16 rounded-xl border-2 p-4 text-left text-base font-black transition disabled:cursor-not-allowed ${selected?.id === option.id ? "border-yellow bg-yellow text-ink shadow-pop" : selected ? "border-cream/10 bg-ink text-cream/40" : "border-cream/25 bg-ink text-cream active:scale-[0.99]"}`}
            >
              <span className="mr-2 text-pink">{labels[optionIndex]}.</span>
              {option.text} <span aria-hidden>{option.emoji}</span>
            </button>
          ))}
        </div>
      </section>
      {selected && (
        <section className="scene-3d pop-in mt-5 rounded-[28px] border-2 border-yellow bg-ink p-5 shadow-pop">
          <p className="mb-2 inline-block rounded-lg bg-pink px-3 py-1 text-xs font-black text-cream sticker">PUBLIC REACTION</p>
          <h3 className="text-3xl font-black leading-none text-yellow text-edge">{selected.feedback}</h3>
          <p className="mt-3 rounded-xl border border-cream/15 bg-coal p-3 text-sm font-black text-lime">{satireVerdict(selected)}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {responseDelta(selected).map(({ key, value }) => (
              <div key={key} className="rounded-lg bg-coal px-3 py-2 text-sm font-bold">
                <span className="block text-cream/55">{metricLabels[key]}</span>
                <span className={key === "escalationRisk" ? "text-danger" : "text-lime"}>+{value * 2}</span>
              </div>
            ))}
          </div>
          <h4 className="mt-4 text-sm font-black text-pink">WHY THIS WORKS 🧠</h4>
          <p className="mt-1 text-sm leading-relaxed text-cream/75">{selected.psychology}</p>
          <button onClick={next} disabled={submitting} className="mt-5 min-h-12 w-full rounded-xl bg-pink px-5 font-black text-cream disabled:opacity-60">
            {index === scenarios.length - 1 ? "SEE MY PERSONA" : "NEXT SOCIAL DISASTER"}
          </button>
        </section>
      )}
    </main>
  );
}
