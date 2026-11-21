import type { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
}

export function EmptyState({ title, description, children }: Props) {
  return (
    <div className="glass animate-fade-up rounded-card flex flex-col items-center gap-3 p-8 text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-muted max-w-prose text-sm">{description}</p>
      {children}
    </div>
  );
}
