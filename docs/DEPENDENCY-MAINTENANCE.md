# Dependency maintenance

**Last audited:** 16 October 2026  
**Branch:** main  
**Validated commit:** [3f17852a1de5135d47a17124273db2981152909f](https://github.com/k1neeraj/resseauctech/commit/3f17852a1de5135d47a17124273db2981152909f)

## Updated direct dependencies

The dependency refresh workflow upgraded the direct package manifest and regenerated `pnpm-lock.yaml` from the registry's current stable releases.

| Package | Version after update |
| --- | --- |
| `next` | `16.4.2` |
| `react` | `19.3.1` |
| `react-dom` | `19.3.1` |
| `lucide-react` | `1.58.0` |
| `nodemailer` | `10.1.1` |
| `swiper` | `14.3.0` |
| `tailwindcss` | `4.3.3` |
| `@tailwindcss/postcss` | `4.3.3` |
| `@biomejs/biome` | `2.5.15` |
| `babel-plugin-react-compiler` | `1.0.0` (no newer stable release was selected by the updater) |

The refreshed lockfile also resolves the compatible transitive dependencies. The exact tree is recorded in `pnpm-lock.yaml`; do not edit package versions inside the lockfile by hand.

## Validation recorded for this update

- `pnpm install --frozen-lockfile` passed after refreshing the lockfile.
- `pnpm audit --audit-level=high` passed and reported **no known vulnerabilities**.
- `pnpm build` passed and generated all 41 static pages for the Next.js application.
- The updated `package.json` and `pnpm-lock.yaml` were committed to `main` in the validated commit linked above.

The repository's dependency workflow was also added at `.github/workflows/refresh-dependencies.yml`.

## Production build bundler note — 17 October 2026

The production script now runs `next build --webpack` (via `pnpm build`) instead of relying on Next.js's default Turbopack production build. Hostinger had repeatedly failed during the default build after about 15 minutes without exposing a specific compiler error. The Webpack-script change was committed in [845a700](https://github.com/k1neeraj/resseauctech/commit/845a700ed56f3f551925da6aa73b3d0232f711b0), the GitHub Actions production build passed, and the site owner confirmed that Hostinger deployment also succeeded with Node.js 24 after this change.

This identifies a working build path, not a proven root cause for the earlier Hostinger failure. Keep the host build command as `pnpm build` so it uses the project's configured script.

## Updating dependencies again

1. Open the repository's **Actions** tab on GitHub.
2. Select **Refresh dependencies**.
3. Select **Run workflow** on the `main` branch.
4. The workflow uses pnpm to update direct dependencies to the current stable releases, validates the lockfile, runs the high-severity audit and builds the application.
5. It commits the updated `package.json` and `pnpm-lock.yaml` to `main` only if installation, audit and build all pass. If a check fails, no dependency commit is pushed; inspect that run's logs first.

This updater is manual after its initial run so new major versions are not silently pushed without a deliberate maintenance run. The workflow upgrades to the latest stable versions rather than pinning October-specific versions forever; the table above records the audit baseline as of the date shown.

## Deployment note

After a dependency update is committed, deploy the new `main` commit through the configured host. The successful GitHub Actions build validates compilation but does not by itself test live SMTP delivery or every visual interaction. After deployment, test the homepage, navigation, homepage slider, main and related FAQs, blog/service pages and send a genuine contact-form test email.
