import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/certifications")({
  head: () =>
    pageSeo({
      path: "/certifications",
      name: "Certifications",
      title: "Certifications and Memberships | HosH Integrity",
      description:
        "Explore the inspection credentials, management systems and professional memberships described in the HosH Integrity company profile.",
    }),
  component: () => <InnerPage type="certifications" />,
});
