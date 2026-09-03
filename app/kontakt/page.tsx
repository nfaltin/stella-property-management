import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kontakt | Stella Property Management",
  description:
    "Kontakta Stella Property Management för ett första samtal om förvaltning, drift, uthyrning eller projekt.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#102c33] text-white">
      <SiteHeader />

      <section className="px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-48">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.25fr_.75fr] lg:gap-24">
          <div>
            <p className="section-label text-[#9fc4c0]">Kontakt</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
              Låt oss prata om vad er fastighet behöver.
            </h1>
          </div>
          <div className="self-end border-t border-white/20 pt-8">
            <p className="text-lg leading-8 text-white/65">
              Ett första samtal är förutsättningslöst. Vi lyssnar in nuläget och ser var Stella kan skapa störst värde.
            </p>
            <a href="mailto:kontakt@stellapm.se?subject=Förfrågan%20om%20fastighetsförvaltning" className="group mt-8 inline-flex items-center gap-4 text-lg font-semibold">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9fc4c0] text-[#18343b]">
                <Mail size={19} />
              </span>
              kontakt@stellapm.se
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
