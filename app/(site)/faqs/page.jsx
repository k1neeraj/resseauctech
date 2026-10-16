import FaqPageClient from "@/components/FaqPageClient";

export const metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about Resseaux Tech services, enterprise IT infrastructure planning, procurement, implementation, support and enquiries.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    type: "website",
    url: "/faqs",
    siteName: "Resseaux Tech",
    title: "IT Infrastructure FAQs | Resseaux Tech",
    description:
      "Find answers to common questions about Resseaux Tech services, enterprise IT infrastructure planning, procurement, implementation, support and enquiries.",
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
    title: "IT Infrastructure FAQs | Resseaux Tech",
    description:
      "Find answers to common questions about Resseaux Tech services, enterprise IT infrastructure planning, procurement, implementation, support and enquiries.",
    images: ["/img/logo/logo.png"],
  },
};

export default function FaqPage() {
  return <FaqPageClient />;
}
