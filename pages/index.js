import Head from 'next/head';
import { EB_Garamond } from 'next/font/google';
import HeroSection from '../components/v2/HeroSection';
import SelectWorkSection from '../components/v2/SelectWorkSection';
import AboutSectionV2 from '../components/v2/AboutSectionV2';
import ContactSection from '../components/v2/ContactSection';
import Footer from '../components/v2/Footer';
import { getProjects } from '../lib/sanity';
import { fallbackProjects } from '../lib/fallbackProjects';

const ebGaramond = EB_Garamond({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home({ projects }) {
  return (
    <div className={ebGaramond.className} style={{ backgroundColor: '#F3EDE1', color: '#152057', minHeight: '100vh' }}>
      <Head>
        <title>TMYTRN LLC - Web Design & Development by Tommy Tran</title>
        <meta name="description" content="Tommy Tran is a web designer and developer specializing in Shopify sites, Next.js development, ecommerce strategy, Klaviyo, Mailchimp, SEO, and AI search." />
        <meta property="og:title" content="TMYTRN LLC - Web Design & Development" />
        <meta property="og:description" content="Web design and development practice of Tommy Tran" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <HeroSection />
        <SelectWorkSection projects={projects} />
        <AboutSectionV2 />
        <ContactSection />
        <Footer />
      </main>

      <style jsx global>{`
        @font-face {
          font-family: 'Eurostile Extd';
          src: url('/fonts/eurostile/EurostileExtd-Regular.woff2') format('woff2'),
               url('/fonts/eurostile/EurostileExtd-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Eurostile Extd';
          src: url('/fonts/eurostile/EurostileExtd-RegularItalic.woff2') format('woff2'),
               url('/fonts/eurostile/EurostileExtd-RegularItalic.woff') format('woff');
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Eurostile Extd';
          src: url('/fonts/eurostile/EurostileExtd-Medium.woff2') format('woff2'),
               url('/fonts/eurostile/EurostileExtd-Medium.woff') format('woff');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Eurostile Extd';
          src: url('/fonts/eurostile/EurostileExtd-Black.woff2') format('woff2'),
               url('/fonts/eurostile/EurostileExtd-Black.woff') format('woff');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Eurostile Extd';
          src: url('/fonts/eurostile/EurostileExtd-BlackItalic.woff2') format('woff2'),
               url('/fonts/eurostile/EurostileExtd-BlackItalic.woff') format('woff');
          font-weight: 900;
          font-style: italic;
          font-display: swap;
        }

        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          background-color: #F3EDE1;
        }

        :root {
          --cream: #F3EDE1;
          --navy: #152057;
          --yellow: #EBC141;
          --font-display: 'Eurostile Extd', sans-serif;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const sanityProjects = await getProjects();
  const projects = sanityProjects || fallbackProjects;

  return {
    props: {
      projects,
    },
    revalidate: 60, // ISR: revalidate every 60 seconds
  };
}
