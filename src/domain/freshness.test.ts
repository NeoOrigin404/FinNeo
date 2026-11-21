import { describe, expect, it } from "vitest";
import { ageInDays, computeFreshness } from "./freshness";

const now = new Date("2026-11-21T12:00:00Z");
const daysAgo = (n: number) => new Date(now.getTime() - n * 86_400_000);

describe("ageInDays", () => {
  it("compte les jours entiers", () => {
    expect(ageInDays(daysAgo(3), now)).toBe(3);
    expect(ageInDays(new Date(now.getTime() - 3.9 * 86_400_000), now)).toBe(3);
  });
  it("ne renvoie jamais de valeur négative (date future)", () => {
    expect(ageInDays(new Date("2027-01-01T00:00:00Z"), now)).toBe(0);
  });
});

describe("computeFreshness", () => {
  it("fresh jusqu'au seuil inclus", () => {
    expect(computeFreshness(daysAgo(0), now)).toBe("fresh");
    expect(computeFreshness(daysAgo(30), now)).toBe("fresh");
  });
  it("stale au-delà de 30 j et jusqu'à 90 j inclus", () => {
    expect(computeFreshness(daysAgo(31), now)).toBe("stale");
    expect(computeFreshness(daysAgo(90), now)).toBe("stale");
  });
  it("obsolete au-delà de 90 j", () => {
    expect(computeFreshness(daysAgo(91), now)).toBe("obsolete");
  });
  it("respecte des seuils personnalisés", () => {
    const t = { staleAfterDays: 1, obsoleteAfterDays: 2 };
    expect(computeFreshness(daysAgo(2), now, t)).toBe("stale");
    expect(computeFreshness(daysAgo(3), now, t)).toBe("obsolete");
  });
  it("rejette des seuils incohérents", () => {
    expect(() => computeFreshness(now, now, { staleAfterDays: 10, obsoleteAfterDays: 5 })).toThrow(
      RangeError,
    );
  });
});
