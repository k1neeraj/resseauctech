import { createPageMetadata } from "@/lib/seo";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Resseaux Tech in New Delhi for enterprise IT infrastructure, system integration, networking, security, power backup, implementation and support requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
