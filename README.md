# Resseaux Tech Website

Production website for **Resseaux Tech Private Limited**, built with Next.js. The site presents IT infrastructure products and services, supports customer enquiries through a server-side contact form, and publishes service pages and buyer-focused articles.

[Website](https://www.resseauxtech.com) · [Deployment & Project Guide](docs/PROJECT-DEPLOYMENT-GUIDE.md) · [Google Search Console setup](docs/PROJECT-DEPLOYMENT-GUIDE.md#google-search-console) · [Dependency Maintenance](docs/DEPENDENCY-MAINTENANCE.md)

[![Next.js build](https://github.com/k1neeraj/resseauctech/actions/workflows/next-build.yml/badge.svg?branch=main)](https://github.com/k1neeraj/resseauctech/actions/workflows/next-build.yml)

## At a glance

- **Framework:** Next.js App Router, React
- **Styling:** Tailwind CSS
- **Package manager:** pnpm
- **Contact form:** Next.js route handler + Nodemailer (Gmail SMTP)
- **SEO:** Page-specific metadata, canonical URLs, Open Graph/Twitter metadata, robots.txt, and a generated XML sitemap
- **Build validation:** GitHub Actions runs a production build on pushes to main and pull requests targeting main
- **Production build:** `pnpm build` runs `next build --webpack`. The project uses Webpack for production builds after the default Turbopack build repeatedly failed on Hostinger without showing a specific compiler error.
- **Deployment:** Run as a Node.js application. The contact form needs the server-side /api/contact route, so a normal static-only export is not the deployment configuration.

## Quick start

### Requirements

- Node.js 22.x or 24.x (GitHub Actions validates on 22; Hostinger deployment has succeeded on 24 with the current Webpack build)
- pnpm 10.x
- Git

### Run locally

```bash
corepack enable
corepack prepare pnpm@10.34.7 --activate
pnpm install --frozen-lockfile
cp .env.example .env.local
```

Open .env.local and set the contact-form credentials before testing email delivery. Then start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful commands

| Command | Purpose |
| --- | --- |
| pnpm dev | Start the local development server |
| pnpm build | Create the production build |
| pnpm start | Run the built application |
| pnpm lint | Run Biome checks |

## Environment variables

See [.env.example](.env.example). Keep real values in local environment files or the hosting provider’s environment-variable settings—never commit secrets.

| Variable | Purpose |
| --- | --- |
| SMTP_USER | Gmail account used for SMTP |
| SMTP_PASS | Gmail App Password for that account |
| CONTACT_TO | Destination for genuine enquiries; defaults to info@resseauxtech.com |
| CONTACT_BCC | Optional BCC for genuine enquiries |
| SPAM_BCC | Optional destination for messages flagged as spam |
| FROM_EMAIL | Optional sender address/name; use an address authorised for the SMTP account |
| GOOGLE_SITE_VERIFICATION | Optional Google Search Console HTML-tag token for URL-prefix verification |

The contact handler currently sends through Gmail SMTP on port 465. Configure SMTP credentials on the deployment target and test the form after every first deployment or mail-setting change.

## Dependency maintenance

The direct dependencies were refreshed and validated on 16 October 2026. The updater checks current stable releases, validates the pnpm lockfile, runs a high-severity security audit and builds the production app before committing updated versions to `main`.

See the [dependency audit and maintenance guide](docs/DEPENDENCY-MAINTENANCE.md) for the exact versions, validation results and steps to run the workflow again from GitHub Actions.

## Where content lives

- **Blog posts and service data:** [app/api/data.jsx](app/api/data.jsx)
- **Page-specific related FAQs:** [components/faq/pageFaqs.js](components/faq/pageFaqs.js)
- **Main FAQs page:** [components/FaqPageClient.jsx](components/FaqPageClient.jsx)
- **Reusable single-open FAQ accordion:** [components/FaqAccordion.jsx](components/FaqAccordion.jsx)
- **Shared FAQ section used on pages and articles:** [components/RelatedFaqs.jsx](components/RelatedFaqs.jsx)
- **Page SEO helper:** [lib/seo.js](lib/seo.js)
- **Root metadata / optional Google verification token:** [app/layout.js](app/layout.js)
- **Robots and sitemap:** [app/robots.js](app/robots.js), [app/sitemap.js](app/sitemap.js)
- **Contact form UI and server handler:** [components/ContactPageClient.jsx](components/ContactPageClient.jsx), [app/api/contact/route.js](app/api/contact/route.js)

### Adding or updating a blog post

1. Add a post object to blogPosts in app/api/data.jsx. Include a unique slug, title, category, date, reading time, cover image, excerpt, author, tags and content blocks.
2. Add the cover image under public/blog/ and reference it with a path such as /blog/example-cover.png.
3. Keep the newest posts first in the array because the homepage’s recent-post section uses the first entries.
4. Add article-specific FAQs in components/faq/pageFaqs.js when the topic benefits from them.
5. Check the article, image, canonical metadata and links locally. The sitemap is generated from the blog and service data.

Keep blog content specific to products, procurement requirements, implementation scope and genuine customer questions. Do not invent customer results, endorsements, certifications or project case studies.

## SEO and Google Search Console

The app already defines canonical metadata, robots rules and a generated sitemap:

- Sitemap: app/sitemap.js → https://www.resseauxtech.com/sitemap.xml
- Robots: app/robots.js → https://www.resseauxtech.com/robots.txt
- Canonical base URL: https://www.resseauxtech.com

The root metadata supports the Search Console HTML verification token through GOOGLE_SITE_VERIFICATION. Add the token through hosting environment variables and redeploy before using the HTML-tag method. For a Domain property, verify ownership with the DNS TXT record supplied by Search Console. Then submit https://www.resseauxtech.com/sitemap.xml inside Search Console.

**Code readiness does not mean the property is already verified in a Google account.** Follow the step-by-step instructions in the [Deployment & Project Guide](docs/PROJECT-DEPLOYMENT-GUIDE.md#google-search-console).

## Deployment

Use the [Deployment & Project Guide](docs/PROJECT-DEPLOYMENT-GUIDE.md) for detailed instructions covering:

- Hostinger Business/Cloud Node.js Web Apps (non-VPS)
- Hostinger VPS with Node.js, PM2, Nginx and HTTPS
- Vercel and other Node.js-capable platforms
- Environment variables, contact-form checks, release updates and rollback
- Google Search Console verification, sitemap submission and post-launch checks

## Contribution / release workflow

1. Make changes on the repository’s main branch as per the project workflow.
2. Run pnpm install --frozen-lockfile and pnpm build.
3. Confirm the GitHub Actions build succeeds.
4. Deploy from main using the selected hosting provider’s deployment workflow.
5. Test key pages, contact-form email delivery, /robots.txt and /sitemap.xml after deployment.

## Official references

- [Next.js deployment](https://nextjs.org/docs/app/getting-started/deploying)
- [Hostinger Node.js Web Apps](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/)
- [Google Search Console: verify ownership](https://support.google.com/webmasters/answer/9008080)
- [Google Search Console: getting started](https://support.google.com/webmasters/answer/10267942)
