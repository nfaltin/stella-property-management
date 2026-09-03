import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stella Property Management | Fastighetsförvaltning",
  description:
    "Teknisk och ekonomisk fastighetsförvaltning, uthyrning och projektledning för fastighetsägare, investerare och bostadsrättsföreningar.",
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
