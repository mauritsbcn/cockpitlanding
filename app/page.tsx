import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import ProblemSection from "@/components/landing/ProblemSection";
import DailyDigest from "@/components/landing/DailyDigest";
import CostBreakdown from "@/components/landing/CostBreakdown";
import Integrations from "@/components/landing/Integrations";
import Payback from "@/components/landing/Payback";
import OperatorProof from "@/components/landing/OperatorProof";
import HowItWorks from "@/components/landing/HowItWorks";
import ServiceModels from "@/components/landing/ServiceModels";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTABlock from "@/components/landing/CTABlock";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div style={{ background: "#fff", color: "var(--cp-text)", fontFamily: "var(--cp-font-sans)" }}>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <DailyDigest />
        <CostBreakdown />
        <Integrations />
        <Payback />
        <OperatorProof />
        <HowItWorks />
        <ServiceModels />
        <Pricing />
        <FAQ />
        <CTABlock />
      </main>
      <Footer />
    </div>
  );
}
