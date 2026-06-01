import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { copy } from "@/lib/copy";

export default function AboutPage() {
  const sections = [
    { title: copy.about.missionTitle, body: copy.about.mission },
    { title: copy.about.visionTitle, body: copy.about.vision },
  ];

  const values = [
    copy.about.value1,
    copy.about.value2,
    copy.about.value3,
    copy.about.value4,
  ];

  return (
    <>
      <PageHeader title={copy.about.title} subtitle={copy.about.subtitle} />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card"
              >
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-950 p-8 text-white sm:p-12">
            <h2 className="text-2xl font-bold">{copy.about.valuesTitle}</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <span className="text-brand-300" aria-hidden>
                    ◆
                  </span>
                  <span className="text-slate-200">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
