import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { process, valueAreas } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Arbetssätt | Stella Property Management",
  description:
    "Stellas arbetssätt går från nulägesbild och plan till genomförande, uppföljning och tydliga beslutsunderlag.",
};

export default function ProcessPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8f6] text-[#18343b]">
      <SiteHeader />

      <section className="bg-white px-6 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="section-label">Arbetssätt</p>
            <h1 className="section-title mt-5">Så tar vi hand om ert uppdrag.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#60777d]">
              Vi går igenom vad ni behöver hjälp med, fördelar ansvaret och bestämmer hur arbetet ska följas upp. Ni får veta vad som görs i fastigheten och vilka frågor som behöver ert beslut.
            </p>
          </div>
          <div className="divide-y divide-[#d6dfdc] border-y border-[#d6dfdc]">
            {process.map(([number, title, text]) => (
              <div key={number} className="grid grid-cols-[3rem_1fr] gap-5 py-7 sm:grid-cols-[4rem_10rem_1fr] sm:items-center">
                <span className="font-mono text-xs text-[#769694]">{number}</span>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="col-start-2 text-sm leading-6 text-[#60777d] sm:col-start-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-[#d6dfdc] md:grid-cols-4">
          {valueAreas.map(([Icon, title, text]) => {
            const IconComponent = Icon;
            return (
              <div key={title as string} className="bg-[#f7f8f6] p-7">
                <IconComponent size={24} strokeWidth={1.5} className="text-[#6f9291]" />
                <div className="mt-8 font-semibold">{title as string}</div>
                <div className="mt-1 text-sm text-[#6b8085]">{text as string}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#e8efec] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_auto]">
          <h2 className="section-title">Låt oss gå igenom era behov tillsammans.</h2>
          <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 bg-[#18343b] px-7 py-4 font-semibold text-white transition hover:bg-[#2d4b52]">
            Kontakta Stella <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
