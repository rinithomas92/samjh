import type { Ref } from "react";
import type { Persona, Scores } from "@/types/game";

const traits: Array<[keyof Scores, string, string]> = [
  ["sarcasm", "🌶️", "Sarcasm"],
  ["boundaries", "🛡️", "Boundaries"],
  ["empathy", "❤️", "Empathy"],
  ["socialAwareness", "🧠", "Social Awareness"],
  ["assertiveness", "🗣️", "Assertiveness"],
  ["escalationRisk", "💣", "Drama Potential"]
];

export function ResultCard({ persona, scores, socialIq, square = false, cardRef }: { persona: Persona; scores: Scores; socialIq: number; square?: boolean; cardRef?: Ref<HTMLElement> }) {
  const topTraits = traits
    .filter(([key]) => key !== "escalationRisk")
    .sort((a, b) => scores[b[0]] - scores[a[0]])
    .slice(0, 3);

  return (
    <article ref={cardRef} className={`scene-3d holo-card relative mx-auto w-full overflow-hidden border-2 border-cream p-6 shadow-pop ${square ? "aspect-square max-w-[420px] rounded-2xl" : "aspect-[9/16] max-w-[390px] rounded-[28px]"}`}>
      <div className="absolute inset-x-0 bottom-[-92px] h-48 stage-floor opacity-55" />
      <div className="absolute right-4 top-4 rotate-6 rounded-lg bg-pink px-3 py-1 text-xs font-black text-cream sticker">NO FILTER</div>
      <div className="absolute bottom-4 left-4 -rotate-3 rounded-lg bg-lime px-3 py-1 text-xs font-black text-ink sticker">BEAT THIS</div>
      <div className="relative flex h-full flex-col">
        <p className="text-sm font-black tracking-[0.2em] text-yellow">SAMJH 🇮🇳</p>
        <p className="mt-1 text-xs font-bold uppercase text-cream/55">Your Society Survival Avatar</p>
        <div className="my-auto">
          <h2 className="text-4xl font-black leading-none text-edge">{persona.name} <span>{persona.emoji}</span></h2>
          <p className="mt-4 text-6xl font-black text-yellow">{socialIq}<span className="text-2xl text-cream/60">/100</span></p>
          <p className="text-sm font-black uppercase tracking-[0.15em] text-pink">Social IQ</p>
          <p className="mt-5 rounded-2xl border-2 border-cream/20 bg-ink/90 p-3 text-lg font-black leading-tight">"{persona.quote}"</p>
        </div>
        <div className="grid gap-2">
          {topTraits.map(([key, icon, label]) => (
            <div key={key} className="flex items-center justify-between rounded-xl border border-cream/15 bg-coal px-4 py-3 font-black">
              <span>{icon} {label}</span>
              <span className="text-lime">{scores[key]}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-sm font-black text-cream">Think you're socially smarter? Screenshot this and beat my score.</p>
      </div>
    </article>
  );
}
