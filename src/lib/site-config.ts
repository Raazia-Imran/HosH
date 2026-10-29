export const site = {
  name: "HosH Integrity",
  url: "https://hoshintegrity.com",
  email: "hoshintegrityinfo@gmail.com",
  location: "Karachi, Pakistan",
  updated: "29 October 2026",
} as const;

export const publicPages = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/industries", name: "Industries" },
  { path: "/training", name: "Training" },
  { path: "/certifications", name: "Certifications" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/faq", name: "FAQ" },
  { path: "/insights", name: "Insights" },
] as const;
