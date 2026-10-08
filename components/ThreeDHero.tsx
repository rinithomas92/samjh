import Link from "next/link";

const roastCards = [
  { title: "Self-Image", value: "CALIBRATE", tone: "who you become under pressure" },
  { title: "Feedback Loop", value: "LIVE", tone: "read room, adjust response" },
  { title: "Drama Load", value: "82%", tone: "family group warming up" }
];

export function ThreeDHero() {
  return (
    <section className="scene-3d relative overflow-hidden rounded-[28px] border border-cream/25 bg-ink p-4 shadow-lab sm:p-6">
      <div className="absolute inset-x-0 bottom-[-110px] h-56 stage-floor opacity-70" />
      <div className="absolute right-[-90px] top-[-90px] h-56 w-56 rounded-full border border-lime/25 bg-lime/10 blur-2xl" />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <p className="rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-black text-lime">SOCIAL FITNESS LAB</p>
          <p className="rounded-full bg-pink px-3 py-1 text-xs font-black text-cream sticker">SATIRE MODE</p>
        </div>
        <h1 className="mt-6 text-[2.8rem] font-black leading-[0.92] text-edge min-[390px]:text-6xl">
          You have IQ.
          <br />
          Can you survive Indian society?
        </h1>
        <p className="mt-5 text-base font-black leading-snug text-cream/80 min-[390px]:text-xl">A social intelligence game for pressure, boundaries, self-image, and perfectly unserious Indian situations.</p>
        <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-cream/15 bg-coal/80 p-2">
          {["Rehearse", "Respond", "Rewire"].map((step) => (
            <div key={step} className="rounded-xl bg-ink px-2 py-3 text-center text-[11px] font-black uppercase tracking-[0.08em] text-yellow">
              {step}
            </div>
          ))}
        </div>
        <div className="mt-7 grid gap-3">
          <Link href="/play" className="tap-shine grid min-h-14 place-items-center rounded-2xl bg-yellow px-6 text-lg font-black text-ink shadow-pop min-[390px]:text-xl">
            PLAY NOW
          </Link>
          <Link href="/launch" className="grid min-h-12 place-items-center rounded-2xl border border-lime/50 bg-lime/10 px-6 text-sm font-black text-lime">
            SEE THE METHOD
          </Link>
        </div>
        <div className="mt-7 grid gap-3 min-[390px]:grid-cols-3">
          {roastCards.map((card, index) => (
            <div key={card.title} className={`floaty rounded-xl border border-cream/20 bg-coal/95 p-3 ${index === 1 ? "tilt-card-right" : "tilt-card"}`}>
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-pink">{card.title}</p>
              <div className="mt-1 flex items-end justify-between gap-3 min-[390px]:block">
                <p className="text-xl font-black text-yellow">{card.value}</p>
                <p className="text-[11px] font-bold leading-tight text-cream/62 min-[390px]:mt-1">{card.tone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
