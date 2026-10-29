import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () =>
    pageSeo({
      path: "/cookies",
      name: "Cookies",
      title: "Cookies and Browser Storage | HosH Integrity",
      description:
        "How the HosH website uses browser storage and connects to hosting, fonts and form security providers.",
      index: false,
    }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage
      title="Cookies and Browser Storage"
      intro="The browser features and external services involved when you use this website."
      sections={[
        {
          title: "Website storage",
          body: "The site uses a session storage entry named tsr-scroll-restoration-v1_3 to remember scroll positions as you move between pages. It contains navigation and scroll information and is separate from the details entered in the enquiry form. Session storage normally ends when the browser tab or session is closed, although browser restore settings may preserve a session.",
        },
        {
          title: "Advertising and analytics",
          body: "The current site code does not include advertising pixels, Google Analytics or a marketing tracking tag. Search Console verification itself does not install a visitor tracking script on this website. If optional tracking is added later, the privacy information and any consent controls must be updated before it is enabled.",
        },
        {
          title: "Hosting and fonts",
          body: "Vercel provides the current hosting. Depending on deployment access settings, its security or authentication features may use cookies. Google Fonts supplies the Manrope and Sora typefaces through requests from your browser. These requests can include your IP address and browser information. Provider policies apply to these services.",
        },
        {
          title: "Enquiry form security",
          body: "Submitting the contact form takes you to FormSubmit. The provider may use cookies and a Google reCAPTCHA check to help prevent automated submissions. You can email HosH directly if you prefer not to use the form.",
        },
        {
          title: "Your browser controls",
          body: "Your browser can clear cookies and site storage or restrict connections to external services. Restricting storage can affect navigation convenience. Blocking fonts may change their appearance, and blocking form security features may prevent a form submission. These controls do not delete information already sent by email.",
        },
        {
          title: "Provider information",
          body: (
            <>
              Read the{" "}
              <a className="underline" href="https://vercel.com/legal/privacy-policy">
                Vercel Privacy Policy
              </a>
              ,{" "}
              <a className="underline" href="https://policies.google.com/privacy">
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a className="underline" href="https://formsubmit.co/privacy.pdf">
                FormSubmit Privacy Policy
              </a>{" "}
              for details of their services.
            </>
          ),
        },
      ]}
    />
  );
}
