import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(29,97,242,0.35),transparent)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-grid-pattern bg-[length:64px_64px] opacity-[0.07]"
        aria-hidden
      />

      <div className="container-page relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
          <p className="eyebrow text-brand-300">{copy.tagline}</p>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            {copy.hero.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            {copy.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/quote" size="lg">
              {copy.cta.getQuote}
            </Button>
            <Button
              href="#services"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-white/40 hover:bg-white/5"
            >
              {copy.cta.viewServices}
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[copy.hero.stat1, copy.hero.stat2, copy.hero.stat3].map(
                (stat) => (
                  <p
                    key={stat}
                    className="px-6 py-5 text-center text-sm font-medium text-slate-200 sm:text-base"
                  >
                    {stat}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 hidden max-w-4xl lg:block">
          <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-6 py-4 text-xs font-medium text-slate-400">
            {[
              "Factory",
              "Freight",
              "Customs",
              "Warehouse",
              "Fulfillment",
              "Delivery",
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="text-white">{step}</span>
                {i < arr.length - 1 && (
                  <span className="text-slate-600" aria-hidden>
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
