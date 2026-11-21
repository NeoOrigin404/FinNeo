export interface NavItem {
  href: string;
  label: string;
  /** Présent dans la barre d'onglets mobile (sinon sous « Plus »). */
  mobileTab: boolean;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Accueil", mobileTab: true },
  { href: "/comptes", label: "Comptes", mobileTab: true },
  { href: "/placements", label: "Placements", mobileTab: true },
  { href: "/credits", label: "Crédits", mobileTab: true },
  { href: "/immobilier", label: "Immobilier", mobileTab: false },
  { href: "/parametres", label: "Paramètres", mobileTab: false },
] as const;

export function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}
