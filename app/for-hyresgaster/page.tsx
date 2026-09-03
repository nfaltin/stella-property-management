import type { Metadata } from "next";
import { AlertTriangle, ClipboardCheck, Home, Wrench } from "lucide-react";

import { MaintenanceRequestForm } from "@/components/maintenance-request-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "För hyresgäster | Stella Property Management",
  description:
    "Felanmälan och information för dig som hyr bostad i en fastighet där Stella Property Management sköter förvaltningen.",
};

const tenantItems = [
  {
    icon: Wrench,
    title: "Fel i bostaden",
    text: "Anmäl sådant som inte fungerar i lägenheten, till exempel värme, vatten, vitvaror, el, lås, fönster eller ventilation.",
  },
  {
    icon: Home,
    title: "Gemensamma utrymmen",
    text: "Du kan även kontakta oss om fel i trapphus, tvättstuga, förråd, port, gård eller andra delar av fastigheten.",
  },
  {
    icon: ClipboardCheck,
    title: "Det här behöver vi",
    text: "Skriv namn, adress, lägenhetsnummer, telefonnummer och en tydlig beskrivning av felet. Bifoga gärna bilder om det hjälper.",
  },
  {
    icon: AlertTriangle,
    title: "Akuta fel",
    text: "Vid akuta fel som riskerar personskada eller större skada på fastigheten ska du använda den akuta kontaktväg som gäller för din fastighet.",
  },
];

export default function TenantPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8f6] text-[#18343b]">
      <SiteHeader />

      <section className="bg-[#17343b] px-6 pb-20 pt-40 text-white lg:px-10 lg:pb-28 lg:pt-48">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label text-[#9fc4c0]">För hyresgäster</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[5rem]">
              Felanmälan för din bostad.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Bor du i en fastighet där Stella sköter förvaltningen? Här hittar du rätt väg in när något i bostaden eller fastigheten behöver åtgärdas.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid border-l border-t border-[#cdd8d4] md:grid-cols-2">
            {tenantItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-b border-r border-[#cdd8d4] bg-white p-8 sm:p-10 lg:p-12">
                  <Icon className="text-[#6f9291]" size={30} strokeWidth={1.5} />
                  <h2 className="mt-9 font-display text-2xl font-medium tracking-tight sm:text-3xl">{item.title}</h2>
                  <p className="mt-5 max-w-xl leading-7 text-[#60777d]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e8efec] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-label">Felanmälan</p>
            <h2 className="section-title mt-5">Beskriv felet så tydligt du kan.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#60777d]">
              Ange var felet finns, när du upptäckte det och om vi får gå in med huvudnyckel om du inte är hemma. Då kan ärendet hanteras snabbare.
            </p>
          </div>
          <MaintenanceRequestForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
