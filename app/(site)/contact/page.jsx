import ContactPageClient from "@/components/ContactPageClient";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

export const metadata = {
  title: "Contact",
  description:
    "Contact Resseaux Tech in New Delhi for enterprise IT infrastructure, system integration, networking, security, power backup, implementation and support requirements.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Resseaux Tech",
    title: "Contact Resseaux Tech | IT Infrastructure Enquiries",
    description:
      "Contact Resseaux Tech in New Delhi for enterprise IT infrastructure, system integration, networking, security, power backup, implementation and support requirements.",
    images: [
      {
        url: "/img/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Resseaux Tech - IT Infrastructure Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Resseaux Tech | IT Infrastructure Enquiries",
    description:
      "Contact Resseaux Tech in New Delhi for enterprise IT infrastructure, system integration, networking, security, power backup, implementation and support requirements.",
    images: ["/img/logo/logo.png"],
  },
};

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
