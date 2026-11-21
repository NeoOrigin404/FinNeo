import { describe, expect, it } from "vitest";
import { isActive } from "./nav";

describe("isActive", () => {
  it("l'accueil n'est actif que sur /", () => {
    expect(isActive("/", "/")).toBe(true);
    expect(isActive("/comptes", "/")).toBe(false);
  });
  it("une section est active sur ses sous-pages", () => {
    expect(isActive("/comptes", "/comptes")).toBe(true);
    expect(isActive("/comptes/abc", "/comptes")).toBe(true);
    expect(isActive("/comptes-archives", "/comptes")).toBe(false);
  });
});
