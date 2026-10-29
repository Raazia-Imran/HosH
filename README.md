# HosH Integrity website

The client approved industrial inspection website, built with React, TanStack Start, TypeScript, Tailwind CSS and Vite. Company capabilities and photographs come from the supplied profiles. Preserve the approved design and the entire `.lovable/` folder.

## Current configuration

The intended public origin is `https://hoshintegrity.com`. The enquiry inbox is `hoshintegrityinfo@gmail.com`, and the confirmed location is Karachi, Pakistan. These details are centralised in `src/lib/site-config.ts`.

Work remains in [Raazia-Imran/HosH](https://github.com/Raazia-Imran/HosH). Do not move ownership or change DNS as part of routine content edits. The final client account move is planned after release review. The user selected a separate client repository with copied commit history, leaving the portfolio copy in place. Future production work will use the client repository; the copies will not automatically synchronise.

## Run and verify

Use the committed Bun lockfile for reproducible installation:

```sh
bun install --frozen-lockfile
bun run dev
bun run lint
bunx tsc --noEmit
bun run build
```

Against an already running development or deployed server:

```sh
BASE_URL=http://127.0.0.1:4173 npm run check:site
```

The site check verifies rendered routes, canonical URLs, metadata, structured data, local assets, contact configuration, sitemap, robots and the 404 response. It does not send an enquiry or prove inbox delivery, browser interaction, visual quality or legal compliance.

## Project structure

| Location | Purpose |
| --- | --- |
| `src/routes/` | Page content and route metadata |
| `src/components/` | Shared layout and approved interactive visuals |
| `src/lib/site-config.ts` | Final domain, enquiry email and confirmed location |
| `src/lib/seo.ts` | Canonical, sharing and structured data helpers |
| `src/lib/site-content.ts` | Company services, training and profile copy |
| `src/assets/` and `public/` | Approved images, branding, favicon and discovery files |
| `scripts/check-site.mjs` | Repeatable route and SEO checks |
| `docs/launch-checklist.md` | Full content, hosting, handoff, DNS, forms and SEO plan |
| `docs/content-evidence.md` | Confirmed facts and unresolved release decisions |
| `docs/image-provenance.md` | Photograph sources and colorization details |

## Release status

Home, Services, Industries, Training, Certifications, About, Contact, FAQ, Insights, Privacy, Terms and Cookies are implemented. Insights provides enquiry planning resources based on the supplied capabilities. Privacy, Terms and Cookies remain `noindex` and outside the sitemap until the operator confirms its identity and practices and approves the notices. They do not display public editorial placeholders.

The enquiry endpoint uses FormSubmit and must be activated and tested by the client. Manrope and Sora fonts are served locally with their font licences. Provider dependencies are disclosed in the notices. No advertising or visitor analytics tags have been added. The website does not process online payments.

The current Vercel deployment is a development reference, not confirmation that the final client domain has launched. Vercel Hobby is restricted to personal or noncommercial use. Agree a suitable hosting plan for the business site before the final account move. Do not bypass dependency security blocks. TanStack Start is pinned to the security patched version with a committed lockfile.

After pushing, inspect the exact commit’s Vercel status and SonarQube result, and smoke test the deployed pages. A neutral SonarQube result or a quality gate that was not computed is not a passed gate. Never rewrite the published history of the Lovable connected branch.

See [the full launch checklist](docs/launch-checklist.md) for the release sequence, blockers, source references and account handoff procedure. Search optimisation supports discovery but cannot guarantee a first place ranking.

## Privacy controls and application security

The first visit banner and footer Cookie settings dialog control optional navigation storage. It is off by default. The essential preference records a version, choice and timestamp for up to 180 days. Rejecting optional storage clears the router session entry, and changing the navigation choice reloads the page. No advertising or analytics scripts are installed. Adding one requires revisiting consent and policy behaviour.

SSR documents use a new CSP nonce per request, with strict script loading, no embedding and no object content. HTML is private and not cached so document nonces are not reused through a shared cache. Security headers also disable camera, microphone and geolocation access. Development mode allows the editor tools to work. These measures do not replace account access controls or prove universal legal compliance.

GitHub Actions runs installation from the committed lockfile, lint, types, dependency audit, a production build and route/security checks on main pushes and pull requests. Actions have read access and no deployment secrets. Dependabot checks weekly and opens update pull requests without automatically merging them. GitHub account security and branch rules must be configured separately with the correct owner.

For security headers, run the checker against a production build:

```sh
BASE_URL=http://127.0.0.1:4186 CHECK_SECURITY=1 npm run check:site
```

The Gmail links open a compose page for the confirmed inbox. Browsers control whether Gmail opens as an app or a web page. The Contact page also offers a default email app link. Social metadata uses `/og-image-v2.jpg`, a 1200 by 630 card containing the original supplied logo and tagline. Public platform fetching must be tested after the client domain is connected.
