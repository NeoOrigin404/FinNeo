import type { Metadata } from "next";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";

export const metadata: Metadata = { title: "Plus" };

export default function PlusPage() {
  const items = NAV_ITEMS.filter((i) => !i.mobileTab);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Plus</h1>
      <ul className="glass rounded-card divide-border divide-y overflow-hidden">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="block px-5 py-4 text-sm font-medium">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
