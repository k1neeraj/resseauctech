# Resseaux Tech — Project and Deployment Guide

This document is the operational guide for running, deploying, updating and checking the Resseaux Tech website. Follow the section for the hosting setup you use. Deployment requires a **Node.js server**; do not deploy this project as a static-only website because the contact form uses the Next.js server route at /api/contact.

## 1. Project overview

| Area | Implementation |
| --- | --- |
| Framework | Next.js App Router |
| UI | React + Tailwind CSS |
| Package manager | pnpm; lockfile is pnpm-lock.yaml |
| Production Node version | Node.js 22.x recommended |
| Contact form | Next.js route handler + Nodemailer |
| Mail transport | Gmail SMTP, secure connection on port 465 |
| Main branch | main |
| Canonical domain | https://www.resseauxtech.com |
| Sitemap | https://www.resseauxtech.com/sitemap.xml |
| Robots rules | https://www.resseauxtech.com/robots.txt |

The root metadata, canonical URL, Open Graph/Twitter metadata, robots file and sitemap are already implemented. Google Search Console token support is available through the GOOGLE_SITE_VERIFICATION environment variable. Actual ownership verification still has to be completed in Search Console using DNS or the HTML-tag method.

## 2. Local setup and testing

### Requirements

- Node.js 22.x
- pnpm 10.x
- Git

### First-time setup

Run these commands in the repository root:

```bash
corepack enable
corepack prepare pnpm@10.34.7 --activate
pnpm install --frozen-lockfile
cp .env.example .env.local
```

Edit .env.local and provide the environment variables listed in Section 3. Do not put real secrets into Git or this document.

Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000.

### Validate before deployment

```bash
pnpm install --frozen-lockfile
pnpm build
```

Also test the contact form with a genuine test enquiry and confirm the email arrives at the expected inbox. A successful build alone does not test real SMTP delivery.

## 3. Environment variables

Use .env.local for local development and the hosting provider's secure environment-variable settings for managed hosting. On a VPS, a production environment file such as .env.production.local can be used and must be readable only by the application owner.

| Name | Required? | Purpose |
| --- | --- | --- |
| SMTP_USER | Yes for form email | Gmail account used to authenticate with SMTP |
| SMTP_PASS | Yes for form email | Gmail App Password for that account; not the normal account password |
| CONTACT_TO | Optional | Enquiry destination; defaults to info@resseauxtech.com |
| CONTACT_BCC | Optional | BCC address for genuine enquiries |
| SPAM_BCC | Optional | Destination for messages flagged as spam |
| FROM_EMAIL | Optional | Sender display/address; use a sender authorised for the SMTP account |
| GOOGLE_SITE_VERIFICATION | Optional | Token value from Google's HTML-tag verification method for a URL-prefix property |

The mail code currently connects to smtp.gmail.com on port 465 with TLS. If Gmail is used, enable the account's supported App Password workflow and ensure the sending account and sender address match the SMTP settings. Keep all real credentials outside the repository.

The supplied .env.example contains empty placeholders and is safe to commit. It is not a working configuration until the required values have been entered.

## 4. Option A — Hostinger Business/Cloud hosting (non-VPS)

Hostinger currently offers Node.js Web App deployment on supported Business Web Hosting and Cloud plans. Feature availability depends on the plan and hPanel options shown for the account. If Node.js Web Apps is not available, use the VPS or another Node.js-capable host below.

### Deploy from GitHub

1. Push the desired production code to the repository's main branch and check that the GitHub Actions production build passes.
2. Sign in to Hostinger hPanel.
3. Open Websites and choose the option to add a Node.js Web App (the exact menu wording may change).
4. Choose the GitHub repository k1neeraj/resseauctech and branch main. Use the repository root as the application root.
5. Select Next.js if hPanel asks for a framework and choose Node.js 22.x.
6. Check the generated package-manager and build settings. This repository uses pnpm-lock.yaml, so make sure the install process respects that lockfile. If custom commands are available, use:

   Install command:
   ```bash
   pnpm install --frozen-lockfile
   ```

   Build command:
   ```bash
   pnpm build
   ```

   Start command, if hPanel asks for one:
   ```bash
   pnpm start
   ```

   If hPanel provides its own build/start defaults, review them rather than creating duplicate build steps. The application must run as a Next.js Node application, not as a static export.
7. In the app's Environment Variables settings, add the required SMTP values from Section 3. Add GOOGLE_SITE_VERIFICATION only if using the Search Console HTML-tag method. Redeploy after changing an environment variable used during the build.
8. Attach the intended domain in hPanel. Make sure both the apex domain and www resolve as intended, install/enable SSL, and use https://www.resseauxtech.com as the canonical version.
9. Wait for the build/deployment to finish and inspect the runtime/build logs if it fails.

### After deployment

- Open https://www.resseauxtech.com and test the home page on desktop and mobile.
- Open https://www.resseauxtech.com/robots.txt and confirm it references /sitemap.xml.
- Open https://www.resseauxtech.com/sitemap.xml and check that the XML loads and includes service and blog URLs.
- Send a genuine test enquiry from the contact form and check the destination inbox and spam folder.
- Confirm the site uses HTTPS and that the non-canonical domain redirects to the canonical www domain.
- Check the production build run in GitHub Actions.

### Updates after the first deployment

If GitHub integration is configured for automatic deployment, push tested changes to main and confirm the provider has redeployed the new commit. If not, use the provider's redeploy action after each approved push. Always check deployment logs and run the production smoke tests above.

Official Hostinger instructions: https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/

## 5. Option B — Hostinger VPS or another Ubuntu VPS

Use this path when you want direct control over Node.js, the running process, reverse proxy, logs and firewall. The commands below assume a new Ubuntu 24.04 LTS VPS, Nginx, and a non-root deployment user. Adjust domain/DNS details if the environment differs.

### 5.1 Point the domain to the VPS

At the DNS provider that actually manages the domain's nameservers:

- Set the apex domain resseauxtech.com to the VPS IP using the appropriate A record.
- Set www to the same server, using an A record or a CNAME that fits the DNS setup.
- Remove conflicting old records only after you have confirmed the intended production target.
- Wait until DNS resolves to the VPS before issuing the SSL certificate.

The canonical website host is www.resseauxtech.com. Configure an apex-to-www redirect so both addresses do not act as competing canonical versions.

### 5.2 Install system packages

Connect over SSH as an administrator:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y curl git nginx
```

Keep SSH access enabled while configuring the firewall. Do not open the Next.js app port (3000) to the public internet; Nginx should proxy requests locally to it.

### 5.3 Install Node.js 22, pnpm and PM2

Switch to the non-root user that will own and run the app. Install NVM, then Node.js and the required tools:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 22
nvm alias default 22
node -v
npm install --global pnpm@10.34.7 pm2
pnpm -v
```

Use the same OS user for future builds and PM2 commands. Do not run the application as root.

### 5.4 Clone the repository and configure secrets

```bash
sudo mkdir -p /var/www
sudo chown "$USER":"$USER" /var/www
git clone https://github.com/k1neeraj/resseauctech.git /var/www/resseauxtech
cd /var/www/resseauxtech
pnpm install --frozen-lockfile
cp .env.example .env.production.local
chmod 600 .env.production.local
nano .env.production.local
```

Fill in the real SMTP settings and destination addresses. Leave GOOGLE_SITE_VERIFICATION empty unless using the HTML-tag verification method. Save the file before building so that build-time metadata can include the token. Never upload this file to GitHub.

Build and start the application:

```bash
cd /var/www/resseauxtech
pnpm build
pm2 start pnpm --name resseauxtech -- start
pm2 save
pm2 startup
```

PM2 prints a startup command on the final line of its output. Run that command as instructed so the process can return after a server reboot. The Next.js process listens on port 3000 by default.

Useful PM2 commands:

```bash
pm2 status
pm2 logs resseauxtech
pm2 restart resseauxtech --update-env
```

### 5.5 Configure Nginx reverse proxy

Create a server config:

```bash
sudo nano /etc/nginx/sites-available/resseauxtech
```

Start from this configuration and adjust it to your own Nginx setup:

```nginx
server {
    listen 80;
    server_name resseauxtech.com;
    return 301 https://www.resseauxtech.com$request_uri;
}

server {
    listen 80;
    server_name www.resseauxtech.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable it and test the configuration:

```bash
sudo ln -s /etc/nginx/sites-available/resseauxtech /etc/nginx/sites-enabled/resseauxtech
sudo nginx -t
sudo systemctl reload nginx
```

If the default Nginx site conflicts with your new configuration, disable the default site only after confirming that it is not hosting another website on this VPS.

### 5.6 Enable HTTPS

After both DNS names point to the VPS and HTTP access works, install Certbot and request the certificate:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d resseauxtech.com -d www.resseauxtech.com
```

Follow Certbot's prompts and check the renewal status using its documented systemd timer. Verify that both HTTP and HTTPS URLs behave as intended after TLS is enabled.

If using a Hostinger-provided OpenLiteSpeed Node.js image instead of Nginx, follow that image's reverse-proxy and SSL instructions instead of applying the Nginx configuration above.

### 5.7 Updates on the VPS

After code has been pushed to main and its build passes:

```bash
cd /var/www/resseauxtech
git pull --ff-only origin main
pnpm install --frozen-lockfile
pnpm build
pm2 restart resseauxtech --update-env
```

Review logs and repeat the production smoke tests. If a release fails, check the build output and PM2 logs before changing configuration. Keep a known-good Git commit recorded before major updates so you can restore the previous revision if required.

## 6. Option C — Vercel, Render or another Node.js host

The site can run on any platform that supports the Next.js Node.js server. Choose a **Node/Web Service** deployment, not a static-only site.

### Vercel

1. Import k1neeraj/resseauctech from GitHub.
2. Select the main branch for production.
3. Confirm the project is detected as Next.js and that the pnpm lockfile is being used.
4. Set the Node.js runtime to a supported version (Node.js 22.x is recommended).
5. Add the environment variables from Section 3 in the Vercel project settings. Set SMTP variables for production; set GOOGLE_SITE_VERIFICATION only if using the HTML-tag method.
6. Deploy, connect the domain, enable HTTPS and test the enquiry form plus sitemap/robots routes.

Vercel's normal Next.js deployment integration should detect the framework build settings; use its logs if dependency installation or build fails.

### Render or other managed Node.js platforms

Create a Web Service / Node.js application, not a Static Site. Use these commands when custom commands are supported:

Build:
```bash
corepack enable
corepack prepare pnpm@10.34.7 --activate
pnpm install --frozen-lockfile
pnpm build
```

Start:
```bash
pnpm start
```

Select Node.js 22.x in the runtime settings and add the environment variables from Section 3. Follow the platform's own instructions for custom domains, TLS certificates, logs and automatic deployments. Do not publish port 3000 directly if the platform expects an assigned PORT; use the host's documented Next.js configuration if it requires a custom port. The default Next.js start script uses port 3000, so verify this against the platform's deployment model.

### General hosting requirements

Any selected host must:

- Support a Next.js Node server (not only static HTML).
- Install dependencies using the pnpm lockfile or a supported equivalent.
- run the production build and start scripts from package.json.
- Allow server-side environment variables for SMTP and optional Search Console verification.
- Provide HTTPS on the canonical domain.
- Support outbound SMTP to smtp.gmail.com:465 if you retain the current Gmail mailer. If outbound SMTP is blocked, use a compatible mail transport and update the contact route accordingly.

Official Next.js deployment guide: https://nextjs.org/docs/app/getting-started/deploying

## 7. Google Search Console

### Current readiness

The project has:

- A generated XML sitemap at /sitemap.xml, covering the static pages and the service/blog routes read from project data.
- A robots file at /robots.txt that allows crawling and declares the sitemap URL.
- Canonical URLs based on https://www.resseauxtech.com.
- An optional GOOGLE_SITE_VERIFICATION metadata field for Google's HTML-tag verification method.

The project is ready for an owner to complete verification and submit the sitemap. It is **not automatically verified** in anyone's Search Console account by a code change.

### Recommended method: Domain property + DNS TXT record

This is the preferred option when you control DNS for the domain and want one property to cover the apex domain, www and other subdomains.

1. Open https://search.google.com/search-console and sign in to the Google account that should own the property.
2. Choose Add property and select Domain.
3. Enter resseauxtech.com (without https:// or a path).
4. Copy the exact TXT record that Google provides.
5. Open the DNS zone at the provider that controls the domain's active nameservers. Add Google's TXT record at the root/apex name according to the DNS provider's instructions. Do not replace other TXT records; add a separate record.
6. Wait for DNS propagation, then return to Search Console and select Verify. If verification fails, confirm the record is in the active DNS zone and wait before retrying.
7. Once verified, open the property and choose Sitemaps.
8. Submit sitemap.xml (the property should resolve it as https://www.resseauxtech.com/sitemap.xml if that is your canonical host).
9. Check the sitemap status, open URL Inspection for the homepage and important service/blog URLs, and request indexing where appropriate.

### Alternative method: URL-prefix property + HTML meta tag

Use this if you specifically want to verify https://www.resseauxtech.com or cannot add DNS records. This repository now supports the HTML-tag token through app/layout.js.

1. In Search Console, add a URL-prefix property: https://www.resseauxtech.com/
2. Select the HTML tag verification method.
3. Copy only the value from the tag's content attribute—not the whole tag. For example, if Google shows <meta name="google-site-verification" content="ABC123" />, set GOOGLE_SITE_VERIFICATION to ABC123.
4. Set GOOGLE_SITE_VERIFICATION to that token in the hosting environment settings.
5. Rebuild/redeploy the website if required so Next.js outputs the verification tag in the page head.
6. Open the live homepage, inspect the page source and confirm a google-site-verification meta tag is present. Then return to Search Console and click Verify.
7. Submit https://www.resseauxtech.com/sitemap.xml under Sitemaps.

Google may show the property as not verified until the deployed metadata is visible and the correct Google account verifies it. Keep the token setting in place after verification if using the HTML-tag method; Google's documentation says it may periodically check that tag.

### Post-verification checks

- Sitemap submission shows Success or explains the current issue.
- Inspect https://www.resseauxtech.com/ and a sample service URL plus a sample blog URL.
- Check Page indexing reports for blocked, excluded or not found URLs.
- Check HTTPS and preferred canonical URL.
- Monitor Search Console after deployment. A sitemap helps Google discover URLs but does not guarantee indexing or ranking.

Official Google help:
- Verify ownership: https://support.google.com/webmasters/answer/9008080
- Search Console getting started: https://support.google.com/webmasters/answer/10267942

## 8. Release checklist

Before announcing a release:

- [ ] The change is committed to main.
- [ ] GitHub Actions production build passed for the target commit.
- [ ] The hosting provider deployed that same commit.
- [ ] Home page, service pages, FAQ page and blog articles open without errors.
- [ ] FAQs show one question per row, with no more than one answer open at a time.
- [ ] Contact form sends a genuine test message and the recipient receives it.
- [ ] HTTPS works on the canonical www domain and the apex domain redirects correctly.
- [ ] /robots.txt loads and declares the sitemap.
- [ ] /sitemap.xml loads and includes the new routes/content.
- [ ] Google Search Console ownership is verified by the property owner and the sitemap is submitted.

## 9. Troubleshooting

| Symptom | Checks |
| --- | --- |
| Build fails | Read the complete provider build log; confirm Node.js 22.x, pnpm version, lockfile and package install are aligned. Re-run pnpm build locally. |
| Page loads but contact email fails | Check SMTP_USER/SMTP_PASS, Gmail App Password, FROM_EMAIL alignment, CONTACT_TO and provider outbound SMTP restrictions. Review server/runtime logs. |
| Contact form errors only in production | Check that SMTP secrets are set in the production environment, not only in local .env.local. Redeploy/restart after changing them. |
| Google verification fails | Confirm correct property type, exact token, active DNS zone or deployed meta tag; allow DNS propagation if using TXT. |
| Sitemap returns 404 or stale content | Confirm the current production commit deployed and inspect /sitemap.xml and /robots.txt directly. |
| New article is not in recent posts | Add the entry to blogPosts in app/api/data.jsx and keep the newest dates at the beginning of the array. Check its unique slug, cover path and build. |
| HTTPS or www redirects incorrectly | Check DNS records, custom-domain settings, reverse-proxy rules and the SSL certificate for both resseauxtech.com and www.resseauxtech.com. |

## 10. Project files worth knowing

- README.md — project overview and quick start
- .env.example — safe list of supported environment variables
- app/api/data.jsx — blog content and service definitions
- components/FaqAccordion.jsx — shared one-open-at-a-time accordion
- components/RelatedFaqs.jsx — related FAQ section used across pages
- components/FaqPageClient.jsx — tabbed FAQ page
- app/api/contact/route.js — contact form mail delivery
- app/layout.js — global metadata and verification token support
- app/robots.js — robots.txt generator
- app/sitemap.js — sitemap route generator
- .github/workflows/next-build.yml — build check on main updates
- .github/workflows/refresh-dependencies.yml — on-demand dependency update, audit and build; see [Dependency Maintenance](DEPENDENCY-MAINTENANCE.md)
