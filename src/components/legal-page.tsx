import { SiteShell } from "@/components/site-shell";
import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Array<{ title: string; body: ReactNode }>;
}) {
  return (
    <SiteShell>
      <section className="inner-hero legal-hero">
        <div className="section-shell relative z-10 pt-36 md:pt-44">
          <p className="eyebrow">Website information</p>
          <h1 className="inner-title">{title}</h1>
          <p className="inner-intro">{intro}</p>
        </div>
        <div className="technical-ring" aria-hidden="true" />
      </section>
      <section className="section-shell grid gap-10 py-16 md:grid-cols-[.35fr_1fr] md:py-24">
        <aside className="legal-note">
          <strong>Last updated {site.updated}</strong>
          <span>{site.name}</span>
          <span>{site.location}</span>
          <a href={`mailto:${site.email}`} className="break-all underline underline-offset-4">
            {site.email}
          </a>
          <nav className="grid gap-2" aria-label="Website policies">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Website Terms</Link>
            <Link to="/cookies">Cookies and Browser Storage</Link>
          </nav>
        </aside>
        <div className="legal-copy">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
