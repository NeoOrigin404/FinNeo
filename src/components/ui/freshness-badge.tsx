import { computeFreshness, ageInDays, type FreshnessThresholds } from "@/domain/freshness";

const LABELS = {
  fresh: { symbol: "●", text: "À jour", cls: "text-positive" },
  stale: { symbol: "◐", text: "Ancienne", cls: "text-warning" },
  obsolete: { symbol: "○", text: "Obsolète", cls: "text-negative" },
} as const;

interface Props {
  asOf: Date;
  now?: Date;
  thresholds?: FreshnessThresholds;
}

/** Pastille de fraîcheur : le sens est porté par le symbole ET le texte, pas par la couleur seule. */
export function FreshnessBadge({ asOf, now = new Date(), thresholds }: Props) {
  const state = computeFreshness(asOf, now, thresholds);
  const { symbol, text, cls } = LABELS[state];
  const age = ageInDays(asOf, now);
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium ${cls}`}>
      <span aria-hidden="true">{symbol}</span>
      <span>{text}</span>
      <span className="text-muted font-normal">· il y a {age} j</span>
    </span>
  );
}
