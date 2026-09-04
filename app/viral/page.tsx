import Link from "next/link";
import { TodayQuestion } from "@/components/TodayQuestion";

const reelScripts = [
  "Hook: You have IQ. But can you survive Indian society?",
  "Cut 1: Manager texts 'quick call?' at 5:57 PM.",
  "Cut 2: Choose option D. Laptop suddenly updates.",
  "Cut 3: Reveal persona card. Challenge viewers to beat your score."
];

const storyPolls = [
  "Your manager texts 'quick call?' at 5:57 PM. Reply or vanish?",
  "Aunty asks salary at a wedding. Honest answer or biryani escape?",
  "Gym trainer says no carbs forever. Respectfully nod or ask for sources?"
];

const commentBaits = [
  "What is the most Indian question ever asked by a relative?",
  "Is 'quick call' after office hours a crime against peace?",
  "Which SAMJH character is your family group chat?"
];

const grokPrompts = [
  "Animate a neon 3D Indian internet game poster for SAMJH. Charcoal background, electric yellow title, hot pink and lime stickers, spinning social score card, WhatsApp bubbles flying in, funny and chaotic, but polished.",
  "Create a 9:16 reel animation: Indian manager text bubble says 'Quick call?' at 5:57 PM, phone shakes, SAMJH logo appears, score meter jumps, final CTA: Can you survive Indian society?",
  "Animate a viral Instagram story for SAMJH with 3D floating quiz cards, sarcastic Hinglish captions, neon sticker energy, fast zooms, meme timing, and a final challenge link sticker."
];

const launchChecklist = [
  "Post the manager quick-call story poll first.",
  "Follow with your own SAMJH persona screenshot.",
  "Caption: Your IQ is cute. What is your SAMJH score?",
  "Add link sticker: play-samjh.vercel.app",
  "Reply to comments with challenge links."
];

export default function ViralPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-md px-4 py-5 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-black text-cream">SAMJH</Link>
        <Link href="/play" className="rounded-full bg-yellow px-4 py-2 text-sm font-black text-ink">Play</Link>
      </nav>
      <section className="scene-3d mt-8 rounded-[28px] border-2 border-yellow bg-ink p-5 shadow-pop">
        <p className="rounded-lg bg-pink px-3 py-1 text-xs font-black text-cream sticker">VIRAL MODE</p>
        <h1 className="mt-5 text-4xl font-black leading-none text-edge sm:text-5xl">Ready for Instagram.</h1>
        <p className="mt-4 text-lg font-bold text-cream/70">Post the question, reveal your persona, then dare friends to beat your SAMJH score.</p>
        <p className="mt-4 rounded-xl bg-coal p-3 text-sm font-black text-lime">URL: play-samjh.vercel.app</p>
      </section>
      <section className="mt-6">
        <TodayQuestion compact />
      </section>
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border-2 border-lime bg-coal p-5 shadow-pop">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-lime">15-Second Reel Script</p>
          <div className="mt-3 grid gap-2">
            {reelScripts.map((script) => (
              <p key={script} className="rounded-xl bg-ink p-3 text-sm font-black">{script}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-pink bg-ink p-5 shadow-pop">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-pink">Story Polls</p>
          <div className="mt-3 grid gap-2">
            {storyPolls.map((poll) => (
              <p key={poll} className="rounded-xl bg-coal p-3 text-sm font-black">{poll}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-yellow bg-coal p-5 shadow-pop">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow">Comment Baits</p>
          <div className="mt-3 grid gap-2">
            {commentBaits.map((bait) => (
              <p key={bait} className="rounded-xl bg-ink p-3 text-sm font-black">{bait}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-violet bg-ink p-5 shadow-pop">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet">Grok Animation Prompts</p>
          <div className="mt-3 grid gap-3">
            {grokPrompts.map((prompt) => (
              <p key={prompt} className="rounded-xl bg-coal p-3 text-sm font-bold leading-relaxed text-cream/80">{prompt}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-cream bg-coal p-5 shadow-pop">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cream/60">Launch Checklist</p>
          <div className="mt-3 grid gap-2">
            {launchChecklist.map((item) => (
              <p key={item} className="rounded-xl bg-ink p-3 text-sm font-black">{item}</p>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <Link href="/play" className="grid min-h-12 place-items-center rounded-xl bg-lime px-4 text-center font-black text-ink">PLAY NOW</Link>
        <Link href="/" className="grid min-h-12 place-items-center rounded-xl border-2 border-cream px-4 text-center font-black">HOME</Link>
      </div>
    </main>
  );
}
