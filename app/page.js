import ClientMarquee from "@/components/common/ClientMarquee";
import Divider from "@/components/common/Divider";
import PartnerMarquee from "@/components/common/PartnerMarquee";
import HeroSection from "@/components/HeroSection";
import Certifications from "@/components/sections/Certifications";
import CtaBand from "@/components/sections/CtaBand";
import Insights from "@/components/sections/Insights";
import Services from "@/components/sections/Services";
import WhyChooseResseaux from "@/components/sections/WhyChooseResseaux";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resseaux Tech Private Limited",
  url: "https://www.resseauxtech.com",
  logo: "https://www.resseauxtech.com/img/logo/RTPLSquareLogo.png",
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <ClientMarquee />
      <Services />
      <PartnerMarquee />
      <Divider />
      <WhyChooseResseaux />
      <Insights />
      <Certifications />
      <RelatedFaqs
        items={pageFaqs.home}
        title="Questions about Resseaux Tech"
        description="Quick answers about service scope, procurement requirements and sharing project information."
      />
      <CtaBand />
    </div>
  );
}
