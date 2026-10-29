import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site, gmailComposeUrl } from "@/lib/site-config";
import { SiteShell } from "@/components/site-shell";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      path: "/contact",
      name: "Contact",
      title: "Contact HosH Integrity | Karachi, Pakistan",
      description:
        "Contact HosH Integrity in Karachi, Pakistan about industrial inspection, NDT, asset integrity, QA/QC, HSE or technical training enquiries.",
    }),
  component: Contact,
});

function Contact() {
  return (
    <SiteShell>
      <section className="inner-hero contact-hero">
        <div className="section-shell pt-36 md:pt-44">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="inner-title">Support the safe operation of your assets.</h1>
          <p className="inner-intro">
            Tell HosH about the asset, location, required service, and timing so the team can review
            your requirement.
          </p>
        </div>
      </section>
      <section className="section-shell contact-layout py-16 md:py-24">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold">Contact HosH</h2>
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compose an email to HosH in Gmail"
            className="contact-row"
          >
            <Mail className="size-5 text-primary" />
            <span className="break-all">{site.email}</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Opens Gmail in a new tab. Prefer another email app?{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              Use your default email app
            </a>
            .
          </p>
          <div className="contact-row">
            <MapPin className="size-5 text-primary" />
            <span>{site.location}</span>
          </div>
          <p className="mt-4 leading-7 text-muted-foreground">
            Email us with your service requirement, project location and preferred schedule. For a
            visit or a call, please arrange a time by email first.
          </p>
          <div className="email-notice">
            FormSubmit processes this form and delivers your enquiry to the HosH inbox. Please avoid
            including passwords, identity documents or confidential project files.
          </div>
        </div>
        <form action={`https://formsubmit.co/${site.email}`} method="POST" className="contact-form">
          <input type="hidden" name="_subject" value="HosH website enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="text"
            name="_honey"
            className="form-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              required
              name="name"
              autoComplete="name"
              aria-label="Name"
              placeholder="Your name"
              maxLength={100}
            />
            <Input
              required
              name="company"
              autoComplete="organization"
              aria-label="Company"
              placeholder="Company"
              maxLength={120}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              required
              name="email"
              autoComplete="email"
              aria-label="Email"
              type="email"
              placeholder="Email address"
              maxLength={254}
            />
            <Input
              required
              name="service"
              aria-label="Service"
              placeholder="Service needed"
              maxLength={120}
            />
          </div>
          <Textarea
            required
            name="message"
            aria-label="Project details"
            placeholder="Tell us about the asset, location, and required timeline"
            maxLength={4000}
            className="min-h-36"
          />
          <p className="text-sm leading-6 text-muted-foreground">
            We use your details to respond to this enquiry. Read our{" "}
            <Link to="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms" className="underline underline-offset-4">
              Website Terms
            </Link>
            . FormSubmit may ask you to complete a Google reCAPTCHA security check.
          </p>
          <Button type="submit" size="lg" className="justify-self-start rounded-full">
            Submit enquiry <ArrowUpRight />
          </Button>
        </form>
      </section>
    </SiteShell>
  );
}
