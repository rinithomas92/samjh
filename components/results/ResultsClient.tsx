"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { getPersona } from "@/lib/personas/personas";
import { absoluteChallengeUrl, challengePath, shareText } from "@/lib/share";
import { readChallenge, readResult, type StoredResult } from "@/lib/storage";
import { compareChallenge } from "@/lib/scoring/scoring";
import { track } from "@/lib/analytics";
import { ResultCard } from "@/components/results/ResultCard";

const rows = [
  ["sarcasm", "🌶️ Sarcasm"],
  ["boundaries", "🛡️ Boundaries"],
  ["empathy", "❤️ Empathy"],
  ["socialAwareness", "🧠 Social Awareness"],
  ["assertiveness", "🗣️ Assertiveness"],
  ["escalationRisk", "💣 Drama Potential"]
] as const;

const EXPORT_CARD_WIDTH = 390;

export function ResultsClient() {
  const [result, setResult] = useState<StoredResult | null>(null);
  const [message, setMessage] = useState("");
  const [exporting, setExporting] = useState(false);
  const exportCardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setResult(readResult());
  }, []);

  if (!result) {
    return (
      <main className="mx-auto grid min-h-screen max-w-md place-items-center px-4 text-center sm:max-w-2xl">
        <div>
          <h1 className="text-4xl font-black">No result yet.</h1>
          <Link href="/play" className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-yellow px-6 font-black text-ink">Play SAMJH</Link>
        </div>
      </main>
    );
  }

  const persona = getPersona(result.personaId);
  const challenge = readChallenge();
  const comparison = challenge ? compareChallenge(result.socialIq, challenge.score) : null;
  const instagramCaption = `I got ${persona.name} with ${result.socialIq}/100 Social IQ on SAMJH. Indian society gave me scenarios. I gave it consequences. Beat my score: ${absoluteChallengeUrl(result)}`;

  async function share() {
    if (!result) return;
    const url = absoluteChallengeUrl(result);
    const status = await shareText("My SAMJH Persona", `My Social IQ score is ${result.socialIq}, and I got ${persona.name}. Beat my score.`, url);
    setMessage(status === "shared" ? "Shared. Drama responsibly distributed." : "Challenge link copied.");
    track("result_shared", { socialIq: result.socialIq, personaId: persona.id });
  }

  function createChallenge() {
    if (!result) return;
    navigator.clipboard.writeText(absoluteChallengeUrl(result));
    setMessage("Challenge link copied.");
    track("challenge_created", { socialIq: result.socialIq, personaId: persona.id });
  }

  function copyInstagramCaption() {
    if (!result) return;
    navigator.clipboard.writeText(instagramCaption);
    setMessage("Instagram caption copied. Add the screenshot, then start the fight.");
    track("result_shared", { socialIq: result.socialIq, personaId: persona.id, channel: "instagram_caption" });
  }

  function nextFrame() {
    return new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  }

  async function saveImage() {
    if (!result) return;
    setExporting(true);
    try {
      // Mount the fixed-size off-screen export clone and let it paint before measuring it,
      // so the capture never depends on the live page's scroll position or responsive width.
      await nextFrame();
      if (document.fonts?.ready) await document.fonts.ready;
      const node = exportCardRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const image = await toPng(node, {
        pixelRatio: 3,
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height),
        cacheBust: true
      });
      const link = document.createElement("a");
      link.download = `samjh-${persona.id}-${result.socialIq}.png`;
      link.href = image;
      link.click();
      setMessage("Share card saved as PNG.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-md px-4 py-5 sm:max-w-2xl md:max-w-3xl">
      {comparison && (
        <div className="mb-4 rounded-2xl border-2 border-cream bg-coal p-4 text-center shadow-pop">
          <p className="text-sm font-black text-cream/65">CHALLENGE RESULT</p>
          <p className="mt-1 text-3xl font-black text-yellow">{comparison === "won" ? "YOU WON 😂" : comparison === "lost" ? "THEY SURVIVED BETTER 💀" : "SOCIAL STALEMATE 🤝"}</p>
        </div>
      )}
      <ResultCard persona={persona} scores={result.scores} socialIq={result.socialIq} />
      <section className="mt-5 rounded-2xl border-2 border-cream bg-coal p-5 shadow-pop">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-pink">Scoreboard</p>
        <h1 className="mt-1 text-2xl font-black leading-tight">{persona.description}</h1>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {rows.map(([key, label]) => (
            <div key={key} className="flex items-center justify-between rounded-xl bg-ink px-4 py-3 font-black">
              <span>{label}</span>
              <span className={key === "escalationRisk" ? "text-danger" : "text-lime"}>{result.scores[key]}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border-2 border-pink bg-ink p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-pink">Caption Ready</p>
          <p className="mt-2 text-sm font-bold leading-relaxed text-cream/75">{instagramCaption}</p>
        </div>
        <div className="mt-5 grid gap-3">
          <button onClick={share} className="min-h-12 rounded-xl bg-yellow px-5 font-black text-ink">SHARE RESULT</button>
          <button onClick={copyInstagramCaption} className="min-h-12 rounded-xl bg-violet px-5 font-black text-cream">COPY INSTA CAPTION</button>
          <button onClick={saveImage} className="min-h-12 rounded-xl bg-lime px-5 font-black text-ink">SAVE SHARE CARD</button>
          <button onClick={createChallenge} className="min-h-12 rounded-xl bg-pink px-5 font-black text-cream">CHALLENGE A FRIEND</button>
          <Link href="/play" className="grid min-h-12 place-items-center rounded-xl border-2 border-cream px-5 text-center font-black">PLAY ANOTHER CHARACTER</Link>
          {message && <p className="text-center text-sm font-bold text-lime">{message}</p>}
          <Link href={challengePath(result)} className="text-center text-sm font-bold text-cream/60">Open challenge page</Link>
        </div>
      </section>
      <section className="mt-8">
        <ResultCard persona={persona} scores={result.scores} socialIq={result.socialIq} square />
      </section>
      {exporting && (
        <div aria-hidden style={{ position: "fixed", top: 0, left: -10000, width: EXPORT_CARD_WIDTH, pointerEvents: "none" }}>
          <ResultCard cardRef={exportCardRef} persona={persona} scores={result.scores} socialIq={result.socialIq} />
        </div>
      )}
    </main>
  );
}
