import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/training")({
  head: () =>
    pageSeo({
      path: "/training",
      name: "Training",
      title: "Technical, Welding and HSE Training | HosH Integrity",
      description:
        "Explore HosH Quality Training Center programmes in welding inspection, QA/QC, HSE and lead auditor training. Ask about availability and course requirements.",
    }),
  component: () => <InnerPage type="training" />,
});
