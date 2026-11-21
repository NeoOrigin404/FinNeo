import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FreshnessBadge } from "./freshness-badge";

const now = new Date("2026-11-21T12:00:00Z");
const daysAgo = (n: number) => new Date(now.getTime() - n * 86_400_000);

describe("FreshnessBadge", () => {
  it("affiche le texte « À jour » pour une valeur récente", () => {
    render(<FreshnessBadge asOf={daysAgo(2)} now={now} />);
    expect(screen.getByText("À jour")).toBeInTheDocument();
    expect(screen.getByText(/il y a 2 j/)).toBeInTheDocument();
  });
  it("affiche « Obsolète » avec un texte (pas seulement une couleur)", () => {
    render(<FreshnessBadge asOf={daysAgo(120)} now={now} />);
    expect(screen.getByText("Obsolète")).toBeInTheDocument();
  });
});
