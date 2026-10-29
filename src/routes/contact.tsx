import { useRef, useState, type FormEvent } from "react";
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const sending = useRef(false);
  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        signal: controller.signal,
        credentials: "omit",
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Submission not accepted");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      sending.current = false;
    }
  }
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
            Web3Forms processes this form and delivers your enquiry to the HosH inbox. Please avoid
            including passwords, identity documents or confidential project files.
          </div>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={submitEnquiry}
          aria-busy={status === "sending"}
          className="contact-form"
        >
          <input type="hidden" name="access_key" value="6194e1b3-dacd-4c99-a643-fc29b8438e0a" />
          <input type="hidden" name="subject" value="HosH website enquiry" />
          <input type="hidden" name="from_name" value="HosH Integrity Website" />
          <input
            type="checkbox"
            name="botcheck"
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
            . Web3Forms processes this enquiry and applies spam checks.
          </p>
          {status === "success" && (
            <p role="status" className="text-sm leading-6">
              Your enquiry was accepted for delivery. Please check your email for a reply from HosH.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm leading-6">
              We could not confirm delivery. Your details are still here. Try again or{" "}
              <a
                href={gmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                email HosH directly
              </a>
              .
            </p>
          )}
          <Button
            disabled={status === "sending"}
            type="submit"
            size="lg"
            className="justify-self-start rounded-full"
          >
            {status === "sending" ? "Sending enquiry..." : "Submit enquiry"} <ArrowUpRight />
          </Button>
        </form>
      </section>
    </SiteShell>
  );
}
