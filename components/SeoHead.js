import Head from "next/head";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_TITLE,
  SITE_URL,
  TWITTER_HANDLE,
  absoluteUrl,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from "../lib/site";

/**
 * Shared document head for SEO + AI/agent discovery.
 * Pass path (e.g. "/shopify") for canonical / OG URL.
 */
export default function SeoHead({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  ogTitle,
  ogDescription = SITE_OG_DESCRIPTION,
  path = "/",
  image = SITE_OG_IMAGE,
  noindex = false,
  canonical,
  type = "website",
  keywords,
  markdownPath,
  jsonLd,
  includeDefaultJsonLd = false,
}) {
  const url = absoluteUrl(path);
  const canonicalHref = canonical || url;
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;
  const markdownHref = markdownPath ? absoluteUrl(markdownPath) : null;

  const scripts = includeDefaultJsonLd
    ? [websiteJsonLd(), organizationJsonLd(), personJsonLd()]
    : [];
  if (jsonLd) {
    scripts.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]));
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonicalHref} />
      <link rel="describedby" href={`${SITE_URL}/llms.txt`} />
      {markdownHref ? (
        <link
          rel="alternate"
          type="text/markdown"
          href={markdownHref}
          title={title}
        />
      ) : null}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="690" />
      <meta property="og:image:height" content="452" />
      <meta property="og:image:alt" content="TMYTRN LLC" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#f3ede1" />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {scripts.map((data, i) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Head>
  );
}
