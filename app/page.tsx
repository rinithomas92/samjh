import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { RoastGenerator } from "@/components/RoastGenerator";
import { SatireTicker } from "@/components/SatireTicker";
import { ThreeDHero } from "@/components/ThreeDHero";
import { TodayQuestion } from "@/components/TodayQuestion";

const features = ["Self-Image Check", "Social IQ", "Boundary Score", "Roast Generator", "Persona Drop", "Challenge Link"];

const labSignals = [
  {
    label: "Mental Rehearsal",
    value: "5 min",
    text: "Practice the response before the family function practices you."
  },
  {
    label: "Feedback Loop",
    value: "Instant",
    text: "Every answer shows the social cost, not a fake right-or-wrong verdict."
  },
  {
    label: "Self-Image Reset",
    value: "Persona",
    text: "Discover how you behave under pressure, then replay as a better version."
  }
];

export default function Home() {
  return (
    <>
      <main className="mx-auto min-h-screen w-full max-w-md px-4 py-5 sm:max-w-2xl md:max-w-3xl lg:max-w-6xl">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-black">SAMJH <span aria-hidden>🇮🇳</span></div>
          <div className="flex gap-2">
            <Link href="/play" className="rounded-full bg-cream px-4 py-2 text-sm font-black text-ink">Play</Link>
          </div>
        </nav>
        <section className="pt-7">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-lime">The Indian Social Intelligence Game</p>
          <ThreeDHero />
        </section>
        <section className="mt-9">
          <TodayQuestion />
        </section>
        <section className="mt-8 rounded-[28px] border border-cream/15 bg-coal p-4 shadow-lab sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-lime">Holistic Social Fitness</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-black leading-none text-edge sm:text-5xl">Train the image you carry into every awkward room.</h2>
            </div>
            <Link href="/launch" className="rounded-full border border-yellow/60 bg-yellow px-5 py-3 text-sm font-black text-ink shadow-pop">
              Launch Story Kit
            </Link>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {labSignals.map((signal) => (
              <article key={signal.label} className="rounded-2xl border border-cream/15 bg-ink p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-pink">{signal.label}</p>
                <p className="mt-3 text-3xl font-black text-yellow">{signal.value}</p>
                <p className="mt-3 text-sm font-bold leading-relaxed text-cream/72">{signal.text}</p>
              </article>
            ))}
          </div>
        </section>
        <RoastGenerator />
        <section className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {features.map((feature, index) => (
            <div key={feature} className={`rounded-xl border border-cream/25 bg-coal p-4 text-lg font-black shadow-pop ${index % 3 === 0 ? "tilt-card" : ""}`}>
              {feature}
            </div>
          ))}
        </section>
        <section className="mb-8 rounded-[28px] border border-pink/50 bg-ink p-5 shadow-lab">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-pink">Game Loop</p>
          <p className="mt-3 text-2xl font-black leading-tight">Play a scenario. Laugh. See your response pattern. Share the persona. Challenge a friend.</p>
        </section>
        <Disclaimer />
      </main>
      <SatireTicker />
    </>
  );
}
