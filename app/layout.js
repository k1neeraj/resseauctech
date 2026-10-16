import { Syne, Sora, Satisfy } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://www.resseauxtech.com"),
  title: {
    default: "Resseaux Tech | IT Infrastructure Solutions India",
    template: "%s | Resseaux Tech",
  },
  description:
    "Resseaux Tech delivers IT infrastructure, security, cloud, server, storage, networking, and deployment solutions for organisations across India.",
  keywords: [
    "Resseaux Tech",
    "Resseaux Tech Pvt Ltd",
    "IT infrastructure company India",
    "network infrastructure solutions",
    "server and storage solutions",
    "cloud services company India",
    "security solutions company",
    "data center solutions India",
    "enterprise IT procurement",
    "Delhi IT infrastructure company",
    "Bengaluru IT solutions",
    "GeM IT supplier",
  ],
  applicationName: "Resseaux Tech",
  authors: [{ name: "Resseaux Tech" }],
  creator: "Resseaux Tech",
  publisher: "Resseaux Tech",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.resseauxtech.com",
    siteName: "Resseaux Tech",
    title: "Resseaux Tech | IT Infrastructure Solutions India",
    description:
      "IT infrastructure, security, cloud, networking, server, storage, and deployment solutions for organisations across India.",
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
    title: "Resseaux Tech | IT Infrastructure Solutions India",
    description:
      "IT infrastructure, security, cloud, networking, server, storage, and deployment solutions for organisations across India.",
    images: ["/img/logo/logo.png"],
  },
  icons: {
    icon: "/img/logo/RTPLSquareLogo.png",
    shortcut: "/img/logo/RTPLSquareLogo.png",
    apple: "/img/logo/RTPLSquareLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sora.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#111827]">
        <Header />
        <main className="flex-1">
          {children}
          <ScrollToTop />
          <WhatsAppButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}