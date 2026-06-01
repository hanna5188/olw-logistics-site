import { Hero } from "@/components/Hero";
import { TrustMetrics } from "@/components/TrustMetrics";
import { LogisticsFlow } from "@/components/LogisticsFlow";
import { HomeServices } from "@/components/HomeServices";
import { EnterpriseTrust } from "@/components/EnterpriseTrust";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <LogisticsFlow />
      <HomeServices />
      <EnterpriseTrust />
      <CTASection />
    </>
  );
}
