"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/services", label: copy.nav.services },
    { href: "/about", label: copy.nav.about },
    { href: "/contact", label: copy.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-md bg-slate-900 text-white shadow-sm ring-1 ring-slate-900/10">
            <span className="text-[10px] font-bold leading-none tracking-wider">
              {copy.brandMark}
            </span>
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              {copy.companyName}
            </span>
            <span className="mt-0.5 hidden max-w-[14rem] text-[11px] font-medium leading-snug text-slate-500 sm:block lg:max-w-xs">
              {copy.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-brand-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/quote" size="sm" className="hidden sm:inline-flex">
            {copy.cta.getQuote}
          </Button>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <p className="mb-3 px-4 text-xs font-medium text-slate-500">{copy.tagline}</p>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  pathname === item.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {copy.cta.getQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
