import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { audiences } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "För vem | Stella Property Management",
  description:
    "Stella hjälper fastighetsägare, investerare och bostadsrättsföreningar med förvaltning, struktur och uppföljning.",
};

export default function AudiencePage() {
  return (
    <main className="overflow-hidden bg-[#f7f8f6] text-[#18343b]">
      <SiteHeader />

      <section className="bg-[#19383f] px-6 pb-20 pt-40 text-white lg:px-10 lg:pb-28 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <p className="section-label text-[#9fc4c0]">För vem</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[5rem]">
            Två perspektiv. Samma krav på kvalitet.
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
          {audiences.map((audience) => (
            <article key={audience.title} className="border-t border-[#cdd8d4] pt-10">
              <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">{audience.title}</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#60777d]">{audience.text}</p>
              <div className="mt-9 grid grid-cols-2 gap-5 text-sm">
                {audience.items.map((item) => (
                  <div key={item} className="border-l border-[#7aa7a5] pl-4">{item}</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="section-label">Rikstäckande</p>
            <h2 className="section-title mt-5">Vi formar leveransen runt uppdraget.</h2>
          </div>
          <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 bg-[#18343b] px-7 py-4 font-semibold text-white transition hover:bg-[#2d4b52]">
            Starta dialogen <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
