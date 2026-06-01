import { copy } from "@/lib/copy";

const trustItems = ["item1", "item2", "item3", "item4"] as const;

const corridors = [
  "China–USA Ocean",
  "Air Express",
  "Customs & ISF",
  "Port Drayage",
  "Amazon FBA",
  "Shopify / DTC",
];

export function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.trust.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600">{copy.trust.subtitle}</p>
            <ul className="mt-8 space-y-4">
              {trustItems.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-800">
                    {copy.trust[key]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {copy.trustSection.corridorsHeading}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {corridors.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-brand-600">CN→US</p>
                <p className="text-xs text-slate-500">
                  {copy.trustSection.statCorridor}
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-600">ISF+</p>
                <p className="text-xs text-slate-500">
                  {copy.trustSection.statCompliance}
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-600">3PL</p>
                <p className="text-xs text-slate-500">
                  {copy.trustSection.statFulfillment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
