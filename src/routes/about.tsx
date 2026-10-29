import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      path: "/about",
      name: "About",
      title: "About HosH Integrity | Inspection and Technical Assurance",
      description:
        "Learn about HosH Integrity, an industrial inspection and technical assurance business based in Karachi, Pakistan, and its approach to quality and safety.",
    }),
  component: () => <InnerPage type="about" />,
});
