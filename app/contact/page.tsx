import { QuoteForm } from "@/components/QuoteForm";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";

export default function ContactPage() {
  return (
    <>
      <PageHeader title={copy.contact.title} subtitle={copy.contact.subtitle} />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  {copy.contact.hqTitle}
                </h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span aria-hidden>📍</span>
                    <span>{copy.contact.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden>🕐</span>
                    <span>{copy.contact.hours}</span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden>✉️</span>
                    <a
                      href={`mailto:${copy.contact.email}`}
                      className="text-brand-600 hover:underline"
                    >
                      {copy.contact.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden>📞</span>
                    <a
                      href={`tel:${copy.contact.phone.replace(/\s/g, "")}`}
                      className="text-brand-600 hover:underline"
                    >
                      {copy.contact.phone}
                    </a>
                  </li>
                </ul>
                <Button href="/quote" className="mt-8 w-full sm:w-auto">
                  {copy.cta.getQuote}
                </Button>
              </div>

              <div className="rounded-2xl bg-brand-600 p-8 text-white">
  <p className="font-semibold">{copy.contact.supportTitle}</p>
  <p className="mt-2 text-sm text-brand-100">{copy.contact.subtitle}</p >  


              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="mb-6 text-xl font-semibold text-slate-900">
                {copy.quote.title}
              </h2>
              <QuoteForm embedded />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
