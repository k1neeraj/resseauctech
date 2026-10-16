import { getAllPosts, getAllServices } from "@/app/api/data";

export const dynamic = "force-static";

const BASE_URL = "https://www.resseauxtech.com";

export default function sitemap() {
  const staticPages = [
    "/",
    "/about",
    "/blog",
    "/careers",
    "/clients",
    "/contact",
    "/cookie-policy",
    "/faqs",
    "/partners",
    "/privacy-policy",
    "/services",
    "/terms-and-conditions",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes = getAllServices().map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes];
}