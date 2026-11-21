import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = { title: "Crédits" };

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Crédits</h1>
      <EmptyState
        title="Bientôt disponible"
        description="Capital restant dû, échéanciers et coût total (lot L4)."
      />
    </div>
  );
}
