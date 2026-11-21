"use client";

import { Home, Landmark, LineChart, MoreHorizontal, Wallet, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_ITEMS, isActive } from "@/lib/nav";

const ICONS: Record<string, LucideIcon> = {
  "/": Home,
  "/comptes": Wallet,
  "/placements": LineChart,
  "/credits": Landmark,
};

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const tabs = NAV_ITEMS.filter((i) => i.mobileTab);
  const moreActive =
    NAV_ITEMS.some((i) => !i.mobileTab && isActive(pathname, i.href)) || pathname === "/plus";

  return (
    <div className="min-h-dvh md:grid md:grid-cols-[15rem_1fr]">
      <a
        href="#contenu"
        className="bg-primary text-primary-fg sr-only z-50 rounded px-3 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Aller au contenu
      </a>

      {/* Barre latérale (desktop) */}
      <aside className="glass sticky top-0 hidden h-dvh flex-col gap-6 p-5 md:flex">
        <div className="text-xl font-bold tracking-tight">FinNeo</div>
        <nav aria-label="Navigation principale" className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-primary text-primary-fg"
                    : "text-muted hover:text-fg hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-col">
        {/* En-tête */}
        <header className="glass sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:px-8">
          <div className="text-sm font-medium">
            <span className="text-muted">Espace : </span>Personnel
          </div>
          <ThemeToggle />
        </header>

        <main
          id="contenu"
          className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 pb-28 md:px-8 md:pb-10"
        >
          {children}
        </main>
      </div>

      {/* Barre d'onglets basse (mobile) */}
      <nav
        aria-label="Navigation mobile"
        className="glass fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        {tabs.map((item) => {
          const Icon = ICONS[item.href] ?? Home;
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center gap-1 py-2 text-xs ${active ? "text-primary font-semibold" : "text-muted"}`}
            >
              <Icon size={20} aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/plus"
          aria-current={moreActive ? "page" : undefined}
          className={`flex flex-col items-center gap-1 py-2 text-xs ${moreActive ? "text-primary font-semibold" : "text-muted"}`}
        >
          <MoreHorizontal size={20} aria-hidden="true" />
          Plus
        </Link>
      </nav>
    </div>
  );
}
