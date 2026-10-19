import Link from "next/link";
import { ArrowRight, Building2, Handshake, Home as HomeIcon, MapPinned, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/lib/site-content";

const summaries = [
  {
    icon: Building2,
    title: "Tjänster",
    text: "Tillsyn och fastighetsskötsel, teknisk och ekonomisk förvaltning, uthyrning samt projekt och entreprenad. Fem delar av ett samlat erbjudande.",
    href: "/tjanster",
  },
  {
    icon: Sparkles,
    title: "Om oss",
    text: "Lär känna Stella och hur vi förenar praktiskt arbete i fastigheten med ekonomisk och teknisk förvaltning.",
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
    text: "Vi kommer överens om uppdraget, tar hand om det löpande arbetet och återkopplar om ekonomi, åtgärder och nästa steg.",
    href: "/arbetssatt",
  },
  {
    icon: HomeIcon,
    title: "För hyresgäster",
    text: "En praktisk väg in för dig som behöver felanmäla något i bostaden eller fastigheten.",
    href: "/for-hyresgaster",
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
              StellaPM hjälper fastighetsägare med allt från daglig tillsyn och skötsel till teknisk förvaltning, uthyrning och fastighetsbolagets redovisning.
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6f9291]">En helhet som fungerar</p>
          <p className="max-w-4xl font-display text-2xl leading-snug text-[#2d4b52] sm:text-3xl">
            Ett hus ska fungera för dem som använder det och för er som äger det. Vi håller ihop den dagliga skötseln, ekonomin och planeringen så att ni kan följa vad som händer och fatta beslut i tid.
          </p>
        </div>
      </section>

      <section aria-labelledby="assignment-heading" className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="section-label">Ert uppdrag hos Stella</p>
          <h2 id="assignment-heading" className="section-title mt-5 max-w-3xl">Ni vet vem som gör vad. Och vad som händer härnäst.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Ett tydligt ansvar", "Vi kommer överens om vilka delar vi tar hand om och hur kontakten ska fungera. Ni vet vem ni ska vända er till och vilka frågor som behöver ert beslut."],
              ["Det dagliga och det långsiktiga", "Det vi ser vid tillsynen tar vi med i underhållsplaneringen. Ekonomi, uthyrning och projekt följs upp tillsammans med fastighetens löpande behov."],
              ["Återkoppling ni kan använda", "Ni får veta vad som är gjort, vad som återstår och vilka kostnader eller behov som behöver följas upp. Vi ger underlag och föreslår hur ni kan gå vidare."],
            ].map(([title, text]) => (
              <article key={title} className="border-t border-[#cdd8d4] pt-7">
                <h3 className="font-display text-2xl font-medium tracking-tight">{title}</h3>
                <p className="mt-5 leading-7 text-[#60777d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="bg-[#e8efec] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="section-label">Det här hjälper vi er med</p>
          <h2 id="services-heading" className="section-title mt-5 max-w-3xl">Den hjälp er fastighet behöver.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#60777d]">Våra fem tjänsteområden täcker vardagen i huset och den långsiktiga förvaltningen. Vi kommer tillsammans fram till vad ni vill lämna över och hur arbetet ska följas upp.</p>
          <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.number} href={`/tjanster#tjanst-${service.number}`} className="group flex h-full flex-col bg-white p-7 transition hover:bg-[#f7f8f6]">
                  <Icon className="text-[#6f9291]" size={28} strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#60777d]">{service.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">Läs mer <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
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
            Vi organiserar uppdraget utifrån var era fastigheter ligger och vad de behöver. Med lokala samarbeten och gemensam uppföljning samordnar vi skötsel, teknik och ekonomi. Hör av er så går vi igenom förutsättningarna tillsammans.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
