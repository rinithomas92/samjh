const lines = [
  "Beta salary kitni hai?",
  "Just one small change.",
  "Quick call?",
  "Marriage also important.",
  "In our time...",
  "Protein se kidney kharab.",
  "Good news kab?",
  "Research karo beta."
];

export function SatireTicker() {
  const items = [...lines, ...lines];
  return (
    <div className="overflow-hidden border-y-2 border-cream bg-pink py-3 text-ink">
      <div className="ticker-track flex w-max gap-6 whitespace-nowrap text-sm font-black uppercase tracking-[0.12em]">
        {items.map((line, index) => (
          <span key={`${line}-${index}`}>◆ {line}</span>
        ))}
      </div>
    </div>
  );
}
