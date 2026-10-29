<div align="center">

# 🧑‍💻 HosH Integrity · Developer Guide

**Run confidently. Preserve the approved design. Verify every release.**

[🏠 Overview](../README.md) · [👤 Client guide](README-client.md) · [🚦 Launch tracker](launch-checklist.md)

</div>

## ⚡ Quick start

Use **Node.js 24** and **Bun 1.3.5**, matching the committed verification workflow. Keep `bun.lock` as the installation source of truth.

```sh
git clone https://github.com/Raazia-Imran/HosH.git
cd HosH
npm install --global bun@1.3.5
bun install --frozen-lockfile
bun run dev
```

Open the local URL printed by Vite. No production password or provider token is required for the current public page development setup. These instructions currently use the developer repository; update the clone URL and workflow badge when the independent client repository is created.

## 🧰 Stack and architecture

| Layer | Implementation |
| --- | --- |
| ⚛️ UI | React 19 and TypeScript |
| 🧭 Routing and SSR | TanStack Start and TanStack Router |
| 🎨 Styling | Tailwind CSS, shared styles and existing UI components |
| ⚡ Tooling | Vite and the Lovable TanStack configuration |
| 📦 Installation | Bun with a committed frozen lockfile |
| ☁️ Review deployment | Vercel, using the existing connected project |
| ✉️ Form handling | Browser fetch POST to Web3Forms for the confirmed Gmail inbox |
| 🔤 Fonts | Locally served Manrope and Sora, with licences in `public/fonts/` |

Vite configuration already includes the required framework plugins through `@lovable.dev/vite-tanstack-config`. Do not install the same plugins a second time. Keep the existing SSR error wrapper and request security handling.

## 🗂️ Find the right file

| Path | Responsibility |
| --- | --- |
| `src/routes/` | Public pages, page metadata and content |
| `src/components/` | Shared layouts, interactive visuals and UI |
| `src/lib/site-config.ts` | Confirmed domain, email, location and active social image |
| `src/lib/seo.ts` | Page SEO and structured data helpers |
| `src/lib/site-content.ts` | Company capabilities and profile copy |
| `src/components/privacy-controls.tsx` | Banner and accessible cookie settings dialog |
| `src/lib/privacy-preferences.ts` | Preference expiry and optional storage choices |
| `src/router.tsx` | Router, conditional scroll restoration and SSR nonce |
| `src/server.ts` | Error wrapper and security response headers |
| `src/lib/secure-entry.server.ts` | Request nonce and document CSP handling |
| `src/lib/security-policy.ts` | Content Security Policy directives |
| `src/assets/` | Existing approved website illustrations and photographs |
| `public/` | Logo, fonts, social image and discovery files |
| `scripts/check-site.mjs` | HTTP checks for routes, assets, metadata and security |
| `.github/workflows/verify.yml` | Verification on main pushes and pull requests |
| `.github/dependabot.yml` | Weekly dependency update proposals |
| `.lovable/` | Required connected project planning files; preserve the whole folder |

## ✅ Verify a change

```sh
bun run lint
bunx tsc --noEmit
bun audit
bun run build
```

Lint currently has three existing React refresh warnings. Zero errors is the recorded baseline. Audit results describe the advisory database at the time of checking, not a guarantee that no vulnerability exists.

To exercise the production HTTP output locally, build for Node in one terminal:

**Bash**

```sh
NITRO_PRESET=node-server bun run build
PORT=4186 HOST=127.0.0.1 node .output/server/index.mjs
```

**Windows PowerShell**

```powershell
$env:NITRO_PRESET = 'node-server'
bun run build
$env:PORT = '4186'
$env:HOST = '127.0.0.1'
node .output/server/index.mjs
```

Run the checker in another terminal:

```sh
BASE_URL=http://127.0.0.1:4186 CHECK_SECURITY=1 bun run check:site
```

```powershell
$env:BASE_URL = 'http://127.0.0.1:4186'
$env:CHECK_SECURITY = '1'
bun run check:site
```

The Node preset is for this local production test. Do not persist it into the Vercel project configuration without a hosting reason. Start a new terminal afterwards, or remove the temporary environment variables before another deployment task.

The checker covers 12 content pages, metadata, structured data, assets, sitemap, robots, security contact and a true 404. Security mode also checks headers and unique document script nonces. It does not prove inbox delivery, browser interactions, visual quality or legal compliance.

## 🧪 Browser checks before release

- 📱 Check relevant pages at desktop, tablet and mobile widths for overflow, broken images and readable text.
- 🧭 Exercise mobile navigation, relevant selectors, FAQ controls and form validation after changing them.
- 🍪 Verify first visit choices, persisted choices, opt in, withdrawal, expiry, dialog focus and Escape dismissal.
- ✉️ Confirm Gmail compose links target the right inbox. Send a real enquiry only as part of an agreed delivery test.
- 🖼️ Confirm the active card is `public/og-image-v3.jpg`, 1200 × 630, with the logo and tagline and no printed domain.
- 🔎 Inspect server rendered metadata and the final public host’s HTTP robots headers.

The prior application release passed 36 page and viewport layout combinations. That historical result is not a substitute for checking a new interaction change.

## 🛡️ Privacy and security behaviour

| Feature | Current behaviour |
| --- | --- |
| Essential choice | `hosh-privacy-v1` stores version, choice and time for up to 180 days |
| Optional navigation | Off by default; opt in enables the router session entry `tsr-scroll-restoration-v1_3` |
| Withdrawal | Clears the optional entry and reloads the page to initialise the router again |
| Other tabs | Preference changes trigger a reload in receiving tabs |
| Analytics and ads | No visitor analytics tag or advertising pixel installed |
| Fonts | First party files, with no Google Fonts request |
| Scripts | Production SSR uses a new CSP nonce for each request |
| Document caching | Private with no store, preventing shared caching of document nonces |
| Other protections | No framing, no object content, restricted device permissions and response security headers |
| Form providers | Web3Forms and its submission processing have separate provider terms and cookies |

Do not add tracking, embedded services, payments or new storage without updating the notices and consent behaviour. Strict dynamic allows a trusted script to load descendants; an injected parser script without a nonce is the relevant inline script blocking check. Keep production CSP checks separate from editor development behaviour.

## 🔎 SEO and sharing

The final canonical origin is `https://hoshintegrity.com`. Keep canonical links, structured data, robots and sitemap consistent. Privacy, Terms and Cookies are public but currently `noindex,follow` and omitted from the sitemap. Their indexing decision is separate from legal suitability.

Social metadata uses `/og-image-v3.jpg`. The earlier images are retained as historical assets and are not referenced by active metadata. The domain stays in real links and SEO configuration; removing its printed line from the artwork does not remove the working website URL. A versioned image path helps platforms distinguish the update, but their caches may still need refreshing.

A developer preview may have a platform `X-Robots-Tag: noindex` response. Keep preview copies out of search. Verify that the intended public domain is publicly reachable and has appropriate robots headers at launch.

## 🔄 Delivery workflow

1. Read [AGENTS.md](../AGENTS.md) and the [launch tracker](launch-checklist.md). Confirm the current production source before editing.
2. Make a focused change on a working branch. Preserve the design, `.lovable/` and existing error handling.
3. Run relevant local checks and review the diff for accidental assets, secrets or unsupported business claims.
4. Push without rewriting published history. Inspect the exact commit’s GitHub verification, Vercel status and SonarQube output.
5. Confirm the deployment is READY, smoke test the deployed pages and inspect relevant error logs.
6. Record evidence and remaining tasks in the tracker. A neutral Sonar result or “Quality Gate not computed” stays unresolved.

Dependabot proposes updates without merging them. Review compatibility, run checks and verify the connected deployment before merging an update. Account MFA, recovery contacts, branch rules, secret scanning availability and provider roles require separate account configuration.

## 🤝 Client handoff and maintenance

Until the agreed release stage, use `Raazia-Imran/HosH`. Then copy the agreed full Git history to a standalone repository owned by `hoshintegrityinfo-gif` and verify the release SHA, branches, tags and assets. Git history copies do not copy issues, secrets, stars, app connections or access rules. Configure those separately.

After cutover, use the client repository for production and the client hosting account for deployment. Keep the portfolio copy only under the client agreement. The two copies will not automatically sync. Give the successor their own account access and demonstrate a tested change and rollback before the six month maintenance handoff.

Use a commercial hosting option permitted for this business website. The recorded Vercel Hobby restriction remains a launch decision. No DNS or ownership change is part of routine artwork or README edits.

## 📚 Supporting records

[🚦 Launch checklist](launch-checklist.md) · [📋 Content evidence](content-evidence.md) · [🖼️ Image provenance](image-provenance.md) · [👤 Client guide](README-client.md)
