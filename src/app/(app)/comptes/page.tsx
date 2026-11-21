import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = { title: "Comptes" };

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Comptes</h1>
      <EmptyState
        title="Bientôt disponible"
        description="Comptes courants, livrets, assurance-vie et comptes-titres seront gérés ici (lot L2)."
      />
    </div>
  );
}
