import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageSeo({
      path: "/terms",
      name: "Terms",
      title: "Website Terms and Conditions | HosH Integrity",
      description:
        "Terms for using the HosH Integrity website, making enquiries and understanding how written service scopes and quotations are agreed.",
      index: false,
    }),
  component: Terms,
});
function Terms() {
  return (
    <LegalPage
      title="Website Terms and Conditions"
      intro="The terms for using this website and making an enquiry about HosH Integrity services."
      sections={[
        {
          title: "About these terms",
          body: "These terms cover use of the HosH Integrity website. HosH is based in Karachi, Pakistan. Questions about this website or these terms can be sent to hoshintegrityinfo@gmail.com. A written agreement for a particular assignment sets out the contracting parties and service terms for that work.",
        },
        {
          title: "Information on the website",
          body: "The site describes industrial inspection, asset integrity, quality, HSE and training capabilities. Its content is general information. It is not an inspection report, a certificate, a design approval, a safety instruction or advice tailored to a particular asset. Decisions about an asset should rely on a suitable assessment and the applicable standards.",
        },
        {
          title: "Enquiries and quotations",
          body: "Sending a form or an email starts a discussion. It does not create a booking, confirm availability or enter you into a service contract. The relevant team must agree the scope, asset information, location, applicable standards, access requirements, schedule, deliverables and commercial terms in writing before work is confirmed.",
        },
        {
          title: "Training and credentials",
          body: "Course availability, delivery arrangements, entry requirements, assessment, fees and any resulting credential must be confirmed for the specific programme. References to certifications and professional memberships describe information supplied in the company profile. Request current evidence and the relevant scope before relying on a qualification for a project.",
        },
        {
          title: "Payments, changes and cancellations",
          body: "This website does not take online payments or sell a fixed service package. Payment schedules, taxes, changes, cancellation arrangements and any refunds are set out in the accepted quotation, course booking terms or service agreement. An enquiry alone does not create a payment obligation.",
        },
        {
          title: "Your use of the site",
          body: "Use the site lawfully and provide information you are entitled to share. Do not send spam, malicious files, misleading requests or another person’s confidential information without authority. Do not attempt to disrupt the website or gain access to restricted systems.",
        },
        {
          title: "Project information",
          body: "For an initial enquiry, share only enough information to explain the work. Do not upload confidential documents or sensitive personal information through the public contact form. Agree a suitable document exchange process with HosH if the assignment requires protected information.",
        },
        {
          title: "Published material and ownership",
          body: "HosH branding and original content belong to their respective owners. Provider names, standards references, photographs and other materials may have separate rights. Viewing the site does not transfer ownership or grant permission to use a logo as an endorsement. Ask the relevant owner before reproducing material beyond what the law permits.",
        },
        {
          title: "External websites and services",
          body: "Links and form submission services may take you to websites operated by other organisations. Their own terms and privacy notices apply. An external link is not a promise about that website’s content, availability or services.",
        },
        {
          title: "Accuracy, availability and responsibilities",
          body: "Website information and service availability may change. Contact HosH to confirm details relevant to your requirement. The site may occasionally be unavailable for maintenance or reasons outside the operator’s control. Nothing in these terms excludes rights or responsibilities that cannot lawfully be excluded. Responsibilities for a contracted assignment are addressed in the relevant written agreement and applicable law.",
        },
        {
          title: "Privacy, questions and updates",
          body: "Read the Privacy Policy and Cookies and Browser Storage page to understand how website information is handled. Contact hoshintegrityinfo@gmail.com about a website issue or a concern before relying on outdated content. We may revise these website terms and identify the revision date on this page.",
        },
      ]}
    />
  );
}
