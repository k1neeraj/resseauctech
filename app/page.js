import ClientMarquee from "@/components/common/ClientMarquee";
import Divider from "@/components/common/Divider";
import PartnerMarquee from "@/components/common/PartnerMarquee";
import HeroSection from "@/components/HeroSection";
import Certifications from "@/components/sections/Certifications";
import CtaBand from "@/components/sections/CtaBand";
import Insights from "@/components/sections/Insights";
import Services from "@/components/sections/Services";
import WhyChooseResseaux from "@/components/sections/WhyChooseResseaux";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientMarquee />
      <Services />
      <PartnerMarquee />
      <Divider />
      <WhyChooseResseaux />
      <Insights />
      <Certifications />
      <CtaBand />
    </div>
  );
}
