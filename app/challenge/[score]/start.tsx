"use client";

import Link from "next/link";
import { saveChallenge, type Challenge } from "@/lib/storage";
import { track } from "@/lib/analytics";

export function ChallengeStart({ challenge }: { challenge: Challenge }) {
  return (
    <Link
      href="/play"
      onClick={() => {
        saveChallenge(challenge);
        track("challenge_started", { score: challenge.score, personaId: challenge.personaId });
      }}
      className="mt-6 grid min-h-14 w-full place-items-center rounded-2xl bg-yellow px-6 text-xl font-black text-ink shadow-pop"
    >
      BEAT THEIR SCORE
    </Link>
  );
}
