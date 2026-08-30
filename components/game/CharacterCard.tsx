import Link from "next/link";
import type { Character } from "@/types/game";

const accentClass: Record<string, string> = {
  yellow: "bg-yellow text-ink",
  pink: "bg-pink text-cream",
  lime: "bg-lime text-ink",
  violet: "bg-violet text-cream"
};

export function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/play/${character.id}`} className="group scene-3d block rounded-2xl border-2 border-cream bg-coal p-4 shadow-pop transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none">
      <div className="flex items-start gap-3">
        <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl border-2 border-ink text-4xl sticker transition-transform group-hover:-translate-y-1 group-hover:rotate-3 ${accentClass[character.accent]}`}>{character.emoji}</div>
        <div>
          <p className="mb-1 inline-block rounded-md bg-ink px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-lime">Playable villain</p>
          <h2 className="text-xl font-black text-edge">{character.name}</h2>
          <p className="mt-1 text-sm font-semibold text-cream/72">"{character.tagline}"</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {character.topics.slice(0, 4).map((topic) => (
          <span key={topic} className="rounded-full border border-cream/20 px-3 py-1 text-xs font-bold text-cream/70">
            {topic}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-cream/15 pt-3 text-xs font-black text-yellow">
        <span>Tap to enter roast arena</span>
        <span>→</span>
      </div>
    </Link>
  );
}
