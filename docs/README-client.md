<div align="center">

# 👤 HosH Integrity · Client Guide

**Your website, your accounts and a clear path to launch.**

[🏠 Project overview](../README.md) · [🌐 Review website](https://hos-h.vercel.app) · [🚦 Full checklist](launch-checklist.md) · [🧑‍💻 Developer guide](README-developer.md)

</div>

## 👋 What this website does

Your website introduces HosH Integrity and helps visitors understand the company’s inspection, assurance and training capabilities. Visitors can explore services, view industries and credentials, read helpful resources and contact the team about a project.

The approved design is being preserved. The current review address is **hos-h.vercel.app**. The planned public address is **hoshintegrity.com**. The public domain connection is a later launch task, so a working preview does not yet mean the final domain is live.

## ✨ What is ready to review

| Feature | What visitors can do |
| --- | --- |
| 🏠 Home | Understand the company and find the main services |
| 🏭 Services and industries | Explore the capabilities described in the supplied company material |
| 🎓 Training | View the training offering and make an enquiry |
| 🏅 Certifications and About | Learn about the company and its listed credentials |
| 💡 Insights and FAQ | Find enquiry preparation resources and common answers |
| ✉️ Contact | Open Gmail or complete an enquiry form |
| 📄 Privacy, Terms and Cookies | Read how the website works and how enquiry information is handled |
| 🍪 Cookie settings | Accept or reject optional navigation storage and change the choice later |
| 🖼️ Sharing picture | Use the logo and tagline artwork when supported social platforms fetch the page |

[View the current sharing artwork](../public/og-image-v3.jpg). The printed website address has been removed, as requested. The real website link remains in the page’s sharing information so people can still visit it.

## 🚦 Where we are now

🟢 **Done** · 🟡 **In progress or awaiting verification** · 🔴 **Still to do**

| Status | Task | Meaning |
| --- | --- | --- |
| 🟢 | Main website and approved design | Implemented in the developer repository |
| 🟢 | Privacy choices and Gmail links | Implemented and previously checked in the production build |
| 🟢 | Revised sharing artwork | Website address removed; logo, tagline and scene retained |
| 🟢 | Client and developer documentation | Separate guides with clear responsibilities and instructions |
| 🟢 | Local checks for this revision | Build, page and sharing checks passed; connected results are available in GitHub and the master tracker |
| 🟡 | Enquiry delivery | Correct inbox is configured; activation and an actual received message still need checking |
| 🟡 | SonarQube quality check | Latest recorded result did not compute a quality gate |
| 🔴 | Client repository and hosting | Create and connect them at the agreed final handoff stage |
| 🔴 | Domain and HTTPS | Connect Namecheap to the selected hosting and verify the public address |
| 🔴 | Google Search Console | Verify domain ownership, submit the sitemap and inspect important pages |
| 🔴 | Final social and SEO checks | Test the public domain after it is connected |

This guide gives a simple overview. The [master tracker](launch-checklist.md) holds the detailed evidence and remaining work.

## 🔑 Who owns what

| Service | What it is for | Intended owner |
| --- | --- | --- |
| 🗃️ GitHub | Stores the website code and its change history | Client account `hoshintegrityinfo-gif` after handoff |
| ☁️ Hosting | Runs the website for visitors | The client’s selected hosting account |
| 🌍 Namecheap | Holds the domain registration and its connection records | The client |
| 🔎 Google Search Console | Shows how Google discovers and indexes the website | The client’s Google account |
| ✉️ Gmail | Receives enquiries and privacy requests | The client’s business inbox |

The current developer repository stays in Raazia-Imran’s account for the agreed portfolio use. A separate client repository will receive the agreed full change history. Future production work will happen in the client repository. The two copies do not automatically update each other.

Use each person’s own account and grant access where possible. Keep recovery information current and enable multifactor authentication. Passwords, recovery codes and private customer enquiries must never be added to the public repository.

## ✉️ How enquiries work

The business inbox is **hoshintegrityinfo@gmail.com**. Email links open Gmail’s compose screen. Your browser and device decide whether that appears in the Gmail app or on the Gmail website. The Contact page also offers a default email app link.

The form uses **FormSubmit** to forward an enquiry to that inbox. Before relying on the form:

1. Confirm that the inbox owner can open the business email account.
2. Complete the provider activation if FormSubmit requests it.
3. Make an agreed test enquiry with ordinary test information.
4. Check that the message arrives, including Spam, and that the sender can be replied to.
5. Record the result in the launch checklist.

A page saying “submitted” is not proof that the email arrived. The development checks have not sent a message or confirmed delivery.

## 🍪 Privacy choices in simple words

Optional navigation storage remembers where a visitor was on a page. It starts **off**. Visitors can leave it off, enable it or change their minds using **Cookie settings** in the footer. Changing this feature reloads the page so the choice can take effect.

The website remembers the visitor’s privacy choice for up to 180 days in that browser. No advertising pixel or visitor analytics tag is currently installed. Fonts are served by the website itself. Gmail, FormSubmit and other external services have their own notices and may use their own cookies.

The [Privacy page](https://hos-h.vercel.app/privacy), [Terms page](https://hos-h.vercel.app/terms) and [Cookies page](https://hos-h.vercel.app/cookies) describe the known website setup. They do not invent a registered company name, street address or registration number. Tell the developer if company information, enquiry handling or service providers change. The notices are not a guarantee that every law in every country has been assessed.

## 🚀 What happens next

| Order | Action | Completion check |
| --- | --- | --- |
| 1️⃣ | Confirm client account access, recovery details and suitable business hosting | Correct owners and access recorded; hosting use is permitted |
| 2️⃣ | Verify business facts and actual enquiry delivery | Accurate details and a received test email |
| 3️⃣ | Complete the release review | Website checked, open quality findings understood and release recorded |
| 4️⃣ | Create the independent client GitHub repository | Agreed history and release match the developer copy |
| 5️⃣ | Deploy through the client hosting account | Client preview works and the build succeeds |
| 6️⃣ | Connect hoshintegrity.com through Namecheap | Correct website records, working HTTPS and existing email records preserved |
| 7️⃣ | Complete Google Search Console and public checks | Ownership verified, sitemap read, key pages inspected and sharing cards tested |
| 8️⃣ | Begin launch monitoring and maintenance | Enquiries, updates and search performance monitored through the agreed maintenance process |

The current plan records that Vercel’s free Hobby option is restricted to personal or noncommercial use. This business website needs a hosting option whose terms permit the intended use. No paid subscription or DNS change has been made by these development updates.

## 🔎 What SEO can and cannot promise

Titles, descriptions, page structure, mobile layouts, discovery files and sharing information are prepared in the code. Search Console and final public checks follow the domain connection. Useful, accurate content and ongoing improvements support search visibility, but no one can promise that the website will always be first on Google.

The legal pages currently ask search engines not to list them. Visitors can still read them. This does not prevent the main service pages from being considered for search. Developer previews should also stay out of search to avoid duplicate copies.

Social platforms choose when and how to show a picture. A correct image and page setup help, but public access and platform caches must be tested after launch. Domain registration privacy is separate from website cookie settings, HTTPS and hosting security.

## 📝 How to request a change

Send the page URL, what needs changing, the correct replacement information and an image or screenshot if helpful. Confirm the source of any new credential, business claim, photograph or testimonial. Keep private client information and passwords out of public GitHub issues.

The developer will review the change, check the affected pages and record the release. After the agreed six month maintenance period, the client’s son can use his own account access and the [developer guide](README-developer.md) to continue. A supervised change and rollback should be completed before the handoff is closed.

## 📌 Keep these links

[🌐 Review website](https://hos-h.vercel.app) · [🚦 Full launch tracker](launch-checklist.md) · [📋 Confirmed content](content-evidence.md) · [🖼️ Image sources](image-provenance.md) · [🏠 Project overview](../README.md)
