import Link from "next/link";
import { copy } from "@/lib/copy";
import { homeServiceGroupIds, homeServiceIds } from "@/lib/homeServices";
import { Button } from "@/components/ui/Button";

export function HomeServices() {
  const section = copy.home.services;

  return (
    <section id="services" className="section-y bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="heading-section mt-4">{section.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {section.subtitle}
            </p>
          </div>
          <Button href="/quote" className="shrink-0">
            {copy.cta.getQuote}
          </Button>
        </div>

        <div className="mt-16 space-y-20">
          {homeServiceGroupIds.map((groupId) => {
            const group = section.groups[groupId];
            const services = homeServiceIds[groupId];

            return (
              <div key={groupId}>
                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-slate-600">
                    {group.description}
                  </p>
                </div>

                <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((serviceId, index) => {
                    const item = section.items[serviceId];
                    if (!item) return null;
                    return (
                      <li key={serviceId}>
                        <Link
                          href="/quote"
                          className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-brand-200 hover:bg-white hover:shadow-card"
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold text-brand-700 shadow-sm ring-1 ring-slate-200/80">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h4 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                            {item.title}
                          </h4>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                            {item.desc}
                          </p>
                          <span className="mt-5 text-sm font-semibold text-brand-600">
                            Request pricing →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View full supply chain solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}
