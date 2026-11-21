import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = { title: "Placements" };

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Placements</h1>
      <EmptyState
        title="Bientôt disponible"
        description="Positions d'investissement, valorisation et allocation (lot L3)."
      />
    </div>
  );
}
