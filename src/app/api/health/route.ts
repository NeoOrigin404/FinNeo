import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Health check : aucune donnée sensible, aucune dépendance externe. */
export function GET() {
  return NextResponse.json({ status: "ok" }, { headers: { "Cache-Control": "no-store" } });
}
