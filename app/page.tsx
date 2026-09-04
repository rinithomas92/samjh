import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { RoastGenerator } from "@/components/RoastGenerator";
import { SatireTicker } from "@/components/SatireTicker";
import { ThreeDHero } from "@/components/ThreeDHero";
import { TodayQuestion } from "@/components/TodayQuestion";

const features = ["Daily Roast", "Social IQ", "3D Score Meter", "Roast Generator", "Persona Drop", "Challenge Link"];

export default function Home() {
  return (
    <>
      <main className="mx-auto min-h-screen w-full max-w-md px-4 py-5 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
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
        <RoastGenerator />
        <section className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {features.map((feature, index) => (
            <div key={feature} className={`rounded-xl border-2 border-cream bg-coal p-4 text-lg font-black shadow-pop ${index % 3 === 0 ? "tilt-card" : ""}`}>
              {feature}
            </div>
          ))}
        </section>
        <section className="mb-8 rounded-2xl border-2 border-pink bg-ink p-5 shadow-pop">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-pink">Game Loop</p>
          <p className="mt-3 text-2xl font-black leading-tight">Play. Get roasted. Screenshot persona. Challenge a friend.</p>
        </section>
        <Disclaimer />
      </main>
      <SatireTicker />
    </>
  );
}
