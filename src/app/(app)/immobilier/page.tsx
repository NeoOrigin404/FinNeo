import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = { title: "Immobilier" };

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Immobilier</h1>
      <EmptyState
        title="Bientôt disponible"
        description="Biens immobiliers et autres actifs, avec valeur estimée datée (lot L2)."
      />
    </div>
  );
}
