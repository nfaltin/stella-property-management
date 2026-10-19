import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Tjänster | Stella Property Management",
  description:
    "Tillsyn och fastighetsskötsel, teknisk förvaltning, ekonomisk förvaltning och redovisning, uthyrning samt projekt och entreprenad.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8f6] text-[#18343b]">
      <SiteHeader />

      <section className="bg-[#17343b] px-6 pb-20 pt-40 text-white lg:px-10 lg:pb-28 lg:pt-48">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label text-[#9fc4c0]">Tjänster</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[5rem]">
              Förvaltning utifrån det ni vill lämna över.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Behöver ni hjälp med skötseln, redovisningen eller hela förvaltningen? Vi går igenom era behov och kommer överens om ansvar och uppföljning. Här ser ni vad våra fem tjänsteområden omfattar.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid auto-rows-fr border-l border-t border-[#cdd8d4] md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article id={`tjanst-${service.number}`} key={service.title} className="scroll-mt-28 group flex h-full flex-col border-b border-r border-[#cdd8d4] bg-white p-8 transition hover:bg-[#edf3f1] sm:p-10 lg:p-12">
                  <div className="flex items-start justify-between">
                    <Icon className="text-[#6f9291]" strokeWidth={1.5} size={32} />
                    <span className="font-mono text-xs text-[#819396]">{service.number}</span>
                  </div>
                  <h2 className="mt-10 font-display text-2xl font-medium tracking-tight sm:text-3xl">{service.title}</h2>
                  <p className="mb-8 mt-5 max-w-xl leading-7 text-[#60777d]">{service.text}</p>
                  <ul className="mt-auto space-y-3 border-t border-[#d6dfdc] pt-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-medium">
                        <Check size={15} className="mt-0.5 shrink-0 text-[#6f9291]" /> {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d6dfdc] bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2">
          <h2 className="section-title">Från iakttagelse till långsiktig plan.</h2>
          <p className="text-lg leading-8 text-[#60777d]">En brist som upptäcks vid tillsynen kan kräva en mindre åtgärd direkt eller behöva tas med i underhållsplanen. Den tekniska förvaltningen bedömer och samordnar behovet, ekonomin ger underlag för prioriteringen och projektledningen håller ihop större arbeten. Ni får återkoppling längs vägen.</p>
        </div>
      </section>

      <section className="bg-[#e8efec] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_auto]">
          <h2 className="section-title">Vilka delar vill ni ha hjälp med?</h2>
          <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 bg-[#18343b] px-7 py-4 font-semibold text-white transition hover:bg-[#2d4b52]">
            Kontakta Stella <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
