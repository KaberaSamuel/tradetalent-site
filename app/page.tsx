import HeroSection from "@/sections/Hero";
import ExchangeProtocol from "@/sections/ExchangeProtocol";
import OurPartners from "@/sections/OurPartners";
import CTASection from "@/sections/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExchangeProtocol />
      <OurPartners />
      {/* <CTASection /> */}
    </div>
  );
}
