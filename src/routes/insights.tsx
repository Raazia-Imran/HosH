import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/insights")({
  head: () =>
    pageSeo({
      path: "/insights",
      name: "Insights",
      title: "Inspection Planning Resources | HosH Integrity",
      description:
        "Prepare your industrial inspection enquiry, define an NDT requirement and plan technical training with practical HosH Integrity resources.",
    }),
  component: Insights,
});
const resources = [
  {
    title: "Prepare an inspection enquiry",
    body: "Start with the asset type, project location and the reason for the inspection. Tell HosH whether the work relates to fabrication, construction, an operating asset or planned maintenance. Include your preferred schedule and any access constraints so the team can discuss a suitable scope.",
    detail:
      "Useful supporting information can include an equipment list, relevant drawings, previous inspection records and the standards specified by your project. Share confidential documents only after agreeing a suitable exchange channel. The initial enquiry form is intended for a brief description of the requirement.",
    link: "/contact",
    action: "Discuss your requirement",
  },
  {
    title: "Discuss a testing requirement",
    body: "The HosH company profile describes conventional and advanced nondestructive testing. Listed capabilities include magnetic particle inspection, dye penetrant testing, ultrasonic flaw detection, ultrasonic thickness gauging, phased array and time of flight diffraction. The method required for a particular asset must be discussed against the project scope and applicable standards.",
    detail:
      "When requesting a quotation, explain what will be tested and what information you need from the results. Include the material, geometry, access conditions and any specified acceptance criteria if known. A website description does not replace a technical review or confirm that a method is suitable for every asset.",
    link: "/services",
    action: "Explore inspection services",
  },
  {
    title: "Plan a technical training enquiry",
    body: "HosH Quality Training Center programmes described in the supplied profile cover lead auditor training, welding inspection, QA/QC and HSE. Begin by identifying the work participants perform and the skills or knowledge they need to develop. Include the group size, existing experience, preferred dates and delivery location when enquiring.",
    detail:
      "Ask the team to confirm the current course outline, duration, delivery arrangements, entry requirements, assessment and any resulting credential. Course availability and commercial terms need confirmation for the specific booking. A general course listing does not guarantee a place or a particular qualification.",
    link: "/training",
    action: "Explore training programmes",
  },
  {
    title: "Confirm the information you will receive",
    body: "Before an assignment is agreed, discuss the required deliverables, reporting format and any document control or certificate verification requirements. The HosH profile describes systems for project dossiers, pipeline QC mapping and document control. Ask which arrangements apply to your project rather than assuming that every assignment uses the same workflow.",
    detail:
      "The accepted quotation or service agreement should identify the agreed scope, relevant parties, timing and deliverables. Ask for current evidence where a certification or membership is relevant to your requirement. This resource page introduces enquiry topics and does not provide instructions for operating or approving an industrial asset.",
    link: "/certifications",
    action: "Review qualifications",
  },
] as const;

function Insights() {
  return (
    <SiteShell>
      <section className="inner-hero">
        <div className="section-shell pt-36 md:pt-44">
          <p className="eyebrow">Insights</p>
          <h1 className="inner-title">Prepare for a clearer inspection conversation.</h1>
          <p className="inner-intro">
            Resources to help you describe an inspection requirement, discuss testing and plan
            technical training with HosH Integrity.
          </p>
        </div>
      </section>
      <section className="section-shell py-20 md:py-28">
        <div className="legal-copy">
          {resources.map((resource) => (
            <section key={resource.title}>
              <h2>{resource.title}</h2>
              <p>{resource.body}</p>
              <p>{resource.detail}</p>
              <Button asChild variant="link" className="mt-4 px-0">
                <Link to={resource.link}>
                  {resource.action} <ArrowRight />
                </Link>
              </Button>
            </section>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
