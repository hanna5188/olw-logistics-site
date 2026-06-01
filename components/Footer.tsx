import Link from "next/link";
import { copy } from "@/lib/copy";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-xl font-semibold text-white">{copy.companyName}</p>
            <p className="mt-1 text-sm text-slate-400">{copy.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {copy.footer.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {copy.footer.quickLinks}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white">
                  {copy.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  {copy.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white">
                  {copy.cta.getQuote}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  {copy.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {copy.footer.contactHeading}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{copy.contact.address}</li>
              <li>
                <a href={`mailto:${copy.contact.email}`} className="hover:text-white">
                  {copy.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${copy.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {copy.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {copy.companyName}. {copy.footer.rights}
          </p>
          <div className="flex gap-6">
            <span className="cursor-default hover:text-slate-300">
              {copy.footer.privacy}
            </span>
            <span className="cursor-default hover:text-slate-300">
              {copy.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
