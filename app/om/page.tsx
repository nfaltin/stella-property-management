import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Compass, Handshake, MapPinned, Network } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Om Stella | Stella Property Management",
  description:
    "Stella Property Management är ett rikstäckande förvaltningsbolag med erfarenhet från rådgivning, uthyrning och fastighetsutveckling.",
};

const foundations = [
  {
    icon: Compass,
    title: "Rådgivning med helhetsblick",
    text: "Stella bygger på erfarenhet av att se fastigheten som både teknisk miljö, affär och långsiktig investering.",
  },
  {
    icon: Handshake,
    title: "Uthyrning nära marknaden",
    text: "Vi har ett praktiskt grepp om relationen mellan fastighetsägare, hyresgäster och lokaler som ska fungera i vardagen.",
  },
  {
    icon: MapPinned,
    title: "Rikstäckande arbetssätt",
    text: "Vi arbetar över hela Sverige och bygger upp rätt team, kontaktvägar och leverans runt varje uppdrag.",
  },
];

const proofPoints = [
  "Över 20 års samlad erfarenhet från bygg- och fastighetssektorn",
  "Bakgrund inom fastighetsrådgivning, teknisk förvaltning och uthyrning",
  "Ett etablerat kontaktnät med specialister, entreprenörer och lokala parter",
  "Småskalig närvaro kombinerad med bred operativ kapacitet",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8f6] text-[#18343b]">
      <SiteHeader />

      <section className="relative bg-[#17343b] px-6 pb-24 pt-40 text-white lg:px-10 lg:pb-32 lg:pt-48">
        <img src="/stella-hero.png" alt="Modern skandinavisk bostadsfastighet" className="absolute inset-0 h-full w-full object-cover object-[58%_center] opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,44,51,.98)_0%,rgba(16,44,51,.86)_47%,rgba(16,44,51,.35)_100%)]" />
        <div className="relative z-10 mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="section-label text-[#9fc4c0]">Om Stella</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[5rem]">
              Erfaren rådgivning, uthyrning och förvaltning samlad i ett bolag.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Stella Property Management är byggt för fastighetsägare, investerare och bostadsrättsföreningar som vill ha tydligt ansvar, nära dialog och en partner som kan hålla ihop både teknik, ekonomi och uthyrning.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d6dfdc] bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-label">Vilka vi är</p>
            <h2 className="section-title mt-5">Personligt ansvar med bred räckvidd.</h2>
          </div>
          <div className="space-y-7 text-lg leading-8 text-[#587078]">
            <p>
              Bakom Stella finns ett entreprenöriellt driv och bred erfarenhet från fastighetsrådgivning, byggfrågor, teknisk förvaltning, hyresgästrelationer och uthyrning. Vi vet hur viktigt det är att någon håller ihop helheten.
            </p>
            <p>
              Vår roll är att göra fastighetsägandet mer överblickbart. Det innebär att förstå nuläget, samla rätt kompetens, driva frågor framåt och ge beslutsunderlag som går att agera på.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid border-l border-t border-[#cdd8d4] md:grid-cols-3">
            {foundations.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group border-b border-r border-[#cdd8d4] bg-white p-8 transition hover:bg-[#edf3f1] sm:p-10">
                  <Icon className="text-[#6f9291]" size={30} strokeWidth={1.5} />
                  <h2 className="mt-9 font-display text-2xl font-medium tracking-tight">{item.title}</h2>
                  <p className="mt-5 leading-7 text-[#60777d]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#19383f] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9fc4c0] text-[#18343b]">
              <Network size={22} />
            </div>
            <h2 className="mt-8 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Rikstäckande förvaltning, utan att tappa närheten.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Vi finns där uppdraget finns. I praktiken betyder det en kombination av central struktur, lokala samarbeten och tät uppföljning.
            </p>
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {proofPoints.map((point) => (
              <div key={point} className="flex gap-4 py-6">
                <Check className="mt-1 shrink-0 text-[#9fc4c0]" size={18} />
                <p className="text-lg leading-7 text-white/75">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8efec] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="section-label">Nästa steg</p>
            <h2 className="section-title mt-5">Berätta vad ni vill få bättre kontroll över.</h2>
          </div>
          <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 bg-[#18343b] px-7 py-4 font-semibold text-white transition hover:bg-[#2d4b52]">
            Kontakta Stella <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
