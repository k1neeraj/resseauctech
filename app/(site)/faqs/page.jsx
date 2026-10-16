import { createPageMetadata } from "@/lib/seo";
import FaqPageClient from "@/components/FaqPageClient";

export const metadata = createPageMetadata({
  title: "FAQs",
  description:
    "Find answers to common questions about Resseaux Tech services, enterprise IT infrastructure planning, procurement, implementation, support and enquiries.",
  path: "/faqs",
});

export default function FaqPage() {
  return <FaqPageClient />;
}
