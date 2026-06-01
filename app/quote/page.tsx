import { QuoteForm } from "@/components/QuoteForm";
import { PageHeader } from "@/components/PageHeader";
import { copy } from "@/lib/copy";

export default function QuotePage() {
  return (
    <>
      <PageHeader
        title={copy.quote.pageTitle}
        subtitle={copy.quote.pageSubtitle}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
