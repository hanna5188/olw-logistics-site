import Link from "next/link";
import { copy } from "@/lib/copy";
import {
  supplyChainCategoryIds,
  supplyChainServiceIds,
  type SupplyChainCategoryId,
} from "@/lib/supplyChain";
import { Button } from "@/components/ui/Button";

const categoryAccent: Record<SupplyChainCategoryId, string> = {
  internationalFreight: "from-sky-500 to-sky-700",
  customsImport: "from-violet-500 to-violet-700",
  usLogistics: "from-amber-500 to-amber-700",
  warehouseFulfillment: "from-brand-500 to-brand-700",
};

const categoryStep: Record<SupplyChainCategoryId, string> = {
  internationalFreight: "01",
  customsImport: "02",
  usLogistics: "03",
  warehouseFulfillment: "04",
};

type SupplyChainSectionProps = {
  showHeader?: boolean;
  compact?: boolean;
};

export function SupplyChainSection({
  showHeader = true,
  compact = false,
}: SupplyChainSectionProps) {
  return (
    <section
      id="solutions"
      className={compact ? "py-0" : "bg-white py-20 sm:py-28"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {copy.tagline}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {copy.supplyChain.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {copy.supplyChain.subtitle}
            </p>
          </div>
        )}

        <div
          className={`hidden items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 lg:flex ${
            showHeader ? "mt-14" : ""
          }`}
          aria-hidden
        >
          {copy.supplyChain.flowSteps.map((step, i) => (
            <div key={step} className="flex flex-1 items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-slate-700">{step}</span>
              {i < copy.supplyChain.flowSteps.length - 1 && (
                <span className="ml-auto text-slate-300">→</span>
              )}
            </div>
          ))}
        </div>

        <div
          className={`grid gap-6 lg:grid-cols-2 ${showHeader ? "mt-10 lg:mt-12" : ""}`}
        >
          {supplyChainCategoryIds.map((categoryId) => {
            const category = copy.supplyChain.categories[categoryId];
            const serviceIds = supplyChainServiceIds[categoryId];

            return (
              <article
                key={categoryId}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:border-slate-300 hover:shadow-elevated"
              >
                <div
                  className={`bg-gradient-to-r ${categoryAccent[categoryId]} px-6 py-5 text-white`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        Step {categoryStep[categoryId]}
                      </p>
                      <h3 className="mt-1 text-xl font-bold">{category.title}</h3>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-lg font-bold backdrop-blur-sm">
                      {categoryStep[categoryId]}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {category.description}
                  </p>
                </div>

                <ul className="flex flex-1 flex-col gap-0 divide-y divide-slate-100 p-2 sm:p-3">
                  {serviceIds.map((serviceId) => {
                    const service = copy.supplyChain.services[serviceId];
                    return (
                      <li key={serviceId} className="group rounded-xl p-4 transition hover:bg-slate-50">
                        <div className="flex items-start gap-3">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                            aria-hidden
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-slate-900">
                              {service.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        {!compact && (
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/quote" size="lg">
              {copy.cta.getQuote}
            </Button>
            <Link
              href="/contact"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {copy.cta.talkToUs} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
