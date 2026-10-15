export const SITE_URL = "https://tmytrn.com";
export const SITE_NAME = "TMYTRN LLC";
export const SITE_TITLE =
  "TMYTRN LLC — Web Consulting & Development by Tommy Tran";
export const SITE_DESCRIPTION =
  "Tommy Tran is a web designer and developer specializing in Shopify sites, Next.js development, ecommerce strategy, Klaviyo, Mailchimp, SEO, and AI search.";
export const SITE_OG_DESCRIPTION =
  "Web consulting and development practice of Tommy Tran. Shopify, Next.js, ecommerce strategy, email flows, SEO, and AI search.";
export const SITE_OG_IMAGE = `${SITE_URL}/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg`;
export const TWITTER_HANDLE = "@tmytrn";
export const CONTACT_EMAIL = "tommy@tmytrn.com";

export const SERVICES = [
  "Shopify sites",
  "Next.js sites",
  "Ecommerce strategy",
  "Klaviyo",
  "Mailchimp",
  "SEO",
  "AI SEO / agentic search",
];

export const INDEXABLE_PATHS = ["/", "/shopify", "/consulting"];

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tommy Tran",
    url: SITE_URL,
    image: SITE_OG_IMAGE,
    jobTitle: "Web Designer and Developer",
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    sameAs: ["https://x.com/tmytrn", "https://twitter.com/tmytrn"],
    email: CONTACT_EMAIL,
    knowsAbout: SERVICES,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressCountry: "US",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/v2/tmytrn-llc-wordmark.svg`,
    image: SITE_OG_IMAGE,
    description: SITE_OG_DESCRIPTION,
    email: CONTACT_EMAIL,
    founder: {
      "@type": "Person",
      name: "Tommy Tran",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: SERVICES,
    sameAs: ["https://x.com/tmytrn", "https://twitter.com/tmytrn"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
