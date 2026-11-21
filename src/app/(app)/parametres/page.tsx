import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = { title: "Paramètres" };

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Paramètres</h1>
      <EmptyState
        title="Bientôt disponible"
        description="Profil, sécurité, espaces, export et suppression des données (lots L1 et L7)."
      />
    </div>
  );
}
