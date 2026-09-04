import { CharacterCard } from "@/components/game/CharacterCard";
import { Disclaimer } from "@/components/Disclaimer";
import { characters } from "@/data/characters";
import { track } from "@/lib/analytics";

export default function PlayPage() {
  track("game_started");
  return (
    <main className="mx-auto min-h-screen w-full max-w-md px-4 py-5 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-lime">Choose your social battlefield</p>
      <h1 className="mt-2 text-4xl font-black leading-none text-edge sm:text-5xl">Who is testing your SAMJH today?</h1>
      <p className="mt-4 rounded-2xl border-2 border-yellow bg-ink p-4 text-sm font-black text-yellow shadow-pop">
        Every character is a boss level. Every answer is a public relations strategy with snacks nearby.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="mt-8">
        <Disclaimer />
      </div>
    </main>
  );
}
