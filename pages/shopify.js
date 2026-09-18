import Head from "next/head";
import Layout from "../components/layout";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition },
};

export default function Shopify() {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <Head>
          <title>Custom Shopify Storefronts — Tommy Tran</title>
          <meta
            name="description"
            content="Custom Shopify storefronts for brands that care how they look and sell. Design and development for DTC and creative brands."
          />
        </Head>

        <style jsx global>
          {`
            body {
              background-color: #fffefa;
            }
          `}
        </style>

        <div className="center ph3 ph4-ns pv4 pv5-ns">
          {/* Hero Section */}
          <motion.div variants={fadeInVariants} className="mb5 mb6-ns mw8 center">
            <h1 className="f-hero fw6 lh-solid mb4">
              Custom Shopify storefronts for brands that care how they look and
              sell.
            </h1>
            <p className="f3 f2-ns lh-copy mb4 mb5-ns measure-wide">
              Design and development for DTC and creative brands—from theme
              builds to fully custom storefronts.
            </p>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="f5 f4-ns fw6 link color no-underline pv3 ph4 dib cta-button">
              Book a scoping call →
            </a>
            <p className="f5 f4-ns mt4 fade">
              Built Shopify storefronts for Reese Cooper, Benjamin Edgar, and RC Outdoor Supply.
            </p>
          </motion.div>

          {/* Split two-column section */}
          <div className="mw9 center">
            <div className="flex flex-column flex-row-l mb5 mb6-ns">
              {/* Who it's for */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pr0 pr4-l mb5 mb0-l pb4 pb0-l bb bn-l b--black-10">
                <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Who it's for</h2>
                <ul className="list pl0 f5 f4-ns lh-copy">
                  <li className="mb3">
                    Brands launching or rebuilding on Shopify
                  </li>
                  <li className="mb3">
                    Teams stuck on a template that can't match the brand
                  </li>
                  <li className="mb3">
                    Founders who want one person who can own design + build
                  </li>
                </ul>
              </motion.div>

              {/* What you get */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pl0 pl4-l pb4 bb b--black-10">
                <h2 className="f4 f3-ns fw6 ttu ls1 mb4">What you get</h2>
                <ul className="list pl0 f5 f4-ns lh-copy">
                  <li className="mb3">Ecom strategy to increase conversions</li>
                  <li className="mb3">
                    Optimized product flows (PDP, collection, cart)
                  </li>
                  <li className="mb3">
                    Best SEO practices for web and agentic search
                  </li>
                  <li className="mb3">
                    Mailchimp or Klaviyo email flow setup
                  </li>
                  <li className="mb3">Custom Shopify storefront, theme, or build</li>
                  <li className="mb3">
                    Responsive build, performance pass, launch support
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Proof */}
          <motion.div
            variants={fadeInVariants}
            className="mb5 mb6-ns pb4 bb b--black-10 mw9 center">
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
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
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
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
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
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
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

          <div className="mw9 center">
            <div className="flex flex-column flex-row-l mb5 mb6-ns">
              {/* How it works */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pr0 pr4-l mb5 mb0-l pb4 pb0-l bb bn-l b--black-10">
                <h2 className="f4 f3-ns fw6 ttu ls1 mb4">How it works</h2>
                <ol className="list pl0 f5 f4-ns lh-copy">
                  <li className="mb3">
                    <span className="fw6">1.</span> Scoping call (20–30 min)
                  </li>
                  <li className="mb3">
                    <span className="fw6">2.</span> Proposal + timeline
                  </li>
                  <li className="mb3">
                    <span className="fw6">3.</span> Design / build
                  </li>
                  <li className="mb3">
                    <span className="fw6">4.</span> Launch
                  </li>
                </ol>
              </motion.div>

              {/* Pricing */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pl0 pl4-l pb4 bb b--black-10">
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
          </div>

          {/* Final CTA */}
          <motion.div variants={fadeInVariants} className="tc mt5 mt6-ns mw8 center">
            <h2 className="f3 f2-ns fw6 lh-title mb4">
              Ready to build something that matches your brand?
            </h2>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
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
              border-radius: 8px;
              padding: 2rem 1.5rem 1.5rem;
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
            .browser-chrome {
              position: relative;
              display: flex;
              gap: 6px;
              margin-bottom: 12px;
            }
            .dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.3);
            }
            .browser-screenshot {
              width: 100%;
              height: auto;
              border-radius: 4px;
              display: block;
            }
          `}
        </style>
      </Layout>
    </motion.div>
  );
}
