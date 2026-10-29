import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageSeo({
      path: "/privacy",
      name: "Privacy",
      title: "Privacy Policy | HosH Integrity",
      description:
        "How HosH Integrity handles website enquiries, contact information, hosting data, browser storage and external services. Contact us with privacy questions.",
      index: false,
    }),
  component: Privacy,
});
function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How HosH Integrity handles information when you browse this website or contact our team."
      sections={[
        {
          title: "Who this notice covers",
          body: "This notice describes the HosH Integrity website and enquiries handled by our team in Karachi, Pakistan. For a privacy question or a request about information you have shared, contact hoshintegrityinfo@gmail.com.",
        },
        {
          title: "Information you choose to share",
          body: "The enquiry form asks for your name, company, email address, service requirement and project details. Emails may also include information you choose to send. Please provide only what is needed for the initial enquiry. Do not send passwords, identity documents, health information or confidential technical files through this form.",
        },
        {
          title: "Why information is used",
          body: "Enquiry information is used to understand your requirement, reply to you, discuss service availability and prepare a quotation or a proposed scope. Relevant correspondence may also be needed to manage an agreed assignment, respond to a concern or meet applicable legal obligations. Submitting an enquiry does not sign you up for a marketing newsletter.",
        },
        {
          title: "Form delivery and email",
          body: "The contact form submits your entries to FormSubmit, which forwards them to the HosH Gmail inbox. Google provides the Gmail service. FormSubmit may use Google reCAPTCHA to help prevent spam. These providers process information under their own terms and privacy notices. If you prefer, you can email HosH directly instead of using the form.",
        },
        {
          title: "Browsing data and hosting",
          body: "The website currently runs on Vercel. Hosting and security services may process technical request information, such as IP addresses, browser details, requested URLs and error records, to deliver and protect the site. The current website does not include an advertising pixel or a visitor analytics tag. This notice will need updating if the hosting or tracking setup changes.",
        },
        {
          title: "Fonts and browser storage",
          body: "The website requests its fonts from Google Fonts, so your browser connects to Google to download the typefaces. The site also uses session storage to remember scroll positions during navigation. See our Cookies and Browser Storage page for more detail. Services visited outside this website may use their own cookies.",
        },
        {
          title: "Access and service providers",
          body: "Information may be available to the HosH team members handling your enquiry and to the hosting, email, form delivery and security providers involved in that process. Provider systems may process information in countries outside Pakistan. Their locations, retention practices and applicable safeguards depend on the provider and service used.",
        },
        {
          title: "How long information is needed",
          body: "Relevant factors include whether an enquiry is still open, whether it leads to an assignment, any ongoing correspondence and applicable record keeping or dispute requirements. Ask HosH about the retention of a particular enquiry or request deletion when it is no longer needed. A deletion request may be subject to legitimate record keeping obligations.",
        },
        {
          title: "Requests about your information",
          body: "You may contact HosH to ask what enquiry information it holds about you, correct inaccurate details, request deletion or raise a concern about its use. Available rights depend on the laws that apply to your circumstances. We may need enough information to verify that a request relates to you. You may also seek guidance from the relevant authority where applicable.",
        },
        {
          title: "Protecting information",
          body: "Please use the HTTPS version of the site and share sensitive project documents only through a channel agreed with HosH. Internet transmission and email are not risk free. No website or email service can guarantee absolute security.",
        },
        {
          title: "Updates and contact",
          body: "This notice may be updated when the website, providers or information practices change. The date shown on this page identifies the latest version. Send questions to hoshintegrityinfo@gmail.com.",
        },
      ]}
    />
  );
}
