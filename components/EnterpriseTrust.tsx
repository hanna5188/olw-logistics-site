import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";

const trustItems = ["item1", "item2", "item3", "item4"] as const;

const integrations = [
  "Amazon",
  "Shopify",
  "Walmart",
  "TikTok Shop",
  "ShipStation",
  "API / EDI",
];

export function EnterpriseTrust() {
  return (
    <section className="section-y border-t border-slate-200 bg-slate-950 text-white">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-brand-300">Why OLW Global</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {copy.trust.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              {copy.trust.subtitle}
            </p>
            <ul className="mt-10 space-y-4">
              {trustItems.map((key) => (
                <li key={key} className="flex gap-3 text-slate-200">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="font-medium">{copy.trust[key]}</span>
                </li>
              ))}
            </ul>
            <Button href="/quote" size="lg" className="mt-10">
              {copy.cta.getQuote}
            </Button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Platform & carrier integrations
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="rounded-lg border border-white/10 bg-slate-900/80 px-4 py-3 text-center text-sm font-semibold text-slate-200"
                >
                  {name}
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
              Connect your storefront, marketplace, and WMS through API, EDI, or
              managed file exchange—supported by a dedicated implementation team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
