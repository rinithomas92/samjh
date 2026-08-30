import Link from "next/link";

export function TodayQuestion({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`scene-3d border-2 border-cream bg-coal p-4 shadow-pop sm:p-5 ${compact ? "rounded-xl" : "rounded-2xl"}`}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <p className="text-[11px] font-black uppercase tracking-[0.14em] text-lime sm:text-xs">Today's Social Challenge</p>
        <span className="rounded-lg bg-pink px-3 py-1 text-xs font-black text-cream sticker">Daily Roast</span>
      </div>
      <p className="text-sm text-cream/70">Friday, 5:57 PM.</p>
      <div className="tilt-card-right my-4 rounded-xl border-2 border-yellow bg-ink p-3 shadow-pop sm:p-4">
        <p className="text-sm font-bold text-yellow">Manager:</p>
        <p className="mt-1 text-xl font-black sm:text-2xl">"Hi. Quick call?"</p>
        <p className="mt-3 inline-block rounded-md bg-pink px-2 py-1 text-[11px] font-black text-cream sm:text-xs">Translation: weekend is a myth.</p>
      </div>
      <p className="mb-3 font-black">What would you do?</p>
      <div className="grid gap-2 text-sm font-bold">
        <div>A. Sure, let me abandon joy 😭</div>
        <div>B. Go offline like a startup founder after funding 💀</div>
        <div>C. Ask if it can wait until Monday</div>
        <div>D. Pretend Wi-Fi died</div>
      </div>
      {!compact && (
        <Link href="/play/corporate-majdoor" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-lime px-5 text-center font-black text-ink">
          Find out your Social IQ →
        </Link>
      )}
      <p className="mt-5 border-t border-cream/15 pt-4 text-center text-xs font-bold text-cream/60">SAMJH - The Indian Social Intelligence Game</p>
    </section>
  );
}
