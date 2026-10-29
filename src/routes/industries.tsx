import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageSeo({
      path: "/industries",
      name: "Industries",
      title: "Industries We Support | HosH Integrity",
      description:
        "Inspection and quality assurance support for oil and gas, petrochemical, power and civil construction projects. Explore HosH industry capabilities.",
    }),
  component: () => <InnerPage type="industries" />,
});
