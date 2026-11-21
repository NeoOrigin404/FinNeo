/**
 * Fraîcheur d'une valeur financière (cf. phase-0-conception.md, M8).
 * Module pur : aucune dépendance UI ou base de données.
 */
export type Freshness = "fresh" | "stale" | "obsolete";

export interface FreshnessThresholds {
  /** Au-delà de ce nombre de jours, la valeur est « ancienne ». */
  staleAfterDays: number;
  /** Au-delà de ce nombre de jours, la valeur est « obsolète ». */
  obsoleteAfterDays: number;
}

/** Seuils par défaut, configurables par type de compte aux lots suivants. */
export const DEFAULT_THRESHOLDS: FreshnessThresholds = {
  staleAfterDays: 30,
  obsoleteAfterDays: 90,
};

const MS_PER_DAY = 86_400_000;

/** Nombre de jours entiers écoulés entre `asOf` et `now` (jamais négatif). */
export function ageInDays(asOf: Date, now: Date): number {
  const diff = now.getTime() - asOf.getTime();
  return Math.max(0, Math.floor(diff / MS_PER_DAY));
}

export function computeFreshness(
  asOf: Date,
  now: Date,
  thresholds: FreshnessThresholds = DEFAULT_THRESHOLDS,
): Freshness {
  if (thresholds.staleAfterDays > thresholds.obsoleteAfterDays) {
    throw new RangeError("staleAfterDays doit être ≤ obsoleteAfterDays");
  }
  const age = ageInDays(asOf, now);
  if (age > thresholds.obsoleteAfterDays) return "obsolete";
  if (age > thresholds.staleAfterDays) return "stale";
  return "fresh";
}
