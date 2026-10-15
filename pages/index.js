import Head from "next/head";
import { EB_Garamond } from "next/font/google";
import HeroSection from "../components/v2/HeroSection";
import SelectWorkSection from "../components/v2/SelectWorkSection";
import ContactSection from "../components/v2/ContactSection";
import Footer from "../components/v2/Footer";
import SeoHead from "../components/SeoHead";
import { getProjects, getSiteSettings, urlFor } from "../lib/sanity";
import { fallbackProjects } from "../lib/fallbackProjects";
import {
  SITE_DESCRIPTION,
  SITE_OG_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_TITLE,
} from "../lib/site";

const ebGaramond = EB_Garamond({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home({ projects, siteSettings }) {
  const seo = siteSettings?.seo || {};
  const title = seo.metaTitle || SITE_TITLE;
  const description = seo.metaDescription || SITE_DESCRIPTION;
  const ogTitle = seo.ogTitle || title;
  const ogDescription =
    seo.ogDescription || description || SITE_OG_DESCRIPTION;
  const ogImageUrl = seo.ogImage?.asset
    ? urlFor(seo.ogImage)?.width(1200).height(630).url()
    : SITE_OG_IMAGE;
  const keywords =
    Array.isArray(seo.keywords) && seo.keywords.length
      ? seo.keywords.join(", ")
      : null;

  return (
    <div className={`site-root ${ebGaramond.className}`}>
      <SeoHead
        title={title}
        description={description}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        image={ogImageUrl}
        path="/"
        keywords={keywords}
        markdownPath="/index.md"
        includeDefaultJsonLd
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="site-grain" aria-hidden="true" />

      <main>
        <HeroSection />
        <SelectWorkSection projects={projects} />
        <ContactSection />
        <Footer footerLeft={siteSettings?.footerLeft} />
      </main>

      <style jsx global>{`
        @font-face {
          font-family: "Eurostile Extd";
          src:
            url("/fonts/eurostile/EurostileExtd-Regular.woff2") format("woff2"),
            url("/fonts/eurostile/EurostileExtd-Regular.woff") format("woff");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Eurostile Extd";
          src:
            url("/fonts/eurostile/EurostileExtd-RegularItalic.woff2")
              format("woff2"),
            url("/fonts/eurostile/EurostileExtd-RegularItalic.woff")
              format("woff");
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: "Eurostile Extd";
          src:
            url("/fonts/eurostile/EurostileExtd-Medium.woff2") format("woff2"),
            url("/fonts/eurostile/EurostileExtd-Medium.woff") format("woff");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Eurostile Extd";
          src:
            url("/fonts/eurostile/EurostileExtd-Black.woff2") format("woff2"),
            url("/fonts/eurostile/EurostileExtd-Black.woff") format("woff");
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Eurostile Extd";
          src:
            url("/fonts/eurostile/EurostileExtd-BlackItalic.woff2")
              format("woff2"),
            url("/fonts/eurostile/EurostileExtd-BlackItalic.woff")
              format("woff");
          font-weight: 900;
          font-style: italic;
          font-display: swap;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background-color: #f3ede1;
        }

        :root {
          --cream: #f3ede1;
          --navy: #152057;
          --yellow: #ebc141;
          --font-display: "Eurostile Extd", sans-serif;
        }

        .site-root {
          position: relative;
          min-height: 100vh;
          background-color: var(--cream);
          color: var(--navy);
        }

        .site-grain {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          opacity: 0.045;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px 180px;
        }

        @media (prefers-reduced-motion: reduce) {
          .site-grain {
            opacity: 0.03;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const [sanityProjects, siteSettings] = await Promise.all([
    getProjects(),
    getSiteSettings(),
  ]);
  const projects = sanityProjects || fallbackProjects;

  return {
    props: {
      projects,
      siteSettings: siteSettings || null,
    },
    revalidate: 60, // ISR: revalidate every 60 seconds
  };
}
