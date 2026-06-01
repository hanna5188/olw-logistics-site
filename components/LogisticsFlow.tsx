import { copy } from "@/lib/copy";
import { logisticsFlowStepIds } from "@/lib/homeServices";

const stepIcons: Record<(typeof logisticsFlowStepIds)[number], string> = {
  factory: "🏭",
  freight: "🚢",
  customs: "📋",
  warehouse: "📦",
  fulfillment: "✓",
  delivery: "🚚",
};

export function LogisticsFlow() {
  const flow = copy.home.logisticsFlow;

  return (
    <section className="section-y bg-slate-50">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{copy.tagline}</p>
          <h2 className="heading-section mt-4">{flow.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {flow.subtitle}
          </p>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block"
            aria-hidden
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {logisticsFlowStepIds.map((id, index) => {
              const step = flow.steps[id];
              if (!step) return null;
              return (
                <li key={id} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl shadow-card ring-4 ring-slate-50">
                    {stepIcons[id]}
                  </div>
                  <span className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-brand-600">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">
                    {step.label}
                  </h3>
                  <p className="mt-2 max-w-[11rem] text-sm leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
