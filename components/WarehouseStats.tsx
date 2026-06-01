import { copy } from "@/lib/copy";

const statKeys = [
  { labelKey: "sqft" as const, valueKey: "sqftValue" as const },
  { labelKey: "dailyOrders" as const, valueKey: "dailyOrdersValue" as const },
  { labelKey: "skus" as const, valueKey: "skusValue" as const },
  { labelKey: "onTime" as const, valueKey: "onTimeValue" as const },
];

export function WarehouseStats() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {copy.stats.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{copy.stats.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statKeys.map(({ labelKey, valueKey }) => (
            <div
              key={labelKey}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-elevated"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10" />
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.stats[valueKey]}
              </p>
              <p className="mt-2 text-sm font-medium text-brand-100">
                {copy.stats[labelKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
