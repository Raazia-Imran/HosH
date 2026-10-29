# HosH Integrity website

The client approved industrial inspection website, built with React, TanStack Start, TypeScript, Tailwind CSS and Vite. Company capabilities and photographs come from the supplied profiles. Preserve the approved design and the entire `.lovable/` folder.

## Current configuration

The intended public origin is `https://hoshintegrity.com`. The enquiry inbox is `hoshintegrityinfo@gmail.com`, and the confirmed location is Karachi, Pakistan. These details are centralised in `src/lib/site-config.ts`.

Work remains in [Raazia-Imran/HosH](https://github.com/Raazia-Imran/HosH). Do not move ownership or change DNS as part of routine content edits. The final client account move is planned after release review. A separate client repository can preserve history while leaving the agreed portfolio copy in place.

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

The enquiry endpoint uses FormSubmit and must be activated and tested by the client. The Google Fonts and provider dependencies are disclosed in the notices. No advertising or visitor analytics tags have been added. The website does not process online payments.

The current Vercel deployment is a development reference, not confirmation that the final client domain has launched. Vercel Hobby is restricted to personal or noncommercial use. Agree a suitable hosting plan for the business site before the final account move. Do not bypass dependency security blocks. TanStack Start is pinned to the security patched version with a committed lockfile.

After pushing, inspect the exact commit’s Vercel status and SonarQube result, and smoke test the deployed pages. A neutral SonarQube result or a quality gate that was not computed is not a passed gate. Never rewrite the published history of the Lovable connected branch.

See [the full launch checklist](docs/launch-checklist.md) for the release sequence, blockers, source references and account handoff procedure. Search optimisation supports discovery but cannot guarantee a first place ranking.
