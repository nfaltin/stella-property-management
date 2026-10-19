import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stella Property Management | Fastighetsförvaltning",
  description:
    "StellaPM hjälper fastighetsägare med tillsyn och skötsel, teknisk förvaltning, ekonomi och redovisning, uthyrning och projekt. Ett tydligt ansvar och löpande uppföljning.",
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
