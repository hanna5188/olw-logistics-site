import { SupplyChainSection } from "@/components/SupplyChainSection";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { copy } from "@/lib/copy";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title={copy.services.pageTitle}
        subtitle={copy.services.pageSubtitle}
      />
      <div className="py-16">
        <SupplyChainSection showHeader={false} compact />
      </div>
      <CTASection />
    </>
  );
}
