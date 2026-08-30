import { Disclaimer } from "@/components/Disclaimer";
import { ResultsClient } from "@/components/results/ResultsClient";

export default function ResultsPage() {
  return (
    <>
      <ResultsClient />
      <div className="px-4 pb-8">
        <Disclaimer />
      </div>
    </>
  );
}
