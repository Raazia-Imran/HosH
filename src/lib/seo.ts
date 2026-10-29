import { site } from "./site-config";

export function pageSeo({
  path,
  title,
  description,
  name,
  index = true,
}: {
  path: string;
  title: string;
  description: string;
  name: string;
  index?: boolean;
}) {
  const url = new URL(path, site.url).href;
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": path === "/contact" ? "ContactPage" : path === "/about" ? "AboutPage" : "WebPage",
      "@id": `${url}#page`,
      url,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
  ];
  if (path === "/") {
    graph.push(
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: `${site.url}/`,
        logo: `${site.url}/hosh-logo.png`,
        email: site.email,
        location: {
          "@type": "Place",
          name: site.location,
        },
        description:
          "Industrial inspection, nondestructive testing, asset integrity, quality assurance, HSE and technical training.",
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#organization` },
      },
    );
  } else {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    });
  }
  return {
    links: [{ rel: "canonical", href: url }],
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: index ? "index,follow,max-image-preview:large" : "noindex,follow",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
          /</g,
          "\\u003c",
        ),
      },
    ],
  };
}
