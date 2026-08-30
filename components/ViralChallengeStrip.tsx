import Link from "next/link";

const prompts = [
  {
    title: "Reel format",
    copy: "POV: Indian society gives you a pop quiz and your trauma becomes a scorecard."
  },
  {
    title: "Story bait",
    copy: "Drop your persona. Tag the friend with the lowest boundary score."
  },
  {
    title: "Comment war",
    copy: "Is asking salary at weddings normal or a financial crime scene?"
  }
];

export function ViralChallengeStrip() {
  return (
    <section className="mt-8 rounded-[24px] border-2 border-lime bg-ink p-4 shadow-pop sm:p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-lime">Built For Instagram</p>
      <h2 className="mt-2 text-2xl font-black leading-none min-[390px]:text-3xl">Every result is a post. Every score is a fight.</h2>
      <div className="mt-5 grid gap-3">
        {prompts.map((prompt) => (
          <div key={prompt.title} className="rounded-2xl border-2 border-cream bg-coal p-4">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-yellow">{prompt.title}</p>
            <p className="mt-2 text-base font-black leading-tight min-[390px]:text-lg">{prompt.copy}</p>
          </div>
        ))}
      </div>
      <Link href="/viral" className="mt-4 grid min-h-12 place-items-center rounded-xl bg-pink px-5 text-center font-black text-cream">
        OPEN VIRAL MODE
      </Link>
    </section>
  );
}
