# HosH Integrity master launch plan and status tracker

Prepared on 29 October 2026. Work remains in Raazia-Imran/HosH until the final client handoff. This checklist records preparation, not a claim that the final domain, inbox, legal review or Search Console have been verified.

## Status key and working method

🟢 Done means there is evidence that the named task is complete in its stated environment. 🟡 In progress means it is partly prepared or awaiting a review or verification. 🔴 To do means the work has not been completed. A green development check does not mean the final client domain is launched.

For each task, record the owner, date, exact account or environment, release commit and evidence. Move the next selected red task to yellow when work begins. Move it to green only when its acceptance check passes. Keep failures and unresolved dependencies visible. We will work through this sequence one stage at a time. This document does not schedule automatic maintenance tasks.

## Execution order and current position

| Step | Status | Work | Acceptance evidence |
| --- | --- | --- | --- |
| 01 | 🟡 In progress | Confirm the client account roles, registered business identity, target markets and legal notices | Correct owners and recovery contacts recorded; client reviews notices and actual practices |
| 02 | 🟡 In progress | Agree hosting and the independent repository handoff approach | A suitable commercial hosting plan and portfolio permission are agreed |
| 03 | 🟢 Done | Complete verified website copy and remove public red editorial notes in the developer repository | Contact, footer, Privacy, Terms, Cookies and Insights updated in release f939e4a |
| 04 | 🟢 Done | Prepare technical and page SEO in code | Final domain metadata, schema, robots and sitemap pass the development checks |
| 05 | 🟢 Done | Check the current development release | Build and TypeScript pass, lint has zero errors, responsive and interaction checks pass; developer Vercel deployment READY |
| 06 | 🟡 In progress | Validate form delivery, privacy choices and final content | New recipient is configured; activation, a real delivery test and client approval remain |
| 07 | 🔴 To do | Freeze the release and create the client owned repository | Release SHA and agreed branches/tags preserved in the client account |
| 08 | 🔴 To do | Deploy from client GitHub to the client Vercel workspace | Correct owner, project, branch and plan; build READY and client preview verified |
| 09 | 🔴 To do | Add the domain in the client Vercel project and update Namecheap DNS | Authoritative DNS contains the exact project records without losing email records |
| 10 | 🔴 To do | Verify HTTPS, redirects, public access and final crawler rules | Final domain works without login; one canonical hostname; real 404 and correct robots headers |
| 11 | 🔴 To do | Complete the client Google Search Console setup | Domain ownership verified, client owner confirmed, sitemap read and important URLs inspected |
| 12 | 🟡 In progress | Validate social link previews | Image and metadata prepared; final public domain and platform preview tests remain |
| 13 | 🟡 In progress | Run the final SEO checker and performance improvement cycle | Local checks passed; dated final domain audit, prioritised fixes and retest remain |
| 14 | 🔴 To do | Complete the release decision and client handoff | Required signoffs, live form receipt, rollback record and correct account ownership |
| 15 | 🔴 To do | Complete launch monitoring and the six month maintenance period | Tracked updates, search performance and delivery checks throughout the agreed term |
| 16 | 🔴 To do | Handover to the client’s son at the end of maintenance | Independent access, documentation and a supervised change and rollback completed |

The next decision is Step 01 and Step 02. The current review deployment is not the client account deployment. Source work stays in Raazia-Imran/HosH until the agreed final handoff stage.

## Account ownership map

| Service | Final owner or location | Developer role | Current evidence |
| --- | --- | --- | --- |
| GitHub | hoshintegrityinfo-gif, proposed repository HosH | Collaborator during maintenance | User reports account access; client repository not created yet |
| Vercel | Client workspace hoshintegrity | Appropriate project access during maintenance | Account link supplied; final project, plan and role verification remain |
| Namecheap | Client domain account for hoshintegrity.com | Delegated DNS work | Domain and access reported by user; no DNS cutover claimed |
| Search Console | Client Google account with Domain property hoshintegrity.com | Full user or appropriate delegated permission | Account access reported; website property verification not claimed |
| Enquiry inbox | hoshintegrityinfo@gmail.com | Test and support only as agreed | New email is in code; live inbox activation and delivery unverified |
| Portfolio repository | Raazia-Imran/HosH | Developer owner | Existing repository retained, subject to the client agreement |

Use separate role based access where each service supports it. Confirm client recovery details and multifactor authentication. Never commit passwords, recovery codes, tokens or inbox contents. No account ownership change is being made by this plan.

## Confirmed configuration

| Item | Value | Evidence |
| --- | --- | --- |
| Brand | HosH Integrity | Supplied company profiles and approved website |
| Final domain | hoshintegrity.com | Confirmed by the user on 29 October 2026 |
| Preferred canonical origin | https://hoshintegrity.com | Prepared in code; final DNS and redirect checks remain |
| Enquiry and privacy email | hoshintegrityinfo@gmail.com | Supplied by the user |
| Location | Karachi, Pakistan | Confirmed by the user |
| Current source repository | Raazia-Imran/HosH | Existing project |
| Intended client account | hoshintegrityinfo-gif | Supplied by the user; no repository created there yet |
| Intended client Vercel workspace | hoshintegrity | Supplied account link; project access and billing not verified |
| Registrar | Namecheap | Supplied by the user; DNS zone not changed |

## Content, evidence and legal review

- 🟢 Done: Replace public red notes on Contact and in the footer with the confirmed email and city.
- 🟢 Done: Remove public editorial notes from Privacy, Terms and Insights.
- 🟢 Done: Expand Privacy and Website Terms using the current website functionality.
- 🟢 Done: Add Cookies and Browser Storage information and links to provider notices.
- 🟢 Done: Provide practical enquiry resources on Insights without invented authors, dates or project claims.
- 🟢 Done: Use the new domain in canonical URLs, sharing metadata, structured data, robots and sitemap.
- 🟢 Done: Avoid em dashes and hyphens in newly written public prose. Keep required punctuation in URLs, filenames and code.
- 🔴 To do: Obtain the registered legal entity name and registration details. HosH Integrity is currently presented as the brand, not an invented registered company name.
- 🔴 To do: Obtain the public telephone number and office address, if the client wants them published. A city alone does not establish a visitor office or a registered address.
- 🔴 To do: Confirm the real service locations and target customers. Do not create pages for cities or countries that the company does not serve.
- 🔴 To do: Confirm current certificates, memberships, course availability and the scope of each credential. Do not silently replace OHSAS 18001 with ISO 45001 or invent renewal dates.
- 🔴 To do: Confirm rights to the supplied logo and photographs. Keep the image provenance document.
- 🔴 To do: Have the client review the new legal notices against its actual practices. Confirm the operator identity, retention criteria, provider arrangements and any law specific requirements with an appropriate adviser where needed.
- 🔴 To do: After review, choose whether Privacy, Terms and Cookies should be indexed. They can remain public with noindex without blocking the main website from ranking. If indexing is desired, change `index: false` to `true`, update the sitemap and update the matching expectation in `scripts/check-site.mjs`. Approval and search indexing are separate decisions.

### Exact pages to review

| Page | Current review URL | Intended final URL |
| --- | --- | --- |
| Privacy Policy | https://hos-h.vercel.app/privacy | https://hoshintegrity.com/privacy |
| Website Terms and Conditions | https://hos-h.vercel.app/terms | https://hoshintegrity.com/terms |
| Cookies and Browser Storage | https://hos-h.vercel.app/cookies | https://hoshintegrity.com/cookies |

The review host may require the developer’s Vercel authentication. The final URLs are the planned addresses, not confirmation that DNS is connected. All three routes currently contain `noindex,follow`, are readable by visitors and are omitted from the sitemap. The main service pages have their own indexable metadata. Noindex is a search instruction, not password protection.

Registered business details means the correct operator name, country, and relevant public or legally required contact information. Only the brand, email and Karachi, Pakistan are currently confirmed. A street address or phone must not be guessed. The notice text should match the actual retention and provider arrangements.

Current credentials means current professional certificates and memberships, with valid scope and dates, such as the ISO, LEEA and other credentials described in the supplied profile. It does not mean the client’s login passwords. The certifications page also deserves a factual review at https://hos-h.vercel.app/certifications, but it is not one of the three pages intentionally excluded from search.

### What the Cookies page currently does

It is an information page. It describes scroll restoration session storage, the absence of advertising and analytics tags in the current source, Vercel hosting features, Google Fonts requests and the FormSubmit/reCAPTCHA flow. It links to provider privacy information. It does not install a consent banner, collect consent or block optional technologies until a visitor accepts them.

The client should review it, together with Privacy and Terms, to confirm the actual business practices, audience and providers. A final browser storage and network audit should check the deployed domain. Whether particular storage or provider features need consent depends on the applicable rules and purpose, not simply on whether the page calls something a cookie. Do not assume a scroll convenience feature is legally essential. A suitable adviser can assess the relevant jurisdictions. If consent controls are needed, implement and test them before enabling the affected technologies. Do not add Google Analytics or an advertising pixel without revisiting this decision.

## Enquiry delivery and information handling

- 🟢 Done: Point the contact form and visible email links to hoshintegrityinfo@gmail.com.
- 🟢 Done: Explain FormSubmit delivery and the potential Google reCAPTCHA check next to the form.
- 🟢 Done: Link the Privacy Policy and Website Terms beside the submit action.
- 🟢 Done: Keep required fields, email validation, length limits and the honeypot.
- 🔴 To do: Confirm the client approves FormSubmit as the form delivery provider. Provider policies and security expectations must suit the type of enquiries collected.
- 🔴 To do: Submit one clearly labelled test enquiry on the final domain with the client’s agreement.
- 🔴 To do: Have the client complete FormSubmit inbox activation. Changing the recipient requires checking activation for the new inbox.
- 🔴 To do: Verify receipt in Gmail, including spam, reply address and all form fields. Form configuration alone does not prove delivery.
- 🔴 To do: Test a valid submission, invalid email, empty required fields, reCAPTCHA and the provider’s confirmation/error experience on mobile and desktop.
- 🔴 To do: Confirm how the company handles deletion and correction requests and who can access enquiries.
- 🔴 To do: Decide whether a mailbox on hoshintegrity.com is required. The supplied Gmail inbox can receive enquiries without changing the domain’s MX records.
- 🔴 To do: If a domain mailbox is added later, use that mail provider’s exact MX, SPF and DKIM instructions. Plan DMARC after verifying legitimate sending. Do not publish a second SPF record or copy Gmail MX records merely because a contact address ends in gmail.com.

## Hosting decision

Vercel’s current terms limit Hobby to personal or noncommercial use. HosH is a business website that generates service enquiries. Do not launch it as a commercial project on Hobby. If the client wants Vercel, select a plan that permits this use. If the budget requires free hosting, choose and test another host that permits the intended commercial use and supports this server rendered application. No paid upgrade has been made.

- 🔴 To do: Agree a hosting budget and a plan that permits the intended business use.
- 🔴 To do: Confirm the client’s workspace, billing owner, recovery access and project permissions.
- 🔴 To do: Verify that the selected host supports TanStack Start, its server entry and the chosen Nitro target. A static file upload is not equivalent to hosting the current server rendered application.
- 🔴 To do: Keep the existing patched TanStack Start versions and committed Bun lockfile.
- 🔴 To do: Install from the lockfile and select the intended runtime version. The existing Vercel project uses Node 24 and the TanStack Start Lovable framework preset.
- 🔴 To do: Set usage alerts and a spending limit if supported by the selected plan.
- 🔴 To do: Keep the current working deployment available as a rollback reference until the client deployment is verified.

## Client repository and deployment handoff

### Choosing between fork, copy and transfer

| Option | Your portfolio repository | Client ownership and future work | Fit for this project |
| --- | --- | --- | --- |
| Client forks your repository | Original remains in your account | Client can commit and deploy its fork, but it remains in the upstream fork network; a public upstream has public forks | Possible if both parties accept the public fork relationship |
| Separate client repository with copied Git history | Original remains in your account | Client owns a standalone repository and chooses its own access and visibility | Recommended for an independent handoff |
| Transfer ownership of the current repository | The repository moves out of your account | Client receives the repository and its associated GitHub project history | Valid, but does not match the stated preference to keep this repository in your account |

Transferring does not erase commit history or authorship. Copying Git history also preserves the copied commit objects and author information. Profile contribution display has its own GitHub rules, including author email attribution and the repository context; a portfolio link is separate from the contribution calendar. A copy of Git history does not copy stars, issues, pull requests, repository secrets or app settings. A transfer preserves more repository metadata than a code/history copy.

A fork is not a requirement for the client’s son to make changes. With a standalone repository, the client can add him as a collaborator or use their own branches and pull requests. Future commits to the client repository do not automatically change your portfolio copy. After handoff, the client repository is the production source of truth. Use named accounts and an agreed review process rather than several people changing the production branch directly.

Do this only after content and verification are complete. Do not transfer ownership of Raazia-Imran/HosH if it needs to remain in the developer’s portfolio. Instead, create a separate client owned repository and copy the agreed history into it. Confirm the client permits the portfolio copy and any public source or screenshot use.

- 🔴 To do: Freeze an agreed release commit and record its SHA.
- 🔴 To do: Confirm whether the client repository should be public or private.
- 🔴 To do: Check for credentials, private documents and customer data before copying or retaining history. Do not store account passwords in source files, commits or the checklist.
- 🔴 To do: Create an empty repository under hoshintegrityinfo-gif. Use `HosH` only if that is the agreed name and it is available.
- 🔴 To do: Copy branches and tags into that empty repository without rewriting published history.
- 🔴 To do: Verify that the release commit SHA is the same in both repositories and all required image assets exist.
- 🔴 To do: Remember that a Git history copy does not copy issues, app installation permissions, GitHub secrets, protection settings or Vercel configuration.
- 🔴 To do: Review the Lovable connection target. Preserve the entire `.lovable/` folder, but do not assume copying its project metadata creates a new client Lovable project or changes the original connection.
- 🔴 To do: Grant the developer collaborator access if future maintenance is agreed. Make the client copy the source of truth for production after handoff.
- 🔴 To do: In the client’s Vercel workspace, import the client repository and verify the selected account, project, release commit and production branch.
- 🔴 To do: Configure only the environment variables and integrations the application actually requires. Transfer secrets through provider settings, not Git commits.
- 🔴 To do: Enable the relevant GitHub apps for the new repository and configure SonarQube against the correct client project.
- 🔴 To do: Run a client preview deployment and compare it with the approved release before connecting the domain.
- 🔴 To do: Retain the portfolio repository at the agreed visibility. Link to the client website from its README after launch. Avoid serving a second indexable copy of the same company website.

Example commands for a new, empty client repository, to be used at handoff rather than now:

```sh
git clone --bare https://github.com/Raazia-Imran/HosH.git HosH-client.git
cd HosH-client.git
git push --all https://github.com/hoshintegrityinfo-gif/HosH.git
git push --tags https://github.com/hoshintegrityinfo-gif/HosH.git
```

If the target contains unrelated commits, stop and reconcile them. Do not force push or overwrite an existing client repository.

## Domain connection, Namecheap DNS and HTTPS

- 🔴 To do: Confirm the actual authoritative DNS provider from the domain’s nameservers. Registration at Namecheap does not necessarily mean Namecheap hosts the DNS zone.
- 🔴 To do: Export or record the current nameservers, DNS records and TTL values before making changes.
- 🔴 To do: Add hoshintegrity.com and www.hoshintegrity.com to the verified client hosting project.
- 🔴 To do: Use the exact current A, CNAME and verification TXT values shown by that project. Do not reuse example IP addresses or another project’s CNAME target.
- 🔴 To do: Prefer updating the required web records in the current DNS zone. If nameservers must change, first recreate every needed existing record at the new DNS provider.
- 🔴 To do: Preserve MX, SPF, DKIM, DMARC and unrelated verification records. Remove only conflicting records for the website names after reviewing them.
- 🔴 To do: Avoid a CNAME at the domain root when it conflicts with the provider’s apex or email requirements. Follow the selected host and DNS provider’s supported apex configuration.
- 🔴 To do: Complete any hosting ownership TXT verification and confirm successful DNS resolution from more than one resolver.
- 🔴 To do: Confirm HTTPS certificates for both the root and www hostnames, with no browser warning or mixed content.
- 🔴 To do: Use one preferred hostname: https://hoshintegrity.com. Redirect HTTP and www to it with a permanent redirect and no loop.
- 🔴 To do: Confirm old paths return useful pages or a real 404. Do not redirect every missing page to Home.
- 🔴 To do: Check whether the old profile domain, hoshint.com, is controlled by the client and has existing traffic. If it is an old live website, plan path preserving permanent redirects and an appropriate Search Console site move. Do not assume ownership of that domain.
- 🔴 To do: Do not disable Namecheap domain privacy to configure DNS unless a provider supplies a specific verified reason.
- 🔴 To do: Keep a rollback record of the prior web DNS values and the last working client deployment.

### Domain connection order

1. In the client Vercel workspace, select the project deployed from the client repository.
2. Open the project’s Domains settings and add `hoshintegrity.com` and `www.hoshintegrity.com`.
3. Record the exact records and any ownership verification value Vercel requests for that project.
4. In the client Namecheap account, select the domain and open Manage. Check Nameservers first.
5. If Namecheap BasicDNS or PremiumDNS hosts the zone, use Advanced DNS and Host Records. If another provider hosts the zone, update records there instead.
6. Back up the existing records, then add or update only the required website and verification records. Use the correct host label, value and TTL. Do not copy example IP addresses from this plan.
7. Preserve existing mail and unrelated TXT records. Review conflicting web records before deleting anything.
8. Wait for authoritative DNS to show the intended values, then recheck Vercel’s validation and HTTPS certificates.
9. Configure the www and HTTP redirects to `https://hoshintegrity.com`, and test the complete redirect chain.
10. Test actual page URLs and assets on the final domain. Namecheap remains the registrar/DNS provider and Vercel serves the site. A domain registration does not require uploading the website to Namecheap.

## Technical SEO, robots and page experience

- 🟢 Done: Give every page a distinct title and description.
- 🟢 Done: Centralise the canonical domain and contact details.
- 🟢 Done: Add consistent Open Graph and social sharing metadata with the approved image.
- 🟢 Done: Add Organization and WebSite data on Home, plus page and breadcrumb data elsewhere.
- 🟢 Done: Include only known organization information. Do not add a fabricated street address, phone, ratings, reviews, awards or a legal name.
- 🟢 Done: Keep server rendered page content, ordinary internal links, one main heading and a branded 404.
- 🟢 Done: Keep relevant image descriptions and the approved image assets.
- 🟢 Done: Add a repeatable `npm run check:site` check for route responses, metadata, schema, contact configuration and assets.
- 🔴 To do: Confirm the public client domain is accessible without Vercel login or deployment protection. Keep staging and portfolio deployments protected or excluded from indexing.
- 🔴 To do: Check both HTML robots tags and HTTP `X-Robots-Tag` headers on the final domain. A Vercel preview noindex header must not remain on the real public site.
- 🔴 To do: Confirm Google can fetch CSS, JavaScript, images, robots and sitemap on the final hostname.
- 🔴 To do: Test Google’s Rich Results Test and inspect structured data without promising a rich result. An FAQ page does not automatically qualify for FAQ rich results.
- 🔴 To do: Run Lighthouse and PageSpeed Insights on the actual final domain, then review real Core Web Vitals when field data becomes available. Target LCP at most 2.5 seconds, INP at most 200 milliseconds and CLS at most 0.1 at the 75th percentile.
- 🔴 To do: Check mobile navigation, touch targets, text contrast, keyboard focus, reduced motion, image loading, layout stability and horizontal overflow.
- 🔴 To do: Review the largest images, font loading and JavaScript using measurements. Compress or self host assets only after comparison with the approved design.
- 🔴 To do: Test Home, Services, Training, Contact, all legal pages and a missing URL on mobile, tablet and desktop.

### Exact crawler and discovery files

| File or signal | Status | Intended address or action |
| --- | --- | --- |
| robots.txt | 🟢 Prepared in code; final host check remains | https://hoshintegrity.com/robots.txt |
| XML sitemap | 🟢 Prepared in code; final host check remains | https://hoshintegrity.com/sitemap.xml |
| Social preview image | 🟢 Prepared in code; final host check remains | https://hoshintegrity.com/og-image.jpg |
| Canonical links and sharing metadata | 🟢 Prepared in code | Final origin hoshintegrity.com throughout |
| Public indexability and headers | 🔴 To do on final client domain | Check page robots tags, HTTP headers, login access and host redirects |

The correct filename is `robots.txt`, not `robotics.txt` or `robots.xml`. The current public file is:

```text
User-agent: *
Allow: /
Sitemap: https://hoshintegrity.com/sitemap.xml
```

The sitemap is XML with a sitemap namespace and canonical HTTPS URLs. Its current nine URLs are Home, Services, Industries, Training, Certifications, About, Contact, FAQ and Insights. It excludes the three noindex legal routes. Check XML validity, successful fetch and consistency with the actual public canonical URLs. Include only indexable pages that return 200. Use truthful last modification dates if those are added later. Do not refresh every lastmod value just because a build ran.

A separate sitemap index, image sitemap, video sitemap, news sitemap, feed or llms.txt is not automatically required for this small site. Add specialised files only when the actual content and use case justify them. robots.txt is a crawling instruction, not a security boundary. Do not place passwords or private URLs in it. Do not put a noindex directive in robots.txt. A crawler needs access to a page to see its HTML noindex instruction, so avoid blocking a page in robots when relying on that instruction for exclusion.

Allow search and social crawlers to retrieve the public pages and required assets. Check that security settings do not accidentally challenge Googlebot, Google image fetching or social preview requests. Keep developer previews and a duplicate portfolio deployment protected or appropriately excluded. Sitemap submission requests discovery; it does not force indexing or a ranking.

## Client Search Console setup

The platform account screen for Instagram, TikTok, X and YouTube is optional. It does not replace adding the website property.

- 🔴 To do: Add a Domain property for hoshintegrity.com in the client’s Search Console account. Enter the domain without a scheme or path.
- 🔴 To do: Generate the property’s unique DNS TXT verification record and add that exact value at the authoritative DNS provider.
- 🔴 To do: Verify ownership and retain the TXT record. Do not invent a verification token or place one from another property on this domain.
- 🔴 To do: Keep the client as an owner and grant the developer appropriate access through user management.
- 🔴 To do: Submit https://hoshintegrity.com/sitemap.xml after the public domain is working.
- 🔴 To do: Run live URL Inspection on Home and important service pages. Check rendering, crawl access, declared canonical and Google’s selected canonical when available.
- 🔴 To do: Request indexing for the important approved pages. A sitemap or indexing request does not guarantee inclusion or a particular ranking.
- 🔴 To do: Review Page indexing, HTTPS, sitemaps, enhancements, security issues and manual actions.
- 🔴 To do: Record a baseline for impressions, clicks, queries and landing pages. New properties can need time before data is available.

### Search Console procedure in the client account

1. Open the client’s Search Console account and confirm the active Google identity.
2. Select Add property and choose Domain. Enter `hoshintegrity.com` without `https://` or a path. The social platform property options are not the website setup.
3. Copy the unique verification TXT record generated for this property. Add it to the authoritative DNS zone, verify, and retain the record.
4. Open Settings and review ownership and permissions. Keep the client as verified owner and give the developer the appropriate access for the maintenance term.
5. After the final domain is public, open Sitemaps and submit `https://hoshintegrity.com/sitemap.xml`. Confirm a successful fetch rather than only recording that Submit was clicked.
6. Inspect Home and the important service and Contact URLs. Use the live test, inspect rendered output, and confirm crawl access, indexing eligibility and canonical links.
7. Request indexing for the important approved URLs. Do not repeatedly submit the same URL to try to force a faster result.
8. Review Page indexing and sitemap results. A deliberate noindex for a legal page is different from an accidental noindex on Home or Services.
9. Review HTTPS, available structured data enhancements, Security issues and Manual actions. Investigate actual findings.
10. Check the robots report and Crawl stats when available, including host availability and server errors. A newly created property may initially have little data.
11. Record the baseline in Performance: queries, pages, countries, devices, clicks, impressions, CTR and average position. Some reports appear only when the site has qualifying data.
12. Turn on relevant email notifications in the client’s user settings and agree who will respond to alerts.

### Which Search Console settings matter

| Setting or report | What to do for this website |
| --- | --- |
| Ownership verification | Verify the actual domain and retain its DNS proof |
| Users and permissions | Client remains owner; developer access is deliberate and reviewed at handoff |
| Sitemaps | Submit the final site’s sitemap and check processing |
| URL Inspection | Test representative URLs and inspect canonical/rendering/indexing results |
| Page indexing and HTTPS | Review errors and distinguish intended exclusions from faults |
| robots.txt and Crawl stats | Review fetch and host errors when available |
| Security issues and Manual actions | Investigate findings, keep alerts monitored |
| Performance | Measure real queries and enquiries over time; compare consistent periods |
| Associations | Add only relevant verified services, such as an agreed Analytics property. Search Console does not require Google Analytics |
| Search generative AI control | Review the current include, exclude or inherited choice with the client. It governs the relevant Search AI features and is not a boost to ordinary search rankings |
| Links and any eligible AI performance reports | Monitor genuine discovery and referral signals when data is available; never treat a report as a guaranteed traffic source |
| Local search visibility controls | Review with the client if shown. Avoid opting out of relevant local visibility without a deliberate business decision |
| Change of address | Use only for a real eligible move from a controlled old live domain. Copying GitHub accounts or connecting this new site is not itself such a move |
| Removals | Use only for a deliberate search removal need, not to fix routine sitemap or canonical errors |
| Bulk data export | Optional advanced reporting; consider the client’s needs and any external storage costs before enabling |
| Shipping and returns | Not applicable while this site has no online store |
| Other controls shown by the account | Check their current purpose and eligibility. Do not change advanced controls merely to fill every setting |
| Remove property | Do not remove the working client property during setup |

Available reports and settings vary with property type, role, features and collected data. Search Console has no switch that makes the site rank first, and it is not a consent manager or a visitor analytics installation.

## Social link preview picture and URL

🟡 In progress: Open Graph and social card metadata, titles/descriptions and a 1200 × 630 JPEG are already in the source. The image contains the approved HosH logo. The final domain has not been validated for preview fetching yet.

1. Confirm the client approves the existing image at `/og-image.jpg`.
2. Once DNS and HTTPS are working, fetch `https://hoshintegrity.com/og-image.jpg` without a login. Check an HTTP 200 response and an image content type.
3. Inspect the server rendered source of Home and key pages for `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, image dimensions and image alt text, plus the Twitter card tags.
4. Confirm image URLs use the final public domain. An image file existing in GitHub is not enough if its public URL is unreachable.
5. Check redirects, authentication, firewall challenges and crawler blocking for both the page and image.
6. Test Facebook’s Sharing Debugger and LinkedIn’s Post Inspector. Then test an actual new link share in WhatsApp and any other platform the client uses.
7. Refresh a platform’s cached preview with its inspection tool where supported. Allow for cache delays. Changing an image may require a new image URL or version and a repeat fetch.
8. Record the tested URL, date, image, title and result. Mark this step green only after the final domain works for the target platforms.

A rich link preview is not a screenshot of the whole website and is not a Google search result. Platforms control whether and how they display a card. There is no GSC setting to enable social previews.

## SEO checker, accessibility and performance cycle

1. Select the audit tools and a consistent test profile. Use an SEO checker for crawling and metadata, PageSpeed Insights or Lighthouse for performance and accessibility, Google’s Rich Results Test for supported structured data, and Search Console for Google’s own crawl and search evidence.
2. Audit the final HTTPS domain, not a login page, a Namecheap parking page or only the developer preview. Record tool name/version where shown, date, device, location and tested URLs.
3. Export the baseline findings and scores. Keep a work log with issue, affected URL, priority, owner, fix and retest evidence.
4. Fix launch blockers first: unavailable pages, accidental noindex, authentication, broken redirects, invalid certificates, blocked assets, a broken contact workflow and significant accessibility barriers.
5. Fix the relevant technical findings: broken links, internal links to redirects, canonical mismatches, duplicate or missing titles/descriptions, thin pages, sitemap errors, incorrect structured data and avoidable image or script problems.
6. Check image loading, dimensions and descriptions, font delivery, keyboard access, forms, contrast, mobile layout and reduced motion. Do not compromise the client approved design to remove an irrelevant tool warning.
7. Prioritise speed improvements using measurements. Aim for good Core Web Vitals and validate field data when enough visits have been recorded. A lab score and field experience are different measurements.
8. Retest the same URLs using the same tool and profile after each related group of fixes. Test the website and enquiry workflow again after changes.
9. Document findings that are intentionally not changed. Examples can include the deliberate noindex on legal pages or a suggestion that does not apply to this noncommerce website.
10. Review search intent, accurate service information, internal linking and useful expert content. A high automated score does not establish useful content or guaranteed rankings.
11. Do not add fake reviews, keyword stuffing, hidden text, unsupported certifications or bought links to raise a number. Do not add obsolete meta keywords merely because a checker suggests them.
12. Produce a final dated audit with the resolved issues and remaining limitations. There is no universal score shared by all SEO tools and no honest permanent first place guarantee.

## Content, local visibility and ongoing SEO

| Page | Primary intent | Next evidence needed |
| --- | --- | --- |
| Home | HosH brand and industrial inspection in Karachi | Confirmed service coverage and current company facts |
| Services | Industrial inspection, NDT, welding inspection and asset integrity | Current capability scope and approved project examples |
| Industries | Inspection support for the listed industries | Original project context with publication permission |
| Training | Welding, QA/QC, HSE and lead auditor programmes | Current schedules, outlines, eligibility and credentials |
| Certifications | Verification of qualifications | Current certificates and membership scopes |
| About | Company background and competence | Legal name and verified business history |
| Contact | Project enquiry and company location | Public phone and address if approved |
| FAQ | Enquiry and quotation questions | Answers reviewed by the technical team |
| Insights | Planning an inspection or training enquiry | Future expert reviewed resources and genuine case studies |

- 🔴 To do: Prioritise the services the client actually sells and the places it actually serves. Do not create thin location pages or repeat keywords unnaturally.
- 🔴 To do: Develop expert reviewed service resources and case studies with original evidence, real authors where appropriate and permission to publish client details.
- 🔴 To do: Confirm eligibility for Google Business Profile. Use a real staffed business location or a genuine service area arrangement that meets Google’s rules. A virtual office alone is not enough.
- 🔴 To do: Use consistent approved company details across the website, Business Profile and relevant professional directories.
- 🔴 To do: Obtain genuine customer reviews where permitted. Do not buy links or reviews, invent ratings or guarantee ranking through a directory listing.
- 🔴 To do: Add only verified official social profiles to structured data when supplied. Do not use the developer’s or another company’s accounts.
- 🔴 To do: Review Search Console regularly for relevant queries and opportunities to improve existing pages.
- 🔴 To do: Record organic enquiries as well as search clicks. If optional analytics or advertising is proposed, agree the purpose and consent requirements before adding tags.
- 🔴 To do: Recheck credentials, course information, legal notices, broken links and software security updates as part of maintenance.

No SEO implementation can guarantee that a website stays first on Google. Search positions vary by query, competition, location and Google’s systems. Report measured progress rather than a permanent first place promise.

## Final release evidence

- 🔴 To do: Client approves the release content and all legal notices.
- 🔴 To do: Confirm the operator details and actual practices needed to finalise the notices.
- 🔴 To do: A suitable commercial hosting plan is agreed.
- 🔴 To do: A clean lockfile install, production build, TypeScript and lint checks pass.
- 🔴 To do: The release commit’s GitHub app checks and Vercel deployment status have been inspected. A local build alone is not launch approval.
- 🔴 To do: SonarQube reports a computed quality gate, or its unresolved status and findings are clearly documented. A neutral result is not a pass.
- 🔴 To do: The exact client deployment reports READY and its pages, assets, redirects and runtime logs have been checked.
- 🔴 To do: A real enquiry reaches the activated client inbox.
- 🔴 To do: Final domain, HTTPS, canonical URLs, robots headers and Search Console verification are correct.
- 🔴 To do: The client has recovery access, renewal and billing information, a rollback procedure and the agreed maintenance contact.
- 🔴 To do: Record the client repository URL, hosting project, final release SHA, launch date, domain renewal date and known remaining items in the handoff record.

## Launch monitoring and six month maintenance

### Launch day and first week

1. Record the final release SHA and client account/project links.
2. Monitor availability, HTTPS, logs, important routes and form delivery. Keep the rollback release and prior DNS records ready.
3. Review sitemap fetches, Search Console inspection/indexing findings and any security notices.
4. Confirm the social preview and key mobile flows from a device outside the development setup.
5. Fix actual launch defects and record the change and retest result.

### Throughout the agreed six months

1. Use the client repository as the production source. Open changes on a branch, review a preview, run the relevant checks and merge the tested change through the agreed process.
2. Review dependency security alerts and patch them with compatible versions and a committed lockfile. Do not bypass Vercel security blocks.
3. Check uptime, runtime failures, contact delivery, broken links, certificates and renewals at the agreed frequency. Use client owned monitoring and alert destinations.
4. Review Search Console trends and genuine enquiry outcomes monthly. Improve relevant content using evidence, not only an audit score.
5. Recheck course information, company contacts, certification validity and provider/privacy changes with the client.
6. Agree how urgent fixes, new features, content requests and work outside the maintenance scope will be handled. Record the actual maintenance start/end dates once the contract and launch date are agreed.

### Final handoff to the client’s son

1. Have the client add the son’s own GitHub account as a collaborator with the appropriate role. Verify his own Vercel access as well. Do not rely on sharing a password.
2. Demonstrate a local setup from the lockfile and identify the files for contact details, page copy, SEO, sitemap, policy content and approved assets.
3. Demonstrate a branch, preview deployment, test, pull request, merge and production verification in the client project.
4. Explain which account pays for hosting, who controls DNS, how the inbox form is activated and who owns Search Console.
5. Provide a secure access inventory, source/release links, renewal dates, backups, rollback instructions, current audit results and known open items. Do not put secret values into the repository documentation.
6. Complete a supervised small change and rollback so independence is demonstrated, not assumed.
7. Agree whether the developer’s access is retained, reduced or removed at the end of maintenance. Client ownership stays intact. Keep the portfolio copy only under the agreed permission.

## Status evidence and next action

The most recent verified website release is f939e4add31e5eb3daa3559ba4cc7bc660da7041. Its developer Vercel deployment was READY, relevant deployed pages returned 200, local route checks passed and no error/fatal runtime logs were returned in the checked window. SonarQube completed with a neutral result titled “Quality Gate not computed”. This is an open quality gate issue, not a green pass.

The next work session should confirm the operator details and review the three notice pages with the client, then settle suitable hosting and the standalone repository handoff decision. It should not start with blind DNS edits or a repository ownership transfer. Final DNS, client account setup, consent requirements, live inbox delivery, social preview fetching, Search Console ownership, public indexing and final domain audit scores remain unverified.

## Official references

- [Vercel terms, including Hobby usage](https://vercel.com/legal/terms)
- [Vercel domain setup](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- [GitHub repository duplication](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository)
- [Namecheap DNS records](https://www.namecheap.com/support/knowledgebase/article.aspx/434/2237/how-do-i-set-up-host-records-for-a-domain/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Search Console website and platform properties](https://support.google.com/webmasters/answer/34592)
- [Search Console verification](https://support.google.com/webmasters/answer/9008080)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Business Profile guidelines](https://support.google.com/business/answer/3038177)
- [FormSubmit documentation](https://formsubmit.co/documentation)
- [FormSubmit privacy information](https://formsubmit.co/privacy.pdf)
- [Privacy notice information, with applicability determined by the business’s circumstances](https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/how-to-write-a-privacy-notice-and-what-goes-in-it)

- [GitHub forks and visibility](https://docs.github.com/en/pull-requests/reference/forks)
- [GitHub repository transfers](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)
- [GitHub profile contribution rules](https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference)
- [Search Console settings](https://support.google.com/webmasters/answer/7687465)
- [Open Graph protocol](https://ogp.me/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Storage and access technologies guidance, with applicability to be assessed](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-storage-and-access-technologies/)

- [Search generative AI control](https://support.google.com/webmasters/answer/16908024)
