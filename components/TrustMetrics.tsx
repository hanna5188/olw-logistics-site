import { copy } from "@/lib/copy";
import { trustMetricIds } from "@/lib/trustMetrics";

export function TrustMetrics() {
  return (
    <section
      className="relative z-10 -mt-12 sm:-mt-16"
      aria-label={copy.trustMetrics.ariaLabel}
    >
      <div className="container-page">
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-elevated">
          <div className="grid divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {trustMetricIds.map((id) => {
              const metric = copy.trustMetrics.items[id];
              if (!metric) return null;
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center px-6 py-8 text-center sm:px-5 lg:py-10"
                >
                  <p className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
                    {metric.highlight}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-snug text-slate-500">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
