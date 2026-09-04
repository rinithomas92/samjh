"use client";

import Link from "next/link";
import { useState } from "react";

const roasts = [
  {
    setup: "Manager: Quick call?",
    punchline: "Your weekend has filed a missing person report.",
    verdict: "Corporate Majdoor energy detected."
  },
  {
    setup: "Relative: Salary kitni hai?",
    punchline: "The biryani counter suddenly becomes a witness protection program.",
    verdict: "Boundary score pending family audit."
  },
  {
    setup: "Dating app: Hey after 11 days",
    punchline: "This is not a text. This is a quarterly report.",
    verdict: "Situationship risk upgraded to spicy."
  },
  {
    setup: "Gym advice: Carbs mat kha beta",
    punchline: "Science has left the group chat.",
    verdict: "Unsolicited wisdom volatility high."
  },
  {
    setup: "Aunty: I am happy for you...",
    punchline: "The sentence has entered investigation mode.",
    verdict: "Compliment with hidden terms and conditions."
  }
];

export function RoastGenerator() {
  const [index, setIndex] = useState(0);
  const roast = roasts[index];

  function nextRoast() {
    setIndex((current) => (current + 1) % roasts.length);
  }

  return (
    <section className="mt-8 rounded-[24px] border-2 border-pink bg-coal p-4 shadow-pop sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-pink">Instant Roast Drop</p>
          <h2 className="mt-2 text-2xl font-black leading-none min-[390px]:text-3xl">Tap for social damage.</h2>
        </div>
        <button onClick={nextRoast} className="h-14 w-14 shrink-0 rounded-2xl border-2 border-cream bg-yellow text-2xl font-black text-ink shadow-pop glitch-pop min-[390px]:h-16 min-[390px]:w-16" aria-label="Generate another roast">
          ↻
        </button>
      </div>
      <div className="mt-5 rounded-2xl border-2 border-cream bg-ink p-4">
        <p className="text-sm font-black text-lime">{roast.setup}</p>
        <p className="mt-3 text-2xl font-black leading-tight text-edge min-[390px]:text-3xl">"{roast.punchline}"</p>
        <p className="mt-4 rounded-xl bg-pink px-3 py-2 text-sm font-black text-cream">{roast.verdict}</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Link href="/play" className="grid min-h-12 place-items-center rounded-xl bg-lime px-4 text-center font-black text-ink">PLAY QUIZ</Link>
        <Link href="/play/corporate-majdoor" className="grid min-h-12 place-items-center rounded-xl border-2 border-yellow px-4 text-center font-black text-yellow">TRY BOSS PING</Link>
      </div>
    </section>
  );
}
