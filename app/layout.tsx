import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stella Property Management | Fastighetsförvaltning",
  description:
    "StellaPM tar hand om fastighetens dagliga funktion och långsiktiga förvaltning: tillsyn och skötsel, teknik, ekonomi och redovisning, uthyrning samt projekt.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased">{children}</body>
    </html>
  );
}
