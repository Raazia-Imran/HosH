import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSeo({
      path: "/services",
      name: "Services",
      title: "Industrial Inspection and NDT Services | HosH Integrity",
      description:
        "Explore HosH industrial inspection, welding inspection, conventional and advanced NDT, asset integrity, QA/QC and HSE services.",
    }),
  component: () => <InnerPage type="services" />,
});
