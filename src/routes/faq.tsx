import { createFileRoute } from "@tanstack/react-router";
import { FAQPreview } from "@/components/site-sections";
import { SiteShell } from "@/components/site-shell";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageSeo({
      path: "/faq",
      name: "FAQ",
      title: "Inspection and Training Questions | HosH Integrity",
      description:
        "Answers about HosH inspection services, industries, training and quotation requirements. Learn what to include when discussing your project.",
    }),
  component: FAQPage,
});
function FAQPage() {
  return (
    <SiteShell>
      <section className="inner-hero faq-hero">
        <div className="section-shell pt-36 md:pt-44">
          <p className="eyebrow">Knowledge base</p>
          <h1 className="inner-title">Questions, answered with clarity.</h1>
          <p className="inner-intro">
            A practical starting point for inspection, assurance, training, and quotation
            conversations.
          </p>
        </div>
      </section>
      <FAQPreview full />
    </SiteShell>
  );
}
