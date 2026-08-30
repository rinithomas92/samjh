import Link from "next/link";

const roastCards = [
  { title: "Boss Ping", value: "5:57 PM", tone: "threat level: unpaid" },
  { title: "Aunty Radar", value: "ACTIVE", tone: "salary detected" },
  { title: "Drama Index", value: "82%", tone: "family group loading" }
];

export function ThreeDHero() {
  return (
    <section className="scene-3d relative overflow-hidden rounded-[24px] border-2 border-cream bg-ink p-4 shadow-pop sm:p-5">
      <div className="absolute inset-x-0 bottom-[-110px] h-56 stage-floor opacity-70" />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <p className="rounded-lg bg-yellow px-3 py-1 text-xs font-black text-ink sticker">SAMJH 2.0</p>
          <p className="rounded-lg bg-pink px-3 py-1 text-xs font-black text-cream sticker">SATIRE MODE</p>
        </div>
        <h1 className="mt-6 text-[3rem] font-black leading-[0.92] text-edge min-[390px]:text-6xl">
          You have IQ.
          <br />
          Can you survive Indian society?
        </h1>
        <p className="mt-5 text-base font-black leading-snug text-cream/78 min-[390px]:text-xl">A 3D roast simulator for office calls, rishta pressure, gym advice, and WhatsApp University.</p>
        <div className="mt-7 grid gap-3">
          <Link href="/play" className="grid min-h-14 place-items-center rounded-2xl bg-yellow px-6 text-lg font-black text-ink shadow-pop min-[390px]:text-xl">
            PLAY NOW
          </Link>
          <Link href="/viral" className="grid min-h-12 place-items-center rounded-2xl border-2 border-lime px-6 text-sm font-black text-lime">
            MAKE IT VIRAL
          </Link>
        </div>
        <div className="mt-7 grid gap-3 min-[390px]:grid-cols-3">
          {roastCards.map((card, index) => (
            <div key={card.title} className={`floaty rounded-xl border-2 border-cream bg-coal p-3 ${index === 1 ? "tilt-card-right" : "tilt-card"}`}>
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
