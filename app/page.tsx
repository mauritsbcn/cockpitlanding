import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import ProblemSection from "@/components/landing/ProblemSection";
import FeatureSection from "@/components/landing/FeatureSection";
import HowItWorks from "@/components/landing/HowItWorks";
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
        <FeatureSection />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTABlock />
      </main>
      <Footer />
    </div>
  );
}
