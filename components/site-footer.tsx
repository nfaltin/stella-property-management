import Link from "next/link";

function FooterBrand() {
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

export function SiteFooter() {
  return (
    <footer className="bg-[#102c33] px-6 text-white lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 border-t border-white/15 py-9 sm:flex-row sm:items-end sm:justify-between">
        <FooterBrand />
        <div className="text-xs leading-6 text-white/45 sm:text-right">
          <p>© {new Date().getFullYear()} Stella Property Management AB</p>
          <p>Tillsyn & skötsel · Teknik · Ekonomi · Uthyrning · Projekt</p>
        </div>
      </div>
    </footer>
  );
}
