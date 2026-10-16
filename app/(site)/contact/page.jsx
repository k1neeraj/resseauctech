import { createPageMetadata } from "@/lib/seo";
import ContactPageClient from "@/components/ContactPageClient";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Resseaux Tech in New Delhi for enterprise IT infrastructure, system integration, networking, security, power backup, implementation and support requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactPageClient />
      <RelatedFaqs
        items={pageFaqs.contact}
        title="Before you contact us"
        description="Information that helps route an enquiry and guidance on handling sensitive project material."
      />
    </>
  );
}
