import Link from "next/link";
import { ChallengeStart } from "./start";
import { getPersona } from "@/lib/personas/personas";

function parseChallenge(value: string) {
  const match = value.match(/^(\d{1,3})-(.+)$/);
  if (!match) return { score: 0, personaId: "diplomatic-menace" };
  return { score: Math.min(100, Number(match[1])), personaId: match[2] };
}

export default async function ChallengePage({ params }: { params: Promise<{ score: string }> }) {
  const { score } = await params;
  const challenge = parseChallenge(score);
  const persona = getPersona(challenge.personaId);
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-md place-items-center px-4 py-5 text-center">
      <section className="rounded-2xl border-2 border-cream bg-coal p-6 shadow-pop">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-lime">SAMJH Challenge</p>
        <h1 className="mt-3 text-5xl font-black leading-none">Your friend scored <span className="text-yellow">{challenge.score}</span> Social IQ.</h1>
        <p className="mt-4 text-xl font-bold text-cream/75">They got {persona.name} {persona.emoji}. Can you survive Indian society better?</p>
        <ChallengeStart challenge={challenge} />
        <Link href="/" className="mt-4 inline-block text-sm font-bold text-cream/55">What is SAMJH?</Link>
      </section>
    </main>
  );
}
