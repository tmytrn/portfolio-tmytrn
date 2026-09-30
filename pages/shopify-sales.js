import Head from "next/head";
import Layout from "../components/layout";
import InquiryForm from "../components/InquiryForm";
import { motion } from "framer-motion";
import { trackCalendlyClick } from "../utils/trackCalendlyClick";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition },
};

export default function ShopifySales() {
  const handleCalendlyClick = () => {
    trackCalendlyClick('shopify-sales');
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <Head>
          <title>More Sales from Your Shopify Store — Tommy Tran</title>
          <meta
            name="description"
            content="Audits, redesigns, and custom builds that turn browsers into buyers. Shopify development focused on conversions."
          />
          <meta name="robots" content="noindex" />
          <link rel="canonical" href="https://tmytrn.com/shopify" />
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
              More sales from the traffic you already have.
            </h1>
            <p className="f3 f2-ns lh-copy mb4 mb5-ns measure-wide">
              Audits, redesigns, and custom builds that turn browsers into buyers.
            </p>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCalendlyClick}
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
                <li className="mb3">
                  Stores getting traffic but not enough conversions
                </li>
                <li className="mb3">
                  Brands stuck with a theme that doesn't drive sales
                </li>
                <li className="mb3">
                  Founders who want performance audits and conversion optimization
                </li>
                <li className="mb3">
                  Teams needing faster checkout flows and product pages
                </li>
                <li className="mb3">
                  Stores looking to improve email flows and search visibility
                </li>
              </ul>
            </motion.div>

            {/* What you get */}
            <motion.div
              variants={fadeInVariants}
              className="w-100 w-50-l pl0 pl4-l">
              <h2 className="f4 f3-ns fw6 ttu ls1 mb4">What you get</h2>
              <ul className="list pl0 f5 f4-ns lh-copy">
                <li className="mb3">Conversion audits to identify what's blocking sales</li>
                <li className="mb3">
                  Optimized product pages, collections, cart, and checkout
                </li>
                <li className="mb3">
                  Site speed improvements and mobile optimization
                </li>
                <li className="mb3">
                  Mailchimp or Klaviyo email flows to recover abandoned carts
                </li>
                <li className="mb3">SEO best practices for web and AI search</li>
                <li className="mb3">
                  Custom Shopify builds designed for conversions
                </li>
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

          <div className="flex flex-column flex-row-l mb5 mb6-ns pb4 bb b--black-10">
            {/* How it works */}
            <motion.div
              variants={fadeInVariants}
              className="w-100 w-50-l pr0 pr4-l mb4 mb0-l">
              <h2 className="f4 f3-ns fw6 ttu ls1 mb4">How it works</h2>
              <ol className="list pl0 f5 f4-ns lh-copy">
                <li className="mb3">
                  <span className="fw6">1.</span> Scoping call (20–30 min)
                </li>
                <li className="mb3">
                  <span className="fw6">2.</span> Proposal covering conversion audits, design, and implementation
                </li>
                <li className="mb3">
                  <span className="fw6">3.</span> Execution: performance improvements, email flows, SEO optimization
                </li>
                <li className="mb3">
                  <span className="fw6">4.</span> Review, testing, and launch support
                </li>
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

          {/* Inquiry Form */}
          <motion.div variants={fadeInVariants} className="mb5 mb6-ns pb4 bb b--black-10">
            <h2 className="f3 f2-ns fw6 lh-title mb4 tc">
              Get a conversion audit or custom quote
            </h2>
            <InquiryForm variant="shopify-sales" />
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={fadeInVariants} className="tc mt5 mt6-ns">
            <h2 className="f3 f2-ns fw6 lh-title mb4">
              Ready to increase your store's conversion rate?
            </h2>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCalendlyClick}
              className="f5 f4-ns fw6 link color no-underline pv3 ph4 dib mb3 cta-button">
              Book a 20-minute scoping call →
            </a>
            <p className="f6 f5-ns mt3">
              Or email{" "}
              <a href="mailto:tommy@tmytrn.com" className="link underline color">
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
