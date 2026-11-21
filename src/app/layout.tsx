import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "FinNeo", template: "%s · FinNeo" },
  description: "Gestion de patrimoine personnelle",
  robots: { index: false, follow: false }, // application privée
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
