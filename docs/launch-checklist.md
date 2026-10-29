# HosH Integrity launch checklist

Prepared on 29 October 2026. Work remains in Raazia-Imran/HosH until the final client handoff. This checklist records preparation, not a claim that the final domain, inbox, legal review or Search Console have been verified.

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

## 1. Complete content and confirm business facts

- [x] Replace public red notes on Contact and in the footer with the confirmed email and city.
- [x] Remove public editorial notes from Privacy, Terms and Insights.
- [x] Expand Privacy and Website Terms using the current website functionality.
- [x] Add Cookies and Browser Storage information and links to provider notices.
- [x] Provide practical enquiry resources on Insights without invented authors, dates or project claims.
- [x] Use the new domain in canonical URLs, sharing metadata, structured data, robots and sitemap.
- [x] Avoid em dashes and hyphens in newly written public prose. Keep required punctuation in URLs, filenames and code.
- [ ] Obtain the registered legal entity name and registration details. HosH Integrity is currently presented as the brand, not an invented registered company name.
- [ ] Obtain the public telephone number and office address, if the client wants them published. A city alone does not establish a visitor office or a registered address.
- [ ] Confirm the real service locations and target customers. Do not create pages for cities or countries that the company does not serve.
- [ ] Confirm current certificates, memberships, course availability and the scope of each credential. Do not silently replace OHSAS 18001 with ISO 45001 or invent renewal dates.
- [ ] Confirm rights to the supplied logo and photographs. Keep the image provenance document.
- [ ] Have the client review the new legal notices against its actual practices. Confirm the operator identity, retention criteria, provider arrangements and any law specific requirements with an appropriate adviser where needed.
- [ ] After legal approval, change `index: false` to `true` on Privacy, Terms and Cookies if those pages should be indexed. Add them to the sitemap only if indexable. Their present search exclusion is intentional.

## 2. Verify contact delivery and information handling

- [x] Point the contact form and visible email links to hoshintegrityinfo@gmail.com.
- [x] Explain FormSubmit delivery and the potential Google reCAPTCHA check next to the form.
- [x] Link the Privacy Policy and Website Terms beside the submit action.
- [x] Keep required fields, email validation, length limits and the honeypot.
- [ ] Confirm the client approves FormSubmit as the form delivery provider. Provider policies and security expectations must suit the type of enquiries collected.
- [ ] Submit one clearly labelled test enquiry on the final domain with the client’s agreement.
- [ ] Have the client complete FormSubmit inbox activation. Changing the recipient requires checking activation for the new inbox.
- [ ] Verify receipt in Gmail, including spam, reply address and all form fields. Form configuration alone does not prove delivery.
- [ ] Test a valid submission, invalid email, empty required fields, reCAPTCHA and the provider’s confirmation/error experience on mobile and desktop.
- [ ] Confirm how the company handles deletion and correction requests and who can access enquiries.
- [ ] Decide whether a mailbox on hoshintegrity.com is required. The supplied Gmail inbox can receive enquiries without changing the domain’s MX records.
- [ ] If a domain mailbox is added later, use that mail provider’s exact MX, SPF and DKIM instructions. Plan DMARC after verifying legitimate sending. Do not publish a second SPF record or copy Gmail MX records merely because a contact address ends in gmail.com.

## 3. Choose suitable hosting before the account move

Vercel’s current terms limit Hobby to personal or noncommercial use. HosH is a business website that generates service enquiries. Do not launch it as a commercial project on Hobby. If the client wants Vercel, select a plan that permits this use. If the budget requires free hosting, choose and test another host that permits the intended commercial use and supports this server rendered application. No paid upgrade has been made.

- [ ] Agree a hosting budget and a plan that permits the intended business use.
- [ ] Confirm the client’s workspace, billing owner, recovery access and project permissions.
- [ ] Verify that the selected host supports TanStack Start, its server entry and the chosen Nitro target. A static file upload is not equivalent to hosting the current server rendered application.
- [ ] Keep the existing patched TanStack Start versions and committed Bun lockfile.
- [ ] Install from the lockfile and select the intended runtime version. The existing Vercel project uses Node 24 and the TanStack Start Lovable framework preset.
- [ ] Set usage alerts and a spending limit if supported by the selected plan.
- [ ] Keep the current working deployment available as a rollback reference until the client deployment is verified.

## 4. Final account handoff while retaining the portfolio repository

Do this only after content and verification are complete. Do not transfer ownership of Raazia-Imran/HosH if it needs to remain in the developer’s portfolio. Instead, create a separate client owned repository and copy the agreed history into it. Confirm the client permits the portfolio copy and any public source or screenshot use.

- [ ] Freeze an agreed release commit and record its SHA.
- [ ] Confirm whether the client repository should be public or private.
- [ ] Check for credentials, private documents and customer data before copying or retaining history. Do not store account passwords in source files, commits or the checklist.
- [ ] Create an empty repository under hoshintegrityinfo-gif. Use `HosH` only if that is the agreed name and it is available.
- [ ] Copy branches and tags into that empty repository without rewriting published history.
- [ ] Verify that the release commit SHA is the same in both repositories and all required image assets exist.
- [ ] Remember that a Git history copy does not copy issues, app installation permissions, GitHub secrets, protection settings or Vercel configuration.
- [ ] Review the Lovable connection target. Preserve the entire `.lovable/` folder, but do not assume copying its project metadata creates a new client Lovable project or changes the original connection.
- [ ] Grant the developer collaborator access if future maintenance is agreed. Make the client copy the source of truth for production after handoff.
- [ ] In the client’s Vercel workspace, import the client repository and verify the selected account, project, release commit and production branch.
- [ ] Configure only the environment variables and integrations the application actually requires. Transfer secrets through provider settings, not Git commits.
- [ ] Enable the relevant GitHub apps for the new repository and configure SonarQube against the correct client project.
- [ ] Run a client preview deployment and compare it with the approved release before connecting the domain.
- [ ] Retain the portfolio repository at the agreed visibility. Link to the client website from its README after launch. Avoid serving a second indexable copy of the same company website.

Example commands for a new, empty client repository, to be used at handoff rather than now:

```sh
git clone --bare https://github.com/Raazia-Imran/HosH.git HosH-client.git
cd HosH-client.git
git push --all https://github.com/hoshintegrityinfo-gif/HosH.git
git push --tags https://github.com/hoshintegrityinfo-gif/HosH.git
```

If the target contains unrelated commits, stop and reconcile them. Do not force push or overwrite an existing client repository.

## 5. Namecheap DNS and HTTPS cutover

- [ ] Confirm the actual authoritative DNS provider from the domain’s nameservers. Registration at Namecheap does not necessarily mean Namecheap hosts the DNS zone.
- [ ] Export or record the current nameservers, DNS records and TTL values before making changes.
- [ ] Add hoshintegrity.com and www.hoshintegrity.com to the verified client hosting project.
- [ ] Use the exact current A, CNAME and verification TXT values shown by that project. Do not reuse example IP addresses or another project’s CNAME target.
- [ ] Prefer updating the required web records in the current DNS zone. If nameservers must change, first recreate every needed existing record at the new DNS provider.
- [ ] Preserve MX, SPF, DKIM, DMARC and unrelated verification records. Remove only conflicting records for the website names after reviewing them.
- [ ] Avoid a CNAME at the domain root when it conflicts with the provider’s apex or email requirements. Follow the selected host and DNS provider’s supported apex configuration.
- [ ] Complete any hosting ownership TXT verification and confirm successful DNS resolution from more than one resolver.
- [ ] Confirm HTTPS certificates for both the root and www hostnames, with no browser warning or mixed content.
- [ ] Use one preferred hostname: https://hoshintegrity.com. Redirect HTTP and www to it with a permanent redirect and no loop.
- [ ] Confirm old paths return useful pages or a real 404. Do not redirect every missing page to Home.
- [ ] Check whether the old profile domain, hoshint.com, is controlled by the client and has existing traffic. If it is an old live website, plan path preserving permanent redirects and an appropriate Search Console site move. Do not assume ownership of that domain.
- [ ] Do not disable Namecheap domain privacy to configure DNS unless a provider supplies a specific verified reason.
- [ ] Keep a rollback record of the prior web DNS values and the last working client deployment.

## 6. Technical SEO and page experience

- [x] Give every page a distinct title and description.
- [x] Centralise the canonical domain and contact details.
- [x] Add consistent Open Graph and social sharing metadata with the approved image.
- [x] Add Organization and WebSite data on Home, plus page and breadcrumb data elsewhere.
- [x] Include only known organization information. Do not add a fabricated street address, phone, ratings, reviews, awards or a legal name.
- [x] Keep server rendered page content, ordinary internal links, one main heading and a branded 404.
- [x] Keep relevant image descriptions and the approved image assets.
- [x] Add a repeatable `npm run check:site` check for route responses, metadata, schema, contact configuration and assets.
- [ ] Confirm the public client domain is accessible without Vercel login or deployment protection. Keep staging and portfolio deployments protected or excluded from indexing.
- [ ] Check both HTML robots tags and HTTP `X-Robots-Tag` headers on the final domain. A Vercel preview noindex header must not remain on the real public site.
- [ ] Confirm Google can fetch CSS, JavaScript, images, robots and sitemap on the final hostname.
- [ ] Test Google’s Rich Results Test and inspect structured data without promising a rich result. An FAQ page does not automatically qualify for FAQ rich results.
- [ ] Run Lighthouse and PageSpeed Insights on the actual final domain, then review real Core Web Vitals when field data becomes available. Target LCP at most 2.5 seconds, INP at most 200 milliseconds and CLS at most 0.1 at the 75th percentile.
- [ ] Check mobile navigation, touch targets, text contrast, keyboard focus, reduced motion, image loading, layout stability and horizontal overflow.
- [ ] Review the largest images, font loading and JavaScript using measurements. Compress or self host assets only after comparison with the approved design.
- [ ] Test Home, Services, Training, Contact, all legal pages and a missing URL on mobile, tablet and desktop.

## 7. Search Console setup

The platform account screen for Instagram, TikTok, X and YouTube is optional. It does not replace adding the website property.

- [ ] Add a Domain property for hoshintegrity.com in the client’s Search Console account. Enter the domain without a scheme or path.
- [ ] Generate the property’s unique DNS TXT verification record and add that exact value at the authoritative DNS provider.
- [ ] Verify ownership and retain the TXT record. Do not invent a verification token or place one from another property on this domain.
- [ ] Keep the client as an owner and grant the developer appropriate access through user management.
- [ ] Submit https://hoshintegrity.com/sitemap.xml after the public domain is working.
- [ ] Run live URL Inspection on Home and important service pages. Check rendering, crawl access, declared canonical and Google’s selected canonical when available.
- [ ] Request indexing for the important approved pages. A sitemap or indexing request does not guarantee inclusion or a particular ranking.
- [ ] Review Page indexing, HTTPS, sitemaps, enhancements, security issues and manual actions.
- [ ] Record a baseline for impressions, clicks, queries and landing pages. New properties can need time before data is available.

## 8. Content, local visibility and ongoing SEO

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

- [ ] Prioritise the services the client actually sells and the places it actually serves. Do not create thin location pages or repeat keywords unnaturally.
- [ ] Develop expert reviewed service resources and case studies with original evidence, real authors where appropriate and permission to publish client details.
- [ ] Confirm eligibility for Google Business Profile. Use a real staffed business location or a genuine service area arrangement that meets Google’s rules. A virtual office alone is not enough.
- [ ] Use consistent approved company details across the website, Business Profile and relevant professional directories.
- [ ] Obtain genuine customer reviews where permitted. Do not buy links or reviews, invent ratings or guarantee ranking through a directory listing.
- [ ] Add only verified official social profiles to structured data when supplied. Do not use the developer’s or another company’s accounts.
- [ ] Review Search Console regularly for relevant queries and opportunities to improve existing pages.
- [ ] Record organic enquiries as well as search clicks. If optional analytics or advertising is proposed, agree the purpose and consent requirements before adding tags.
- [ ] Recheck credentials, course information, legal notices, broken links and software security updates as part of maintenance.

No SEO implementation can guarantee that a website stays first on Google. Search positions vary by query, competition, location and Google’s systems. Report measured progress rather than a permanent first place promise.

## 9. Final release and handoff evidence

- [ ] Client approves the release content and all legal notices.
- [ ] Confirm the operator details and actual practices needed to finalise the notices.
- [ ] A suitable commercial hosting plan is agreed.
- [ ] A clean lockfile install, production build, TypeScript and lint checks pass.
- [ ] The release commit’s GitHub app checks and Vercel deployment status have been inspected. A local build alone is not launch approval.
- [ ] SonarQube reports a computed quality gate, or its unresolved status and findings are clearly documented. A neutral result is not a pass.
- [ ] The exact client deployment reports READY and its pages, assets, redirects and runtime logs have been checked.
- [ ] A real enquiry reaches the activated client inbox.
- [ ] Final domain, HTTPS, canonical URLs, robots headers and Search Console verification are correct.
- [ ] The client has recovery access, renewal and billing information, a rollback procedure and the agreed maintenance contact.
- [ ] Record the client repository URL, hosting project, final release SHA, launch date, domain renewal date and known remaining items in the handoff record.

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
