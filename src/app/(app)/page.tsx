import { EmptyState } from "@/components/ui/empty-state";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
      <EmptyState
        title="Ajoutez votre premier compte"
        description="Le patrimoine net, la répartition et l'évolution apparaîtront ici dès que des comptes, placements ou crédits auront été saisis. Aucune donnée n'est affichée tant que rien n'est enregistré."
      />
    </div>
  );
}
