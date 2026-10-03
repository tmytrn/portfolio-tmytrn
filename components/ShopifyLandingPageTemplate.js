import Head from "next/head";
import Layout from "./layout";
import { motion } from "framer-motion";
import { trackCalendlyClick } from "../utils/trackCalendlyClick";
import AboutSection from "./AboutSection";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition },
};

export default function ShopifyLandingPageTemplate({ content, variant = 'shopify' }) {
  const handleCalendlyClick = (buttonPosition) => {
    trackCalendlyClick(variant, buttonPosition);
  };

  const handleContactClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: variant,
        content_category: 'email_link',
      });
    }
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <Head>
          <title>{content.meta.title}</title>
          <meta name="description" content={content.meta.description} />
          {content.meta.noindex && <meta name="robots" content="noindex" />}
          {content.meta.canonical && <link rel="canonical" href={content.meta.canonical} />}
        </Head>

        <style jsx global>
          {`
            body {
              background-color: #fffefa;
            }
          `}
        </style>

        <div className="mw8 center ph3 ph4-ns pv4 pv5-ns">
          {/* Hero Section */}
          <motion.div variants={fadeInVariants} className="mb5 mb6-ns">
            <h1 className="f-hero fw6 lh-solid mb4">
              {content.hero.headline}
            </h1>
            <p className="f3 f2-ns lh-copy mb4 mb5-ns measure-wide">
              {content.hero.subhead}
            </p>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCalendlyClick('hero')}
              className="f5 f4-ns fw6 link color no-underline pv3 ph4 dib cta-button">
              Book a scoping call →
            </a>
          </motion.div>

          {/* Split two-column section */}
          <div className="flex flex-column flex-row-l mb5 mb6-ns pb4 bb b--black-10">
            {/* Who it's for */}
            <motion.div
              variants={fadeInVariants}
              className="w-100 w-50-l pr0 pr4-l mb4 mb0-l">
              <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Who it's for</h2>
              <ul className="list pl0 f5 f4-ns lh-copy">
                {content.whoItsFor.map((item, index) => (
                  <li key={index} className="mb3">{item}</li>
                ))}
              </ul>
            </motion.div>

            {/* What you get */}
            <motion.div
              variants={fadeInVariants}
              className="w-100 w-50-l pl0 pl4-l">
              <h2 className="f4 f3-ns fw6 ttu ls1 mb4">What you get</h2>
              <ul className="list pl0 f5 f4-ns lh-copy">
                {content.whatYouGet.map((item, index) => (
                  <li key={index} className="mb3">{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Proof */}
          <motion.div
            variants={fadeInVariants}
            className="mb5 mb6-ns pb4 bb b--black-10">
            <h2 className="f4 f3-ns fw6 ttu ls1 mb4 mb5-ns">Proof</h2>
            <div className="flex flex-column flex-row-l justify-between">
              {/* Reese Cooper */}
              <div className="w-100 w-30-l mb4 mb5-l">
                <a
                  href="https://reese-cooper.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window">
                    <img
                      src="/images/proof-screenshots/reese-cooper.jpg"
                      alt="Reese Cooper homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">Reese Cooper</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  Custom Shopify theme for LA-based outdoor brand
                </p>
              </div>

              {/* Benjamin Edgar */}
              <div className="w-100 w-30-l mb4 mb5-l">
                <a
                  href="https://benjaminedgar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window benjamin-vibe">
                    <img
                      src="/images/proof-screenshots/benjamin-edgar.jpg"
                      alt="Benjamin Edgar homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">Benjamin Edgar</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  Portfolio and e-commerce for jewelry designer
                </p>
              </div>

              {/* RC Outdoor Supply */}
              <div className="w-100 w-30-l mb4 mb5-l">
                <a
                  href="https://rcoutdoorsupply.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window rc-vibe">
                    <img
                      src="/images/proof-screenshots/rc-outdoor-supply.jpg"
                      alt="RC Outdoor Supply homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">RC Outdoor Supply</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  Editorial layouts and seamless product presentation
                </p>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <AboutSection />

          <div className="flex flex-column flex-row-l mb5 mb6-ns pb4 bb b--black-10">
            {/* How it works */}
            <motion.div
              variants={fadeInVariants}
              className="w-100 w-50-l pr0 pr4-l mb4 mb0-l">
              <h2 className="f4 f3-ns fw6 ttu ls1 mb4">How it works</h2>
              <ol className="list pl0 f5 f4-ns lh-copy">
                {content.howItWorks.map((item, index) => (
                  <li key={index} className="mb3">
                    <span className="fw6">{index + 1}.</span> {item}
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Pricing */}
            <motion.div
              variants={fadeInVariants}
              className="w-100 w-50-l pl0 pl4-l">
              <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Pricing</h2>
              <div>
                <p className="f5 f4-ns lh-copy mb2">
                  Project work typically $4,500–$15,000
                </p>
                <p className="f5 f4-ns lh-copy mb2">Consulting from $80/hr</p>
                <p className="f6 f5-ns lh-copy fade mt3">
                  Exact scope determined on the call
                </p>
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div variants={fadeInVariants} className="tc mt5 mt6-ns">
            <h2 className="f3 f2-ns fw6 lh-title mb4">
              {content.finalCta.heading}
            </h2>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCalendlyClick('footer')}
              className="f5 f4-ns fw6 link color no-underline pv3 ph4 dib mb3 cta-button">
              Book a 20-minute scoping call →
            </a>
            <p className="f6 f5-ns mt3">
              Or email{" "}
              <a
                href="mailto:tommy@tmytrn.com"
                onClick={handleContactClick}
                className="link underline color">
                tommy@tmytrn.com
              </a>
            </p>
          </motion.div>

          {/* Cross-link to consulting */}
          <motion.div variants={fadeInVariants} className="tc mt5 pt4 bt b--black-10">
            <p className="f5 f4-ns lh-copy">
              Looking for broader website help?{" "}
              <a href="/consulting" className="link underline color fw6">
                Check out web consulting →
              </a>
            </p>
          </motion.div>
        </div>

        <style jsx>
          {`
            h1 {
              letter-spacing: -1px;
            }
            h2 {
              letter-spacing: -0.5px;
            }
            .ls1 {
              letter-spacing: 0.05em;
            }
            .f-hero {
              font-size: 2.5rem;
            }
            @media screen and (min-width: 60em) {
              .f-hero {
                font-size: 4rem;
                letter-spacing: -2px;
              }
            }
            .cta-button {
              background-color: white;
              border: 1px solid #20215b;
            }
            .cta-button:hover {
              background-color: #20215b;
              color: white;
            }
            .browser-window {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 1.5rem;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .browser-window:hover {
              transform: translateY(-4px);
              box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
            }
            .browser-window.benjamin-vibe {
              background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
            }
            .browser-window.rc-vibe {
              background: linear-gradient(135deg, #2c5f2d 0%, #97bc62 100%);
            }
            .browser-screenshot {
              width: 100%;
              height: auto;
              display: block;
            }
          `}
        </style>
      </Layout>
    </motion.div>
  );
}
