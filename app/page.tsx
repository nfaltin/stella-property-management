import Link from "next/link";
import { ArrowRight, Building2, Handshake, MapPinned, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const summaries = [
  {
    icon: Building2,
    title: "Tjänster",
    text: "Teknisk förvaltning, ekonomisk styrning, uthyrning och projektledning samlat i en tydlig leverans.",
    href: "/tjanster",
  },
  {
    icon: Sparkles,
    title: "Om oss",
    text: "Ett entreprenöriellt förvaltningsbolag med erfarenhet från rådgivning, byggfrågor, uthyrning och fastighetsutveckling.",
    href: "/om",
  },
  {
    icon: MapPinned,
    title: "För vem",
    text: "Vi arbetar med fastighetsägare, investerare och bostadsrättsföreningar som vill ha bättre kontroll och närmare uppföljning.",
    href: "/for-vem",
  },
  {
    icon: Handshake,
    title: "Arbetssätt",
    text: "Vi börjar med nuläge och mål, bygger en plan, driver genomförandet och följer upp det som skapar värde.",
    href: "/arbetssatt",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f8f6] text-[#18343b]">
      <SiteHeader />

      <section className="relative min-h-[720px] bg-[#18343b]">
        <img src="/stella-hero.png" alt="Modern skandinavisk bostadsfastighet" className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,43,50,.98)_0%,rgba(18,43,50,.88)_42%,rgba(18,43,50,.28)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1400px] items-center px-6 pb-20 pt-36 lg:px-10">
          <div className="max-w-[800px]">
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a5c8c5]">
              <span className="h-px w-10 bg-[#a5c8c5]" /> Stella Property Management
            </div>
            <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.35rem]">
              Hela fastigheten.<br /><span className="text-[#a5c8c5]">Ett samlat ansvar.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Stella hjälper fastighetsägare, investerare och bostadsrättsföreningar med rikstäckande förvaltning där teknik, ekonomi, uthyrning och projekt hänger ihop.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="group inline-flex items-center gap-3 bg-[#9fc4c0] px-7 py-4 font-semibold text-[#18343b] transition hover:bg-white">
                Prata med oss <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </Link>
              <Link href="/tjanster" className="inline-flex items-center border border-white/40 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10">
                Se våra tjänster
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9e0dd] bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-12 lg:grid-cols-[1fr_2fr] lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6f9291]">Sammanfattning</p>
          <p className="max-w-4xl font-display text-2xl leading-snug text-[#2d4b52] sm:text-3xl">
            En närvarande förvaltningspartner som gör komplexa fastighetsfrågor enklare att förstå, prioritera och agera på.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid border-l border-t border-[#cdd8d4] md:grid-cols-2">
            {summaries.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href} className="group border-b border-r border-[#cdd8d4] bg-white p-8 transition hover:bg-[#edf3f1] sm:p-10 lg:p-12">
                  <div className="flex items-start justify-between">
                    <Icon className="text-[#6f9291]" size={30} strokeWidth={1.5} />
                    <ArrowRight className="text-[#6f9291] transition group-hover:translate-x-1" size={20} />
                  </div>
                  <h2 className="mt-10 font-display text-3xl font-medium tracking-tight">{item.title}</h2>
                  <p className="mt-5 max-w-xl leading-7 text-[#60777d]">{item.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#19383f] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="section-label text-[#9fc4c0]">Rikstäckande</p>
            <h2 className="section-title mt-5 text-white">Förvaltning där fastigheten finns.</h2>
          </div>
          <p className="text-xl leading-9 text-white/65">
            Vi bygger upp rätt team, kontaktvägar och uppföljning runt varje uppdrag, med personlig närvaro och bred operativ kapacitet.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
