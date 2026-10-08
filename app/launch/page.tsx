import Link from "next/link";

export default function LaunchPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-md px-4 py-5 sm:max-w-2xl md:max-w-4xl">
      <section className="rounded-[30px] border border-cream/20 bg-coal p-5 shadow-lab sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-lime">SAMJH Launch Story</p>
        <h1 className="mt-4 text-5xl font-black leading-[0.9] text-edge sm:text-7xl">Your social fitness check, but make it Indian.</h1>
        <p className="mt-5 text-lg font-bold leading-relaxed text-cream/75">
          Inspired by self-image, feedback loops, and mental rehearsal: SAMJH turns awkward social pressure into a fast, funny game people can screenshot, debate, and replay.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Hook", "You have IQ. But can you survive Indian society?"],
            ["Loop", "Play, laugh, get scored, share your persona."],
            ["CTA", "Tag the friend who has zero boundary score."]
          ].map(([label, text]) => (
            <article key={label} className="rounded-2xl border border-cream/15 bg-ink p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-pink">{label}</p>
              <p className="mt-3 text-xl font-black leading-tight text-yellow">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Link href="/play" className="grid min-h-14 place-items-center rounded-2xl bg-yellow px-6 text-center text-lg font-black text-ink shadow-pop">PLAY SAMJH</Link>
          <Link href="/" className="grid min-h-14 place-items-center rounded-2xl border border-lime/50 bg-lime/10 px-6 text-center text-lg font-black text-lime">VIEW LANDING</Link>
        </div>
      </section>
    </main>
  );
}
