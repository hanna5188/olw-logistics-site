import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center sm:px-16 sm:py-20">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,97,242,0.2),transparent_60%)]"
            aria-hidden
          />
          <div className="relative">
            <p className="eyebrow text-brand-300">{copy.companyName}</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
              {copy.homeCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              {copy.homeCta.subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/quote"
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                {copy.cta.getQuote}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-slate-600 text-white hover:bg-white/5"
              >
                {copy.cta.talkToUs}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
