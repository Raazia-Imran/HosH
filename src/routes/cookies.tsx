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
          body: "The site stores your chosen privacy setting in local storage under hosh-privacy-v1 for up to 180 days. It records the version, the time of your choice and whether optional navigation storage is enabled. It does not contain your enquiry details. You can reopen Cookie settings from the footer at any time.",
        },
        {
          title: "Optional navigation storage",
          body: "Navigation storage is off by default. If you enable Remember navigation positions, the site may use the session storage entry tsr-scroll-restoration-v1_3 to remember positions as you move between pages. Rejecting optional storage turns this feature off and removes its saved session entry. Changing the feature reloads the page so the new choice takes effect. Session storage normally ends with the browser session, subject to browser restore behaviour.",
        },
        {
          title: "Advertising and analytics",
          body: "The current site code does not include advertising pixels, Google Analytics or a marketing tracking tag. Search Console verification itself does not install a visitor tracking script on this website. If optional tracking is added later, the privacy information and any consent controls must be updated before it is enabled.",
        },
        {
          title: "Hosting and fonts",
          body: "Vercel provides the current hosting. Depending on deployment access settings, its security or authentication features may use cookies. The website now serves its Manrope and Sora font files itself, so these fonts do not require a request from your browser to Google Fonts. Settings on this website do not change a hosting provider’s authentication or security features.",
        },
        {
          title: "Enquiry form security",
          body: "Submitting the contact form takes you to FormSubmit. The provider may use cookies and a Google reCAPTCHA check to help prevent automated submissions. You can email HosH directly if you prefer not to use the form.",
        },
        {
          title: "Your browser controls",
          body: "Use Essential only to leave optional navigation storage off, or enable it in Cookie settings. You can change your choice later using the footer button. Both enabling and rejecting optional storage are available without affecting access to the website or enquiry form. Your browser can also clear site storage. Blocking external form security features may prevent a submission. Changing these choices does not delete information already sent by email.",
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
