import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 font-black tracking-wide text-cream">
      <span className="rounded-md bg-yellow px-2 py-1 text-lg text-ink shadow-pop">SAMJH</span>
      <span aria-hidden>🇮🇳</span>
    </Link>
  );
}
