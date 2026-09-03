const signals = [
  {
    label: "Friday call futures",
    value: "+58%",
    tone: "Managers buying aggressively after 5:55 PM.",
    color: "border-yellow text-yellow"
  },
  {
    label: "Rishta pressure index",
    value: "HIGH",
    tone: "Wedding season sentiment remains emotionally expensive.",
    color: "border-pink text-pink"
  },
  {
    label: "Gym advice volatility",
    value: "+31%",
    tone: "Protein rumours continue to ignore evidence.",
    color: "border-lime text-lime"
  },
  {
    label: "Boundary coin",
    value: "MOON",
    tone: "People discover the word no. Families request rollback.",
    color: "border-violet text-violet"
  }
];

export function ViralPulse() {
  return (
    <section className="scene-3d mt-8">
      <div className="relative overflow-hidden rounded-[24px] border-2 border-yellow bg-ink p-4 shadow-pop sm:p-5">
        <div className="absolute right-4 top-4 h-14 w-14 rounded-full border-2 border-pink/70 pulse-ring" aria-hidden />
        <p className="text-xs font-black uppercase tracking-[0.18em] text-lime">Live Social Market</p>
        <div className="mt-3 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-3xl font-black leading-none text-edge min-[390px]:text-4xl">India is trending awkward.</h2>
            <p className="mt-3 text-sm font-bold text-cream/68">Fresh signals from offices, weddings, gyms, and family WhatsApp.</p>
          </div>
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-cream bg-yellow text-center text-xs font-black text-ink tilt-card-right min-[390px]:h-20 min-[390px]:w-20 min-[390px]:text-sm">
            LIVE
            <span className="block text-lg min-[390px]:text-xl">3D</span>
          </div>
        </div>
        <div className="mt-5 grid gap-3">
          {signals.map((signal) => (
            <div key={signal.label} className={`tap-shine rounded-2xl border-2 bg-coal p-4 shadow-pop ${signal.color}`}>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-black uppercase tracking-[0.08em] text-cream">{signal.label}</p>
                <p className="rounded-lg bg-cream px-2 py-1 text-sm font-black text-ink">{signal.value}</p>
              </div>
              <p className="mt-2 text-sm font-bold text-cream/68">{signal.tone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
