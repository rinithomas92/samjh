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
    <article ref={cardRef} className={`scene-3d holo-card relative mx-auto w-full border-2 border-cream p-4 shadow-pop min-[360px]:p-5 sm:p-6 ${square ? "min-h-[420px] max-w-[420px] rounded-2xl" : "min-h-[600px] max-w-[390px] rounded-[clamp(18px,7vw,28px)] sm:min-h-[640px]"}`}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="absolute inset-x-0 bottom-[-92px] h-48 stage-floor opacity-55" />
      </div>
      <div className="absolute right-3 top-3 rotate-6 rounded-lg bg-pink px-2.5 py-1 text-[11px] min-[360px]:right-4 min-[360px]:top-4 min-[360px]:px-3 min-[360px]:text-xs font-black text-cream sticker">NO FILTER</div>
      <div className="absolute bottom-3 left-3 -rotate-3 rounded-lg bg-lime px-2.5 py-1 text-[11px] min-[360px]:bottom-4 min-[360px]:left-4 min-[360px]:px-3 min-[360px]:text-xs font-black text-ink sticker">BEAT THIS</div>
      <div className="relative flex min-h-[566px] flex-col sm:min-h-[588px]">
        <p className="pr-24 text-xs font-black tracking-[0.16em] text-yellow min-[360px]:text-sm min-[360px]:tracking-[0.2em]">SAMJH 🇮🇳</p>
        <p className="mt-1 text-xs font-bold uppercase text-cream/55">Your Society Survival Avatar</p>
        <div className="my-auto py-4">
          <h2 className="break-words text-[clamp(1.7rem,9vw,2.25rem)] font-black leading-tight text-edge">{persona.name} <span>{persona.emoji}</span></h2>
          <p className="mt-4 text-[clamp(3rem,16vw,3.75rem)] font-black leading-none text-yellow">{socialIq}<span className="text-2xl text-cream/60">/100</span></p>
          <p className="text-sm font-black uppercase tracking-[0.15em] text-pink">Social IQ</p>
          <p className="mt-5 rounded-2xl border-2 border-cream/20 bg-ink/90 p-3 text-base font-black leading-tight min-[360px]:text-lg">"{persona.quote}"</p>
        </div>
        <div className="grid gap-2">
          {topTraits.map(([key, icon, label]) => (
            <div key={key} className="flex items-center justify-between gap-3 rounded-xl border border-cream/15 bg-coal px-3 py-3 font-black min-[360px]:px-4">
              <span className="min-w-0">{icon} {label}</span>
              <span className="text-lime">{scores[key]}</span>
            </div>
          ))}
        </div>
        <p className="mb-10 mt-5 px-1 text-center text-xs font-black leading-snug text-cream min-[360px]:text-sm">Think you're socially smarter? Screenshot this and beat my score.</p>
      </div>
    </article>
  );
}
