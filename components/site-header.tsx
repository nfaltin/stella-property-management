"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Stella Property Management">
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9 text-white" fill="none">
        <path d="M16 2.5 19.1 12.9 29.5 16l-10.4 3.1L16 29.5l-3.1-10.4L2.5 16l10.4-3.1L16 2.5Z" fill="currentColor" />
        <circle cx="16" cy="16" r="2.6" fill="#7aa7a5" />
      </svg>
      <div className="leading-none">
        <div className="text-[1.08rem] font-semibold uppercase tracking-[0.22em] text-white">Stella</div>
        <div className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-white/60">Property Management</div>
      </div>
    </Link>
  );
}

const menuItems = [
  ["Om oss", "/om"],
  ["Tjänster", "/tjanster"],
  ["För vem", "/for-vem"],
  ["Arbetssätt", "/arbetssatt"],
  ["För hyresgäster", "/for-hyresgaster"],
  ["Kontakt", "/kontakt"],
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/20 bg-[#102c33]/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Brand />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-lg"
              className="border-white/45 bg-white/10 text-white hover:bg-white hover:text-[#18343b]"
              aria-label="Öppna huvudmeny"
            >
              <Menu size={22} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[88vw] max-w-[460px] border-l border-[#cdd8d4] bg-[#f7f8f6] p-0 text-[#18343b] sm:max-w-[460px]"
          >
            <SheetHeader className="border-b border-[#d6dfdc] p-8">
              <SheetTitle className="font-display text-4xl font-medium tracking-tight text-[#18343b]">
                Meny
              </SheetTitle>
              <SheetDescription className="mt-2 text-base leading-7 text-[#60777d]">
                Hitta rätt del av Stella Property Management.
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-1 flex-col px-8 py-6" aria-label="Huvudmeny">
              {menuItems.map(([label, href]) => (
                <SheetClose key={href} asChild>
                  <Link
                    href={href}
                    className="group flex items-center justify-between border-b border-[#d6dfdc] py-5 text-2xl font-medium tracking-tight text-[#18343b] transition hover:text-[#6f9291]"
                  >
                    {label}
                    <ArrowRight className="transition group-hover:translate-x-1" size={20} />
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto bg-[#102c33] p-8 text-white">
              <p className="max-w-sm text-base leading-7 text-white/65">
                Vill du prata förvaltning, drift eller uthyrning?
              </p>
              <SheetClose asChild>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex w-full items-center justify-between bg-[#9fc4c0] px-5 py-4 font-semibold text-[#18343b] transition hover:bg-white"
                >
                  Boka ett samtal <ArrowRight size={18} />
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
